import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCar, toggleStream } from '../actions/actions'
import Input from './Input'
import Button from './Button'
import { createStructuredSelector } from 'reselect'
import { streamersSelector } from '../selectors'
import Checkbox from './Checkbox'

class CarDataList extends Component {
  state = {
    newVin: '',
  }

  handleChange = e => {
    this.setState({ newVin: e.target.value })
  }

  resetInput = () => {
    this.setState({ newVin: '' })
  }

  addVin = () => {
    const vin = this.state.newVin
    this.props.addCar(vin)
    this.resetInput()
  }

  onToggle = vin => {
    this.props.toggleStreamer(vin)
    this.forceUpdate()
  }

  render() {
    return (
      <div>
        <Input
          onChange={this.handleChange}
          value={this.state.newVin}
          placeholder="Enter Vin"
        />
        <Button onClick={this.addVin}>+ Add</Button>
        <div>
          {this.props.streamers.entrySeq().map(([vin, data]) => {
            const { streamer, color } = data.toJS()
            return (
              <Checkbox
                key={vin}
                onChange={this.onToggle.bind(this, vin)}
                style={{ color: color }}
                checked={streamer.isStreaming}>
                {vin}
              </Checkbox>
            )
          })}
        </div>
      </div>
    )
  }
}

export default connect(
  createStructuredSelector({
    streamers: streamersSelector,
  }),
  { addCar, toggleStream },
)(CarDataList)
