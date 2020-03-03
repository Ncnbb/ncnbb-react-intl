import React from 'react';
import RCIntlContext from './createContext';
import { SingleRCIntlProviderProps } from './propsType';

// 通过在window的i18n中获取
class SingleRCIntlProvider extends React.Component<SingleRCIntlProviderProps> {
    constructor(props) {
        super(props);
    }

    render() {
        const { children } = this.props;
        return (
            <RCIntlContext.Provider
                value={window.i18n ? window.i18n : null}
            >
                {children}
            </RCIntlContext.Provider>
        );
    }
}

export default SingleRCIntlProvider;


