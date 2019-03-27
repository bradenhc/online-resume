import React, { Component } from 'react';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(faGithub);
library.add(faLinkedin);
library.add(faCode);

class Icon extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name } = this.props;

        switch (name) {
            case 'github':
            case 'linkedin':
                return <FontAwesomeIcon icon={['fab', name]} />;

            default:
                return <FontAwesomeIcon icon={'code'} />;
        }
    }
}

export default Icon;
