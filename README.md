<h1 align="center">ncnbb-react-intl</h1>
<p align="center">React国际化语言标签组件</p>
<p align='center'>
<img alt='npm' src='https://img.shields.io/npm/v/ncnbb-react-intl'/>
<img alt='NPM' src='https://img.shields.io/npm/l/ncnbb-react-intl'/>
<img alt='zzc' src='https://img.shields.io/badge/company-%E7%A7%9F%E7%A7%9F%E8%BD%A6-blue'/>
<img alt='team' src='https://img.shields.io/badge/team-IRC--FE-yellow'/>
</p>

### 简介
基于react实现的一个多语言快速接入工具，可以使日常开发的过程中处理多语言展示提供更方便快捷的开发方式，有效减少编写代码量。

### 安装

```shell
npm install ncnbb-react-intl
```


- 需要使用react16版本及以上

### 实例

一个简单的例子，通过调用Provider组件进行初始化，并使用FormatMessage组件传入id进行渲染
```jsx
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
<CustomRCIntlProvider langMap={langMap} lang='cn'>
    <FormatMessage id='submit' />
</CustomRCIntlProvider>

```

ncnbb-react-intl提供多种多语言使用方式，其中包括：

- CustomRCIntlProvider
- I18nRCIntlProvider
- SingleRCIntlProvider

每一个组件对应满足不同情况下的多语言解决方案

#### CustomRCIntlProvider
`CustomRCIntlProvider`组件是为了满足需要自定义多语言数据的情景，例如前端项目中内置i18n的多语言文件，通过对`CustomRCIntlProvider`调用时`import`对应的多语言文件进行初始化

| 属性     | 说明   | 类型        | 默认值 |
| -------- | ------ | ----------- | ------ |
| children | 子组件 | JSX.Element | 无     |
| langMap  | 多语言数据体           | object      | null   |
| lang     | 使用什么语言进行初始化 | string      | 无     |

多语言数据体标准格式
```jsx
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
```

#### I18nRCIntlProvider
`I18nRCIntlProvider`组件是进一步方便开发者，但是有一定限制，内置的多语言数据是从`window.i18n`获取。所以一般使用场景是在js运行前，多语言变量已经存在于`window.i18n`变量当中。

| 属性     | 说明                   | 类型        | 默认值 |
| -------- | ---------------------- | ----------- | ------ |
| children | 子组件                 | JSX.Element | 无     |
| lang     | 使用什么语言进行初始化 | string      | 无     |

window.i18n的数据格式
```jsx
window.i18n = {
    cn: {
        submit: '提交',
        cancel: '取消'
    },
    en: {
        submit: 'submit',
        cancel: 'cancel'
    }
};
```


#### SingleRCIntlProvider
在一些情景下，通过模板传入的多语言变量可能在后端渲染之前，已经通过cookie的lang值进行转换，输出后不会同时存在不同语言版本下的变量，可能只会出现当前语言环境下的变量，这个时候就可以使用`SingleRCIntlProvider`组件进行初始化，`SingleRCIntlProvider`是传入参数最少的组件，不会提供语言切换的功能。

window.i18n下的变量格式
```jsx
window.i18n = {
    submit: '提交',
    cancel: '取消'
};
```

| 属性     | 说明                   | 类型        | 默认值 |
| -------- | ---------------------- | ----------- | ------ |
| children | 子组件                 | JSX.Element | 无     |

#### FormatMessage
`FormatMessage`组件是提供给开发者使用哪个多语言变量进行渲染的组件，内部自动绑定好与多语言组件的关联，只需要传入对应id，即可。
`FormatMessage`组件会提供一个`span`标签包裹多语言变量进行输出，你也可以传入className或者style来改变你想要的样式。

```jsx
<Button><FormatMessage id='submit'/></Button>
```

| 属性      | 说明              | 类型   | 默认值 |
| --------- | ----------------- | ------ | ------ |
| id        | 多语言的键值      | string | 无     |
| className | 渲染后span的class | string | ''     |
| style     | 内联style样式     | object | {}     |


