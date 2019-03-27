import React, { Component } from 'react';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add(faGithub);
library.add(faLinkedin);
library.add(faFacebook);
library.add(faInstagram);
library.add(faCode);

class Icon extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, size = 'sm' } = this.props;

        let adjusted = size;

        switch (adjusted) {
            case 'xs':
                break;
            case 'sm':
                break;
            case 'md':
                adjusted = '1x';
                break;
            case 'lg':
                adjusted = '2x';
                break;
            case 'xl':
                adjusted = '3x';
                break;
            default:
                adjusted = '1x';
                break;
        }

        switch (name) {
            case 'github':
            case 'linkedin':
            case 'facebook':
            case 'instagram':
                return <FontAwesomeIcon icon={['fab', name]} size={adjusted} />;

            default:
                return <FontAwesomeIcon icon={'code'} />;
        }
    }
}

export default Icon;
