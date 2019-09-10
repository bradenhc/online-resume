// @ts-nocheck
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Text from 'styles/Text';

const ContentNavigationLayout = styled.div`
    align-self: stretch;
    background-color: ${({ theme }) => theme.colors.primary.main};
    display: flex;
    align-items: center;
`;

const NavItem = styled.div`
    padding: 7px 10px 10px 10px;
    cursor: pointer;
    margin: 0px 20px;
    border-top: 3px solid ${({ theme }) => theme.colors.primary.main}
    color: ${({ theme, active = false }) => (!active ? theme.colors.primary.text : theme.colors.primary.main)};
    background-color: ${({ theme, active = false }) => (active ? theme.background.primary : 'transparent')};
    
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

        console.log(location);

        return (
            <ContentNavigationLayout>
                {sections.map(section => (
                    <NavLink key={section.name} to={section.route} onClick={e => false}>
                        <NavItem active={location.hash.includes(section.route)}>
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
