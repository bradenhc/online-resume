import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Text from 'styles/Text';
import {
    ListEntryItem,
    EntryHeader,
    EntryHeaderContent,
    EntryHeaderContentLeft,
    EntryHeaderContentRight,
    EntryIcon,
    EntryHeading,
    EntrySubheading,
    AdditionalInfo,
    EntryContent
} from 'styles/ListEntry';

const ExperienceContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
`;

const ExperienceEntry = ({ company, position, location, startDate, endDate, highlights, icon }) => (
    <ListEntryItem>
        <EntryHeader>
            <EntryIcon src={icon.content} />
            <EntryHeaderContent>
                <EntryHeaderContentLeft>
                    <EntryHeading>{position}</EntryHeading>
                    <EntrySubheading>
                        {company}, {location}
                    </EntrySubheading>
                </EntryHeaderContentLeft>
                <EntryHeaderContentRight>
                    <AdditionalInfo>
                        {startDate} - {endDate}
                    </AdditionalInfo>
                </EntryHeaderContentRight>
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

class ContentBodyExperience extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { experience } = this.props;

        return (
            <ExperienceContentContainer>
                {experience.content.map(e => (
                    <ExperienceEntry key={e.company} {...e} />
                ))}
            </ExperienceContentContainer>
        );
    }
}

const mapStateToProps = state => ({
    experience: state.sections.find(s => s.route === '/experience')
});

export default connect(mapStateToProps)(ContentBodyExperience);
