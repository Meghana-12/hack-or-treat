import React from 'react'
import styled from 'styled-components'
import Spinner from './spinner'

const Title = styled.h1`
  font-size: 35px;
`

const Buttons = styled.div`
  margin: 10px auto;
`

const Button = styled.button`
  font-size: 20px;
  margin: 0 10px;
  padding: 10px;
`

class SlotMachine extends React.Component {

  state = {
    isRunning: false,
  }

  componentDidMount() {
    this.start = setTimeout(() => {
      this.handleStart()
    }, 5000)
  }

  componentDidUpdate() {
    if (this.state.isRunning) {
      this.stop = setTimeout(() => {
        this.handleStop()
      }, 10000)
    }
  }

  handleStart = () => {
    this.setState({
      isRunning: true,
    })
    clearTimeout(this.start)
  }

  handleStop = () => {
    this.setState({ isRunning: false })
    clearTimeout(this.stop)
  }

  render() {
    const { isRunning } = this.state

    return (
      <React.Fragment>
        <Title>React Slot Machine</Title>
        <Spinner spin={isRunning} />
        <Buttons>
          <Button onClick={this.handleStart} disabled={isRunning}>Start</Button>
          <Button onClick={this.handleStop} disabled={!isRunning}>Stop</Button>
        </Buttons>
      </React.Fragment>
    )
  }
}

export default SlotMachine