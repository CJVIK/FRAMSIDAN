import { HTMLHelper } from './../../helpers/HTMLHelper.ts';

export const cjCard: { front: string; back: string } = {
    front: '<img src="" alt="CJ avatar image"> <h3>CJ</h3>',
    back: '<p>Hi, I am CJ. Contact down below</p><a href="https://www.linkedin.com/in/carl-johan-viklund-b70b79335/">LinkedIn</a><a href="https://steamcommunity.com/profiles/76561197976600830/">Steam</a>'
};


export const teamCards = () => {
    const teamCardData = [{
        front: '<img src="" alt="CJ avatar image"> <h3>CJ</h3>',
        back: '<p>Hi, I am CJ. Contact down below</p><a href="https://www.linkedin.com/in/carl-johan-viklund-b70b79335/">LinkedIn</a><a href="https://steamcommunity.com/profiles/76561197976600830/">Steam</a>'
    },
    {
        front: '<img src="" alt="Issa avatar image"> <h3>CJ</h3>',
        back: '<p>Hi, I am ISSA. Contact down below</p><a href="https://www.linkedin.com/in/isabella-velasquez-6a8754179/">LinkedIn</a><a href="">Steam?</a>'
    },
    {
        front: '<img src="" alt="Hjortis avatar image"> <h3>CJ</h3>',
        back: '<p>Hi, I am ELIN. Contact down below</p><a href="https://www.linkedin.com/in/elin-hjortskull-719755193/">LinkedIn</a><a href="">Steam?</a>'
    },
    {
        front: '<img src="" alt="YmerÜber avatar image"> <h3>CJ</h3>',
        back: '<p>Hi, I am YMER. Contact down below</p><a href="https://www.linkedin.com/in/ymer/">LinkedIn</a><a href="">Steam?</a>'
    },
    {
        front: '<img src="" alt="ANNA avatar image"> <h3>CJ</h3>',
        back: '<p>Hi, I am ANNA. Contact down below</p><a href="">LinkedIn</a><a href="">Steam?</a>'
    }]
    return HTMLHelper.createFlipCards(teamCardData);
};
