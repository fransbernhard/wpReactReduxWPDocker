import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import { connect } from "react-redux";

class Product extends Component {
	render(){
	  return (
			<div className="pages-ul">
				<h2>hejhej</h2>
      </div>
    )
  }
}

const mapStateToProps = wpProducts => {
  return wpProducts
}

export default connect(mapStateToProps)(Product)

// {
// 	this.props.wpProducts.map((page, i) =>
// 		<h2>Hejhej</h2>
// 	)
// }
