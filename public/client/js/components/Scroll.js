import React, { Component } from 'react'

class Scroll extends Component {

  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
    this.windowHeight = window.innerHeight - 100
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(event) {
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop

    var element = document.getElementById("section-container")
    var colorsArray = ["#a29bfe", "#ffeaa7", "#74b9ff", "pink", "#55efc4"]
    // var num = Math.floor(colorsArray.length * Math.random())

    if(scrollTop <= this.windowHeight){
      element.style.background = colorsArray[0]
    } else if (scrollTop >= this.windowHeight && scrollTop <= this.windowHeight * 2){
      element.style.background = colorsArray[1]
    } else if (scrollTop >= this.windowHeight * 2 && scrollTop <= this.windowHeight * 3){
      element.style.background = colorsArray[2]
    } else if (scrollTop >= this.windowHeight * 3 && scrollTop <= this.windowHeight * 4){
      element.style.background = colorsArray[3]
    } else if (scrollTop >= this.windowHeight * 4 && scrollTop < this.windowHeight * 5){
      element.style.background = colorsArray[4]
    }
  }

  render(){
    return (
      <div className="section-container" id="section-container">
        <div className="section"><h1>SEKTION 1</h1></div>
        <div className="section"><h1>SEKTION 2</h1></div>
        <div className="section"><h1>SEKTION 3</h1></div>
        <div className="section"><h1>SEKTION 4</h1></div>
        <div className="section"><h1>SEKTION 5</h1></div>
      </div>
    )
  }

}

export default Scroll
