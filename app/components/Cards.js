import React from 'react'
import styled from 'styled-components'
import CardItem from './CardItem'
import data from '../data'

const CardsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  padding: 0;
`

export default () => {
  return (
    <CardsList>
      {data.map(item => <CardItem key={item.id} card={item} />)}
    </CardsList>
  )
}