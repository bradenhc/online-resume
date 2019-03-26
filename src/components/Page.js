import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const Background = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Banner = styled.div`
    position: fixed;
    z-index: -1;
    width: 100%;
    height: 500px;
    background-color: ${({ theme }) => theme.colors.primary.main};
`;

class PageLayout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Background>
                <Banner />
                <Header />
            </Background>
        );
    }
}

export default PageLayout;
