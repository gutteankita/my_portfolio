import React, { Component } from 'react';
import { skills } from '../../data/constants';
import {
  Container,
  Wrapper,
  Title,
  Desc,
  SkillsContainer,
  Skill,
  SkillTitle,
  SkillList,
  SkillItem,
  SkillImage
} from './SkillsStyles';

class Skills extends Component {
  render() {
    return (
      <Container id="skills">
        <Wrapper>
          <Title>Skills</Title>
          <Desc>Here are some of my skills. Proficient in various technical and interpersonal skills essential for tackling diverse challenges effectively.</Desc>
          <SkillsContainer>
            {skills.map((skill) => (
              <Skill key={skill.title}>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillList>
                  {skill.skills.map((item, index) => (
                    <SkillItem key={index}>
                      <SkillImage src={item.image} alt={item.name} />
                      {item.name}
                    </SkillItem>
                  ))}
                </SkillList>
              </Skill>
            ))}
          </SkillsContainer>
        </Wrapper>
      </Container>
    );
  }
}

export default Skills;
