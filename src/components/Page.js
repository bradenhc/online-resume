import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Banner from 'components/Banner';
import ContentLayout from 'components/content/Content';
import { fetchInfoRequest } from 'state/actions';

const Background = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

class Page extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.onLoad();
    }

    render() {
        return (
            <Background>
                <Banner />
                <ContentLayout />
            </Background>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onLoad: () => dispatch(fetchInfoRequest())
});

export default connect(
    null,
    mapDispatchToProps
)(Page);
