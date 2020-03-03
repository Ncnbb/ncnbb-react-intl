import React from 'react';
import Sub from './Sub.jsx';
import { I18nRCIntlProvider } from '../../../../es/index';


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
                <I18nRCIntlProvider lang={this.state.lang}>
                    <Sub />
                </I18nRCIntlProvider>

                <button onClick={() => { this.setState( { lang: this.state.lang == 'cn' ? 'en' : 'cn' } ); }}>触发setState</button>
            </div>
        );
    }
}