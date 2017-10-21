import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import CardItem from './CardItem'
import Pagination from './Pagination'
import { selectPage } from '../actions/creators'

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
      data: props.data.slice(0, props.itemsToDisplay)
    }
  }
  componentWillReceiveProps(nextProps) {
    const { itemsToDisplay, selectedPage, data } = nextProps
    if(selectedPage > 1) {
      this.setState({
        data: data.slice(itemsToDisplay * (selectedPage - 1), itemsToDisplay * selectedPage)
      })
    } else {
      this.setState({
        data: data.slice(0, itemsToDisplay)
      })
    }
  }
  render() {
    const { data, itemsToDisplay, selectPage, selectedPage } = this.props
    return (
      <div>
        <CardsList>
          {this.state.data.map(item => <CardItem key={item.id} card={item} />)}
        </CardsList>
        <Pagination pages={Math.ceil(data.length/itemsToDisplay)} selectPage={selectPage} selectedPage={selectedPage} />
      </div>
    )
  }
}

const mapStateToProps = ({ itemsToDisplay, data, selectedPage, dataToDisplay }) => {
  return {
    itemsToDisplay,
    data,
    selectedPage,
    dataToDisplay
  }
}

export default connect(mapStateToProps, { selectPage })(Component)