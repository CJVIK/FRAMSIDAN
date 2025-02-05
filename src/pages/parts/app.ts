import { footerHTML } from '../../HTML/footer';
import { head } from './head';

export const application = (title: HTMLTitleElement['innerHTML']) => {
    head(title);
    footerHTML();
};