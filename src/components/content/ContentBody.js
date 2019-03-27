import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import ContentBodyEducation from 'components/content/ContentBodyEducation';
import ContentBodyExperience from 'components/content/ContentBodyExperience';
import ContentBodyProjects from 'components/content/ContentBodyProjects';
import ContentBodyLeadership from 'components/content/ContentBodyLeadership';

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
                    <Route path="/leadership" component={ContentBodyLeadership} />
                </Switch>
            </ContentBodyContainer>
        );
    }
}

export default ContentBody;
