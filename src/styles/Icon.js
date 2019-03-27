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
        const { className, name } = this.props;

        switch (name) {
            case 'github':
            case 'linkedin':
                return (
                    <span className={className}>
                        <FontAwesomeIcon icon={name} />
                    </span>
                );

            default:
                return (
                    <span className={className}>
                        <FontAwesomeIcon icon={'code'} />
                    </span>
                );
        }
    }
}

export default Icon;
