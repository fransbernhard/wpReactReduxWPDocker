import React, {Component} from 'react'
import { connect } from "react-redux"

import mailImg from '../../../img/mail-icon.png'

var columnWidth = {
	width: '25%'
}

class Table extends Component {

	render(){
		let searchRes

		// SEARCH LOGIC
		if (this.props.filterWord != "" && this.props.searchWord != "") {
			searchRes = this.props.rows.filter(
				(row) => {
					let nameString = row.firstName + " " + row.lastName
					if(nameString.toLowerCase().indexOf(this.props.searchWord) !== -1 && row.office.toLowerCase().indexOf(this.props.filterWord) !== -1) {
						return true
					} else {
						return false
					}
				}
			)
		} else if(this.props.searchWord != ""){
			searchRes = this.props.rows.filter(
				(row) => {
					let nameString = row.firstName + " " + row.lastName
					return nameString.toLowerCase().indexOf(this.props.searchWord) !== -1
				}
			)
		} else if (this.props.filterWord === "offices"){
			searchRes = this.props.rows.filter(
				(row) => {
					return true
				}
			)
		} else if (this.props.filterWord != "") {
				searchRes = this.props.rows.filter(
				(row) => {
					return row.office.toLowerCase().indexOf(this.props.filterWord) !== -1
				}
			)
		} else {
			searchRes = this.props.rows.filter(
				(row) => {
					return true
				}
			)
		}

	  return (
      <table>
				<colgroup>
				 <col style={columnWidth} />
				 <col style={columnWidth} />
				 <col style={columnWidth} />
				 <col style={columnWidth} />
			 </colgroup>
			 <tbody>
				 <tr className="tableCat">
					 <th>Name</th>
					 <th>Title</th>
					 <th>Office</th>
					 <th>Email</th>
				 </tr>
				{searchRes.map((row, i) =>
					 <tr key={i}>
						 <th>{row.firstName.concat(' ', row.lastName)}</th>
						 <th>{row.title}</th>
						 <th>{row.office}</th>
						 <th className="mailRow">
							<p className="rowEmail" >{row.email}</p>
							<a href={"mailto:" + row.email}><img src={mailImg} className="mailIcon" alt="mail-icon" height="30" width="30"/></a>
						</th>
					 </tr>
				)}
				</tbody>
      </table>
    )
  }
}

const mapStateToProps = state => {
  return {
		rows: state.rows,
		searchWord: state.searchWord,
		filterWord: state.filterWord
	}
}

export default connect(mapStateToProps)(Table);
