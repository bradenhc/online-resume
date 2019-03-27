import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    ContentHeaderLayout,
    LeftHeaderContent,
    ProfileImage,
    RightHeaderContent,
    NameHeading,
    ContactText,
    AboutText
} from 'components/content/ContentHeader.styles';

class ContentHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, image, email, phone, address, about } = this.props;

        return (
            <ContentHeaderLayout>
                <LeftHeaderContent>
                    <ProfileImage src={image} />
                </LeftHeaderContent>
                <RightHeaderContent>
                    <NameHeading>{name}</NameHeading>
                    <ContactText>{email}</ContactText>
                    <ContactText>{phone}</ContactText>
                    <ContactText>{address}</ContactText>
                    <AboutText>{about}</AboutText>
                </RightHeaderContent>
            </ContentHeaderLayout>
        );
    }
}

const mapStateToProps = state => ({
    name: state.name,
    image: state.image,
    email: state.contact.email,
    phone: state.contact.phone,
    address: state.contact.address,
    about: state.about
});

export default connect(mapStateToProps)(ContentHeader);
