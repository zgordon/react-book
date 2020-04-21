Hooks in React allow you to use state, component lifecycle and context in functional components.

As React has matured, developers found that they prefer to write components as functions.  However, if you start a component as a function and then need to add state or use the component lifecycle you have had to rewrite your function as a class.  This can require tedious refactoring that leaves a lot of developers frustrated.

To deal with this frustration, React released "Hooks" that allow you to hook into the mechanics of state, component lifecycle and context while still writing your components as functions.

## A Simple Hook for State

For a refresher, here is a class based component that uses a count value in state.

```
import React from "react";

class Counter extends React.Component {
  state = {
    count: 0
  };

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1
            })
          }
        >
          +
        </button>
      </>
    );
  }
}
```

Now, here is the same thing done with thing with a functional component and hooks:

```
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
    </>
  );
}
```

The first thing to notice here is that we are importing `useState` from the React library. This function allows us to hook into the state functionality.

Then find the following line:

```
const [count, setCount] = useState(0);
```

This does three things:

1. Creates a new variable in state called `count`
2. Creates a new function to update the value of count in state called `setCount`
3. Sets the default value for count to `0`

We can then use `count` anytime we would normally use `this.state.count`.

If we wanted `count` to start at a one instead of zero we could change this:

```
const [count, setCount] = useState(0);
```

To this:

```
const [count, setCount] = useState(1);
```

When we want to update the count value in state, we can use `setCount(newValue)` instead of using `this.setState({count: newValue})` as we would in a class based component.

The naming convention of pairing `count` and `setCount()` would apply to any values you setup in state. For example, `user` and `setUser()`, `isLoggedIn` and `setIsLoggedIn()`, `posts` and `setPosts()` is important when setting up new values in state with hooks.

## An Example of Hooks with Multiple Values in State

In this example we will allow a user to enter in a username and then assign points to that user. We will also provide the option to reset the points as well as change the username.

This will require three values in state: `username`, `isUsernameSaved`, and `points`.

Read through the code below and focus on how the different values in state are managed.

```
import React, { useState } from "react";

function UserPoints() {

  const [username, setUsername] = useState(``);
  const [isUsernameSaved, setIsUsernameSaved] = useState(false);
  const [points, setPoints] = useState(0);

  return (
    <>
      {isUsernameSaved ? (
        <>
          <h1>
            {username}: {points}
          </h1>
          <p>
            <button onClick={() => setPoints(points + 1)}>Add Point</button>
            <button onClick={() => setPoints(0)}>Clear Points</button>
          </p>
          <p>
            <button
              onClick={() => {
                setIsUsernameSaved(false);
              }}
            >
              Edit Username
            </button>
            <button
              onClick={() => {
                setUsername(``);
                setPoints(0);
                setIsUsernameSaved(false);
              }}
            >
              Clear Username
            </button>
          </p>
        </>
      ) : (
        <p>
          <input
            id="username"
            onChange={e => setUsername(e.target.value)}
            placeholder="Username"
            value={username}
          />
          <button onClick={() => setIsUsernameSaved(true)}>
            Save Username
          </button>
        </p>
      )}
    </>
  );
}
```

The first important thing to notice about this code is that we first setup each value in state using `useState()`. This includes the value name, the set function and optional default value.

```
const [username, setUsername] = useState(``);
const [isUsernameSaved, setIsUsernameSaved] = useState(false);
const [points, setPoints] = useState(0);
```

While this may seem a little repetitive, it gives us fine grained control over all of the details for each value in state. It also keeps the rest of our code more concise.

The logic in the code should be fairly straight forward if you have been following along with everything previously in this book.

If a username is set we display the username and number of points and offer some buttons to add a point, reset the points and change the username.

If the username is not set (or someone clicks the "Edit Username" button) then we display an input field that let's them set the username.

Just like with component based state, the values in state still only apply to the component in which they are defined.

So, if we wanted to pass the value of state to child components we would have to use props or context. Likewise if we wanted child components to update the values in state, we would need to pass in the functions that allow state to be updated.

## Using State Hooks with Child Components

This simple example shows how we would modify the example above to pass the value of state and the ability to update state down into child components using props.

You will find that this part works the exact same as when using class based components and state.

```
function Heading({ username, points }) {
  return (
    <h1>
      {username}: {points}
    </h1>
  );
}

function Button({ label, onClick }) {
  return <button onClick={() => onClick()}>{label}</button>;
}

function UserPoints() {
  const [username, setUsername] = useState(null);
  const [isUsernameSaved, setIsUsernameSaved] = useState(false);
  const [points, setPoints] = useState(0);

  return (
    <>
      {isUsernameSaved ? (
        <>
          <Heading username={username} points={points} />
          <p>
            <Button label="Add Point" onClick={() => setPoints(points + 1)} />
            <Button label="Clear Points" onClick={() => setPoints(0)} />
          </p>
          <p>
            <Button
              label="Edit Username"
              onClick={() => {
                setIsUsernameSaved(false);
              }}
            />
          </p>
        </>
      ) : (
        <p>
          <input
            id="username"
            onChange={e => setUsername(e.target.value)}
            placeholder="Username"
            value={username}
          />
          <Button
            label="Save Username"
            onClick={() => {
              setIsUsernameSaved(true);
            }}
          />
        </p>
      )}
    </>
  );
}
```

