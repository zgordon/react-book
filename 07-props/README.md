## Props Practice

### Setting Up for Practice

These practice exercises were built using Create React App. 

To get started run

```
npm start
```

OR 

``` 
yarn start
```

## PRACTICE #1

In this first practice we will practice adding props to a component. To get setup, open the 04-props/completed-starter project and run npm install then npm start.

Then find the <User /> component on line 11 in the src/Practice1.js file.

Pass in id and username as props to the component.  You should see in on line 19 that the <User /> component is already setup to use these props, they just need to be passed.

Once this is complete, you can open the src/index.js file and uncomment line 4.

import Practice1 from "./Practice1";

Finally, make sure that you call <Practice1 /> on line 14 in place of the <Placeholder /> component.

You should see the user ID and username render in the browser.

This practice exercise will help you get you comfortable with the first step of working with Props, passing them into a component.

## PRACTICE #2

In our second practice we will take a step further with our practice of adding props to a component. To get setup, open the 04-props/completed-starter project and run npm start if the server is not already running.

Open up src/Practice2.js in your code editor.  Add two properties to the post object on line 5.  One for id and one for title.

Then come down inside the Practice2() return and call the <Post /> component inside of the div being returned.

Pass in the post object we created as a prop into the <Post /> component.

Finally come down to where the <Post /> component is setup and modify it to receive props and return both the id and title props within the paragraph tag it returns.

Once you have all this working, open the src/index.js file and uncomment line 5.

import Practice2 from "./Practice2";

Finally, make sure that you call <Practice2 /> on line 14 in place of the <Placeholder /> or<Practice1 />component.

You should see the Post title and id you setup being rendered on the page.  You can try modifying the original post object you setup to test that it all works properly.

This practice exercise is great to help you setup more of the parts of props on your own.  We define the variables used as props, set the props on a component and then modify a component to work with props.  This may we worth practicing a few times on your own.

## PRACTICE #3

Now that we have practiced a little with adding and using props, we will have you write a bit more of the code on your own as well as pass props down two levels of components rather than just one.

To get setup, open the 04-props/completed-starter project and run npm start if the server is not already running.  Open up src/Practice3.js in your code editor.

Find the <Post /> component and pass in the title and author as props.

Then setup Post to receive props and pass title to <Heading /> and author to <Byline />.  Make Heading accept props and display the title with the <h1> tags.  The Byline component will require you to write out the code for the component and have it return a paragraph with the author displayed.

Once you have all this done, open the src/index.js file and uncomment the line

import Practice3 from "./Practice3";
Finally, make sure that you call <Practice3 /> in ReactDOM.render().

In the browser this should display the title and author on the page and give you experience passing props down through multiple levels of components.

## PRACTICE #4

In this practice we will work with spreading and destructuring props.  This will expose you to some common patterns of working with React that you will no doubt see in other projects and likely use in your apps as well.

To get setup, open the 04-props/completed-starter project and run npm start if the server is not already running.  Open up src/Practice4.js in your code editor.

First, look for the <User /> component called within Practice4.  Spread the user object into the <User /> component so each user property becomes it’s own prop.

Then, inside of the User component destructure firstName and username from the props and use them in the component where you see FIRSTNAME_HERE and USERNAME_HERE.

Of course you still have to wire up the src/index.js file and make sure you have <Practice4 /> imported and <Practice4 /> called in ReactDOM.render().

If everything is setup correctly, you should see firstName and username work as variables inside of the User component.

Again, this practice is meant to help you get comfortable with spreading and desctructuring with props.

## PRACTICE #5

In our final exercise we pull together what we have done in the examples above into one larger example.

Setup by opening the 04-props/completed-starter project and make sure npm start is running.  Then open src/Practice5.js in your code editor and make sure <Practice5 /> is wired up in src/index.js.

Within src/Practice5.js,  you first want to spread the user object into the <User /> component like we have done in the previous exercise.  Then follow the instructions for destructuring the user props in User and passing the proper props into <FullName />, <Username />, <Social />.

Within each one of those children components, make sure that the identified props are descrutured then used as explained.  You will have to modify the component code quite a bit to make it all works.

Once everything has been setup correctly, you will see the Full Name of the user displayed in an <h1>, the username in a <p> tag and finally a list of social links.