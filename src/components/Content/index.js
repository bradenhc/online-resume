import React, { Component } from 'react';
import styled from 'styled-components';
import Text from 'styles/Text';

const ContentLayout = styled.div`
    margin-top: 50px;
    box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.primary.dark};
    margin-left: 100px;
    margin-right: 100px;
    background-color: ${({ theme }) => theme.background.primary};
    min-height: 700px;
    border-radius: 1px;
    max-width: 1200px;
    min-width: 800px;
`;

class Content extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ContentLayout>
                <Text>Hello, world!</Text>
            </ContentLayout>
        );
    }
}

export default Content;
