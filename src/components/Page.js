import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import Banner from 'components/Banner';
import ContentLayout from 'components/content/Content';
import { resumeFetch } from '../state';

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Page() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resumeFetch());
  }, [dispatch]);
  return (
    <Background>
      <Banner />
      <ContentLayout />
    </Background>
  );
}

export default Page;
