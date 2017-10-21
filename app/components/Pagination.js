import React from 'react'
import styled from 'styled-components'

const PagesList = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0;
  list-style: none;
`

const PageItem = styled.li`
  color: black;
  padding: 2px 10px;
  border: 1px solid black;
`

const Page = ({ item }) => {
  return (
    <PageItem>
      {item}
    </PageItem>  
  )
}

export default ({ pages }) => {
  let pagesList = [];
  for(let i = 0; i < pages; i++) {
    pagesList.push(i + 1);
  }
  return (
    <PagesList>
      {pagesList.map(item => <Page key={item} item={item} />)}
    </PagesList>
  )
}