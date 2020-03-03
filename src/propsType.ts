export interface CustomRCIntlProviderProps {
    children: JSX.Element
    langMap: LangMapData
    lang: string
}

export interface I18nRCIntlProviderProps {
    children: JSX.Element
    lang: string
}

export interface SingleRCIntlProviderProps {
    children: JSX.Element
}

export interface LangMapData {
    lang: LangMapItemData
}

export interface LangMapItemData {
    [propName: string]: string
}

export interface FormatMessageProps {
    id: string
    className?: string
    style?: React.CSSProperties
    renderData?: RenderDataProps
}

export interface RenderDataProps {
    [propName: string]: string
}

declare global {  interface Window {
    i18n: any
  }
}