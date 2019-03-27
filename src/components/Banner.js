import React, { Component } from 'react';
import styled from 'styled-components';

const BannerStyle = styled.div`
    position: fixed;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 400px;
    background-color: ${({ theme }) => theme.colors.primary.main};
`;

class Banner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <BannerStyle />;
    }
}

export default Banner;