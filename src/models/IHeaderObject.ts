export interface IHeaderObject {
    sectionTitleParagraph?: HTMLParagraphElement['innerHTML'],
    sectionDiscription: {
        p1: HTMLParagraphElement['innerHTML'],
        p2?: HTMLParagraphElement['innerHTML']
    }
}