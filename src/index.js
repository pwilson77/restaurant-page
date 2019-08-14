/* eslint-disable indent */
// import _ from 'lodash';

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

function component() {
    const element = document.getElementById('content');
    const firstDiv = divFactory('hero-img');

    const secondDiv = divFactory('search-box');
    const firstHeader = headerFactory('h1', 'cursive-text', 'perfectum');
    secondDiv.append(firstHeader);
    firstDiv.append(secondDiv);

    const thirdDiv = divFactory('web-content');
    const secondHeader = headerFactory('h2', 'headline-text', '"Laughter is brightest in the place where the food is. "');
    thirdDiv.append(secondHeader);

    const fourthDiv = divFactory('copy-text');
    const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum autem velit consequatur eaque nobis! Natus quaerat eligendi ea minima aspernatur totam consequuntur deserunt placeat labore magnam?    Ut vero minus officia!';
    const firstparagraph = paragraphFactory(text);
    const secondparagraph = paragraphFactory(text);
    fourthDiv.append(firstparagraph, secondparagraph);

    thirdDiv.append(fourthDiv);

    element.append(firstDiv, thirdDiv);
    // Lodash, currently included via a script, is required for this line to work
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());
