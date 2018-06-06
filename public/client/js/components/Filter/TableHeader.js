import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateSearch, updateFilter } from '../../redux/actions';

var dropDownStyle = {
	width: '200px',
	height: '52px'
}

class TableHeader extends Component {

  constructor(props){
    super(props)
    this.handleSearchInput = this.handleSearchInput.bind(this)
    this.handleFilterChange = this.handleFilterChange.bind(this)
  }

  handleSearchInput(e){
    this.props.updateSearch(e.target.value.substr(0, 20).toLowerCase())
  }

  handleFilterChange(e){
    console.log(e.target.value)
    this.props.updateFilter(e.target.value.toLowerCase())
  }

  render(){
    return(
      <div className="header">
        <div className="search-container">
          <input
            className="search-btn"
            type="text"
            placeholder="Search.."
            onChange={this.handleSearchInput}
          />
        </div>

        <select className="search-btn" style={dropDownStyle} onChange={this.handleFilterChange}>
          <option value="Offices">Offices</option>
          {this.props.office.map((off, i) =>
 						<option key={i} value={off}>{off}</option>
 					)}
        </select>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
		rows: state.rows,
    office: state.office
	}
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ updateSearch, updateFilter }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TableHeader);
