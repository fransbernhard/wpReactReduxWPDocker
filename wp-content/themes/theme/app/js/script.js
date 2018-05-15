var portfolioPostBtn = document.getElementById('port-btn');
var portfolioPostCon = document.getElementById('port-cont');

if(portfolioPostBtn){
  portfolioPostBtn.addEventListener('click', function(){
    // AJAX
    var onReq = new XMLHttpRequest();
    onReq.open('GET', magicalData.siteURL +  '/wp-json/wp/v2/posts?categories=1&order=asc');
    onReq.onload = function(){
      if(onReq.status >= 200 && onReq.status < 400){
        var data = JSON.parse(onReq.responseText); // save it to variable
        console.log(data); // use js to convert json data to readable HTML
        createHTML(data);
        portfolioPostBtn.remove();
      } else {
        console.log("We connected to server but it returned an error");
      }
    }

    onReq.onerror = function(){
      console.log("Connectio error");
    }

    onReq.send();
  });
}

function createHTML(postData){
  var ourHtml = '';
  for(var i = 0; i < postData.length; i++){
    ourHtml += '<h2>' + postData[i].title.rendered + '</h2>';
    ourHtml += '<p>' + postData[i].content.rendered + '</p>';
  }
  portfolioPostCon.innerHTML = ourHtml;
}

// Add btn
const quickAdd = document.querySelector('#add-btn')

if(quickAdd){
  quickAdd.addEventListener("click", function(){
    const postData = {
      "title": document.querySelector('.admin [name="title"]').value,
      "content": document.querySelector('.admin [name="content"]').value,
      "status": "publish"
    };

    // AJAX
    var createPost = new XMLHttpRequest();
    createPost.open("POST", magicalData.siteURL + "/wp-json/wp/v2/posts");
    createPost.setRequestHeader("X-WP-Nonce", magicalData.nonce);
    createPost.setRequestHeader("Content-Type", "application/json;charset=UTF-8"); // Tell the server what we are going to send to it
    createPost.send(JSON.stringify(postData)); // don't want to send raw object to server, instead - convert js object into a simple string of text. Then its up to the server to interpret that string as json.
    createPost.onreadystatechange = function(){
      if(createPost.readyState == 4){
        if(createPost.status == 201){
          document.querySelector('.admin [name="title"]').value = "";
          document.querySelector('.admin [name="content"]').value = "";
        } else {
          alert("error, try again");
        }
      }
    }
  })
}

jQuery(function ($){

  function handleLoad() {
    $(".loaderSmall").delay(100).fadeOut("slow");
  };

  function isIE () {
      var myNav = navigator.userAgent.toLowerCase();
      return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
  }

  window.isIEOld = isIE() && isIE() < 9;
  window.isiPad = navigator.userAgent.match(/iPad/i);

  var img = $('.video').data('placeholder'),
      video = $('.video').data('video'),
      noVideo = $('.video').data('src'),
      el = '';

  if($(window).width() > 599 && !isIEOld && !isiPad) {
      el +=   '<video autoplay loop poster="' + img + '">';
      el +=       '<source src="' + video + '" type="video/mp4">';
      el +=   '</video>';
  } else {
      el = '<div class="video-element" style="background-image: url(' + noVideo + ')"></div>';
  }

  $('.video').prepend(el);
})
