## PRACTICE WITH ELEMENTS AND COMPONENTS
To solidify what we have learned so far about elements and components, let’s do a little practice.

You can download the practice exercises for this book at https://github.com/zgordon/react-book.  The exercises for this chapter are under “chpt-4-elements-and-components.” You will find “practice-starter” with comments outlining the exercises.  Then the “practice-completed” has all the completed examples for you to check your answers against.

Here is a brief overview of the practice exercises with some insight into each one.

### Practice Exercise #1
The first exercise involves create a simple paragraph element using React.createElement().  The paragraph element should not have any special classes or attributes and some simple text like “Hello React.”

You should save this element as a variable using const.  Then at the bottom of the exercises where ReactDOM.render() is called, add your element variable name there to test that you created it properly.

You can open the index.html file in the browser to test that everything works properly.  If you get stuck, check the completed code for a little help.

You final markup should look like this:

```
<p>Hello React.</p>
```

### Practice Exercise #2
The second exercise is similar to the first in the you will start off creating an element and saving it as a variable.  The element we’re creating as an h1 element with a class of “entry-header.”  However, this element has a link element inside of it that links to the React website and includes the text of “React.”

Like the example above you will have to add your element variable to the ReactDOM.render() call in order to test it.

Your final markup should look like this:

```
<h1><a href=”http://reactjs.org/”>React</a></h1>
```

### Practice Exercise #3
In the next exercise we will create a component rather than a single element.  The component is called Header and it should return a header element with an ID of “main.”  Inside of the header element you should pass in the p element and the h1 element you created from Exercises #1 and #2.

To test you will add Header() to ReactDOM.render().  Your final markup should look like this:

```
<header id="main">
  <h1><a href="http://reactjs.org/">React</a></h1>
  <p>Hello React.</p>
</header>
```

### Practice Exercise #4
From here we continue with another component example.  This exercise has you creating a component called List that returns an unordered list with three list items within it.  Each list item should be a link to a React resource.  The ul element should also include both a custom class and ID attribute.

When you call List() in ReactDOM.render() it should return markup like this:

```
<ul class="react-links" id="top">
  <li><a href="http://reactjs.org/docs">React Docs</a></li>
  <li><a href="https://reactjs.org/docs/react-dom.html">ReactDOM Docs</a></li>
  <li><a href="http://reactexplained.com/">React Explained Book</a></li>
</ul>
```

### Practice Exercise #5
In our final exercise we create a component called App that returns a React.Fragment with our Header and List components within it.  This will give us practice using React.Fragment as well as creating components that return other components that in turn return individual elements.  This is a fairly common practice in React.

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
After you have successfully completed the practice exercises you should feel comfortable creating basic elements and components using React.

I would encourage you to try creating some of your own elements and components as well as additional practice.