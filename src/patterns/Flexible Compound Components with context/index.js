import React, { Component } from 'react'
import PropTypes from 'prop-types'
const RadioGroupContext = React.createContext()

function RadioGroupConsumer(props) {
  return (
    <RadioGroupContext.Consumer {...props}>
      {context => {
        if (!context) {
          throw new Error(`RadioGroupConsumer compound components cannot be rendered & this is childish`)
        }
        return props.children(context)
      }}
    </RadioGroupContext.Consumer>
  )
}
RadioGroupConsumer.propTypes = {
  children: PropTypes.any
}

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
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  select = value => {
    this.setState({ value }, () => {
      this.props.onChange(this.state.value)
    })
  }

  render() {
    return (
      <RadioGroupContext.Provider value={{ value: this.state.value, onSelect: this.select }}>
        {this.props.children}
      </RadioGroupContext.Provider>
    )
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
  state = {
    radioValue: ''
  }

  render() {
    return (
      <div>
        <h1>♬ It is about time that we all turned off the radio ♫</h1>
        <h2>Radio Value: {this.state.radioValue}</h2>
        <RadioGroup onChange={radioValue => this.setState({ radioValue })}>
          <RadioGroupConsumer>
            {({ value, onSelect }) => (
              <div>
                <RadioOption value="am" onClick={() => onSelect('am')} isSelected={value === 'am'}>
                  AM
                </RadioOption>
              </div>
            )}
          </RadioGroupConsumer>
          <RadioGroupConsumer>
            {({ value, onSelect }) => (
              <RadioOption value="fm" onClick={() => onSelect('fm')} isSelected={value === 'fm'}>
                FM
              </RadioOption>
            )}
          </RadioGroupConsumer>

          <RadioGroupConsumer>
            {({ value, onSelect }) => (
              <RadioOption value="tape" onClick={() => onSelect('tape')} isSelected={value === 'tape'}>
                Tape
              </RadioOption>
            )}
          </RadioGroupConsumer>

          <RadioGroupConsumer>
            {({ value, onSelect }) => (
              <RadioOption value="aux" onClick={() => onSelect('aux')} isSelected={value === 'aux'}>
                AUX
              </RadioOption>
            )}
          </RadioGroupConsumer>
        </RadioGroup>
      </div>
    )
  }
}

export default App
