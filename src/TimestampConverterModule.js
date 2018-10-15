import React, { Component } from 'react';
import { Container, Divider, Form, Header, Segment } from 'semantic-ui-react'
import { DateResult } from './DateResult'

export class TimestampConverterModule extends Component {
    constructor(props) {
        super(props);

        this.handleTimestampChange = this.handleTimestampChange.bind(this);
        this.state = {
            inputTimestamp: Date.now() / 1000 | 0,
        }
    }

    handleTimestampChange(event) {
        let newState = {
            inputTimestamp: event.target.value,
        };

        this.setState(newState);
    }

    render() {
        return (
            <Container textAlign='justified'>
                <Segment>
                    <Header as='h1'>Timestamp converter</Header>
                    <Header.Subheader>Convert timestamp to date. Implement by Javascript without refreshing page.</Header.Subheader>
                    <Divider hidden />
                    <Form>
                        <Form.Input onChange={this.handleTimestampChange} fluid label='Timestamp (seconds)' placeholder='1234567890' value={this.state.inputTimestamp} />
                    </Form>
                    <Divider hidden />
                    <DateResult timestamp={this.state.inputTimestamp} />
                </Segment>
            </Container>
        );
    }
}