import React from 'react'
import styled from 'styled-components'

const CardItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: 0 10px;
  margin-bottom: 10px;
  padding: 5px;
  border: 1px solid #ccc;
`

const CardPic = styled.div`
  height: 50px;
  background-color: ${p => p.id % 2 === 0 ? 'orange' : 'green'};
`

const CardTitle = styled.input`
  font-family: 'Helvetica', 'Helvetica Neue', Arial, sans-serif;
  font-size: 18px;
  margin-top: 10px;
`

export default ({ card }) => {
  return (
    <CardItem>
      <CardPic id={card.id} />
      <CardTitle value={card.title} />
    </CardItem>
  )
}