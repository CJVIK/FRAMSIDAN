import { head } from './head';
import { createHeaderContent } from '../../Helpers/HTMLHeader';
import { headerMainContent } from './header';

export const application = (title: HTMLTitleElement['innerHTML']) => {
    head(title);
    const headerElement = createHeaderContent(headerMainContent);
    document.body.appendChild(headerElement);
};