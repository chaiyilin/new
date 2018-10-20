import React, { Component } from 'react'
import PropTypes from 'prop-types'

const RadioIcon = props => {
  return (
    <div
      style={{
        borderColor: '#ccc',
        borderSize: '3px',
        borderStyle: props.isSelected ? 'inset' : 'outset',
        height: 16,
        width: 16,
        display: 'inline-block',
        cursor: 'pointer',
        background: props.isSelected ? 'rgba(0, 0, 0, 0.05)' : ''
      }}
    />
  )
}
RadioIcon.propTypes = {
  isSelected: PropTypes.bool
}

class RadioGroup extends Component {
  state = {
    value: ''
  }

  select(value) {
    this.setState({ value }, () => {
      this.props.onChange(this.state.value)
    })
  }

  render() {
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        isSelected: child.props.value === this.state.value,
        onClick: () => this.select(child.props.value)
      })
    })

    return <div>{children}</div>
  }
}

RadioGroup.propTypes = {
  onChange: PropTypes.func,
  children: PropTypes.any
}

const RadioOption = props => {
  return (
    <div onClick={props.onClick}>
      <RadioIcon isSelected={props.isSelected} /> {props.children}
    </div>
  )
}

RadioOption.propTypes = {
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
  children: PropTypes.any
}

class App extends Component {
  state = { radioValue: 'fm' }

  render() {
    return (
      <div>
        <h1>♬ Its Radio time!!! ♫</h1>
        <h2>Radio Value: {this.state.radioValue}</h2>
        <RadioGroup onChange={radioValue => this.setState({ radioValue })}>
          <div>
            <RadioOption value="am">AM</RadioOption>
          </div>
          <RadioOption value="fm">FM</RadioOption>
          <RadioOption value="tape">Tape</RadioOption>
          <RadioOption value="aux">Aux</RadioOption>
        </RadioGroup>
      </div>
    )
  }
}

export default App
