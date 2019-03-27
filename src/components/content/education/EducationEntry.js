import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Text from 'styles/Text';
import {
    Entry,
    EntryHeader,
    EntryHeaderContent,
    EntryHeaderContentLeft,
    EntryHeaderContentRight,
    Icon,
    DegreeInfo,
    SchoolName,
    AdditionalInfo,
    EntryContent
} from 'components/content/education/EducationEntry.styles';

class EducationEntry extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { school, degree, location, endDate, gpa, highlights } = this.props.education;

        return (
            <Entry>
                <EntryHeader>
                    <Icon />
                    <EntryHeaderContent>
                        <EntryHeaderContentLeft>
                            <DegreeInfo>{degree}</DegreeInfo>
                            <SchoolName>
                                {school}, {location}
                            </SchoolName>
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
            </Entry>
        );
    }
}

export default EducationEntry;
