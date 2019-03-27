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

const EducationContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
`;

const EducationEntry = ({ school, degree, location, endDate, gpa, highlights, icon }) => (
    <ListEntryItem>
        <EntryHeader>
            <EntryIcon src={icon.content} />
            <EntryHeaderContent>
                <EntryHeaderContentLeft>
                    <EntryHeading>{degree}</EntryHeading>
                    <EntrySubheading>
                        {school}, {location}
                    </EntrySubheading>
                </EntryHeaderContentLeft>
                <EntryHeaderContentRight>
                    <AdditionalInfo>{endDate}</AdditionalInfo>
                    <AdditionalInfo>{gpa} GPA</AdditionalInfo>
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

class ContentBodyEducation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { education } = this.props;

        return (
            <EducationContentContainer>
                {education.content.map(e => (
                    <EducationEntry key={e.school} {...e} />
                ))}
            </EducationContentContainer>
        );
    }
}

const mapStateToProps = state => ({
    education: state.sections.find(s => s.route === '/education')
});

export default connect(mapStateToProps)(ContentBodyEducation);
