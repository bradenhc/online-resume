import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import {
  ContentHeaderLayout,
  LeftHeaderContent,
  ProfileImage,
  RightHeaderContent,
  NameHeading,
  ContactText,
  AboutText,
} from 'components/content/ContentHeader.styles';

function ContentHeader() {
  // @ts-ignore
  const resume = useSelector((state) => state.resume);
  if (resume === null) {
    return <>''</>;
  }

  const { name, image, contact: { email, mobile, address }, about } = resume;

  return (
    <ContentHeaderLayout>
      <LeftHeaderContent>
        <ProfileImage src={image} />
      </LeftHeaderContent>
      <RightHeaderContent>
        <NameHeading>{name}</NameHeading>
        <ContactText>{email}</ContactText>
        <ContactText>{mobile}</ContactText>
        <ContactText>{address}</ContactText>
        <AboutText>{about}</AboutText>
      </RightHeaderContent>
    </ContentHeaderLayout>
  );
}

export default ContentHeader;
