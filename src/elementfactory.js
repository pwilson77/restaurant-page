const divFactory = (className) => {
    const el = document.createElement('div');
    el.classList.add(className);
    return el;
};

const headerFactory = (headername, className, content) => {
    const el = document.createElement(headername);
    el.classList.add(className);
    el.innerHTML = content;
    return el;
};

const paragraphFactory = (content) => {
    const el = document.createElement('p');
    el.innerHTML = content;
    return el;
};

const buttonFactory = (content, idName, className) => {
    const el = document.createElement('button');
    el.setAttribute('id', idName);
    el.classList.add(className);
    el.innerHTML = content;
    return el;
};

const menuItemFactory = (title, subtitle, ingredients) => {
    const el = document.createElement('div');
    el.classList.add('ingredient-con');
    const menuItemHeader = document.createElement('h2');
    menuItemHeader.innerText = title;

    const menuItemHeader2 = document.createElement('h4');
    menuItemHeader2.innerText = subtitle;

    const ingredientsArr = document.createElement('p');
    ingredientsArr.innerText = ingredients;

    el.append(menuItemHeader, menuItemHeader2, ingredients);
    return el;
};

export {
    divFactory, headerFactory, paragraphFactory, buttonFactory, menuItemFactory,
};
