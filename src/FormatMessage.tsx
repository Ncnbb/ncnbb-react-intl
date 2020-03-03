import React from 'react';
import RCIntlContext from './createContext';
import { FormatMessageProps, RenderDataProps } from './propsType';

class FormatMessage extends React.Component<FormatMessageProps> {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        className: '',
        style: {},
        renderData: null
    };

    createRegExp(key): RegExp {
        return new RegExp(`\{${key}\}`, 'g');
    }

    replaceStr(str: string, renderData: RenderDataProps): string {
        let newStr = str;

        for ( let item in renderData ) {
            newStr = newStr.replace(this.createRegExp(item), renderData[item]);
        }

        return newStr;
    }

    render() {
        const { id, style, className, renderData } = this.props;
        if (!id) {
            return null;
        }

        return (
            <RCIntlContext.Consumer>
                {(state) => {
                    return (
                        <span className={className} style={style}>
                            {renderData ? this.replaceStr(state[id], renderData) : state[id]}
                        </span>
                    )
                }}
            </RCIntlContext.Consumer>
        );
    }
}

export default FormatMessage;