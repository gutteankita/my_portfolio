import React, { Component } from 'react';
import { CloseRounded, GitHub, LinkedIn } from '@mui/icons-material';
import { Modal } from '@mui/material';
import {
    Container,
    Wrapper,
    Title,
    Date,
    Tags,
    Tag,
    Desc,
    Image,
    Label,
    Members,
    Member,
    // MemberImage,
    // MemberName,
    ButtonGroup,
    Button,
} from './ProjectModalStyles';

class ProjectDetails extends Component {
    render() {
        const { openModal, setOpenModal } = this.props;
        const project = openModal?.project;
        return (
            <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
                <Container>
                    <Wrapper>
                        <CloseRounded
                            style={{
                                position: "absolute",
                                top: "10px",
                                right: "20px",
                                cursor: "pointer",
                            }}
                            onClick={() => setOpenModal({ state: false, project: null })}
                        />
                        <Image src={project?.image} />
                        <Title>{project?.title}</Title>
                        <Date>{project.date}</Date>
                        <Tags>
                            {project?.tags.map((tag) => (
                                <Tag>{tag}</Tag>
                            ))}
                        </Tags>
                        <Desc>{project?.description}</Desc>
                        {project.member && (
                            <>
                                <Label>Members</Label>
                                <Members>
                                    {project?.member.map((member) => (
                                        <Member>
                                            {/* <MemberImage src={member.img} /> */}
                                            {/* <MemberName>{member.name}</MemberName> */}

                                            <a href={member.github} target="new" style={{ textDecoration: 'none', color: 'inherit' }}>
                                                <GitHub />
                                            </a>
                                            <a href={member.linkedin} target="new" style={{ textDecoration: 'none', color: 'inherit' }}>
                                                <LinkedIn />
                                            </a>
                                        </Member>
                                    ))}
                                </Members>
                            </>
                        )}
                        {/* <h4 style={{ color: 'White' }}>PASSWORD: rahul@20201    NAME: rahul</h4> */}

                        <ButtonGroup>
                            <Button dull href={project?.github} target='new'>View Code</Button>
                            <Button href={project?.webapp} target='new'>View Live App</Button>
                        </ButtonGroup>
                    </Wrapper>
                </Container>

            </Modal>
        );
    }
}



export default ProjectDetails