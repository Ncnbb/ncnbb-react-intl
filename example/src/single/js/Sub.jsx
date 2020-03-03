import React from 'react';

import { FormatMessage } from '../../../../es/index';

class Btn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            btnText: '按钮点击前'
        }
        this.click = this.click.bind(this);
    }

    click() {
        this.setState({
            btnText: '按钮点击后'
        })
    }

    render() {
        const {btnText} = this .state;
        return (
            <button onClick={this.click}>{btnText}</button>
        );
    }
}

export default class Sub extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0
        }
        this.renderData = {
            name: 'lamho',
            age: '100',
            component: (<button onClick={this.btnClick}>按钮</button>),
            component2: <Btn/>
        }
        
    }
    componentDidMount() {
        // setInterval(() => {
        //     this.setState({
        //         time: ++this.state.time
        //     })
        // }, 1000);
    }
    btnClick() {
        window.alert('按钮点击')
    }
    render () {
        return (
            <div>
                <FormatMessage id='submit' />
                <br />
                <FormatMessage id='cancel' />
                <br/>
                <FormatMessage id='replaceStr' renderData={this.renderData} />
                <br/>
                <FormatMessage id='reciprocal' renderData={{time: this.state.time}} />
            </div>
        );
    }
}