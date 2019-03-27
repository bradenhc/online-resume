import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Text from 'styles/Text';
import Button from 'styles/Button';
import Icon from 'styles/Icon';

const HeaderLayout = styled.nav`
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
`;

const RightButtons = styled.div`
    margin-left: auto;
    display: flex;
`;

const Link = styled.a`
    text-decoration: none;
    color: inherit;
`;

const LinkButton = styled(Button)`
    display: flex;
    align-items: center;
`;

const LinkIcon = styled.span`
    margin-left: 10px;
`;

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { links } = this.props;

        return (
            <HeaderLayout>
                <Button>
                    <Text>My Profile</Text>
                </Button>
                <RightButtons>
                    {links.map(l => (
                        <Link key={l.name} href={l.url} target="_blank">
                            <LinkButton>
                                <Text>{l.name}</Text>
                                <LinkIcon>
                                    <Icon name={l.icon.content} />
                                </LinkIcon>
                            </LinkButton>
                        </Link>
                    ))}
                </RightButtons>
            </HeaderLayout>
        );
    }
}

const mapStateToProps = state => ({
    links: state.links
});

export default connect(mapStateToProps)(Header);
