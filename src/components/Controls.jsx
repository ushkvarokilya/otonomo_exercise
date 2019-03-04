import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { eventsSelector, streamersSelector } from '../selectors'
import EventNotification from './EventNotification'
import Checkbox from './Checkbox'

class Controls extends Component {
  state = {
    isFilterActive: false,
  }

  onFilterChange = e => {
    this.setState({
      isFilterActive: e.target.checked,
    })
  }

  render() {
    const { events, streamers } = this.props
    const { isFilterActive } = this.state
    const listFiltered = isFilterActive
      ? events.filter(event => event.get('fuel') < 0.15)
      : events
    return (
      <div>
        <header>
          <label>Events List</label>
          <Checkbox onChange={this.onFilterChange}>
            Filter event where fuel level is under 15%
          </Checkbox>
        </header>
        <div>
          {listFiltered.map((event, key) => {
            const eventObj = event.toJS()
            const color = streamers.getIn([eventObj.vin, 'color'])
            return (
              <EventNotification key={key} carEvent={eventObj} color={color} />
            )
          })}
        </div>
      </div>
    )
  }
}

export default connect(
  createStructuredSelector({
    events: eventsSelector,
    streamers: streamersSelector,
  }),
)(Controls)
