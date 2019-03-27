import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import EducationEntry from 'components/content/education/EducationEntry';

const EducationContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
`;

class EducationContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { education } = this.props;

        return (
            <EducationContentContainer>
                {education.content.map(e => (
                    <EducationEntry key={e.school} education={e} />
                ))}
            </EducationContentContainer>
        );
    }
}

const mapStateToProps = state => ({
    education: state.sections.find(s => s.route === '/education')
});

export default connect(mapStateToProps)(EducationContent);
