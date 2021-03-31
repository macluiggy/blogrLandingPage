# Frontend Mentor - Blogr landing page solution

This is a solution to the [Blogr landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#ScreenshoT)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Final design of the project](./final.png)
### Links

- You can see the result [here](https://macluiggy.github.io/blogrLandingPage)

## My process


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- media queries
- JavaScript

### What I learned
In this project I learned to adapt a page in responsive we design so an user can see the web page in a mobile device. I also learned to implement JavaScript so when the width of the page is small enough the image change to its corresponding mobile version, I did this as follows:

```js
var illustratorEditor = document.querySelector('#illustration-editor');// selecciona la imagen
    if (window.innerWidth < 500) { // si el ancho de la pantalla es menor que el valor
        illustratorEditor.src = './images/illustration-editor-mobile.svg';// cambia la imagen
    }

    //codigo para el main3
    var illustrationLaptop = document.querySelector('#illustration-laptop');

    if (window.innerWidth < 500) {
        illustrationLaptop.src = './images/illustration-laptop-mobile.svg';
    }
```

### Continued development

I really like the way CSS flexbox helps to manipulate the display of the elements of a container, surely I'll continue using this technique. In this project this is the first time I used media queries, so I'll continue making project to solidify its concepts.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
