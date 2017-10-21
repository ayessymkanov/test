import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { changeItemsToDisplay } from '../actions/creators'

const Select = styled.select`

`

class Component extends React.Component {

  onChange = (e) => {
    this.props.changeItemsToDisplay(e.target.value);
  }

  render() {
    return (
      <Select onChange={this.onChange} value={this.props.selected}>
        <option>5</option>
        <option>10</option>
        <option>20</option>
      </Select>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selected: state.itemsToDisplay
  }
}

export default connect(mapStateToProps, { changeItemsToDisplay })(Component)