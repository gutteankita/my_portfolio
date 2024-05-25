import React, { Component } from 'react';
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

class Projects extends Component {
  state = {
    toggle: 'all'
  };

  render() {
    const { openModal, setOpenModal } = this.props;
    const { toggle } = this.state;

    return (
      <Container id="projects">
        <Wrapper>
          <Title>Projects</Title>
          <Desc>
            I have worked on a wide range of projects. Here are some of my projects.
          </Desc>
          <ToggleButtonGroup >
            {toggle === 'all' ?
              <ToggleButton active value="all" onClick={() => this.setState({ toggle: 'all' })}>All</ToggleButton>
              :
              <ToggleButton value="all" onClick={() => this.setState({ toggle: 'all' })}>All</ToggleButton>
            }
            <Divider />
            {toggle === 'web app' ?
              <ToggleButton active value="web app" onClick={() => this.setState({ toggle: 'web app' })}>WEB APP'S</ToggleButton>
              :
              <ToggleButton value="web app" onClick={() => this.setState({ toggle: 'web app' })}>WEB APP'S</ToggleButton>
            }
            <Divider />
            {toggle === 'android app' ?
              <ToggleButton active value="android app" onClick={() => this.setState({ toggle: 'android app' })}>ANDROID APP'S</ToggleButton>
              :
              <ToggleButton value="android app" onClick={() => this.setState({ toggle: 'android app' })}>ANDROID APP'S</ToggleButton>
            }
            <Divider />
            {toggle === 'machine learning' ?
              <ToggleButton active value="machine learning" onClick={() => this.setState({ toggle: 'machine learning' })}>MACHINE LEARNING</ToggleButton>
              :
              <ToggleButton value="machine learning" onClick={() => this.setState({ toggle: 'machine learning' })}>MACHINE LEARNING</ToggleButton>
            }
          </ToggleButtonGroup>
          <CardContainer>
            {toggle === 'all' ? projects.map((project) => (
              <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
            )) : projects
              .filter((item) => item.category === toggle)
              .map((project) => (
                <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
              ))}
          </CardContainer>
        </Wrapper>
      </Container>
    );
  }
}

export default Projects;
