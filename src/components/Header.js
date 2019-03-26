import React, { Component } from 'react';
import styled from 'styled-components';
import Text from 'styles/Text';
import Button from 'styles/Button';

const HeaderLayout = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
`;

const RightButtons = styled.div`
    margin-left: auto;
`;

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <HeaderLayout>
                <Button>
                    <Text>My Profile</Text>
                </Button>
                <RightButtons>
                    <Button>
                        <Text>LinkedIn</Text>
                    </Button>
                    <Button>
                        <Text>GitHub</Text>
                    </Button>
                </RightButtons>
            </HeaderLayout>
        );
    }
}

export default Header;
