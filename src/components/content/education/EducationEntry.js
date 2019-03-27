import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

class EducationEntry extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { school, degree, location, endDate, gpa, highlights } = this.props.education;

        return (
            <ListEntryItem>
                <EntryHeader>
                    <EntryIcon />
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
    }
}

export default EducationEntry;
