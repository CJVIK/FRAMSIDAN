import { HTMLHelper } from "../../helpers/HTMLHelper";

export const teamCards = () => {
    const teamCardsData = [
        {
            front: '<img src="" alt="CJ avatar image"> <h3>CJ</h3>',
            back: '<p>Hi, I am CJ. Contact down below</p><a href="https://www.linkedin.com/in/carl-johan-viklund-b70b79335/">LinkedIn</a><a href="https://steamcommunity.com/profiles/76561197976600830/">Steam</a>'
        }
    ];

    return HTMLHelper.createFlipCards(teamCardsData);
};