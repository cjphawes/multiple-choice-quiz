# Testing

#### Compatibility Testing

Testing was completed in Google Chrome, Microsoft Edge and Firefox web browsers.

- Google Chrome

  ![Image of Google Chrome Browser of home page](/documentation-assets/doc-imgs/chrome-home-page-test.webp)
  ![Image of Google Chrome Browser of game page after selection](/documentation-assets/doc-imgs/chrome-game-before-selection-test.webp)
  ![Image of Google Chrome Browser of game page before selection](/documentation-assets/doc-imgs/chrome-game-after-selection-test.webp)
  ![Image of Google Chrome Browser of results page](/documentation-assets/doc-imgs/chrome-results-page-test.webp)

- Microsoft Edge
  ![Image of Microsoft Edge Browser of home page](/documentation-assets/doc-imgs/ms-edge-home-page-test.webp)
  ![Image of Microsoft Edge Browser of game page before selection](/documentation-assets/doc-imgs/ms-edge-game-before-selection-test.webp)
  ![Image of Microsoft Edge Browser of game page after selection](/documentation-assets/doc-imgs/ms-edge-game-after-selection-test.webp)
  ![Image of Microsoft Edge Browser of results page](/documentation-assets/doc-imgs/ms-edge-results-page-test.webp)

- Mozilla Firefox

  ![Image of Mozilla Firefox Browser of home page](/documentation-assets/doc-imgs/firefox-home-page-test.webp)
  ![Image of Mozilla Firefox Browser of game page before selection](/documentation-assets/doc-imgs/firefox-game-before-selection-test.webp)
  ![Image of Mozilla Firefox Browser of game page after selection](/documentation-assets/doc-imgs/firefox-game-after-selection-test.webp)
  ![Image of Mozilla Firefox Browser of results page](/documentation-assets/doc-imgs/firefox-results-page-test.webp)

#### Compatibility Issues

Only one issue was found, this was when using an Iphone.

- The button elements text color was displayed as blue and not black unlike on the desktop or android phones.

#### Component Testing

- **Home Page Testing**

  - Play Now CTA Button:
    - What to expect - When the user hovers over the **Play Now** button, the user should see the border disappear and the background turn to an orange/red gradient color.
    - Testing: ![GIF of play btn test](/documentation-assets/doc-gifs/play-btn-test.gif)
    - The result - The feature acted as designed, it removed the border and changed the background color to orange/red gradient color.

- **Game Container Testing**

  - Game title:

    - What to expect - When inside the game, hovering over the game title should slightly change color for better user accessibility but also should be able to click the link and it will return to the home page.
    - Testing: ![GIF of game title test](/documentation-assets/doc-gifs/game-title-test.gif)
    - The result - The feature acted as designed, the color changed to a darker white and returned the user back to the home page.

  - Answer button element:
    - What to expect -
    - Testing: ![GIF of answer button element test]()
    - The result -

#### Validator Testing

##### HTML

- No errors were found using the official [W3C HTML Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcjphawes.github.io%2Fmultiple-choice-quiz%2Findex.html)

![W3C HTML Validator Image](/documentation-assets/doc-imgs/w3c-html-validator.webp)

##### CSS

- No errors were found using the official [W3C (Jigsaw) Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fcjphawes.github.io%2Fmultiple-choice-quiz%2Fassets%2Fcss%2Fstyle.css&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

![W3C CSS Jigsaw Validator Image](/documentation-assets/doc-imgs/w3c-css-validator.webp)

##### Javascript

- No errors were found using the official [JShint Validator](https://jshint.com/)

![JSHint Validator Image](/documentation-assets/doc-imgs/jshint-validator.webp)

---

### Accessibility and Performance

- For the users on smaller devices I made sure the Play Button and Restart Buttons had different backgrounds to their counterparts on the desktop devices due to not being able to hover with a cursor.

This is the **Desktop Version:**

![My desktop home page](/documentation-assets/doc-imgs/home-page.webp)
![My desktop results page](/documentation-assets/doc-imgs/game-results-section.webp)

This is the **Tablet Version:**

![My tablet home page](/documentation-assets/doc-imgs/tablet-device-home-page.webp)
![My tablet results page](/documentation-assets/doc-imgs/tablet-device-results-page.webp)

This is the **Mobile Version:**

![My mobile home page](/documentation-assets/doc-imgs/mobile-device-home-page.webp)
![My mobile results page](/documentation-assets/doc-imgs/mobile-device-results-page.webp)

- I used the Lighthouse Dev Tools to assess the performance and accessibility of my quiz game. I am happy with receiving over 95%!.

![Image of lighthouse dev tools test](/documentation-assets/doc-imgs/lighthouse-perfomance-test.webp)
