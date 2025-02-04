export const HTMPHelper = (() => {
    interface cardObject {
        front: HTMLElement['innerHTML'],
        back: HTMLElement['innerHTML']
    }

    const flipCard = (card: cardObject) => {
        const container = document.createElement('div'), innerContainer = container.cloneNode() as typeof container,
            front = container.cloneNode() as typeof container, back = container.cloneNode() as typeof container, baseClassName = 'flip-card';

        Object.assign(container, {
            className: baseClassName
        });

        Object.assign(innerContainer, {
            className: `${baseClassName}-inner`
        });

        Object.assign(front, {
            className: `${baseClassName}-front`,
            innerHTML: card.front
        });

        Object.assign(back, {
            className: `${baseClassName}-back`,
            innerHTML: card.back
        });

        innerContainer.append(front, back);
        container.append(innerContainer);

        return container;
    }

    return {
        createFlipCards: (cardObjects: cardObject[]) => {
            const container = document.createElement('section');

            Object.assign(container, {
                id: 'flip-cards-container'
            });

            cardObjects.forEach(cardObject => {
                container.append(flipCard(cardObject));
            });

            return container;
        }
    }
})();