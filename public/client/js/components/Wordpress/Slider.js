import React, { Component } from 'react'

class Slider extends Component {
  constructor(props){
    super(props)
    this.state = {
      sliderIndex: 0
    }

    this.changeSlides = this.changeSlides.bind(this)
  }

  componentDidMount(){
    this.intervalID = setInterval(() => {
      this.changeSlides(1);
    }, 4000);
  }

  componentWillUnmount(){
    clearInterval(this.intervalID);
  }

  changeSlides(n){
    let index = this.state.sliderIndex
    const sliderLength = this.props.gallery.length
    index += n

    if(index >= sliderLength){
      index = 0
    } else if (index < 0){
      index = sliderLength -1
    }

    this.setState({
      sliderIndex: index
    })

    const slides = document.getElementsByClassName("slide")

    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"
    }

    slides[this.state.sliderIndex].style.display = "flex"
  }

  render(){
    return(
      <div className="slider-container">
        { this.props.gallery != null
          ? this.props.gallery.map((dat, i) =>
            <div className="slide fade" key={i}>
              <div className="slide-img" style={{backgroundImage: `url(${this.props.gallery[this.state.sliderIndex].url})`}}/>
              <div className="prev-next-container">
                <a className="prev" onClick={() => this.changeSlides(-1)}>&#10094;</a>
                <a className="next" onClick={() => this.changeSlides(1)}>&#10095;</a>
              </div>
            </div>
          )
          : null
        }
      </div>
    )
  }
}

export default Slider
