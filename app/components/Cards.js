import React from 'react'
import styled from 'styled-components'
import CardItem from './CardItem'
import data from '../data'

const CardsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
`

export default () => {
  return (
    <CardsList>
      {data.map(item => <li key={item.id}><CardItem card={item} /></li>)}
    </CardsList>
  )
}