import React, {Component} from 'react'
import Modal from './Modal'

import { connect } from "react-redux"

class Flowers extends Component {
	constructor(props){
    super(props);
    this.state = {
      isModalOpen: false
    }
  }

	render(){
		let posts = this.props.flowers;

	  return (
			<div className="post-container">
				{ posts.map((flower, i) =>
						<div key={i}>
							<div className="post flower-post" onClick={() => this.openModal()}>
								<div className="post-img" style={{backgroundImage: `url(${flower.featured_image_src})`}}>
									<p>{flower.title.rendered}</p>
								</div>
							</div>
							<Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()} modalContainer="modalContainer" modalDiv="modalDiv" backdropClassName="backdropDiv">
				        <button className="closeModal-btn" onClick={() => this.closeModal()}>x</button>
				        <div className="subContainer">
				          <div className="modal-img" style={{backgroundImage: `url(${flower.featured_image_src})`}}/>
				          <div className="modal-text">
				            <h1>{flower.title.rendered}</h1>
				          </div>
				        </div>
				      </Modal>
						</div>
					)
				}
			</div>
    )
  }

	openModal() {
    this.setState({ isModalOpen: true })
  }

  closeModal() {
    this.setState({ isModalOpen: false })
  }
}

const mapStateToProps = flowers => {
  return flowers
}

export default connect(mapStateToProps, null)(Flowers)
