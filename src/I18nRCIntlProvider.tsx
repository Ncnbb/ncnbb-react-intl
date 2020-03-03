import React from 'react';
import RCIntlContext from './createContext';
import { I18nRCIntlProviderProps } from './propsType';

// 通过在window的i18n中获取
class I18nRCIntlProvider extends React.Component<I18nRCIntlProviderProps> {
    constructor(props) {
        super(props);
    }

    render() {
        const { children, lang } = this.props;
        return (
            <RCIntlContext.Provider
                value={ window.i18n ? window.i18n[lang] : null}
            >
                {children}
            </RCIntlContext.Provider>
        );
    }
}

export default I18nRCIntlProvider;


