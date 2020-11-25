// Cheesy Cheeseman just got a new monitor! He is happy with it, but he
//just discovered that his old desktop wallpaper no longer fits. He wants //to find a new wallpaper, but does not know which size wallpaper he 
//should be looking for, and alas, he just threw out the new monitor's box. 
//Luckily he remembers the width and the aspect ratio of the monitor from 
//when Bob Mortimer sold it to him. Can you help Cheesy out?

//https://www.codewars.com/kata/5bbd279c8f8bbd5ee500000f/train/javascript

function findScreenHeight(width, ratio) {
    const multiplyer = (ratio.split(':').map(string=> +string).reverse().reduce((acc,cv)=> acc/cv))
    const hieght = width * multiplyer
    return `${width}x${hieght}`
  }
  