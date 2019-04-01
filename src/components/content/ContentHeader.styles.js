import styled from 'styled-components';
import Heading from 'styles/Heading';
import Text from 'styles/Text';
import media from 'styles/media';

export const ContentHeaderLayout = styled.div`
    display: flex;
    flex-direction: column;

    ${media.tablet`
        flex-direction: row;
    `}
`;

export const LeftHeaderContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
`;

export const ProfileImage = styled.img`
    width: 200px;
    height: 200px;
    background-color: #ccc;
    border-radius: 50%;

    ${media.tablet`
        width: 300px;
        height: 300px;
        border-radius: 0;
    `}
`;

export const RightHeaderContent = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: 10px;
`;

export const NameHeading = styled(Heading)`
    margin-bottom: 5px;
    text-align: center;
    margin-top: 0px;
    ${media.tablet`
        margin-top: 10px;
        text-align: left;
    `}
`;

export const ContactText = styled(Text)`
    color: #777;
    text-align: center;

    ${media.tablet`
        text-align: left;
    `}
`;

export const AboutText = styled(Text)`
    margin-top: 20px;
`;
