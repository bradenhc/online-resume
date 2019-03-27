import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import ContentBodyEducation from 'components/content/ContentBodyEducation';
import ContentBodyExperience from 'components/content/ContentBodyExperience';
import ContentBodyProjects from 'components/content/ContentBodyProjects';
import ContentBodyLeadership from 'components/content/ContentBodyLeadership';
import ContentBodyHonors from 'components/content/ContentBodyHonors';

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
                    <Route path="/honors-awards" component={ContentBodyHonors} />
                </Switch>
            </ContentBodyContainer>
        );
    }
}

export default ContentBody;
