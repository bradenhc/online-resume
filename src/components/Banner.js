import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const BannerStyle = styled.div`
    position: absolute;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 400px;
    background-color: #000;
    background-image: linear-gradient(to bottom right, #001f3e, #002e5d);
`;

class Banner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BannerStyle>
            </BannerStyle>
        );
    }
}

const mapStateToProps = state => ({
    image: state.banner
});

export default connect(mapStateToProps)(Banner);
