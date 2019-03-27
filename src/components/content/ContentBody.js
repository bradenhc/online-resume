import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import ContentBodyEducation from 'components/content/ContentBodyEducation';
import ContentBodyExperience from 'components/content/ContentBodyExperience';
import ContentBodyProjects from 'components/content/ContentBodyProjects';

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
                    <Route path="/education" component={ContentBodyEducation} />
                    <Route path="/experience" component={ContentBodyExperience} />
                    <Route path="/projects" component={ContentBodyProjects} />
                </Switch>
            </ContentBodyContainer>
        );
    }
}

export default ContentBody;
