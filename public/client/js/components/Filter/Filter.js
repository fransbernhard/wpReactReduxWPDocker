import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"

import { fetchTablePostsSuccess, fetchOffices } from "../../redux/actions/index"
import Table from './Table.js'
import TableHeader from './TableHeader.js'
import data from './data.json'

class Filter extends Component {
  constructor(props){
    super(props)
    this.props.fetchTablePostsSuccess(data)
    this.props.fetchOffices(data)
  }

  render(){
    return (
      <div className="filter-container">
        <div className="filter-wrapper">
          <TableHeader />
          <Table/>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchTablePostsSuccess, fetchOffices}, dispatch)
}

export default connect(null, mapDispatchToProps)(Filter);
