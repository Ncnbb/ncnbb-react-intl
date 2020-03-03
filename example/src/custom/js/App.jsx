import React from 'react';
import Sub from './Sub.jsx';
import { CustomRCIntlProvider } from '../../../../es/index';

const langMap = {
    cn: {
        submit: '提交',
        cancel: '取消'
    },
    en: {
        submit: 'submit',
        cancel: 'cancel'
    }
};

export default class App extends React.Component {

    constructor( props ) {
        super( props );
        this.state = {
            lang: 'cn'
        };
    }

    render () {
        return (
            <div>
                <h1>1231231</h1>
                <CustomRCIntlProvider langMap={langMap} lang={this.state.lang}>
                    <Sub />
                </CustomRCIntlProvider>

                <button onClick={() => { this.setState( { lang: this.state.lang == 'cn' ? 'en' : 'cn' } ); }}>触发setState</button>
            </div>
        );
    }
}