You can see that the `Heading` component accepts `username` and `points` in props. When we update these values in the state of the main `UserPoints` component the updated values are passed back down into the `Heading` component.

Likewise when we want to update the values of state using the generic `Button` component we can pass the `setPoints()` function in as a prop just like we would do in a class based component.

From here you should be comfortable doing the normal things you would do with a value in state. However, you may be wondering how you would hook into lifecycle hooks.

For this we need to look at the Effect Hook.

## The Effect Hook for Lifecycle Events

There are three lifecycle hooks in React that allow for what has been rendered to be updated or changed:

1. componentDidMount
2. componentDidUpdate
3. componentWillUnmount

The rest of the lifecycle hooks run before rendering occurs so do not have what are referred to as side effects:

- componentWillMount
- componentWillReceiveProps
- shouldComponentUpdate
- componentWillUpdate

The `useEffect` function in React will allow us to hook in to the three lifecycle hooks with side effects all at once.

As the React documentation puts it:

If you’re familiar with React class lifecycle methods, you can think of `useEffect` Hook as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` combined.

## A Simple Example of Use Effect in Action

In this example we will make an API call to fetch posts from a WordPress site. We will then save the posts in state and render them on the page.

Code like this would went inside `componentDidMount` in a class based component.

With hooks we would code it in the following way:

```
import React, { useState, useEffect } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);
  const url = `https://dev-react-explained-api.pantheonsite.io/wp-json/wp/v2/posts/`;

  const fetchPosts = () => {
    fetch(url)
      .then(response => response.json())
      .then(posts => {
        setPosts(posts);
      })
      .catch(error => console.error(error));
  }

  useEffect(() => {
    if (posts.length === 0) {
      fetchPosts();
    }
  });

  return (
    <>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title.rendered}</li>
        ))}
      </ul>
      <button onClick={() => setPosts([])}>Refresh Posts</button>
    </>
  );
}
```

Here we import `useEffect` from `react` and then call it within our functional component.

`useEffect` takes a function as a parameter. It will call this function each time render is called.

This happens when

- The component first renders
- Whenever state or props change
- When the component is removed

Because `useEffect` gets called every time state changes, we would not want to call our `fetch()` function directly inside of `useEffect`. This would create an infinite loop of fetch requests. Not good.

So, to do something only on initial page load we can add a conditional statement to check if the value we want already exists in state.

```
useEffect(() => {
  // Fetch will only run if posts do not exist
  // This will effectively only run when first rendered
  if (posts.length === 0) {
    fetchPosts();
  }
});
```

Inside the results of our fetch request we call `setPosts(posts)` and pass it the posts from the fetch request.

```
const fetchPosts = () => {
  fetch(url)
    .then(response => response.json())
    .then(posts => {
      setPosts(posts);
    })
    .catch(error => console.error(error));
}
```

Next in our code, inside the return, we map over the posts. Nothing new there.

Finally we add a `Refresh Posts` button that sets the posts back to an empty array.

```
<button onClick={() => setPosts([])}>Refresh Posts</button>
```

Since this causes an update to state, it triggers `useEfect` to get called again. This time the `posts.length === 0` conditional statement will pass and the fetch call gets called again.

This example shows how you can selectively call code on first render, or every time you have an update to state.

## Call Use Effect Based on Dependencies

`useEffect` also accepts a second parameter. We can pass an array of dependencies.

Then this `useEffect` will only get called when one of those dependencies gets called. Normally those dependencies are values in state or props.

Let's take a look at an example of `useEffect` in action that only gets called when the value of `posts` changes.

```
useEffect(() => console.log(posts), [posts]);

