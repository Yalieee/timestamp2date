import React, { Component } from 'react';
import { Message } from 'semantic-ui-react'

export class DateResult extends Component {
    render() {
        const date = new Date(this.props.timestamp * 1000);
        return (
            <div>
                <Message>
                    <Message.Header>Locale</Message.Header>
                    <p>{date.toLocaleString()}</p>
                </Message>

                <Message>
                    <Message.Header>ISO</Message.Header>
                    <p>{date.toISOString()}</p>
                </Message>

                <Message>
                    <Message.Header>UTC</Message.Header>
                    <p>{date.toUTCString()}</p>
                </Message>
            </div>
        );
    }
}
