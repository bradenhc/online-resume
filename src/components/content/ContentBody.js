import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ContentBodySection from './ContentBodySection';
import { paramCase } from 'change-case';

const ContentBodyContainer = styled.div``;

function ContentBody({ navigation }) {
  // @ts-ignore
  const sections = useSelector((state) => (state.resume ? state.resume.sections : []));
  console.log('Sections', sections);

  return (
    <ContentBodyContainer>
      {sections.length > 0 ? (
        navigation ? (
          <Switch>
            <Route exact path="/" render={() => <Redirect to={'/' + paramCase(sections[0].name)} />} />
            {sections.map((s) => (
              <Route key={s.name} path={'/' + paramCase(s.name)} render={() => <ContentBodySection section={s} />} />
            ))}
          </Switch>
        ) : (
          <React.Fragment>
            {sections.map((s) => (
              <ContentBodySection key={s.name} section={s} header={true} />
            ))}
          </React.Fragment>
        )
      ) : (
        ''
      )}
    </ContentBodyContainer>
  );
}

export default ContentBody;
