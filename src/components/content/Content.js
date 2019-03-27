import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import ContentHeader from 'components/content/ContentHeader';
import ContentNavigation from 'components/content/ContentNavigation';
import ContentBody from 'components/content/ContentBody';

const ContentLayout = styled.div`
    margin-top: 50px;
    box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.primary.dark};
    background-color: ${({ theme }) => theme.background.primary};
    min-height: 700px;
    border-radius: 1px;
    width: 90%;
    max-width: 950px;
    margin-bottom: 50px;
`;

class Content extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ContentLayout>
                <ContentHeader />
                <BrowserRouter>
                    <React.Fragment>
                        <ContentNavigation />
                        <ContentBody />
                    </React.Fragment>
                </BrowserRouter>
            </ContentLayout>
        );
    }
}

export default Content;
