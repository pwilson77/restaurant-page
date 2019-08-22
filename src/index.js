import {
    divFactory, paragraphFactory, headerFactory, buttonFactory,
} from './elementfactory';
import displayHome from './displayHome';
import displayMenu from './displayMenu';
import displayContact from './displayContact';


function component() {
    const element = document.getElementById('content');
    const firstDiv = divFactory('hero-img');

    const secondDiv = divFactory('search-box');
    const firstHeader = headerFactory('h1', 'cursive-text', 'perfectum');
    secondDiv.append(firstHeader);

    const scrollAnim = divFactory('bouncing-div');
    scrollAnim.innerText = 'Scroll Down';

    firstDiv.append(secondDiv, scrollAnim);

    const thirdDiv = divFactory('web-content');
    const secondHeader = headerFactory('h2', 'headline-text', '"Laughter is brightest in the place where the food is. "');
    thirdDiv.append(secondHeader);

    const tabsDiv = divFactory('tabs');
    const firstButton = buttonFactory('Welcome', 'home', 'tab-button');
    firstButton.classList.add('active');
    const secondButton = buttonFactory('Menu', 'menu', 'tab-button');
    const thirdButton = buttonFactory('Contact', 'contact', 'tab-button');
    tabsDiv.append(firstButton, secondButton, thirdButton);

    const fourthDiv = divFactory('copy-text');
    const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum autem velit consequatur eaque nobis! Natus quaerat eligendi ea minima aspernatur totam consequuntur deserunt placeat labore magnam?    Ut vero minus officia!';
    const firstparagraph = paragraphFactory(text);
    const secondparagraph = paragraphFactory(text);
    fourthDiv.append(firstparagraph, secondparagraph);

    thirdDiv.append(fourthDiv);

    element.append(firstDiv, tabsDiv, thirdDiv);

    // adding event listeners
    document.getElementById('home').addEventListener('click', displayHome);
    document.getElementById('menu').addEventListener('click', displayMenu);
    document.getElementById('contact').addEventListener('click', displayContact);

    return element;
}

document.body.appendChild(component());
