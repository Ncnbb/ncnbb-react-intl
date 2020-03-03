import React from 'react';

import { FormatMessage } from '../../../../es/index';

const renderData = {
    name: 'lamho',
    age: '100'
}

export default class Sub extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0
        }
        
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                time: ++this.state.time
            })
        }, 1000);
    }
    render () {
        return (
            <div>
                <FormatMessage id='submit' />
                <br />
                <FormatMessage id='cancel' />
                <br/>
                <FormatMessage id='replaceStr' renderData={renderData} />
                <br/>
                <FormatMessage id='reciprocal' renderData={{time: this.state.time}} />
            </div>
        );
    }
}