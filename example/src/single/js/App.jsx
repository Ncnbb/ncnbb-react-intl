import React from 'react';
import Sub from './Sub.jsx';
import { SingleRCIntlProvider } from '../../../../es/index';


export default class App extends React.Component {
    render () {
        return (
            <div>
                <h1>1231231</h1>
                <SingleRCIntlProvider>
                    <Sub />
                </SingleRCIntlProvider>
            </div>
        );
    }
}