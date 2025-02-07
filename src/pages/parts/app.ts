import { head } from "./head";
import { createHeaderContent } from "../../Helpers/HTMLHeader";
import { headerMainContent } from "./header";
import { footerHTML } from '../../HTML/footer';

export const application = (title: HTMLTitleElement['innerHTML']) => {
    const app = document.createElement('main') 
    const headerElement = createHeaderContent(headerMainContent);
    document.body.append(headerElement, app);
    head(title);
    
    Object.assign(app, {
        id: 'app'
    });
    
    footerHTML();
    return app;
};