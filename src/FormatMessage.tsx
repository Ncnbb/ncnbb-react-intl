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

    replaceStr(str: string, renderData: RenderDataProps): Array<string | JSX.Element> {
        let newStr = str;
        const componentList: Array<any> = [];

        for (let item in renderData) {
            // 当发现传入的是一个组件的时候，需要将内容替换组件占位符，之后再将字符串拆分
            if (React.isValidElement(renderData[item])) {
                const placeholder = `{{c@${item}@c}}`;
                newStr = newStr.replace(this.createRegExp(item), placeholder);
                componentList.push({
                    placeholder,
                    component: renderData[item]
                });
            } else {
                newStr = newStr.replace(this.createRegExp(item), renderData[item]);
            }
        }

        const strArray: Array<any> = [];
        if (componentList.length > 0) {
            let resetString = newStr;
            for (let i = 0; i < componentList.length; i++) {
                const matchInfo = resetString.match(componentList[i].placeholder);
                if (matchInfo == null) continue;
                const index = matchInfo.index;
                const str = resetString.slice(0, index);
                strArray.push(str);
                strArray.push(componentList[i].component);
                resetString = resetString.replace(`${str}${componentList[i].placeholder}`, '');
            }
        }

        if (strArray.length > 0) {
            return strArray;
        } else {
            return [newStr];
        }
    }

    createContent(state) {
        const { id, style, className, renderData } = this.props;

        if (renderData) {
            const contentData = this.replaceStr(state[id], renderData);
            if (Object.prototype.toString.call(contentData) == '[object Array]') {
                return (
                    <React.Fragment>
                        {
                            contentData.map((item, key) => {
                                if (React.isValidElement(item)) {
                                    return <span key={key}>{item}</span>;
                                } else {
                                    return (
                                        <span key={key} className={className} style={style} dangerouslySetInnerHTML={{ __html: item.toString() }} />
                                    );
                                }
                            })
                        }
                    </React.Fragment>

                )
            } else {
                return (
                    <span className={className} style={style} dangerouslySetInnerHTML={{ __html: contentData[0].toString() }} />
                )
            }
        } else {
            return <span className={className} style={style} dangerouslySetInnerHTML={{ __html: state[id] }} />;
        }
    }

    render() {
        const { id } = this.props;
        if (!id) {
            return null;
        }

        return (
            <RCIntlContext.Consumer>
                {(state) => {
                    return this.createContent(state);

                }}
            </RCIntlContext.Consumer>
        );
    }
}

export default FormatMessage;