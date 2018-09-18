import React, { Component } from "react";
import styled from "styled-components";

const height = `5em`;
const borderWidth = `5px`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90vh;
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

const Main = styled.main``;

class RequestInvite extends Component {
  render() {
    return (
      <Wrapper data-testid={this.props[`data-testid`]}>
        <Header as="header">Broccoli & Co.</Header>
        <Main>
          <CenterText as="h4">
            The functionality Create a simple yet clean homepage for them that
            allow users to enter their name and email to receive email
            invitations. Visual Requirements The UI should occupy the full
            height of the screen. Shows a fixed header that is always on top of
            the window and a footer that is always on the bottom of the window
            (assuming a reasonable window height). The page content is
            sandwiched in the middle, containing just a heading, a small piece
            of text and a button to request an invite. A rough mockup of the
            basic layout is attached. While preserving this layout on desktop,
            you may style it however you wish, with or without images. The
            solution must be mobile friendly (users won't need to pinch and zoom
            on their mobile devices).
          </CenterText>
        </Main>
        <Footer as="footer">footer</Footer>
      </Wrapper>
    );
  }
}

export default RequestInvite;
