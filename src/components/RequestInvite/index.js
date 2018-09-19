import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "rebass";
import ModalDialog, { ModalTransition } from "@atlaskit/modal-dialog";
import InviteForm from "./InviteForm";

const height = `5em`;
const borderWidth = `5px`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  border: ${borderWidth} solid red;
`;

const Sticky = styled.div`
  position: sticky;
  flex: 0 0 ${height};
  width: inherit;
  display: flex;
  align-items: center;
`;

const Header = styled(Sticky)`
  padding-left: 3em;
  top: 0px;
  background-color: green;
`;

const Footer = styled(Sticky)`
  bottom: 0px;
  justify-content: center;
  background-color: blue;
`;

const CenterText = styled.div`
  text-align: center;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalHeader = () => <h4>Request an invite</h4>;

class RequestInvite extends Component {
  state = { isOpen: false };
  open = () => this.setState({ isOpen: true });
  close = () => this.setState({ isOpen: false });
  render() {
    const { isOpen } = this.state;
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
              <ModalDialog onClose={this.close} header={ModalHeader}>
                <InviteForm />
              </ModalDialog>
            )}
          </ModalTransition>
        </Main>
        <Footer as="footer">footer</Footer>
      </Wrapper>
    );
  }
}

export default RequestInvite;
