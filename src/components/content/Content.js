import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import config from 'app.config';
import ContentHeader from 'components/content/ContentHeader';
import ContentNavigation from 'components/content/ContentNavigation';
import ContentBody from 'components/content/ContentBody';
import media, { isTablet } from 'styles/media';

const ContentLayout = styled.div`
    box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.primary.dark};
    background-color: ${({ theme }) => theme.background.primary};
    min-height: 700px;
    border-radius: 1px;
    width: 90%;
    max-width: 950px;
    margin-bottom: 50px;
    ${media.tablet`
        margin-top: 50px;
    `}
`;

class Content extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ContentLayout>
                <ContentHeader />
                {isTablet() ? (
                    <BrowserRouter basename={config.routerBaseUrl}>
                        <React.Fragment>
                            <ContentNavigation />
                            <ContentBody navigation={true} />
                        </React.Fragment>
                    </BrowserRouter>
                ) : (
                    <ContentBody navigation={false} />
                )}
            </ContentLayout>
        );
    }
}

export default Content;