```

Now, whenever the value of posts changes in state, this `useEffect()` will get called.

We could add this back in with our initial example and another `useEffect` best practice in action.

```
function Posts() {
  const [posts, setPosts] = useState([]);
  const url = `https://dev-react-explained-api.pantheonsite.io/wp-json/wp/v2/posts/`;

  const fetchPosts = () => {
    fetch(url)
      .then(response => response.json())
      .then(posts => {
        setPosts(posts);
      })
      .catch(error => console.error(error));
  }

  useEffect(() => console.log(posts), [posts]);

  useEffect(() => {
    if (posts.length === 0) {
      fetch(url)
        .then(response => response.json())
        .then(posts => {
          setPosts(posts);
        })
        .catch(error => console.error(error));
    }
  });

  return (
    <>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title.rendered}</li>
        ))}
      </ul>
      <button onClick={() => setPosts([])}>Refresh Posts</button>
    </>
  );
}
```

This shows us that we can have multiple `useEffect` hooks in the same function. In fact this is the best practice: separate your `useEffect` calls based on what they are doing.

## Cleaning Up After Use Effect

The final lifecycle hook `useEffect` ties in to is `componentDidMount`, which runs after a component is removed from the page.

Sometimes, like when working with timers or subscriptions, you will want stop those processes when the component is removed.

Let's take our example from before and add a timer that refreshes the posts every 10 seconds.

Our `useEffect` for that would look like this:

```
useEffect(() => {
  const timer = setTimeout(() => {
    console.log(`5 Second Refresh!`);
    fetchPosts();
  }, 5000);
});
```

This presents a problem though. This will take effect on render and each time state updates. So, if anything changes in state, a new timer will be setup and the old one will keep running as well.

For this reason, `useEffect` allows you to return a function that will clean up anything that needs to be stopped or cancelled once removed from the page.

Our final timer example then would look like this:

```
 useEffect(() => {
    const timer = setTimeout(() => {
      console.log(`5 Second Refresh!`);
      fetchPosts();
    }, 5000);
    return () => clearTimeout(timer);
  });
```

Here we return `clearTimeout(timer)` so that the timer created is cleared when the component is removed from the page.

## Putting it All Together

Let's take one last look at the post reader we created, with a few minor optimizations.

```
export default function App() {
  const [posts, setPosts] = useState([]);
  const url = `https://dev-react-explained-api.pantheonsite.io/wp-json/wp/v2/posts/`;

  const fetchPosts = () => {
    console.log(`Fetching posts`);
    fetch(url)
      .then(response => response.json())
      .then(posts => {
        setPosts(posts);
      })
      .catch(error => console.error(error));
  };

  // Log when posts change
  useEffect(() => console.log(posts), [posts]);

  // Get posts on initial render and if no posts exist
  useEffect(() => {
    fetchPosts();
  }, []);

  // Fetch posts every 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(`5 Second Refresh!`);
      fetchPosts();
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title.rendered}</li>
        ))}
      </ul>
    </>
  );
}
```

Here we see various use cases for `useEffect` in action.

First we have a simple example that logs the value of `posts` in state. It also includes a dependency so it only gets called when that value changes.

Next we have a `useEffect` for fetching our posts on initial render. Since posts get refreshed automatically now, we removed the `Refresh Posts` button.

We are also passing an empty array as the second parameter.

```
useEffect(() => {
  fetchPosts();
}, []);
```

This approach effectively makes the effect only run once on first render. This happens since the empty array will not change, therefor there is nothing to trigger the effect to run again as there is in the previous example.

Finally we have a timer effect that fetches the posts every 5 seconds. This also includes a return that cancels the timer when the component is removed.

However, with this effect we do not pass any dependencies since we want it to continue to start again every time posts get refreshed.

## Context Hooks with `useContext`

In addition accessing state and the lifecycle, hooks also provide access to context.

We will still setup our context in a file as we learned previously.

```
import React from "react";

const UserContext = React.createContext();
export default UserContext;
```

Then, We have to to setup a provider component to specify what tree of components has access to this context. So far, nothing is different from our look at context in the previous chapter.

```
import React, { useState } from "react";

const App  = props => {
  const [ user, setUser ] = useState({ id: 1 })
  return(
    <UserContext.Provider
      value={{ user, setState }}
    >
      <Header />
      <Content />
      <Footer />
    </UserContext.Provider
  )
}
```

Finally, to consume the context we can use `useContext` in any component with in the `<UserContext.Provider>` tree.

```
import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const WelcomeMessage = () => {
  const { user } = useContext(UserContext);
  return (
    <p>Welcome {user.id}</p>
  );
}
```

Here we are importing our UserContext as well as the `useContext` function. Then when we call `useContext()` we pass it the context we want to receive.

The original structure of our `UserContext` included both `user` and `setUser`.

Since we only need the `user` part of context, we destructure that:

```
const { user } = useContext(UserContext);
```

We could also just get the context directly:

```
const context = useContext(UserContext);
```

Or even destructure multiple values:

```
const { user, setUser } = useContext(UserContext);
```

As you can see, the setup for using context in class based and functional components is the same. You setup the context, likely in it's own file. Then you setup your context provider component with a value, usually from state, or involving functions to update the context.

However, the consumption of context with hooks does not involve contextType or a consumer component.

The syntax for `useContext` is very similar to `useState` and `useEffect`.

## What's Next?

From here you should have a good idea of how to create functional components that leverage `useState` and `useEffect`.

Now let's solidify what we have learned with some practice exercises.

## Practice Exercises

There are more detailed instructions in each of the corresponding practice exercise component files.

1. Create a simple counter example using hooks for state
2. Create a scoreboard for two teams to track points. Use hooks for values in state.
3. Use the provided API to display a random picture of a cat. Use effect hooks.
4. Add a timer to the previous example to refresh the picture every five seconds. Make sure to clear the timer when component rerenders or is removed.
5. Convert the example from the context practice chapter (found ported over into `Practice5.js`) to use context hooks and functional components.
