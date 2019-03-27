import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Text from 'styles/Text';
import {
    ListEntryItem,
    EntryHeader,
    EntryHeaderContent,
    EntryHeaderContentLeft,
    EntryIcon,
    EntryHeading,
    EntrySubheading,
    EntryContent
} from 'styles/ListEntry';

const ProjectContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
`;

const ProjectEntry = ({ subtitle, title, highlights, icon }) => (
    <ListEntryItem>
        <EntryHeader>
            <EntryIcon icon={icon} />
            <EntryHeaderContent>
                <EntryHeaderContentLeft>
                    <EntryHeading>{title}</EntryHeading>
                    <EntrySubheading>{subtitle}</EntrySubheading>
                </EntryHeaderContentLeft>
            </EntryHeaderContent>
        </EntryHeader>
        <EntryContent>
            <ul>
                {highlights.map((h, i) => (
                    <li key={i}>
                        <Text>{h}</Text>
                    </li>
                ))}
            </ul>
        </EntryContent>
    </ListEntryItem>
);

class ContentBodyProjects extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { projects } = this.props;

        return (
            <ProjectContentContainer>
                {projects.content.map(p => (
                    <ProjectEntry key={p.title} {...p} />
                ))}
            </ProjectContentContainer>
        );
    }
}

const mapStateToProps = state => ({
    projects: state.sections.find(s => s.route === '/projects')
});

export default connect(mapStateToProps)(ContentBodyProjects);
