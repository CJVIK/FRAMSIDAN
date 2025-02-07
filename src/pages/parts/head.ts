export const head = (title: HTMLTitleElement["innerHTML"]) => {
  document.head.innerHTML = `
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}</title>
        <link rel="stylesheet" href="/src/style.css">
        <link rel="stylesheet" href="/src/styles/footer.css">
    `;
};