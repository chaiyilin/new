import React from 'react'
import { Mouse, Cat } from '../1. basic/index'

function withMouse(Component) {
  return class extends React.Component {
    render() {
      return <Mouse>{mouse => <Component {...this.props} mouse={mouse} />}</Mouse>
    }
  }
}

export default withMouse(Cat)
