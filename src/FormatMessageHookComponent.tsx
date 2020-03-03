import React, { useContext } from 'react';
import RCIntlContext from './createContext';
import { FormatMessageProps } from './propsType';

function FormatMessage(props: FormatMessageProps) {
    const langMap = useContext(RCIntlContext);
    if ( !langMap ) throw new Error('没有任何多语言数据');
    return (
        <span className={props.className} style={props.style}>{langMap[props.id]}</span>
    );
}

export default FormatMessage;