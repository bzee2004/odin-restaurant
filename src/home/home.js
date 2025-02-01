import './home.css';

export const home = document.createElement('div');
home.classList.add('home');

// bowl
const bowl = document.createElement('div');
bowl.classList.add('home-bowl');

// info
const info = document.createElement('div');
info.classList.add('home-info');

const locationsHeader = document.createElement('h1');
const locationsList = document.createElement('ul');
const locationOne = document.createElement('li');
const locationTwo = document.createElement('li');

locationsHeader.textContent = 'Locations';
locationOne.textContent = '123 E Blvd, City CA 12345';
locationTwo.textContent = '28 Blender Dr, Berry NV 98754';

locationsList.appendChild(locationOne)
locationsList.appendChild(locationTwo)

info.appendChild(locationsHeader);
info.appendChild(locationsList);

// hours
const weekDays = [
    ['Sunday', '8:00AM - 5:00PM'], 
    ['Monday', '7:00AM - 5:00PM'],
    ['Tuesday', '7:00AM - 5:00PM'],
    ['Wednesday', '7:00AM - 5:00PM'],
    ['Thursday', 'Closed'],
    ['Friday', '8:00AM - 5:00PM'],
    ['Saturday', '8:00AM - 5:00PM'],
];

const hours = document.createElement('div');
hours.classList.add('home-hours');
const hoursHeader = document.createElement('h1');
hoursHeader.textContent = 'Hours';

const hoursList = document.createElement('ul');
for (let day in weekDays) {
    const dayName = document.createElement('li');
    const hoursAmnt = document.createElement('li');
    hoursAmnt.classList.add('home-hours-amnt');
    
    dayName.textContent = `${weekDays[day][0]}: `;
    hoursAmnt.textContent = `${weekDays[day][1]}`;

    hoursList.appendChild(dayName);
    hoursList.appendChild(hoursAmnt);
}

hours.appendChild(hoursHeader);
hours.appendChild(hoursList);

// order now
const orderButton = document.createElement('button');
orderButton.classList.add('home-order');
orderButton.textContent = 'Order Now';


home.appendChild(bowl);
home.appendChild(info);
home.appendChild(hours);
home.appendChild(orderButton);
