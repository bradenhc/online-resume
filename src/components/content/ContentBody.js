import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import EducationContent from 'components/content/education/EducationContent';

const ContentBodyContainer = styled.div`
    padding: 15px;
`;

class ContentBody extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ContentBodyContainer>
                <Switch>
                    <Route path="/education" component={EducationContent} />
                </Switch>
            </ContentBodyContainer>
        );
    }
}

export default ContentBody;
