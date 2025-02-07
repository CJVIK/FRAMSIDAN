import { head } from "./head";
import { createHeaderContent } from "../../helpers/HTMLHeader";
import { headerMainContent } from "./header";
import { footerHTML } from '../../HTML/footer';

export const application = (title: HTMLTitleElement['innerHTML']) => {
    const app = document.createElement('main'), headerElement = createHeaderContent(headerMainContent);

    head(title);
    
    Object.assign(app, {
        id: 'app'
    });


    head(title);
    const headerElement = createHeaderContent(headerMainContent);
    document.body.appendChild(headerElement, app);
    
    footerHTML();

    return app;
};