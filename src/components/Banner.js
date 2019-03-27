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
`;

const BannerImage = styled.img`
    width: 100%;
    height: 100%;
    opacity: 0.5;
`;

class Banner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BannerStyle>
                <BannerImage src={this.props.image} />
            </BannerStyle>
        );
    }
}

const mapStateToProps = state => ({
    image: state.banner
});

export default connect(mapStateToProps)(Banner);
