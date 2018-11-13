import React from 'react'
import styled from 'styled-components'

const height = `5em`
const borderWidth = `5px`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  border: ${borderWidth} solid red;
`

export const Sticky = styled.div`
  position: sticky;
  flex: 0 0 ${height};
  width: inherit;
  display: flex;
  align-items: center;
`

export const Header = styled(Sticky)`
  padding-left: 3em;
  top: 0px;
  background-color: green;
`

export const Footer = styled(Sticky)`
  bottom: 0px;
  justify-content: center;
  background-color: blue;
`

export const CenterText = styled.div`
  text-align: center;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ModalHeader = () => <h4>Request an invite</h4>
