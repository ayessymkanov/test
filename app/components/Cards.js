import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import CardItem from './CardItem'
import Pagination from './Pagination'

const CardsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
`

class Component extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: props.data.filter(item => item.id <= props.itemsToDisplay)
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.data.filter(item => item.id <= nextProps.itemsToDisplay)
    })
  }
  render() {
    const { data, itemsToDisplay } = this.props
    return (
      <div>
        <CardsList>
          {this.state.data.map(item => <CardItem key={item.id} card={item} />)}
        </CardsList>
        <Pagination pages={Math.ceil(data.length / itemsToDisplay)} />
      </div>
    )
  }
}

const mapStateToProps = ({ itemsToDisplay, data }) => {
  return {
    itemsToDisplay,
    data
  }
}

export default connect(mapStateToProps)(Component)