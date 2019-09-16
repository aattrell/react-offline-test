# React Offline Test

## TLDR

* This README describes the test - read it
* **Everything** you need to know is in this readme
* Definitely read the 'What are you looking for in the solution?' bit

## What is this?

We ask our JavaScript candidates to take this test as part of our recruitment process. This is step one. If we like your submission we will invite you in for (probably one) technical interview where we will have a chat and ask you to do some pair programming. 

### What should it do?

Your task is to write a React application that displays the current mix of energy generation in the UK (i.e. how much nuclear, wind, solar etc.).

We have provided an empty React app to get you started - it is pre-configured with Babel and Webpack to get you up and running with no fuss. Details of an API that you can call to load the data that you should display are provided below. 

### How should it work?

Definitely using React! 

How you decide to load and show the data is entirely up to you. 
You are free to use any libraries that you want (via `npm`) and you can choose how you wish to display the data. Some suggestions are:

* Huge numbers
* Tiled icons and numbers
* A chart of some kind
* Relative sized colour bands in a giant unicorn's rainbow puke

## Getting started

* If you haven't already, fork our GitHub project
* Get the dependencies - `npm install`
* Run the app - `npm start` - it will be available at http://localhost:8080
* Write your code, starting with `app.jsx`

### Where can I find the UK energy generation data?

Here: https://api.carbonintensity.org.uk/generation

An example response is in `example_api_response.json`, where you can see that the data includes the relative percentage values of a variety of fuels
for 1 settlement period (half hour block). A live call to the API will give you the data for the latest complete settlement period. This is absolutely fine for the purposes of this test - *you do not need to worry about any larger time periods*.

An existing website that shows this data is here: https://gridwatch.co.uk/

### What are you looking for in the solution?

* A **simple**, **readable**, **well-factored** solution - not the fanciest charting library or middleware components you can find
* **Automated tests**
* Some form of visual styling - we don't care what technology you use for this but an un-styled `ul` is not going to cut it

### Anything else I should know?

* You can use any ES7 features (or earlier)
* You can use TypeScript if you prefer (the project is already configured for this)
* You can use any libraries that you want
* `npm start` will start a Webpack hot-reload dev server so you can make live changes
* We really like TDD
* We like TypeScript too
* We like simplicity - a more complicated solution is rarely better than a simple one
* Some types of chart seem like a really obvious fit but are not actually very good at showing small values in a data set 

## Finishing

* If you have made any changes that require us to do more than just an `npm install` and `npm start` to run your solution then please make this clear in the readme
* Let your agent know that you're done and we will take a look in GitHub

## My solution

* Styled components for CSS: I've used this recently and think it has a lot of advantages, such as scoped styles and no need for classes (I feel this helps to encourage using semantic HTML).
* Recharts bar graph: I choose Recharts as it is light weight and has great documentation and support as it is a very popular tool for React. Initially I thought of creating a pie chart, but felt it was harder to show small values in a meaningful way.
* Typescript: type safety is very important, and I prefer using Typescript over Flow, so was happy this was set up on the project. I also installed the @type modules for react, react-dom, styled-components and recharts. I did not convert index.js to index.ts as this caused problems with the hot reloading and ran out of time to research a solution.
* Prettier: I like the consistency in code formatting that this provides, and I've gotten into the habit of using it on personal projects.
* File structure: I choose to group by feature (so the tests, styles etc are in one place) instead of by file type / atomic design, as I find this easier to work with. I tried to keep file sizes small and separate presentational components from logic in containers.
* Responsive design: I used CSS media queries to customise for different breakpoints. I decided to only display the bar chart on tablet & desktop (768px screen width and higher), as I felt a 9 option bar chart would be too squashed to fit on a mobile screen. Instead I created tiles with this info as large numbers to display on mobile. The chart was placed in a responsive wrapper, and the tiles flow onto a new row as required, when resizing.
* Hooks: As this project allows ES7 JS, I thought it would be fun to use the latest features. I like the consistency from this, as it removes the need for class components, so stateless functions can be used instead.
* Jest & Enzyme & Jest Fetch Mock: I have included examples of both snapshot testing for simple components that are unlikely to change (e.g. error page) and unit testing (e.g. energy generation graph). My intention was to use jest fetch mock to test the calls to the API in the dashboard container. However, because I decided to use the useEffect() and useState() hooks instead of a class component based approach, I ran into some difficulties with trying to get the tests to pass and did not have time to investigate further and finish this particular set of tests.

## Ideal next steps

* Add the missing tests for fetching the data from the API (investigate the issue mentioned further, or convert to a class based component if this is otherwise unresolvable as testing that is more straightforward).
* It would be nice to link externally to information about the different fuel types so the data is more meaningful.
* Refactor to extract reusable styles (such as breakpoint values) and test data to remove code duplication.
* Add some themes to the data tiles so each tile can be coloured differently based on index.
* Style and improve the error page.
* Manual testing using Browserstack to see how it looks on several different devices and browsers.
* Review accessibility concerns. Usually when I finish coding a feature, before the peer review process, I go back over it and ask myself the following questions: Can you get the info easily using a screen reader? Are font sizes and color contrast suitable? Does this use semantic html, aria attributes, and alt tags (as applicable)? How is the keyboard navigation to any links or buttons? Are there clear hover/focus states?
* Review performance. As this is a small tech test, I would simply check quickly on physical devices (ideally both android & ios phones, and an ipad or tablet) for lag, as performance tends to be a more critical issue on these devices than desktop.
* For a large project at work, I would typically use Lighthouse for analysing and monitoring accessibility and performance issues once changes are released, as this tool gives a nice rating and breakdown of key issues.
