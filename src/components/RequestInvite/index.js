import React, { Component } from "react";
import styled from "styled-components";

const height = `5em`;

const Fixed = styled.div`
  position: fixed;
  left: 0px;
  right: 0px;
  width: inherit;
  height: ${height};
  display: flex;
  align-items: center;
`;

const Header = styled(Fixed)`
  padding-left: 3em;
  top: 0px;
`;

const Footer = styled(Fixed)`
  bottom: 0px;
  justify-content: center;
`;

const CenterText = styled.div`
  text-align: center;
`;

const Main = styled.main`
  position: relative;
  top: ${height};
  height: calc(100%-2 * ${height});
`;

class RequestInvite extends Component {
  render() {
    return (
      <div data-testid={this.props[`data-testid`]}>
        <Header as="header">Broccoli & Co.</Header>
        <Main>
          <CenterText as="h3">
            A better way <br /> to enjoy every day.
          </CenterText>
          <CenterText as="h4">be the first to know when we launch.</CenterText>
        </Main>
        <Footer as="footer">footer</Footer>
      </div>
    );
  }
}

export default RequestInvite;
