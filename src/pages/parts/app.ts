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
    
    document.body.append(headerElement, app);
    footerHTML();

    return app;
};