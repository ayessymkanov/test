import React from 'react'
import styled from 'styled-components'

const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: 0 10px 10px;
  padding: 5px;
  border: 1px solid black;
`

const CardPic = styled.div`
  height: 50px;
  background-color: ${card => card.id % 2 === 0 ? 'orange' : 'green'};
`

const CardTitle = styled.span`
  font-family: 'Helvetica', 'Helvetica Neue', Arial, sans-serif;
  font-size: 18px;
  margin-top: 10px;
`

export default ({ card }) => {
  return (
    <CardItem>
      <CardPic />
      <CardTitle>{card.title}</CardTitle>
    </CardItem>
  )
}