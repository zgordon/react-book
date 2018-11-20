## State Practice

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

In this exercise we will practice creating a property in state and rendering it on the page. To get setup, open the completed-starter project and run npm install then npm start.

Then open the src/Practice1.js file.

Before the render function create a state object with a property of username set to a common username you use.

Then in the render() function, replace USERNAME_HERE with value of username from state.

This practice exercise will help you create values in state and render them to the page.

## PRACTICE #2

In this practice exercise we will work with updating the state using setState and an event handler. To get setup, open the starter files and run npm start if the server is not already running.

Open index.js and make sure Practice2 is imported and called in ReactDOM.render(). Make sure npm start is running.

Next open Practice2.js.  

After the state is setup and before the render function, create an arrow function called handleUsername that takes the event object as a parameter.  It would look something like this to start:

```
handleUsername = e => {}
```

Have the function handleUsername set the new value of username equal to the event target value (e.target.value).  We will get this value from an input form field when we attach it as an event handler.

Then come down inside the render() function and set the onChange prop for the <input /> element equal to the handleUsername function we just created.  Remember to call it using the this keyword.

Set the placeholder value of the <input /> equal to the username in state.

Once you have all this working, open the src/index.js file and uncomment line 5.

import Practice2 from "./Practice2";

Finally, make sure that you call <Practice2 /> on line 14 in place of the <Placeholder /> or<Practice1 />component.

You should see the Post title and id you setup being rendered on the page.  You can try modifying the original post object you setup to test that it all works properly.

This exercise gives you practice updating state using setState and event handlers.  This is an essential part of working with state.  This exercise also introduced how to use the onChange event with an input field.

## PRACTICE #3

Now that we have practiced creating and setting state we will practice how to update the value of state from a child component.

Open index.js and make sure Practice3 is imported and called in ReactDOM.render(). Make sure npm start is running.

Next open Practice3.js.

Update the UserForm component to accept props.  Then update PROPS_ID, PROPS_LABEL and PROPS_ONCHANGE to get their values from props.

Next, come down into the render() method and call <UserForm />.  Set the following props:

- id = "firstName"
- label = "First Name"
- onChange = handleFirst

Then call <UserForm /> again with the correct props for a Last Name form.

This exercise shows how to pass event handlers to update state down into children components.  It also shows how to use a single component that can accept different event handlers for different functionality.


## PRACTICE #4

In this exercise we practice passing both the value of state and the handlers to update state down into children components.  We also look again at how to create a simple component that can accept different event handlers to cause different interactions.

Open index.js and make sure Practice4 is imported and called in ReactDOM.render().  Make sure npm start is running.

Next open Practice4.js.

First, create a functional component called Header that accepts props.  Have it display an <h2> with text from props.

Second, create a function component called Button that also accepts props.  Have it return a <button>. Set the onClick value equal to onClick from props.  Set the text for the button equal to text from props.

Next, inside Practice4(), create a state object with a count property set to 0.

Still inside Practice4(), create an increment function that sets the value of count in state to count plus one.  Create a decrement function that decreases the value of count in state by one.  Then create a reset function that updates the count state to 0.

Then in the render() return, call <Header /> and set the prop of text equal to the value of count from state.

Then call <Button /> three times.  The first time set the onClick prop to decrement and the text prop equal to "-".  On the next one, have onClick set to increment and "+" for the text.  Finally, set the last <Button /> onClick set to reset and the button text say "Reset."

Once done, this should display a counter on the page with +, - and Reset buttons that will increase and decrease the value of the counter.  All of this runs from states and involves reusable children components.


## PRACTICE #5

In our final exercise we take our last practice exercise and add local storage support for state so that it remains on page refresh or when leaving and coming back to the page.

Open index.js and make sure Practice5 is imported and called in ReactDOM.render().  

Make sure that Create React App is not currently running.  

Install the Simple Storage package using the following:

```
npm install react-simple-storage
```

Once the package is installed, run `npm start` and open 

Then make sure that SimpleStorage is imported from "react-simple-storage" so we can use it in our component.

Come down into the Practice5() render() method.  Call <SimpleStorage /> and set a parent prop equal to "this".

This should automatically make sure that count from state is saved in local storage.  Try increasing the count and then refreshing the page.  It should keep the original value.