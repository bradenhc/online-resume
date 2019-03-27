import React, { Component } from 'react';
import { connect } from 'react-redux';
import Text from 'styles/Text';

class ContentBodyHonors extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { honors } = this.props;

        return (
            <ul>
                {honors.content.map((h, i) => (
                    <li key={i}>
                        <Text>{h}</Text>
                    </li>
                ))}
            </ul>
        );
    }
}

const mapStateToProps = state => ({
    honors: state.sections.find(s => s.route === '/honors-awards')
});

export default connect(mapStateToProps)(ContentBodyHonors);
