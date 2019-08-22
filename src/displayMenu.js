import { menuItemFactory } from './elementfactory';
import toggleActive from './tab';

const displayMenu = () => {
    toggleActive();
    const el = document.getElementById('menu');
    el.className += ' active';
    const secondHeader = document.getElementsByClassName('headline-text')[0];
    secondHeader.innerText = 'One cannot think well, love well, sleep well, if one has not dined well.';

    const fourthDiv = document.getElementsByClassName('copy-text')[0];
    fourthDiv.innerHTML = '';

    const menuItem1 = menuItemFactory('Roast daikon', 'Roast daikon served with tender vegetables', 'daikon | potatoes | parsnips | carrots | cabbage | cauliflower | swede | vegan stuffing | vegan yorkshire pudding');
    const menuItem2 = menuItemFactory('Pineapple and pepper curry', 'Mild curry made with fresh pineapple and green pepper', 'onion | peppers | garlic | ginger | tumeric | cumin | coriander | curry leaf | green chilli | pineapple | pepper');
    const menuItem3 = menuItemFactory('Spinach and coconut curry', 'Mild curry made with fresh spinach and coconut', 'onion | peppers | garlic | ginger | tumeric | cumin | coriander | curry leaf | green chilli | spinach | coconut');
    const menuItem4 = menuItemFactory('Tofu and cauliflower curry', 'Mild curry made with marinaded tofu and fresh cauliflower', 'onion | peppers | garlic | ginger | tumeric | cumin | coriander | curry leaf | green chilli | tofu | cauliflower');
    fourthDiv.append(menuItem1, menuItem2, menuItem3, menuItem4);
};

export default displayMenu;
