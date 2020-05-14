// @ts-nocheck
import React, { Component } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Text from 'styles/Text';
import {paramCase} from 'change-case';

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

function ContentNavigation({ location }) {
  const sections = useSelector((state) => (state.resume ? state.resume.sections : []));
  return (
    <ContentNavigationLayout>
      {sections.map((section) => (
        <NavLink key={section.name} to={'/' + paramCase(section.name)} onClick={(e) => false}>
          <NavItem active={location.hash.includes(paramCase(section.name))}>
            <Text>{section.name}</Text>
          </NavItem>
        </NavLink>
      ))}
    </ContentNavigationLayout>
  );
}

export default withRouter(ContentNavigation);
