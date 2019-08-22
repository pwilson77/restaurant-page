import { paragraphFactory } from './elementfactory';
import toggleActive from './tab';

const displayHome = () => {
    toggleActive();
    const el = document.getElementById('home');
    el.className += ' active';
    const secondHeader = document.getElementsByClassName('headline-text')[0];
    secondHeader.innerText = 'Laughter is brightest in the place where the food is. ';

    const fourthDiv = document.getElementsByClassName('copy-text')[0];
    fourthDiv.innerHTML = '';
    const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum autem velit consequatur eaque nobis! Natus quaerat eligendi ea minima aspernatur totam consequuntur deserunt placeat labore magnam?    Ut vero minus officia!';
    const firstparagraph = paragraphFactory(text);
    const secondparagraph = paragraphFactory(text);
    fourthDiv.append(firstparagraph, secondparagraph);
};

export default displayHome;
