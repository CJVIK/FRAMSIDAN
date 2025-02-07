export interface IHeaderObject {
    sectionTitle: {
        h1: HTMLHeadingElement['innerHTML'],
        p?: HTMLParagraphElement['innerHTML']
    },
    sectionDiscription: {
        p1: HTMLParagraphElement['innerHTML'],
        p2?: HTMLParagraphElement['innerHTML']
    }
}