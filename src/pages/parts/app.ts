<<<<<<< HEAD

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

=======
import { footerHTML } from '../../HTML/footer';
import { head } from './head';

export const application = (title: HTMLTitleElement['innerHTML']) => {
    head(title);
    footerHTML();
};
>>>>>>> 982341599cb31189f9fd5c21ae71e5bbba727b8d
