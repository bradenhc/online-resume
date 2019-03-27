import React, { Component } from 'react';
import styled from 'styled-components';
import Icon from 'styles/Icon';

export const ListEntryItem = styled.div`
    border-bottom: 1px solid #ccc;
    padding: 8px;
    &:last-child {
        border-bottom: none;
    }
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
`;

export const EntryHeader = styled.div`
    display: flex;
    align-items: center;
`;
const iconStyle = `
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #ccc;
    margin: 5px;
`;

const SvgIcon = styled(Icon)`
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
        const { type, content } = this.props.icon;

        if (content === '') {
            return <SvgIcon />;
        }
        if (type === 'svg') {
            return <SvgIcon name={content} />;
        } else {
            return <ImageIcon src={content} />;
        }
    }
}

export const EI = ({ icon: { type = 'svg', content = 'code' } }) => {};

export const EntryHeaderContent = styled.div`
    margin-left: 15px;
    display: flex;
    width: 100%;
`;

export const EntryHeaderContentLeft = styled.div``;

export const EntryHeaderContentRight = styled.div`
    margin-left: auto;
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
    text-align: right;
    font-family: ${({ theme }) => theme.font.family};
    color: ${({ theme }) => theme.font.colors.faint};
`;

export const EntryContent = styled.div``;
