import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import { connect } from "react-redux";

class Pages extends Component {

	render(){
	  return (
			<div className="pages-ul">
				{
					this.props.pages.map((page, i) =>
						<Link key={i} to={`/${page.slug}`}>
							{page.title.rendered}
						</Link>
					)
				}
      </div>
    )
  }
}

const mapStateToProps = pages => {
  return pages
}

export default connect(mapStateToProps)(Pages)
