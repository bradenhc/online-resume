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

const LeadershipContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
`;

const LeadershipEntry = ({ title, organization, location, startDate, endDate, highlights, icon }) => (
    <ListEntryItem>
        <EntryHeader>
            <EntryIcon icon={icon} />
            <EntryHeaderContent>
                <EntryHeaderContentLeft>
                    <EntryHeading>{title}</EntryHeading>
                    <EntrySubheading>
                        {organization}, {location}
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

class ContentBodyLeadership extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { leadership } = this.props;

        return (
            <LeadershipContentContainer>
                {leadership.content.map(l => (
                    <LeadershipEntry key={l.title} {...l} />
                ))}
            </LeadershipContentContainer>
        );
    }
}

const mapStateToProps = state => ({
    leadership: state.sections.find(s => s.route === '/leadership')
});

export default connect(mapStateToProps)(ContentBodyLeadership);
