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
  border-right: none;

  color: ${p => p.item === p.selectedPage ? 'orange' : 'black'};
  cursor: pointer;
  transition: color 200ms;

  &:hover {
    color: orange;
  }
  &:last-child {
    border-right: 1px solid black;
  }
`

const Page = (props) => {
  const { item, selectPage, selectedPage } = props
  return (
    <PageItem 
      item={item} 
      onClick={() => selectPage(item)} 
      selectedPage={selectedPage}>
      {item}
    </PageItem>  
  )
}

export default ({ pages, selectPage, selectedPage }) => {
  let pagesList = [];
  for(let i = 0; i < pages; i++) {
    pagesList.push(i + 1);
  }
  return (
    <PagesList>
      {pagesList.map(item => 
        <Page 
          key={item} 
          item={item} 
          selectPage={selectPage} 
          selectedPage={selectedPage} />)}
    </PagesList>
  )
}