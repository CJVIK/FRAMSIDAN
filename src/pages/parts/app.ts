import { head } from "./head";
import { createHeaderContent } from "../../helpers/HTMLHeader";
import { headerMainContent } from "./header";

export const application = (title: HTMLTitleElement['innerHTML']) => {
<<<<<<< HEAD
    const app = document.createElement('main');

    Object.assign(app, {
        id: 'app'
    });

    head(title);
    const headerElement = createHeaderContent(headerMainContent);
    document.body.appendChild(headerElement);
  
=======
    const app = document.createElement('main'), headerElement = createHeaderContent(headerMainContent);
    
    head(title);
    
    Object.assign(app, {
        id: 'app'
    });
    
    document.body.append(headerElement, app);
    footerHTML();

>>>>>>> f17c94a (Merge pull request #24 from CJVIK/hotfix-header-structure)
    return app;
};
