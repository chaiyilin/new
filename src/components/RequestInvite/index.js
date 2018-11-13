import React, { Component } from 'react'
import { Button } from 'rebass'
import ModalDialog, { ModalTransition } from '@atlaskit/modal-dialog'
import { Wrapper, Header, Footer, CenterText, Main, ModalHeader } from './styled'
import InviteForm from './InviteForm'

class RequestInvite extends Component {
  state = { isOpen: false }
  open = () => this.setState({ isOpen: true })
  close = () => this.setState({ isOpen: false })
  render() {
    const { isOpen } = this.state
    return (
      <Wrapper data-testid={this.props[`data-testid`]}>
        <Header as="header">Broccoli & Co.</Header>
        <Main>
          <CenterText as="h1">
            A better way <br />
            to enjoy every day.
          </CenterText>
          <CenterText as="h5">Be the first to know when we launch.</CenterText>
          <Button width={[0.15]} onClick={this.open}>
            Request an invite
          </Button>
          <ModalTransition>
            {isOpen && (
              <ModalDialog onClose={this.close} header={ModalHeader} width="small">
                <InviteForm />
              </ModalDialog>
            )}
          </ModalTransition>
        </Main>
        <Footer as="footer">footer</Footer>
      </Wrapper>
    )
  }
}

export default RequestInvite
