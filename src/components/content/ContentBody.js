import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ContentBodySection from 'components/content/ContentBodySection';

const ContentBodyContainer = styled.div`
    
`;

class ContentBody extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { navigation, sections, defaultRoute } = this.props;

        return (
            <ContentBodyContainer>
                {navigation ? (
                    <Switch>
                        <Route exact path="/" render={() => <Redirect to={defaultRoute} />} />
                        {sections.map(s => (
                            <Route key={s.name} path={s.route} render={() => <ContentBodySection section={s} />} />
                        ))}
                    </Switch>
                ) : (
                    <React.Fragment>
                        {sections.map(s => (
                            <ContentBodySection key={s.name} section={s} header={true} />
                        ))}
                    </React.Fragment>
                )}
            </ContentBodyContainer>
        );
    }
}

const mapStateToProps = (state, { navigation }) => ({
    sections: state.sections,
    defaultRoute: state.defaultRoute,
    navigation
});

export default connect(mapStateToProps)(ContentBody);
