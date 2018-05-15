import React, {Component} from 'react';
import { connect } from "react-redux";

class Page extends Component {

	render(){
	  return (
			<ul className="post-ul">
				{
					this.props.pages.map((page, i) =>
						<li key={i}>
							{page.title.rendered}
							<p>{page.slug}</p>
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

export default connect(mapStateToProps)(Page);
