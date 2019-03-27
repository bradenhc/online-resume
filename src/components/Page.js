import React, { Component } from 'react';
import styled from 'styled-components';
import Banner from 'components/Banner';
import Header from 'components/Header';
import ContentLayout from 'components/content/Content';

const Background = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

class Page extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Background>
                <Banner />
                <Header />
                <ContentLayout />
            </Background>
        );
    }
}

export default Page;
