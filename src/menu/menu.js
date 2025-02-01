import './menu.css';

export const menu = document.createElement('div');

const h1 = document.createElement('h1');
h1.textContent = 'Menu';

menu.appendChild(h1);

const menuContent = document.createElement('div');
menuContent.classList.add('menu-content');

const menuItems = [
    ['Default Bowl', 'Our special bowl, filled with all your needs!', '$8'],
    ['Cooler Bowl', 'A better choice with better toppings', '$10'],
    ['Even Cooler Bowl', 'A must-try! Topped with gold flakes, ripped dollar bills, blue blood', '$20'],
    ['Smoothie', 'Popular blend of any fruit', '$5'],
];


for (let i in menuItems) {
    const itemBox = document.createElement('div');
    itemBox.classList.add('item-box');

    const itemImg = document.createElement('div');
    itemImg.classList.add('item-img');

    const itemList = document.createElement('ul');

    const itemName = document.createElement('li');
    itemName.textContent = menuItems[i][0];
    itemName.style.fontWeight = 'bold';

    const itemDesc = document.createElement('li');
    itemDesc.textContent = menuItems[i][1];

    const itemPrice = document.createElement('li');
    itemPrice.textContent = menuItems[i][2];
    itemPrice.style.fontWeight = 'bold';

    itemList.appendChild(itemName);
    itemList.appendChild(itemDesc);
    itemList.appendChild(itemPrice);

    itemBox.appendChild(itemImg);
    itemBox.appendChild(itemList);

    menuContent.appendChild(itemBox);    
}

menu.appendChild(menuContent);
