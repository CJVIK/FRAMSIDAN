import { head } from "./head";
import { header } from "./header";
import { footer } from "./footer";
import { IHeaderObject } from "../../models/IHeaderObject";

export const application = (title: HTMLTitleElement['innerHTML'], headerContent?: IHeaderObject) => {

    const app = document.createElement('main');

    head(title);

    Object.assign(app, {
        id: 'app'
    });
  
    document.body.prepend(header(title, headerContent), app, footer());
    
    return app;
};