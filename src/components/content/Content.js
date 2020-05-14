import React, { Component } from 'react';
import styled from 'styled-components';
import { HashRouter } from 'react-router-dom';
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
    margin-top: 80px;
    ${media.tablet`
        margin-top: 120px;
    `}
`;

function Content() {
    return (
        <ContentLayout>
            <ContentHeader />
            {isTablet() ? (
                <HashRouter>
                    <React.Fragment>
                        <ContentNavigation />
                        <ContentBody navigation={true} />
                    </React.Fragment>
                </HashRouter>
            ) : (
                <ContentBody navigation={false} />
            )}
        </ContentLayout>
    );
}

export default Content;
