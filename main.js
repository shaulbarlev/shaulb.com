import Plyr from 'plyr';
import { anims } from './anims.js';

anims(); // Run animations.

const player = new Plyr('#player', {
  fullscreen: {iosNative: true},
});

let played = false;
player.on('playing', (event) => {
  if (played == false) {
    player.fullscreen.enter(); // Enter fullscreen; 
  }
  played = true;
  //console.log('set played to true');
});

function fliparrow(item) {    
  //item.innerHTML = item.innerHTML.replace('▴','▾');
  //item.innerHTML = item.innerHTML.replace('▾','▴');
  if (item.innerHTML.includes('▴')) {
    item.innerHTML = item.innerHTML.replace('▴','▾');
  }
  else {
    item.innerHTML = item.innerHTML.replace('▾','▴');
  }
}

//NAVIGATION

const navItems = document.querySelectorAll('.nav-item');
const contents = document.querySelectorAll('.content');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    //fliparrow(item);
    //check if clicked is active.
    if (item.classList.value.includes('active') == true) {
      item.classList.remove('active');
      const targetId = item.getAttribute('data-index');
      document.getElementById(targetId).classList.remove('active');

      //arrow treatment
      item.innerHTML = item.innerHTML.replace('▾','▴');
    }
    else
    {
      //remove active from all
      navItems.forEach(i => {
        i.classList.remove('active');
        i.innerHTML = i.innerHTML.replace('▾','▴');
      });
      contents.forEach(i => {
        i.classList.remove('active');
      });

      
      //add active class to clicked item
      item.classList.add('active');
      item.innerHTML = item.innerHTML.replace('▴','▾');

      //find the right content
      const targetId = item.getAttribute('data-index');
      const targetContent = document.getElementById(targetId);

      //set content to active
      if (targetContent) {
        targetContent.classList.add('active');
      }
    }
  });
});
