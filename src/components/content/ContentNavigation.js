// @ts-nocheck
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Text from 'styles/Text';

const ContentNavigationLayout = styled.div`
    align-self: stretch;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.primary.main};
    display: flex;
    align-items: center;
`;

const NavItem = styled.div`
    cursor: pointer;
    margin: 0px 20px;
    color: ${({ theme }) => theme.colors.primary.text};
    border-bottom: 2px solid
        ${({
            theme,
            // @ts-ignore
            active = false
        }) => (active ? theme.background.primary : 'transparent')};
`;

const NavLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

class ContentNavigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { sections } = this.props;

        return (
            <ContentNavigationLayout>
                {sections.map(section => (
                    <NavLink key={section.name} to={section.route} onClick={e => false}>
                        <NavItem active={section.route === location.pathname}>
                            <Text>{section.name}</Text>
                        </NavItem>
                    </NavLink>
                ))}
            </ContentNavigationLayout>
        );
    }
}

const mapStateToProps = state => ({
    sections: state.sections
});

export default withRouter(connect(mapStateToProps)(ContentNavigation));
