import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { edit } from '../actions/creators'

const CardItem = styled.li`
  position: relative;
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
  border: ${p => p.disabled ? 'none' : '1px solid #ccc'}
`

const EditButton = styled.a`
  position: absolute;
  top: 10px;
  right: 10px;
`

const EditForm = styled.form`
`

class Component extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      disabled: true,
      value: props.card.title
    }
  }
  edit = () => {
    this.setState({ disabled: false })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.edit({ id: this.props.card.id, title: e.target[0].value})
    this.setState({ disabled: true })
  }
  handleChange = (e) => {
    this.setState({ value: e.target.value })
  }

  render() {
    const { card } = this.props
    
    return (
      <CardItem>
        <EditButton onClick={this.edit}>edit</EditButton>
        <CardPic id={card.id} />
        <EditForm onSubmit={this.handleSubmit}>
          <CardTitle value={this.state.value} disabled={this.state.disabled} onChange={this.handleChange} />
        </EditForm>
      </CardItem>
    )
  }
}

export default connect(null, { edit }) (Component)