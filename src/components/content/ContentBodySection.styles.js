import React, { Component } from 'react';
import styled from 'styled-components';
import Icon from 'styles/Icon';
import media from 'styles/media';

export const SectionHeader = styled.div`
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.primary.text};
    padding-left: 10px;
`;

export const ListEntryItem = styled.div`
    border-bottom: 1px solid #ccc;
    padding: 8px;
    margin: 0px 7px 7px 5px;
    &:last-child {
        border-bottom: none;
    }
    ${({
        // @ts-ignore
        noBorder
    }) => (noBorder ? `border-bottom: none;` : '')}
    display: flex;
    flex-direction: column;
`;

export const EntryHeader = styled.div`
    display: flex;
    align-items: center;
`;
const iconStyle = `
    width: 50px !important;
    height: 50px !important;
    border-radius: 50%;
    margin: 5px;
`;

const SvgIcon = styled.span`
    ${iconStyle}
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ImageIcon = styled.img`
    ${iconStyle}
`;

export class EntryIcon extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.icon)
            return (
                <SvgIcon>
                    <Icon />
                </SvgIcon>
            );

        const { type, content } = this.props.icon;

        if (content === '') {
            return (
                <SvgIcon>
                    <Icon />
                </SvgIcon>
            );
        }
        if (type === 'svg') {
            return (
                <SvgIcon>
                    <Icon name={content} />
                </SvgIcon>
            );
        } else {
            return <ImageIcon src={content} />;
        }
    }
}

export const EI = ({ icon: { type = 'svg', content = 'code' } }) => {};

export const EntryHeaderContent = styled.div`
    flex-grow: 1;
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    padding: 10px;

    ${media.tablet`
        flex-direction: row;
    `}
`;

export const EntryHeaderContentLeft = styled.div`
    ${media.tablet`
        flex-grow: 1;
    `}
`;

export const EntryHeaderContentRight = styled.div`
    ${media.tablet`
        margin-left: auto;
    `}
`;

export const EntryHeading = styled.span`
    font-size: 20px;
    font-family: ${({ theme }) => theme.font.family};
    font-weight: bold;
    margin-bottom: 3px;
    display: block;
`;

export const EntrySubheading = styled.span`
    display: block;
    font-size: 14px;
    font-family: ${({ theme }) => theme.font.family};
    color: ${({ theme }) => theme.font.colors.faint};
`;

export const AdditionalInfo = styled.span`
    display: block
    font-size: 14px;
    margin-bottom: 3px;
    font-family: ${({ theme }) => theme.font.family};
    color: ${({ theme }) => theme.font.colors.faint};

    ${media.tablet`
        text-align: right;
    `}
`;

export const EntryContent = styled.div``;

export const TagList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const Tag = styled.span`
    margin: 5px;
    padding: 5px 10px;
    font-size: 12px;
    font-family: ${({ theme }) => theme.font.family};
    background-color: ${({ theme }) => theme.colors.primary.emphasis};
    color: ${({ theme }) => theme.font.colors.primary}
    opacity: 0.8;
    border-radius: 10px;
`;
