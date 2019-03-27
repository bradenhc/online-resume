import styled from 'styled-components';
import Heading from 'styles/Heading';
import Text from 'styles/Text';

export const ContentHeaderLayout = styled.div`
    display: flex;
`;

export const LeftHeaderContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
`;

export const ProfileImage = styled.img`
    width: 300px;
    height: 300px;
    background-color: #ccc;
`;

export const RightHeaderContent = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: 10px;
`;

export const NameHeading = styled(Heading)`
    margin-bottom: 5px;
`;

export const ContactText = styled(Text)`
    color: #777;
`;

export const AboutText = styled(Text)`
    margin-top: 20px;
`;