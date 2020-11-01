import React from 'react'
import styled from 'styled-components'
import Spinner from './spinner'
import Typography from '@material-ui/core/Typography';

const Buttons = styled.div`
  margin: 10px auto;
`

const Button = styled.button`
  font-size: 20px;
  margin: 0 10px;
  background: '#AF4B00',
  padding: 10px;
  color: "#AF4B00";
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
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
        <Typography>Halloween Slot Machine</Typography>
        <Spinner spin={isRunning} />
        <Buttons>
          <Button style={{background: '#AF4B00', border: "none", color: "white"}} onClick={this.handleStart} disabled={isRunning}>Start</Button>
          <Button style={{background: '#AF4B00', border: "none", color: "white"}} onClick={this.handleStop} disabled={!isRunning}>Stop</Button>
        </Buttons>
      </React.Fragment>
    )
  }
}

export default SlotMachine