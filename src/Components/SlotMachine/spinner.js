import React from 'react'
import PropTypes from 'prop-types'

import Wheel from './wheel'

import bat from '../../Images/bat.jpg';
import ghost from '../../Images/ghost.jpg'
import pumpkin from '../../Images/pumpkin.jpg'
import rip from '../../Images/rip.jpg'

class Spinner extends React.Component {

  static propTypes = {
    spin: PropTypes.bool.isRequired,
    onStop: PropTypes.func.isRequired
  }

  state = {
    spinning: false,
    wheels: [],
  }

  images = [bat, ghost, pumpkin, rip]

  componentDidMount() {
    this.setState({
      wheels: [
        this.randomImage(),
        this.randomImage(),
        this.randomImage()
      ]}
    )
  }

  static getDerivedStateFromProps(props, state) {
    return { spinning: props.spin }
  }

  componentDidUpdate(prevProps, prevState) {
    const { spinning } = this.state

    if (spinning && (spinning !== prevState.spinning)) {
      this.tick()
    }

    if (!spinning && (spinning !== prevState.spinning)) {
      clearInterval(this.isSpinning)
    }
  }

  randomImage = () => this.images[Math.floor((Math.random() * this.images.length))]

  spin = () => this.setState({
    wheels: [
      this.randomImage(),
      this.randomImage(),
      this.randomImage()
    ]
  })

  tick = () => this.isSpinning = setInterval(this.spin, 50)

  render() {
    const { wheels } = this.state

    return (
      <React.Fragment>
        {wheels.map((wheel, id) => (
          <Wheel key={`${id}_${wheel}`} image={wheel} />)
        )}
      </React.Fragment>
    )
  }
}

export default Spinner