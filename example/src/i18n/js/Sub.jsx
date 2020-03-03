import React from 'react';

import { FormatMessage } from '../../../../es/index';

export default class Sub extends React.Component {
    render () {
        return (
            <div>
                <FormatMessage id='submit' />
                <br />
                <FormatMessage id='cancel' />
            </div>
        );
    }
}