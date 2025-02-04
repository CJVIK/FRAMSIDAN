import { head } from './head';

export const application = (title: HTMLTitleElement['innerHTML']) => {
    const app = document.createElement('main');

    Object.assign(app, {
        id: 'app'
    });

    head(title);

    return app;
};