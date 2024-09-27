# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

https://github.com/user-attachments/assets/ac9fc38c-6086-4671-b940-4193c41c1dff

### Links

- Solution URL: [GitHub Repo](https://github.com/sherimin/tip-calculator)
- Live Site URL: [Live Site](https://tip-calculator-phi-lac.vercel.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library


### What I learned

In this application, I refreshed my knowledge of React hooks to create this tip calculator. The tip amount is calculated simultaneously as the user inputs the total bill, tip percentage, and number of people, providing instant feedback. I also enhanced my understanding of adding active or error stylings to elements, for better user experience through intuitive form validation.


```
   <div className="input-box">
     <label>Number of People</label>
       <input
         className={`input ${error? 'error' : ''}`}
       />
       {error && <span className="error-msg">Can't be zero</span>}
    </div>
```
```
  useEffect(() => {
    if (numOfPeople.length === 0 || Number(numOfPeople) > 0) {
      setError(false);
    } else if (Number(numOfPeople) === 0) {
      setError(true);
    }
  }, [numOfPeople])
```
```
.input-box input.error {
  border: 2px solid red;
}

.error-msg {
  color: red;
  font-size: 1rem;
  position: absolute;
  right: 5px;
  top: 18px;
}
```

### Useful resources

- [useEffect - React Hooks](https://react.dev/reference/react/useEffect)

## Author

- Portfolio Website - [Sheri Lu](https://www.sherilu.com/)
- Frontend Mentor - [@sherimin](https://www.frontendmentor.io/profile/sherimin)
