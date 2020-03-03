import React from 'react';
import RCIntlContext from './createContext';
import { CustomRCIntlProviderProps } from './propsType';

// 自定义传入多语言对象，根据传入的lang来自行判断使用
class CustomRCIntlProvider extends React.Component<CustomRCIntlProviderProps> {
    constructor(props) {
        super(props);
    }

    render() {
        const { children, langMap, lang } = this.props;
        return (
            <RCIntlContext.Provider
                value={langMap[lang] || null}
            >
                {children}
            </RCIntlContext.Provider>
        );
    }
}

export default CustomRCIntlProvider;


