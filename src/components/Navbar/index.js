import React, { Component } from 'react';
import { 
  Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, 
  // MobileNavLogo, 
  MobileLink } from './NavbarStyledComponent';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
// import { Close, CloseRounded } from '@mui/icons-material';
import { ThemeContext } from 'styled-components';

class Navbar extends Component {
  state = {
    isOpen: false
  };

  render() {
    return (
      <ThemeContext.Consumer>
        {theme => (
          <Nav>
            <NavbarContainer>
              <NavLogo to='/'>
                <a href='#home..' style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
                  <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
                </a>
              </NavLogo>
              <MobileIcon>

                <FaBars onClick={() => this.setState({ isOpen: !this.state.isOpen })} />
              </MobileIcon>
              
              <NavItems>
                <NavLink href="#about">About</NavLink>
                <NavLink href='#skills'>Skills</NavLink>
                <NavLink href='#experience'>Experience</NavLink>
                <NavLink href='#projects'>Projects</NavLink>
                <NavLink href='#education'>Education</NavLink>
              </NavItems>
              <ButtonContainer>
                <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
              </ButtonContainer>
              <ButtonContainer>
                <GitHubButton href={Bio.linkedin} target="_blank">LinkedIn</GitHubButton>
              </ButtonContainer>
              {
                this.state.isOpen &&
                <MobileMenu isOpen={this.state.isOpen}>
                  <MobileLink href="#about" onClick={() => this.setState({ isOpen: !this.state.isOpen })}>About</MobileLink>
                  <MobileLink href='#skills' onClick={() => this.setState({ isOpen: !this.state.isOpen })}>Skills</MobileLink>
                  <MobileLink href='#experience' onClick={() => this.setState({ isOpen: !this.state.isOpen })}>Experience</MobileLink>
                  <MobileLink href='#projects' onClick={() => this.setState({ isOpen: !this.state.isOpen })}>Projects</MobileLink>
                  <MobileLink href='#education' onClick={() => this.setState({ isOpen: !this.state.isOpen })}>Education</MobileLink>
                  <GitHubButton style={{ padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: 'max-content' }} href={Bio.github} target="_blank">Github Profile</GitHubButton>
                  <GitHubButton style={{ padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: 'max-content' }} href={Bio.linkedin} target="_blank">LinkedIn</GitHubButton>

                </MobileMenu>
              }
            </NavbarContainer>
          </Nav>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Navbar;
