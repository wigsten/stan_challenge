import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const MenuWrapper = styled.div`
  font-size: 1.1rem;
  @media (min-width: 719px) {
    font-size: 1.3rem;
  }
  display: flex;
  font-weight: 700;
`
const MenuItem = styled.div`
  margin: 0 5px;
  @media (min-width: 719px) {
    margin: 0 20px;
  }
  text-decoration: none;
  color: #898989;
  white-space: nowrap;
  cursor: pointer;
  &.active,
  &:hover,
  &:focus {
    color: white;
  }
  & a {
    color: inherit;
    text-decoration: none;
  }
`

const LogoContainer = styled.div`
  width: 100px;
  margin-right: 30px;
  @media (min-width: 719px) {
    width: 142px;
    margin-right: 80px;
  }
  border: 1px solid transparent;
  &:hover,
  &:focus {
    border-color: white;
  }
`
const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`

export const Menu = () => (
  <Header className="App-header">
    <Link to={`/`}>
      <LogoContainer className="app-logo">
        <LogoContainer>
          <img src="./logo.svg" alt="" />
        </LogoContainer>
      </LogoContainer>
    </Link>
    <MenuWrapper>
      <MenuItem className="active"><Link to={'/'}>Home</Link></MenuItem>
      <MenuItem tabIndex={0}>TV Shows</MenuItem>
      <MenuItem tabIndex={0}>Movies</MenuItem>
    </MenuWrapper>
  </Header>
)