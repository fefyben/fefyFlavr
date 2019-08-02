import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fefy-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // Hero Animation variables
  path;
  pathLength;
  scrollPercentage;

  fadeBorders;

  constructor() { }

  ngOnInit() {
    window.addEventListener('scroll', () => {
      // Call Hero Animation
      this.heroAnimation();

      // Load animation when element is in Viewport
      this.borderAnimation();
    });
  }

  borderAnimation() {
    // Define viewport
    const isInViewport = elem => {
      const distance = elem.getBoundingClientRect();
      return (
        distance.top >= 0 &&
        distance.left >= 0 &&
        distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        distance.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    const recipes = document.querySelectorAll('.recipe-borders-inside');
    recipes.forEach(recipe => {
      this.fadeBorders = recipe.children;

      for (const fadeBorder of this.fadeBorders) {
        // check the scroll direction
        const lastScrollTop = 0;
        const st = window.pageYOffset || document.documentElement.scrollTop;

        // Shrink border
        if (isInViewport(recipe) && st > lastScrollTop) {
          if (fadeBorder.classList.contains('recipe-border-bottom') || fadeBorder.classList.contains('recipe-border-top')) {
            fadeBorder.style.transform = 'scale(1, 0)';
          } else if (fadeBorder.classList.contains('recipe-border-left') || fadeBorder.classList.contains('recipe-border-right')) {
            fadeBorder.style.transform = 'scale(0, 1)';
          }
        } else if (lastScrollTop >= window.pageYOffset) {
          fadeBorder.style.transform = 'scale(1, 1)';
        }
      }
    });
  }

  heroAnimation() {
    // // Get a reference to the <path>
    // this.path = document.querySelector('#logo-path');

    // // Get length of path... ~577px in this case
    // this.pathLength = this.path.getTotalLength();

    // // Make very long dashes (the length of the path itself)
    // this.path.style.strokeDasharray = this.pathLength + ' ' + this.pathLength;

    // // Offset the dashes so the it appears hidden entirely
    // this.path.style.strokeDashoffset = this.pathLength;

    // // Jake Archibald says so
    // // https://jakearchibald.com/2013/animated-line-drawing-svg/
    // this.path.getBoundingClientRect();

    // // const scrollTop = document.documentElement.scrollTop + document.body.scrollTop;
    // const scrollTop = document.documentElement.scrollTop + document.body.scrollTop;
    // const scrollHeight = document.querySelector('.hero').scrollHeight - document.documentElement.clientHeight;

    // // Had to try three or four differnet methods here. Kind of a cross-browser nightmare.
    // this.scrollPercentage = scrollTop / scrollHeight;

    // // Length to offset the dashes
    // const drawLength = this.pathLength * this.scrollPercentage;

    // // Draw in reverse
    // this.path.style.strokeDashoffset = this.pathLength - drawLength;

    // // When complete, remove the dash array, otherwise shape isn't quite sharp
    // // Accounts for fuzzy math
    // if (this.scrollPercentage >= 0.99) {
    //   this.path.style.strokeDasharray = 'none';
    // } else {
    //   this.path.style.strokeDasharray = this.pathLength + ' ' + this.pathLength;
    // }

  }
}

