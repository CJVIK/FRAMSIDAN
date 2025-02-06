import { head } from "./head";
import { createHeaderContent } from "../../helpers/HTMLHeader";
import { headerMainContent } from "./header";
import { footerHTML } from '../../HTML/footer';

export const application = (title: HTMLTitleElement['innerHTML']) => {
    const app = document.createElement('main');

    Object.assign(app, {
        id: 'app'
    });

    head(title);
    const headerElement = createHeaderContent(headerMainContent);
    document.body.appendChild(headerElement);
    
    footerHTML();
    return app;
};