import { paragraphFactory } from './elementfactory';
import toggleActive from './tab';

const displayContact = () => {
    toggleActive();
    const el = document.getElementById('contact');
    el.className += ' active';
    const secondHeader = document.getElementsByClassName('headline-text')[0];
    secondHeader.innerText = 'People want honest, flavourful food, not some show-off meal that takes days to prepare.';
    const fourthDiv = document.getElementsByClassName('copy-text')[0];
    fourthDiv.innerHTML = '';
    const text = 'Need to get in touch, We would love to hear from you!, You could contact us using the information below';
    const firstparagraph = paragraphFactory(text);
    const text2 = '+233-55555555, bestrestaurant@gmail.com';
    const secondparagraph = paragraphFactory(text2);

    fourthDiv.append(firstparagraph, secondparagraph);
};

export default displayContact;
