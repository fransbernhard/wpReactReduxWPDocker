import React, {Component} from 'react';
import { connect } from "react-redux";

class Page extends Component {

	render(){
	  return (
			<ul className="pages-ul">
				{
					this.props.pages.map((page, i) =>
						<li key={i}>
							{page.title.rendered}
						</li>
					)
				}
      </ul>
    )
  }
}

const mapStateToProps = pages => {
  return pages
}

export default connect(mapStateToProps)(Page)
