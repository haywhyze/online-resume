const date = document.querySelector('.date');

let dateArray = String(new Date());
dateArray = dateArray.split(' ').slice(0, 4); 
date.innerHTML = dateArray.join(' ');