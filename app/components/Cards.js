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

const mapStateToProps = ({ itemsToDisplay, data, selectedPage }) => {
  const dataToDisplay = data.slice(itemsToDisplay * (selectedPage - 1), itemsToDisplay * selectedPage)
  return {
    itemsToDisplay,
    dataToDisplay,
    selectedPage,
    data
  }
}

const Component = ({ dataToDisplay, itemsToDisplay, selectPage, selectedPage, data }) => {
  return (
    <div>
      <CardsList>
        {dataToDisplay.map(item => <CardItem key={item.id} card={item} />)}
      </CardsList>
      <Pagination pages={Math.ceil(data.length/itemsToDisplay)} selectPage={selectPage} selectedPage={selectedPage} />
    </div>
  )
}

export default connect(mapStateToProps, { selectPage })(Component)