import React from 'react';
import RCIntlContext from './createContext';
import { FormatMessageProps } from './propsType';

class FormatMessage extends React.Component<FormatMessageProps> {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        className: '',
        style: {}
    };

    render() {
        const { id, style, className } = this.props;
        if ( !id ) {
            return null;
        }
        return (
            <RCIntlContext.Consumer>
                {(state) => {
                    return <span className={className} style={style}>{state[id]}</span>
                }}
            </RCIntlContext.Consumer>
        );
    }
}

export default FormatMessage;