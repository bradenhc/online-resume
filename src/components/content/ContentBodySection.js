import React, { Component } from 'react';
import Text from 'styles/Text';
import {
    SectionHeader,
    ListEntryItem,
    EntryHeader,
    EntryHeaderContent,
    EntryHeaderContentLeft,
    EntryHeaderContentRight,
    EntryIcon,
    EntryHeading,
    EntrySubheading,
    AdditionalInfo,
    EntryContent,
    TagList,
    Tag
} from 'components/content/ContentBodySection.styles';

const SectionContent = ({
    icon,
    title,
    subtitle,
    location,
    startDate,
    endDate,
    extra,
    highlights,
    tags,
    last = false
}) => (
    <
    // @ts-ignore
    ListEntryItem
        noBorder={last}
    >
        <EntryHeader>
            {icon ? <EntryIcon icon={icon} /> : '' }
            <EntryHeaderContent>
                <EntryHeaderContentLeft>
                    <EntryHeading>{title}</EntryHeading>
                    <EntrySubheading>
                        {subtitle ? subtitle : ''} {location ? ', ' + location : ''}
                    </EntrySubheading>
                </EntryHeaderContentLeft>
                <EntryHeaderContentRight>
                    {startDate ? <AdditionalInfo>{startDate + (endDate ? ' - ' + endDate : '')}</AdditionalInfo> : ''}
                    {extra ? <AdditionalInfo>{extra}</AdditionalInfo> : ''}
                </EntryHeaderContentRight>
            </EntryHeaderContent>
        </EntryHeader>
        <EntryContent>
            <ul>
                {highlights
                    ? highlights.map((h, i) => (
                          <li key={i}>
                              <Text>{h}</Text>
                          </li>
                      ))
                    : ''}
            </ul>
        </EntryContent>
        <TagList>{tags ? tags.map((t, i) => <Tag key={i}>{t}</Tag>) : ''}</TagList>
    </ListEntryItem>
);

class ContentBodySection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { section, header } = this.props;

        return (
            <React.Fragment>
                {header ? (
                    <SectionHeader>
                        <Text>{section.name}</Text>
                    </SectionHeader>
                ) : (
                    ''
                )}
                {section.content.map((c, i, arr) => (
                    <SectionContent key={c.title} {...c} last={i === arr.length - 1} />
                ))}
            </React.Fragment>
        );
    }
}

export default ContentBodySection;
