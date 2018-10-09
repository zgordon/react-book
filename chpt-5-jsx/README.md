## JSX PRACTICE
As we will see there are more rules to JSX, but the above gives us a solid introduction.  Now let’s do a little practice to solidify what we have learned.

You should already have the practice exercises, but you can download them here if you do not already have them: https://github.com/zgordon/react-book.

The exercises for this chapter are under “chpt-5-jsx.” Just like with the last chapter you will find blank starter files with comments of what to do as well as completed files with working code.  All you have to do to test is open the index.html file in your browser.

If you completed the practice exercises from the last chapter you will find these very familiar.   In fact, they are the exact same exercises as before, but this time we will complete them using JSX rather than React.createElement() directly.

### Practice Exercise #1
The first exercise involves create a simple paragraph element using JSX.  The paragraph element should not have any special classes or attributes and some simple text like “Hello React.”

You should save this element as a variable name pEL using const.  To test, call pEL the bottom of the exercises where ReactDOM.render() is called.

You final markup should look like this:

```
<p>Hello React.</p>
```

### Practice Exercise #2
For the second exercise we will practice nesting elements.  Create a const named h1LinkEl.  Give it the value of an h1 element with a class of “entry-header.”  Inside of the h1, create an anchor element with a link to the React website and the text “React.”

Like Example #1 above you will have to add your element variable to the ReactDOM.render() call in order to test it.

Your final markup should look like this:

```
<h1><a href=”http://reactjs.org/”>React</a></h1>
```

### Practice Exercise #3
In this exercise we will create a component rather than a single element.  The component is called Header and it should return a header element with an ID of “main.”  Inside of the header element you should pass in the paragraph element and the h1 element you created from Exercises #1 and #2.

To test you will add <Header /> to ReactDOM.render().  Your final markup should look like this:

```
<header id="main">
  <h1><a href="http://reactjs.org/">React</a></h1>
  <p>Hello React.</p>
</header>
```

### Practice Exercise #4
From here we continue with another component example.  This exercise has you creating a component called List that returns an unordered list with three list items within it.  Each list item should be a link to a React resource.  The ul element should also include both a custom class and ID attribute.

When you call <List /> in ReactDOM.render() it should return markup like this:

```
<ul class="react-links" id="top">
  <li><a href="http://reactjs.org/docs">React Docs</a></li>
  <li><a href="https://reactjs.org/docs/react-dom.html">ReactDOM Docs</a></li>
  <li><a href="http://reactexplained.com/">React Explained Book</a></li>
</ul>
```

For bonus points, make up a unique key for each list item.

### Practice Exercise #5
In our final exercise we create a component called App that returns a Fragment with our Header and List components within it.  This will give us practice using React.Fragment as well as creating components that return other components that in turn return individual elements.  This is a fairly common practice in React.

The final markup for this will look something like this:

```
<header id="main">
  <h1><a href="http://reactjs.org/">React</a></h1>
  <p>Hello React.</p>
</header>
<ul class="react-links" id="top">
  <li><a href="http://reactjs.org/docs">React Docs</a></li>
  <li><a href="https://reactjs.org/docs/react-dom.html">ReactDOM Docs</a></li>
  <li><a href="http://reactexplained.com/">React Explained Book</a></li>
</ul>
```

### Goal of the Practice Exercises
After you complete the exercises above you should feel comfortable creating basic elements and components with JSX.  You should also understand that behind the scenes, our JSX “markup” is being passed to React.createElement().

I would encourage you to try creating some of your own elements and components as well as additional practice.