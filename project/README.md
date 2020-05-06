# A REACT PROJECT

In this section of the book, we will build and launch a complete project using React and some other helpful libraries and tools.

The project involves ten steps:

Step 1 – “Listing Content From State” starts us off building a simple version of our final project that starts with all of our data hard coded in our state.

Step 2 – “Routing and Single Content Views” introduces the popular React Router. This tool will help us create what content loads based on the URL and `<Link />` components.

Step 3 – “Adding Forms” shows us how to build out forms for managing our content using the Quill editor. We will set up the form so that we can use it for adding new content as well as editing existing content.

Step 4 – “Adding Flash Messages” gives us a quick way to display messages to the user that quickly expire after a few seconds. We will use this for saved, edited and deleted messages.

Step 5 – “Updating Content” is the section where we will take our posts that already exist and load them into the our forms for editing. We will learn how to rewire existing code for new functionality while also not needing to repeat code.

Step 6 – “Deleting Content” is an important section where we talk about how to go about deleting data but also discuss possible UX considerations for confirming the deletion of data.

Step 7 – “Maintaining Persistent State With Local Storage” implements a helpful local storage package that will sync our state with local storage for offline use and caching purposes.

Step 8 – “Authenticating With a Firebase Database” goes over the important topic of how to authenticate with a 3rd party library using React. The library we use is Google Firebase, a free and powerful database and authentication library we can use with our React projects.

Step 9 – “CRUD and Live Syncing With Firebase” takes the integration with Firebase further and shows us how to create, read, update, and delete data from Firebase. We also look at how Firebase gives us a live sync with our data that doesn’t need to be refreshed.

Step 10 – “Deploying The Project” completes the process with a demonstration of how we can build our app for deployment. We also look at how to integrate with the popular hosting provider Netifly that lets us ship to staging and production all from the command line.

# REACT PROJECT INTRODUCTION

Now that you have learned the core functionality of React and completed some practice exercises with it, you will build a larger project from scratch. You will use what you have learned, along with some new libraries and techniques.

## WHAT YOU WILL BUILD

The project you will build is a website that displays blog posts pulled from a database. You will also add the ability to log in to the site to add, edit, and delete posts.

Here is a rough outline of the steps:

1. Build a static version of the app
2. Add in routing with the React Router library
3. Build a Post Form using the Quill editor
4. Add the ability to edit and delete posts
5. Connect to a Google Firebase database

This project will allow you to continue to practice what you have learned so far. You will also learn some new things along the way, including some helpful React related libraries and tools.

## STARTING THE PROJECT

You will use Create React App to start our project.

Inside of the main files repo found here, https://github.com/zgordon/react-book, you will see a project folder.

Inside of the main project folder, there is a folder for each completed step of the project. If you want a starter folder, you can start with the previous steps folder.

However, it is recommended that you create your own directory for this project and follow along start to finish with your own project folder.

To do this, open the project folder and run the following:

```
npx create-react-app my-project
```

This will spin up a new directory called `my-project` that you can continue to use for the duration of the project.

## WHAT’S NEXT?

In the next chapter, you will build a static version of your blog site. This will involve starting with a few posts in state and then rending a list and single page view for the posts.

# REACT PROJECT STEP #1. LISTING CONTENT FROM STATE

In this first step, you are going to create a basic site that pulls some posts from state and displays them on the page.

## GETTING STARTED

You should already have a project directory you created with Create React App in the project introduction. If you do not already have this folder, you can run the following:

```
npx create-react-app project
```

Once you have this directory created, go ahead and open it in your code editor.

Then run the following to start the development server:

```
npm start
```

Now you should be able to follow along with the changes you will make next.

## STARTING WITH A FRESH APP COMPONENT

Open the App.js file and delete its contents. Then start over with the following simple base:

```
import React, { useState } from "react";

import "./App.css";

const App = (props) => {
  return (
    <div className="App">
      APP HERE
    </div>
  );
};

export default App;
```

This should display APP HERE on the page and not much else. Next, add in a header component for your app.

## CREATING THE HEADER COMPONENT

Create a new directory in the src folder called `src/components`. Inside of the components directory, create a new file called `Header.js`. This will serve as the header and navigation for your app.

Inside of the Header component, import React. Then create a functional component called Header and export it.

Have the component render a <header> element with a class of "App-header". Then, inside of that, place a <ul> with a class of "container".

Finally, place an <li> element with the words “Site Title” inside of them.

```
import React from "react";

const Header = (props) => (
  <header className="App-header">
    <ul className="container">
      <li>Site Title</li>
    </ul>
  </header>
);
export default Header;
```

Your final code should look something like the component above.

Once you have this component created, go back to the `App.js` file and import `Header` from `./components/Header`. Then call `<Header />` inside of the App component main `<div>`.

You should see the Header component load on the page.

## CREATE THE POSTS COMPONENT

Now you will create a new component file named `Posts.js` in the components folder.

Import React at the top and create a functional component named `Posts` that destructures posts from props. Have Posts return an `<article>` with the classes `posts` and `container`. At the end of the file, make sure that the `Posts` component is the default export.

```
import React from "react";

const Posts = ({ posts }) => (
  <article className="posts container">
    <h1>Posts</h1>
  </article>
);

export default Posts;
```

Now you want to display a list item if no posts are displayed. It should go after the `<h1>` and look something like this:

```
<article className="posts container">
  <h1>Posts</h1>
  <ul>
    {posts.length < 1 &&(
      <li key="empty">No posts yet!</li>
    )}
  </ul>
</article>
```

Then we will map over the posts and display an `<h2>` with the title of each post. It will look something like this:

```
<ul>
  {posts.length < 1 && (
    <li key="empty">No posts yet!</li>
  )}
  {posts.map(post => (
    <li key={post.id}>
      <h2>{post.title}</h2>
    </li>
  ))}
</ul>
```

Note that you have to set `keys` for all of the list items, and you will use the post `id` for that.

## LOADING POSTS TO STATE

To keep your app simple for the moment, you will load some posts into state in the `<App />` component. Come into App.js and add the following posts into state:

```
const App = (props) => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Hello React",
      content: "Lorem.",
    },
    {
      id: 2,
      title: "Hello Project",
      content: "Tothe.",
    },
    {
      id: 3,
      title: "Hello Blog",
      content: "Ipsum.",
    },
  ]);

  return (
    <div className="App">
      <Header />
    </div>
  );
};
```

Next you will import the Posts component at the top of `App.js` and call `<Posts>` after the `<Header>`.

Make sure to set the posts props to the posts in state:

```
import React, { useState } from "react";
import Header from "./components/Header";
import Posts from "./components/Posts";

import "./App.css";

const App = (props) => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Hello React",
      content: "Lorem.",
    },
    {
      id: 2,
      title: "Hello Project",
      content: "Tothe.",
    },
    {
      id: 3,
      title: "Hello Blog",
      content: "Ipsum.",
    },
  ]);

  return (
    <div className="App">
      <Header />
      <Posts posts={posts} />
    </div>
  );
};

export default App;
```

Now you should see the posts from state listed out to the page.

## ADD SOME BASIC CSS

To make your app a little bit nicer, add the following CSS into your App.css file:

https://github.com/zgordon/react-book/blob/master/project/step-01-listing/src/App.css

This will give you some good default styles for the rest of your project.

[IMAGE - 01-posts-from-state]

## WHAT’S NEXT?

Now that you have your posts listed out and your basic app set up, you are going to add routing and single page views to your app.

# REACT PROJECT STEP #2. ROUTING AND SINGLE CONTENT VIEWS

In order to help you handle single page views and navigate between pages on your site, let’s introduce routing. Routing allows you to use true URLs in your app (like `app.com/posts`) so that you don’t have to worry about writing all the event handlers to deal with this.

Rather than writing your routing from scratch, you will use the popular React Router library. This will save you a lot of time and introduce you to React Router, an important library in the React ecosystem.

If you followed along successfully with the last chapter, you can continue on with the same code base. Or, if you would like to start fresh, you can start from the complete step 1 files and continue from there. Make sure to run npm install if you are starting from one of the example directories.

## SETTING UP REACT ROUTER

The first step for setting up React Router is to install the package. Open your project folder, and then run the following:

```
npm install react-router-dom
```

Now start up your development environment with the following:

```
npm start
```

To use React Router, open up `App.js` and import the following:

```
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
```

This will give you the necessary components you need to set up your routing.

## ADD SLUGS TO POSTS IN STATE

React Router wants you to have true permalinks as fall backs. To create proper links, you will want to add slugs to your posts in state.

Modify the state in the App component as follows:

```
const [posts, setPosts] = useState([
  {
    id: 1,
    slug: "hello-react",
    title: "Hello React",
    content: "Lorem.",
  },
  {
    id: 2,
    slug: "hello-project",
    title: "Hello Project",
    content: "Tothe.",
  },
  {
    id: 3,
    slug: "hello-blog",
    title: "Hello Blog",
    content: "Ipsum.",
  },
]);
```

Now you can continue with your Router setup.

## ADDING ROUTER WRAPPER AND ROUTES

The next step is to come down into your App component and wrap the main App `<div>` in a `<Router>` component like this:

```
<Router>
  <div className="App">
    {/* Don't change inside here yet */}
  </div>
</Router>
```

This will identify your app as being managed by the React Router.

Now you want to only call your `<Posts />` component when the main route or root of your site is accessed. Remove your current <Posts /> component call with the following:

```
<Switch>
  <Route
    exact
    path="/"
    render={() => <Posts posts={posts} />}
  />
</Switch>
```

What this does is check to see if you are on the main route of your site (locally http://localhost:3000/). If it is, you will call the `<Posts />` component as you had previously.

Next let’s set up links around your post titles to link to a single view component.

## ADDING LINKS TO POSTS AND HEADER

Open up the Posts component and import the following at the top:

```
import { Link } from "react-router-dom";
```

React Router provides a `<Link>` component to use wherever you want links in your apps that are tied to routes or URLs.

Modify the `<h2>` in the posts map as follows:

```
<h2>
  <Link to={`/post/${post.slug}`}>{post.title}</Link>
</h2>
```

The code above creates a link to a URL like `app.com/post/slug` using the post slug you set in state in `App.js`.

If you open up your app now and click on one of the links, you should see the URL of the site change and no content display.

You will get to creating the single post view next, but first let’s add a link to the root of your site in the header.

Open `Header.js` and import `Link` again from `react-router-dom`.

Then change the list item of My Site to the following:

```
<li key="home">
  <Link to="/">My Site</Link>
</li>
```

This will give you a link to your homepage and the list of all posts.

If you now click on a post title, it will take you to a blank page. Clicking on the My Site link in the header will take you back to the homepage.

Next let’s build a single post view component.

## SINGLE POST COMPONENT

Create a new file `/src/components/Post.js` with a functional component called Post that displays an `<h1>` with the post title and a `<div>` with the post content.

It should look something like this:

```
import React from "react";

const Post = ({ post }) => (
  <article className="post container">
    <h1>{post.title}</h1>
    <div>{post.content}</div>
  </article>
);
export default Post;
```

This simple component will handle loading your single post view. Now you just have to wire the Router up to load this component when the correct URL is accessed.

## CONFIGURING SINGLE POST ROUTE

Come back into `App.js` and import `Post` from `./components/Post`.

Next, after the `<Route>` for the Posts, create a new `<Route>` like the following:

```
<Route
  path="/post/:postSlug"
  render={(props) => {
    const post = posts.find(
      (post) => post.slug === props.match.params.postSlug
    );
    return <Post post={post} />;
  }}
/>
```

This route is a little more complicated, so let’s break down what is happening.

First, you are defining the path that will load your Post component. The path is equal to `/post/` and then the post `slug`.

If this path matches, render will be called. Inside of your render setting, you are checking to find the post that matches the one in the URL. React Router automatically provides you with a `prop` of `match`, which lets you find the current slug from the URL with the following:

```
// Gets the slug from the URL w React Router
props.match.params.postSlug
```

Finally, once you get the correct post from state, load that as a prop into your `<Post />` component.

Now, when you test your site in the browser, you should be able to click on a post and see that post loaded. This gives you simple routing using the basic conventions of React Router.

## SETTING UP A 404 PAGE

So far the URLs in your site work pretty well. The homepage loads Posts, and if the URL is `/post/slug`, it will load the Post component with the specific post matching the slug in the URL.

However, what happens if someone accesses a URL that does not match a post? Currently your site will break in a number of different ways.

So let’s set up a 404 fall back page to load if an incorrect URL is accessed.

Create a new component called `NotFound.js` in the components folder. Set up the component to look something like this:

```
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <article className="not-found container">
    <h1>404!</h1>
    <p>
      Content not found.
      <Link to="/">Return to posts</Link>
    </p>
  </article>
);
export default NotFound;
```

Now import that `<NotFound />` component into `App.js`. At the end of the routes, after the Post route, add the following:

```
<Route component={NotFound} />
```

Here you see a simplified use of Route where you can just give it the name of a component to load if no props need to be passed.

You will also want to update the Post route to return NotFound if no posts match the slug accessed. Here is what the updated Post Route should look like:

```
<Route
  path="/post/:postSlug"
  render={(props) => {
    const post = posts.find(
      (post) => post.slug === props.match.params.postSlug
    );
    if (post) return <Post post={post} />;
    else return <NotFound />;
  }}
/>
```

This will ensure that if someone accesses a URL that does not exist, they will see our 404 NotFound component.

## WHAT’S NEXT?

Now that you have routing and single page views in your app, let’s move on to creating a form that will let you add new posts manually rather than having to hard code them from state.

# REACT PROJECT STEP #3. ADDING A CONTENT FORM

In this step, you are going to create a form so that you can manually add new posts to state. This begins our CRUD operations of Create, Read, Update, and Delete that are always helpful to know how to set up as part of interfaces and apps.

To do this, you will use a simple input field for the title and a rich text editor called Quill. Other rich text editor options exist, but Quill is a popular and easy to use option.

## GETTING STARTED

If you are following along with the steps of the project from the last chapters, you can continue with your same code. You can also start fresh with the `/projects/step-2/` completed files, and by running npm install, and then npm start.

## SETTING UP THE QUILL EDITOR

To get the Quill editor loaded, first install the package. To do this, run the following:

```
npm install react-quill
```

This will install the Quill editor as an easy to use React component.

## CREATING A POSTFORM COMPONENT

Create a new file in the components folder named `PostForm.js` and import the following at the top:

```
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Quill from "react-quill";

import 'react-quill/dist/quill.snow.css';
```

This will give you React, a Redirect component from React Router, and the Quill editor component. It also imports the needed CSS for the Quill editor to work properly.

Next create a PostForm component like this:

```
const PostForm = (props) => {
  return (
    <form className="container">
      <h1>Add a New Post</h1>
      {_ Title Fields Here _}
      {_ Quill Editor Here _}
      <p>
        <button type="submit">Save</button>
      </p>
    </form>
  );
}

export default PostForm;
```

You will come back and add more to this form shortly. But first, let’s add a new route to your app, as well as a link in the header that links to the post form.

## ADDING ROUTE AND LINK TO POST FORM

To start off, open the `Header.js` component and add in a new link to your post edit form.

Add the following link to after the My Site link:

```
<li>
  <Link to="/new">New Post</Link>
</li>
```

Now you need to come into your `App.js` and add a new `<Route>` for the link you created to `/new`.

After the Route to your single post view, add the following route:

```
<Route
  exact
  path="/new"
  component={PostForm}
/>
```

You will come back and edit this further at a later point, but this should let you click on “New Post” in the header and see the new post form load.

Now we will build the rest of the form.

## BUILDING THE POST EDIT FORM FIELDS

Now let’s come back into `PostForm.js` and add the form elements for the post title and content.

To start, add in `title` and `content` into your PostForm component state.

```
const PostForm = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <form className="container">
      <h1>Add a New Post</h1>
      {_ Title Fields Here _}
      {_ Quill Editor Here _}
      <p>
        <button type="submit">Save</button>
      </p>
    </form>
  );
}

export default PostForm;
```

Next add in an input field and label for the title:

```
<p>
  <label htmlFor="form-title">Title:</label>
  <br />
  <input
    id="form-title"
    value={title}
    onChange={event => setTitle(e.target.value)}
  />
</p>
```

This will let you add a title for your post. It will also update the title in state whenever the value of the field is changed.

Below that, add the code for your Quill editor. That will look like this:

```
<p>
  <label htmlFor="form-content">Content:</label>
</p>
<Quill
  onChange={(content, delta, source, editor) => {
    setContent( editor.getContents() );
  }}
/>
```

The Quill editor field is slightly more complicated to set up than the normal input field. Notice that Quill makes available a number of variables by default into the onChange event handler.

You can use the editor variable passed in along with the `getContents()` method to get the contents from the Quill editor and set it to the content in state.

Quill a data format called "Deltas" to store the editor content. Deltas are object representations of HTML and cannot be directly added to the page. Later we go back and update the single page view to display the Delta representation of our content instead of adding it directly to the page.

The Quill editor also requires CSS to display the theme we want. So at the top of the file, import the following:

```

```

The final field you need to add is the submit button. It should look something like this:

```
<p>
  <button type="submit">Save</button>
</p>
```

Now, when you click on “New Post” in the header, you should see your completed post form. The final step is to hook up the event handlers to actually save the post.

## ADDING THE POST FORM EVENT HANDLER

Within your `PostForm` component, let’s write an event handler called `handleAddNewPost()`. The first thing the handler should do is prevent the default form event from happening, which will prevent the form from submitting and refreshing the page.

Next you want to write a conditional statement to check if they have entered in a title. If there is not a title, you can display an alert message saying a title is needed.

If there is a title, then you want to create a new post object and assign it the title and content values from state. Just to test, let’s start off logging this post to the screen.

So you should have an event handler in your `PostForm` component that looks something like this for the moment:

```
const handlePostForm = (event) => {
  event.preventDefault();
  if (title) {
    const post = {
      title: title,
      content: content,
    };
    console.log(post);
  } else {
    alert("Title required");
  }
};
```

Before this will work, you need to modify your form element to call the function on submit. That should look like this:

```
<form className="container" onSubmit={handlePostForm}>
```

Now when you enter in a title and content into the form, you should see a post object logged out in the console. The title should be the text you entered, while the content will be a Delta representation of the content you entered.

## SAVING A NEW POST

Your `handlePostForm()` will currently log out your new post object. However, you want to save it back into the state for your main `App` component. You do this so it can be used throughout the entire app.

You will add the function to save a new post to state in your `<App />` component. Then you will pass it down as a prop into your `<PostForm />` component.

In your App component, create a function called `addNewPost`. This will take `post` as a parameter. Then you have to do a few minor actions, like creating a new ID and slug for your post. You will add these two properties to your post. Finally, you will add this new post to the existing list of posts.

Your final method should look something like the following:

```
const addNewPost = (post) => {
  post.id = posts.length + 1;
  post.slug = encodeURIComponent(
    post.title.toLowerCase().split(" ").join("-")
  );
  setPosts([...posts, post]);
};
```

Notice in the first line that you set a new ID by simply getting the length of the current array of posts and add one. This is not a production ready solution, but it will do for now. Later you will get your IDs set automatically via a database.

Next get a slug for your post by taking the title and replacing any spaces with a hyphen, and finally, URL encoding it. Again, this may not be 100% bullet proof, but it does a solid job getting what you need for your app here.

Finally, set the state for posts as equal to the current array of posts plus our new one. As you can see, you are using array destructuring to accomplish this.

Now that you have your addNewPost function, you can modify your new post form route to look like the following:

```
<Route
  exact
  path="/new"
  render={() => (
    <PostForm addNewPost={addNewPost} />
  )}
/>
```

With your `addNewPost` function passed into your `PostForm` component as a prop, you can come back into `PostForm.js` and call this function from your `handlePostForm` function.

First, destructure `addNewPost` from props:

```
const PostForm = ({ addNewPost }) => {
```

So your `handlePostForm` should now look like this:

```
const handlePostForm = (event) => {
  event.preventDefault();
  if (title) {
    const post = {
      title: title,
      content: content,
    };
    addNewPost(post);
  } else {
    alert("Title required");
  }
};
```

Now, if you fill out the form and press submit, nothing on the page changes. But, if after submitting the form, you click on “My Site” to show all of the posts, you will see that the post has been added.

## REDIRECTING FORM AFTER SUBMIT

With the app you are building, when someone submits the form, you want to redirect back to the home page so they can see the new post listed.

You will accomplish this using a React Router `<Redirect />` component and a value in state called `saved` that you set to `false` by default and then switch to `true` after the form has been submitted.

To start, add a value for saved to state and set it to false by default:

```
const PostForm = ({ addNewPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [saved, setSaved] = useState(false);
```

Now, after you call `addNewPost(post)` in your `handlePostForm` handler, you want to also set the state of saved to true:

```
setSaved(true);
```

The final step in this approach is to set a conditional statement inside your render method. If saved is `true`, redirect back home, and if not, return your form.

```
if (saved === true) {
  return <Redirect to="/" />;
}
return (
  // Leave return unchanged
)
```

This gives you a pattern where you have a value in state set to `false` until the form gets submitted. Then, once the form is submitted, the value switches to `false` and the `<Redirect />` component automatically gets called sending the user back to the homepage.

This completes your new post form, but you still need to get the Deltas from the Quill editor to display in the single Post component.

## DISPLAYING DELTAS IN SINGLE POST COMPONENT

For help displaying deltas, go ahead and stop your production server and import the following library:

```
npm install quill-delta-to-html
```

Then start your server back up again with `npm start`.

Next go into your `Post.js` file and import the following right below importing React:

```
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";
```

Then modify the Post component to the following:

```
const Post = ({ post }) => {
  const converter = new QuillDeltaToHtmlConverter(
    post.content.ops,
    {}
  );
  const contentHTML = converter.convert();

  return (
    <article  className="post container">
      <h1>{post.title}</h1>
      <div
        className="content"
        dangerouslySetInnerHTML={{
          __html: contentHTML
        }}
      />
    </article>
  );
};
```

Here you are passing your Delta post content into `QuillDeltaToHtmlConverter()`, then you need to call `.convert()` on this content. This will give you HTML in `contentHTML`.

When displaying HTML from a variable into a React app, you have to use a special property called `dangerouslySetInnerHTML`.

So rather than having something like this:

```
<div>
  {contentHTML}
</div>
```

You actually have to do something like this:

```
<div
  dangerouslySetInnerHTML={( () =&;gt; ({
    __html:  contentHTML
  }))()}
/>
```

This is to remind you that you are doing a potentially dangerous action of letting raw HTML run on the page.

However, with these modifications to your Post component, you can now display Deltas from your Quill editor.

With this complete, your last step will be to set your initial state of posts in `App.js` to an empty array and add all of your posts manually via your form.

## WHAT’S NEXT?

The next major step for your project is to add the ability to edit and delete your posts. However, first you are going to add the ability to display messages when you have saved, updated, or deleted your content.

So let’s take a look at how to add flash messages to your project next.

# REACT PROJECT STEP #4. ADDING FLASH MESSAGES

Flash Messages in an app let a user know an action has taken place. In traditional apps with page refreshes, flash messages would be available after an action was submitted even if it caused a page refresh.

In your single page app design, your flash messages will appear for a few seconds and then disappear. You will use updates to state and setTimeout calls in order to do so.

## GETTING STARTED

If you have successfully followed along with the previous steps, you can continue with the same code.

If you would like to start fresh, you can use the completed files from the last step, `run npm install`, and then `npm start`.

## THE MESSAGE COMPONENT

Your message component will contain a few predetermined messages that you can display by updating the state in your main App component. You will also use a simple timer and some CSS to hide the message after it has displayed a few moments.

To start, create a new `Message.js` file in the components directory. Import React and then set up a functional component called `Message` that destructures `type` from props.

You also want a `messages` object in your component that has the various messages you can display. Then we will display the appropriate message based on the prop passed.

Here is what the completed component will look like:

```
import React from "react";

const Message = ({ type }) => {
  const messages = {
    saved: "Post has been saved!",
    updated: "Post has been updated!",
    deleted: "Post has been deleted."
  };
  return (
    <div className={`App-message ${type}`}>
      <p className="container">
        <strong>{messages[type]}</strong>
      </p>
    </div>
  );
};

export default Message;
```

You can see here that you pass in a prop called `type` with a value of `saved`, `updated`, or `deleted`. This will determine what message displays. You can later add additional messages using the same pattern as above.

Add the `type` prop as a class in the wrapper div for styling purposes. Then display the specific message you want using the bracket format of calling object properties.

If you have not seen the `messages[type]` pattern before , it is how you can call an object property when the name of the property is a variable rather than something we can hard code.

Now that you have your message component created, let’s look at how to integrate it into your app.

## CONDITIONALLY RENDERING MESSAGES

At the top of your `App.js` file, import the `Message` component.

Then, in the App component, add `message` to state with a default value of `null`.

```
const [message, setMessage] = useState(null);
```

Now you can write some conditional code to only render the Message component if `message` is not equal to null.

Come down into the App return code and add the following code right under the `<Header />`:

```
{message && <Message type={message} />}
```

This will cause the Message component to render only if message is not equal to `null`.

Next you will display a saved message when you add a new post.

## Displaying the Saved Message

To display a message when a post has saved, you will create a custom function that sets the message in state and then sets it back to null after a few moments.

Before `addNewPost`, create a new function called `setFlashMessage` that looks like this:

```
const setFlashMessage = (message) => {
  setMessage(message)
  setTimeout(() => {
    setMessage(null);
  }, 1600);
};
```

This function will take the message we want to display and add it to state. Then `1.6` seconds later it will set the value back to `null`, causing the <Message />` component to unmount.

Now look for where you call `setPosts()` in `addNewPost()`. Right after that, call `setFlashMessage()` and pass it the parameter of `saved`.

```
const addNewPost = (post) => {
  post.id = posts.length + 1;
  post.slug = encodeURIComponent(
    post.title.toLowerCase().split(" ").join("-")
  );
  setPosts([...posts, post]);
  setFlashMessage(`saved`);
};
```

This will cause your saved message to display and then disappear.

## THE FINAL CODE

If you get stuck along the way, or would like to see the completed code, you can access it via the course repo under `/projects/step-04-messages`.

## WHAT’S NEXT?

Now that you have messages set up and working in your app, let’s move on to looking at how to edit and delete posts.

# REACT PROJECT STEP #5. UPDATING CONTENT

In the last chapter, you looked at how to add flash messages into your app. Now let’s turn our attention back to working with updating posts once they have been added.

This will involve a few steps. First, you want to add an “Edit” link to each of your posts. Then, when you click on the Edit link, it should redirect to the form and load the post into the form.

Finally, clicking save in the edit form will save the updated post back to your App state and then redirect you back to view all posts. An “updated” message should also display.

## GETTING STARTED

If you have successfully followed along with the previous steps, you can continue with the same code.

If you would like to start fresh, you can use the completed files from the last step, `run npm install`, and then `npm start`.

## ADDING EDIT LINK TO POSTS

First, open your `Posts.js` component.

After the `<h2>` with a link to the post, add the following code:

```
<h2>
  <Link to={`/post/${post.slug}`}>{post.title}</Link>
</h2>
<p>
  <Link to={`/edit/${post.slug}`}>Edit</Link>
</p>
```

This will give you a link very similar to the link to view a single post, except it will go to a new route: `edit/post-slug`.

Now you need to create this new route in your main App component.

## ADDING EDIT ROUTE

Inside of the `App.js file`, come down to the <Route> for the new post form. After that route, add a new route as follows:

```
<Route
  path="/edit/:postSlug"
  render={(props) => {
    const post = posts.find(
      (post) => post.slug === props.match.params.postSlug
    );
    if (post) {
      return <PostForm post={post} />;
    } else {
      return <Redirect to="/" />;
    }
  }}
/>
```

Let’s break down what is happening here.

First, you set the path to `/edit/:postSlug`. This will load when someone clicks on a post edit link, which we added the slug to as well.

Then, on the Route render method, you want to get the slug from the URL using `props.match.params.postSlug`, which React Router provides.

Next you do a simple check to see if that post exists. If that post does exist, you will load the `<PostForm />`. If the post does not exist, someone likely tried to visit an edit link for a post that does not exist and you will just redirect back to the homepage to prevent any errors.

However, if you click on your edit link now, you will have a few problems.

First, you need to modify your `PostForm` component to load the post object for editing. Then you need to pass an event handler into the form responsible for updating the post in the App state.

Let’s start with writing the function to update your modified post.

## THE `updatePost` FUNCTION

Inside your App component, you already have an `addNewPost()` function. Right after that, you want to add an updatePost function that looks something like this:

```
const updatePost = (post) => {
  post.slug = getNewSlugFromTitle(post.title);
  const index = posts.findIndex((p) => p.id === post.id);
  const oldPosts = posts.slice(0, index).concat(posts.slice(index + 1));
  const updatedPosts = [...oldPosts, post].sort((a, b) => a.id - b.id);
  setPosts(updatedPosts);
  setFlashMessage(`updated`);
};
```

There is nothing complicated React wise going on here, but there is a bit of vanilla JavaScript that is worth unpacking.

First, you need to take the following code from your `addNewPost()` function and break it out into its own function called `getNewSlugFromTitle()`.

So find the following code in your `addNewPost` function:

```
post.slug = encodeURIComponent(
  post.title.toLowerCase().split(" ").join("-")
);
```

Replace that code with the following line:

```
post.slug = this.getNewSlugFromTitle(post.title);
```

And right before the `addNewPost()` function, create the following function:

```
const getNewSlugFromTitle = (title) =>
  encodeURIComponent(title.toLowerCase().split(" ").join("-"));
```

Now you can call this function in your `addNewPost()` and `updatePost()` functions and save duplicating the code.

The next bit of code you see in your `updatePost()` function will find the index for the first post that has the same slug that you have passed in the URL.

```
const index = posts.findIndex((p) => p.id === post.id);
```

Since we already have `post` as a parameter passed into the `updatePost()` function, we refer to a single post here as `p` instead of `post` to prevent overriding the value of the post passed in originally as a parameter.

You then use that `index` to remove the post you just edited from the list of posts in state.

```
const oldPosts = posts.slice(0, index).concat(posts.slice(index + 1));
```

Then add the old posts and the updated post into a new array and sort it by ID so the edited post remains in it's original place in the post listings.

```
const updatedPosts = [...oldPosts, post].sort((a, b) => a.id - b.id);
```

Finally, set the posts in state equal to your new updated lists of posts. (You are also setting an updated message to display).

```
setPosts(updatedPosts);
setFlashMessage(`updated`);
```

This pattern of finding an object within an array and making edits to it is not uncommon in JavaScript, so you may need to write code like this in the future. Just remember, most of this code is not React specific, but rather plain old vanilla JavaScript.

Now that your `updatePost()` function is complete, let’s pass it as a prop into your `PostForm` component in your edit post route.

Come down into your Route for your edit post form. Then add the following prop:

```
<Route
  path="/edit/:postSlug"
  render={(props) => {
    const post = posts.find(
      (post) => post.slug === props.match.params.postSlug
    );
    if (post) {
      return <PostForm updatePost={updatePost} post={post} />;
    } else {
      return <Redirect to="/" />;
    }
  }}
/>
```

Now, when you click to edit a post, the `PostForm` will receive the post to update as well as the function to call to make the update.

## PASSING AN EMPTY POST INTO NEW POST FORM

If your `PostForm` receives a post object when you are editing but no post when you are adding a new post, it will add some unnecessary complexity to the component.

To simplify things, we can pass in an empty post object into the `PostForm` when you are adding a new post. Then the PostForm component can always expect to receive a post to edit.

Find the Route for your new post form and modify it to pass in an empty post object like so:

```
<Route
  exact
  path="/new"
  render={() => (
    <PostForm
      addNewPost={addNewPost}
      post={{ id: 0, slug: "", title: "", content: "" }}
    />
  )}
/>
```

This addition brings up an interesting React related point. If a component does not know what props it will receive, it requires additional conditional logic. If a component can always rely on receiving specific props, less conditional logic is necessary within the component. Neither approach is necessarily correct, but in general it is nice to have simpler components when possible.

## LOADING THE POST INTO PostForm

Now your `PostForm` component will always receive a post as a prop. When acting as a new post form, it will receive an empty post object. When acting as an edit form, it will receive the post to edit.

In both cases, you can use the same form component to add new posts or edit existing ones.

Open the file for the `PostForm`.

First, make the following changes to the props passed into the component.

```
const PostForm = ({ post: propsPost, addNewPost, updatePost }) => {
```

An important note here that you are renaming the `post` passed in as `propsPost` since we will also have a `post` value in state. The props value will reflect the original value of the post and the `post` in state will reflect the latest post value based on any changes made.

We will also need to update the default value of the `post` in state to receive it's default values from the `propsPost` passed. We can do that using object desctructuring like this:

```
const [post, setPost] = useState({ ...propsPost });
```

Next set default values on your form elements and modify the onChange handles, since you modified the format of your state.

Find the input field for the post title and change it to the following:

```
<input
  defaultValue={post.title}
  id="form-title"
  value={post.title}
  onChange={(event) =>
    setPost({
      ...post,
      title: event.target.value,
    })
  }
/>
```

Here you get the title from state and set it as the `defaultValue` for your input field.

In the `onChange` method, when we you the state of post, first destructure all of the properties from the post in state. Then override the post.title with value from your form.

You have to do this because there is no way to set just one property of an object in state. This destructuring pattern is common in React, so you may have to do this in other projects as well.

The modifications to the Quill editor component are similar, but do not require a value property to be set.

Make the following changes to the Quill component onChange method:

```
<Quill
  defaultValue={post.content}
  onChange={(content, delta, source, editor) => {
    setPost({
      ...post,
      content: editor.getContents(),
    });
  }}
/>
```

You should now have an empty post loaded into the `PostForm` component when it is used as a new post form. Likewise, you should have the post to edit loaded into the form when the component is being used as an edit form.

While this seems to work, there is one potential problem here that has to deal with setting state from props in React.

## SETTING STATE FROM PROPS

Setting state from props in React is a handy method to get an initial value of state from props, but it has a major problem.

Setting state from props will only happen the first time the component is loaded. If the props change in the future, those new prop values will not be set to state.

To demonstrate this problem, do the following:

- Add a new post
- Click to edit the post
- Click on “New Post”

You will see that when you click “New Post”, it still displays the values of the post you wanted to edit.

While we can use a class based component and the `componentDidUpdate()` lifecycle hook, we are going to do something similar using `useEffect()` and `useRef()`.

To start, make sure you have `useEffect` and `useRef` imported from React.

Then add the following code to your component after you setup the state.

```
const prevPostRef = useRef();
useEffect(() => {
  prevPostRef.current = post;
}, [post]);
const prevPost = prevPostRef.current;
```

What this does is setup a reference called `prevPostRef` that will get assigned the value of post, whenever the value of post changes. However, the assignment of `prevPostRef.current` to the value of `prevPost` only happens on initial load of the component, not every time post changes in state.

So effectively, `prevPost` in this example is similar to the `prevProps` parameter we get with the `componentDidUpdate()` lifecycle hook.

Now we can use a second `useEffect` to check to see if the value of `prevPost.id` is different from the `propsPost.id`. This would only happen if the user is editing a post and then clicks on "New Post."

When this happens, we know that the have navigated from editing a post to writing a new one and the `<PostForm />` component has been rerended with new props passed in containing an empty post.

Go ahead and add the following code beneath the `useEffect` code you added above:

```
const quillRef = React.useRef();
useEffect(() => {
  if (prevPost && quillRef.current) {
    if (propsPost.id !== prevPost.id) {
      setPost({ ...propsPost });
      quillRef.current.getEditor().setContents(``);
    }
  }
}, [prevPost, propsPost]);
```

First you will notice that we are setting up another reference. This reference is referring to the Quill editor component. We need a reference to the Quill editor because the editor contains the methods `getEditor().setContents()` that are necessary to dynamically update the Quill editor. If this was just a textarea or an input field we would not need these references.

Then we call `useEffect()` and set it up with dependencies to only run when `prevPost` or `propsPost` are changed.

Inside of the `useEffect()` hook you run two conditional checks. First, make sure that `prevPost` and `quillRef.current` actually exist and have values. Then you check to see if the ID from the post in props is the same as it was last time the component was rendered.

If these values are not the same it means that someone has navigated from editing an existing post to adding a new one, in which case you set the post state object equal to that of the new `propsPost` value and clear the Quill editor with the custom methods it provides.

The final component to make this work is to come down the Quill editor component and assign it's `ref` prop equal to `quillRef`:

```
<Quill
  ref={quillRef}
  defaultValue={post.content}
  onChange={(content, delta, source, editor) => {
    setPost({
      ...post,
      content: editor.getContents(),
    });
  }}
/>
```

We have now resolved the issue of clearing the form when navigating from editing a post to adding a new one. We have also seen some examples of how `useRef` can work together with `useEffect`.

From here we just have one final step to do.

## MODIFYING THE HANDLEPOSTFORM HANDLER

Now that you have your form loading properly, let’s write your last little bit of code that will determine whether to call `addNewPost()` or `updatePost()`.

Inside of your `handlePostForm()`, add a simple conditional check to see if `updatePost` is passed down in props. If it is, then call `updatePost()`, and if not, call `addNewPost()`.

Here is what your modified `handlePostForm()` should look like now:

```
const handlePostForm = (event) => {
  event.preventDefault();
  if (post.title) {
    if (updatePost) {
      updatePost(post);
    } else {
      addNewPost(post);
    }
    setSaved(true);
  } else {
    alert("Title required");
  }
};
```

And there you have it. You have modified a single form component to work for both adding new posts and editing existing ones.

## THE FINAL CODE

If you got stuck along the way, or would just like to look over the final, completed code, you can access the completed code here:

https://github.com/zgordon/react-book/tree/master/project/step-05-update

## WHAT’S NEXT?

Now that you have the ability to add and edit posts, let’s look at how to delete posts next. This will complete your core CRUD functionality involving posts in state.

Then you can look at how to make your state persistent with local storage and a remote database.

# REACT PROJECT STEP #6. DELETING CONTENT

You’ve now come to the end of your CRUD setup for your app. In this step, you will look at how to add a delete post link to your list of posts. This link will handle removing a post from state.

Unlike adding and editing posts, you will not actually need a route to handle deleting posts. Instead, you can use a simple `onClick` event handler.

However, similar to the add and edit functionality, you will place the function for actually deleting a post from state in the App component where your main state is handled.

## GETTING STARTED

If you have successfully followed along with the previous steps, you can continue with the same code.

If you would like to start fresh, you can use the completed files from the last step, run npm install, and then npm start.

## CREATING THE detelePost FUNCTION

Start off in the main App component. Scroll down to right after the `updatePost` function.

Add a `deletePost` function that takes `post` as a parameter and then checks a `window.confirm` modal to verify the user wants to delete the post. It will look something like this:

```
const deletePost = (post) => {
  if (window.confirm("Delete this post?")) {
    // Code goes here
  }
};
```

Inside of this, filter through the posts in state to get all of the posts that do not have the id of the post you want to delete:

```
const updatedPosts = posts.filter((p) => p.id !== post.id);
```

Then update the state with these filtered posts and set a deleted message to appear.

The final code will look something like this:

```
const deletePost = (post) => {
  if (window.confirm("Delete this post?")) {
    const updatedPosts = posts.filter((p) => p.id !== post.id);
    setPosts(updatedPosts);
    setFlashMessage(`deleted`);
  }
};
```

Now pass down `deletePost` into your `Posts` component and call it directly from there, where you have access to the post you want to delete.

Come down into the Route that calls the `<Posts />` component and pass in deletePost like this:

```
<Route
  exact
  path="/"
  render={() => <Posts posts={posts} deletePost={deletePost} />}
/>
```

Now you can call this function from within your post listing component.

## ADDING THE DELETE POST LINK

As mentioned, you will create a link in your `Posts` component. This will go next to the "Edit" link that will call `deletePost`.

However, you will not actually use an anchor tag `<a>` element for this. Instead, you will use a button styled as a link.

React suggests that you do not use links unless they can actually link somewhere. In your app, you are using the React Router `<Link>` components when you want to create links somewhere.

Your delete link does not actually go anywhere. You could create a route just to handle deleting your post, but this is not necessary.

What you really want is an action to take place, but you want to have the interface for calling the action look like a link. In these cases, React suggests use buttons styled as links.

In the CSS you received, buttons will receive similar styling to links when they have a`linkLink` class added:

```
button.linkLike {
  background:inherit;
  border: none;
  color: #26738D;
  font-size: inherit;
  text-decoration: underline;
}
button.linkLike:hover {
  cursor: pointer;
}
```

Open the `Posts.js` file and add the following inside the `<p>` tag containing the Edit link:

```
<p>
  <Link to={`/edit/${post.slug}`}>Edit</Link>
  {" | "}
  <button
    className="linkLike"
    onClick={() => deletePost(post)}
  >
    Delete
  </button>
</p>
```

The first thing you see here is an interesting oddity about adding extra spaces inside JSX. You need to put them inside of a JavaScript string, which in turn gets wrapped in curly braces `{" | "}`. If you just used the pipe character `|` on its own, you would not see any spaces appear before and after it, even if you left spaces in your source code.

Next you see your button with the `linkLike` class added and an `onClick` event handler that directly calls `deletePost`. Since you already have access to the `post` via props, you can pass it directly.

Now you should see a button styled as a link that appears next to the "Edit" link.

When you click on the "Delete" button, a confirm window pops up in the browser. This is an easy safeguard to make sure that if someone did not mean to delete that post, when they click cancel or no, the post will not be deleted. If they click confirm, the conditional check you wrote earlier will return `true`, and the post should be deleted. You should also see a deleted message appear.

## FINAL CODE

As with all the steps, if you got stuck along the way, or would like to just look over the final code for this step, you can access it here:

https://github.com/zgordon/react-book/tree/master/project/step-06-delete

## WHAT’S NEXT?

You have finally completed your basic CRUD operations! However, saving everything in state like you have done is fragile, and you have probably grown tired of having to keep adding new posts each time the page gets refreshed.

So, over the course of the remaining steps, we will explore ways to make your state persistent. You’ll accomplish this using local storage and a database. First, let’s look at how to easily add local storage support for your state. You have already done something like this in a practice exercise, so it should seem familiar.

# REACT PROJECT STEP #7. MAINTAINING PERSISTENT STATE WITH LOCAL STORAGE

As you have noticed, the state for your app resets every time the page refreshes. In this chapter, you will look at a simple solution to help make your state stay persistent between page loads (and even closing and re-opening the browser).

Rather than manually writing the code for saving your state in local storage, you will use the React Storage Hooks package. This is similar to the package we used in our exercises, but designed to work with React hooks instead of with class based components.

## GETTING SETUP

If you have been successfully coding along with the past project steps, you can simply continue with the same code base.

Or, if you would like to start fresh and follow along, you can grab the completed files from the last step, run npm install, and then npm start.

## SETTING UP LOCAL STORAGE

To start, you want to install the React Storage Hooks package. Make sure your React development server is stopped and then run the following:

```
npm install react-storage-hooks
```

This will get you the package. Then, in your `App.js` file, add the following import right after you import from React Router:

```
import { useStorageState } from "react-storage-hooks";
```

Completing the configuration is quite simple, especially since the only state you need to make persistent is `posts` in the main App component state.

To complete the set up, come down to where you set the state for posts:

```
const [posts, setPosts] = useState([]);
```

Change this to the following:

```
const [posts, setPosts] = useStorageState(localStorage, `state-posts`, []);
```

Notice that you are now using `useStorageState()` instead of `useState()`. The first parameter you pass is `localStorage` which tells our app to save the value to local storage each time the state is updated.

Next you pass the parameter of `state-posts`. This will be the key for our local storage entry.

Finally we pass in the default value we want for posts, which is an empty array.

Now, when you add a new post and refresh the page, or even close the tab and then access the page again, you will see the post still present.

## FINAL CODE

If you have any problems with this step, or would just like to look over the final code, you can find it here:

https://github.com/zgordon/react-book/tree/master/project/step-07-localstorage

## WHAT’S NEXT?

Saving your data to local storage is handy, but your app still has a few major limitations that make it not quite ready for launch.

First, anyone can add a post. It would be a good idea to add some authentication to your app so that you only let authorized users edit content.

Also, every new visitor to the site will see no posts loaded, since they are all saved in state. You will need a way to save your posts so that anyone accessing your sites will see a live view of what posts are published.

To solve both of these problems, you will use the Firebase platform from Google, which includes both authentication and real time databases.

# REACT PROJECT STEP #8. AUTHENTICATING WITH A FIREBASE DATABASE

This will be a major step in your application. You are going to set up user authentication for your app. The user authentication will accept an email and password. Then it will check to see if it matches any users you have set up.

This way you can hide the New Post link from the header, and the Edit and Delete options from your Posts, if a user has not logged in to the site yet.

Rather than build all of this, you will use the Google Firebase platform. Along with a lot of other features, Firebase includes an interface to manage users. In addition, it has ready to use functions to handle each step of the authentication process.

# GETTING STARTED

To get started, you can either use your code from the previous step, or you can start with the completed files from the last step available in the course repo here:

https://github.com/zgordon/react-book/tree/master/project/step-07-localstorage

## SETTING UP A FIREBASE PROJECT

To begin, you will need a free Firebase account. Head over to https://firebase.google.com and sign up for a free account.

Once you have logged in, you will see an option to start a new project. Give your project a name like “React Blog Demo.” You may also have to accept some terms and conditions. Once you do, click to create the new project.

After Firebase has created your new project, you can continue to the project dashboard.

Under Develop, go to Authentication and click to Set up sign-in method. Edit the Email/Password Sign-in method to enable it, and then click save.

Finally, click on the Users tab under Authentication and Add a user. Enter in your own email and a secure password since you will ultimately launch your site live to a production server.

## CONNECTING FIREBASE TO REACT

As you can see, setting up Firebase for authentication is quite simple. Connecting your React app to Firebase includes a few more steps.

First, you want to create a file in your app that will save the basic information you need to connect to Firebase. None of this information is particularly private or secure, so you do not have to worry about it being bundled with your client side JavaScript.

Note that in general, you want to make sure any authentication methods you use with React in the browser do not accidentally make any secure information public.

To get started, make sure your development server is stopped and import the firebase package from NPM.

```
npm install firebase
```

Restart your server, and then in the `src` folder of your project, add a new file `firebase.js`. Import the following at the top of the file:

```
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
```

This will import a few things. First, you get the main firebase library needed to initialize anything working with Firebase. Then you import the authentication and database libraries specifically.

Below the imports, add the following empty configuration object, firebase initialization, and exporting of firebase:

```
const config = {};
firebase.initializeApp(config);
export default firebase;
```

Before you can go any further, you need to get the specific configurations for the Firebase project you just created.

In your Firebase project Dashboard, you should see a gear icon next to Project Overview that will let you access your Project settings.

There you should see a web icon like `</>`, similar to this:

[USE SAME IMAGE FROM THE BOOK HERE]

This will give you a panel with your Firebase settings:

Now you want to take all of the properties from that `config` that Firebase gives you and copy and paste them into your `firebase.js` file.

The values for your configuration will be different, but your final code should look something like this:

```
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyBabj4fYHwUxZgB4pru-nmBXM1BEIyszEw",
  authDomain: "react-explained-blog-demo.firebaseapp.com",
  databaseURL: "https://react-explained-blog-demo.firebaseio.com",
  projectId: "react-explained-blog-demo",
  storageBucket: "react-explained-blog-demo.appspot.com",
  messagingSenderId: "432332576101"
};
firebase.initializeApp(config);
export default firebase;

```

You will have to set up your `config` to include the configurations specifically for your project. The configurations above will not work for you. This is just meant as an example of what your final `firebase.js` file should look like.

With your Firebase project set up, a user added, and your `firebase.js` configuration file complete, you can build a Login form and Logout button that you hook into Firebase and your own App state.

## CREATING A LOGIN COMPONENT

Create a new file `src/components/Login.js` with a component called `Login`.

You will want to have state for the email and password, as well as an event handler to handle the form submission.

Your initial `Login.js` file should look like this:

```
import React, { useState } from "react";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(email, password);
  };

  return (
    <form className="container" name="login" onSubmit={handleLogin}>
    </form>
  );
};
export default Login;
```

You can see here the `email` and `password` set to empty strings by default. Then your `handleLogin` function is called when the login form submits.

Now let’s add in labels and input fields to let the user enter in a username and password. There is nothing particularly special about this React code below, and it should make sense to you at this point.

```
<form className="container" name="login" onSubmit={handleLogin}>
  <p>
    <label htmlFor="email">Email:</label>
    <input
      type="email"
      onChange={(event) => setEmail(event.target.value)}
    />
  </p>
  <p>
    <label htmlFor="password">Password:</label>
    <input
      type="password"
      onChange={(event) => setPassword(event.target.value)}
    />
  </p>
</form>
```

Finally, you can add a submit button to your form. You will do one special little thing with this and set the button to disabled until there is a value for both the `email` and `password`. You can do this using the disabled button property.

Place your button right before the closing form tag:

```
  <p>
    <button type="submit" disabled={!email && !password}>
      Login
    </button>
  </p>
</form>
```

This component should now log out the email and password to the console on form submission. But you have no way to access your Login form.

So let’s go back into your App component and add a Route for `/login` that loads your login form. You will also add a login link to your header to make it easy to access.

## ADDING ROUTE AND LINK FOR LOGIN

Back in the `App.js` file, import your `Login` component at the top of the file.

Then add a Route with an exact path of `/login` right before your Route to the new post form.

You can start off for now with a very simple Route like this:

```
<Route
  exact
  path="/login"
  component={Login}
/>
```

You will come back later and add to this, but for now, let’s just add a link to the login page in your `Header` component.

Inside of `src/components/Header.js`, add a login link to the end of the list of links:

```
<li>
  <Link to="/login">Login</Link>
</li>
```

You may notice that now the New Post and Login links appear in the menu. Obviously this will have to change, but for the moment, let’s just test that you can access the login page and log out the `email` and `password` from the form.

Click on the Login link in your browser, and then open the web inspector. Enter in an email and password, and then click "Login." Check the email and username log to the console to test you have everything.

Now you can move on to making the actual firebase authentication call to check if the email and password match any that you set up in your Firebase project dashboard.

## AUTHENTICATING WITH FIREBASE VIA EMAIL AND PASSWORD

Authenticating with Firebase is actually a pretty simple process. In your `App.js` file, you want to first import the firebase file you set up, like so:

```
import firebase from "./firebase";
```

Then you want to create a new function inside of your App component called `onLogin()` that accepts two parameters: `email` and `password`. Inside of this, you will handle the firebase authentication and then pass `onLogin()` down to your `Login` component as a prop to be called there.

To authenticate with Firebase, first call `firebase.auth()`. This will give you access to a number of different methods for authentication, including `signInWithEmailAndPassword()`, which takes an email and password and returns a promise with the authenticated user or an error statement of what went wrong.

Here is what a simple onLogin function would look like:

```
const onLogin = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => console.log("Logged in")
    .catch(error => console.error(error));
};
```

Let’s finish wiring this up by passing `onLogin` down into the `Login` component in your Routes.

```
<Route
  exact
  path="/login"
  render={() =>
    <Login onLogin={onLogin} />
  }
/>
```

Now, within your `Login` component, destructure `onLogin` from props.

Then inside of the `handleLogin` function you wrote previously, you can call `onLogin` with the `email` and `password` from the form.

Here is what your updated `handleLogin` function will now look like:

```
const handleLogin = event => {
  event.preventDefault();
  onLogin(email, password);
};
```

This will take the `email` and `password` the user submits and pass them back up into `signInWithEmailAndPassword()`.

A note here is that the `email` and `password` you enter to authenticate must match the `email` and `password` you set up in Firebase when setting up the project.

Now, logging in to the site should authenticate you and log out “Logged in” to the console. But you do not have a way to remember that the user is authenticated.

Next you need to add to state a way to keep track of whether a user has logged in already or not.

## ADDING USER TO STATE

Let’s add a new object to your App state called `user` with a default value of an empty object. We will also use `useStorageState()` to make sure whether the user is authenticated is saved to local storage.

```
const [user, setUser] = useStorageState(localStorage, "state-user", {});
```

Now, inside of your `onLogin` function, we can do the following when a user logs in succesfully.

```
const onLogin = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((response) => {
      setUser({
        email: response.user["email"],
        isAuthenticated: true,
      });
    })
    .catch((error) => console.error(error));
};
```

With this information in state, you can add some conditional statements throughout your app to hide certain functionality if a user is not authenticated.

Then you will also go back and create a Logout link in the header as well.

Although we will not use `user.email` anywhere in our app, you will often need to save user data in your state, so this is meant as an example of how to begin to get user fields from Firebase authentication.

## CHECKING FOR AUTHENTICATION THROUGHOUT APP

In the next few steps, you are going to go back through your app and make the following changes:

- Hide the Login link if authenticated
- Show the New Post link only if authenticated
- Show the Edit and Delete links only if authenticated
- Redirect protected Routes to “/login” if not authenticated
- Redirect login Route to “/” if authenticated

This will give your app a better flow, based on whether a user has logged in or not. This will also protect actions that you only want authenticated users to perform.

## ADDING USER TO CONTEXT

Since we will need to access this user data in a range of places, it makes a good use case for setting up a context for user.

Create a new file called `src/context/UserContext.js` and add the following:

```
import { createContext } from "react";

const UserContext = createContext({
  email: ``,
  isAuthenticated: false,
});
export default UserContext;
```

Notice that we are setting default values for our user. We are doing this so that if we check for `user.isAuthenticated` when the user is not logged in we will not get an error.

If user was an empty object and we checked for `user.isAuthenticated` in our code it would return an error that this is not defined.

Now, in the `App` component, import in the `UserContect` before you import your components.

```
import UserContext from "./context/UserContext";
```

Then setup a `<UserContext.Provider>` component inside of `<Router>` so that the `UserContext` is available to all the routes. For the value setup an object that includes both `user` from state and `onLogin()`:

```
<UserContext.Provider value={{ user, onLogin }}>
```

Make sure to close the provider right before the closing `</Router>` tag.

Now you will refactor the necessary components to check for if the user is authenticated using `UserContext`.

## REFACTORING THE HEADER

To start, open your `Header.js` component and import `useContext` from React as well as the `UserContext`.

```
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
```

Now, in the Header component itself, write a conditional check to see if the user has authenticated:

```
const Header = (props) => {
  const { user, onLogout } = useContext(UserContext);

  return (
    <header className="App-header">
      <ul className="container">
        <li>
          <Link to="/">My Site</Link>
        </li>
        {user.isAuthenticated ? (
          <li>
            <Link to="/new">New Post</Link>
          </li>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </header>
  );
};
```

When you view the site now, you should see the Login link if not authenticated, and the New Post link if you are.

## REFACTORING LOGIN COMPONENT

Rather than passing `onLogin` as props down into the `Login` component, we can use context instead.

First, remove the `onLogin` prop from being passed into the `/login` route:

```
<Route
  exact
  path="/login"
  render={() =>
    <Login onLogin={onLogin} />
  }
/>
```

Then, import `useContext` and `UserContext` into `Login.js`.

Next you will destructure `onLogin` from `UserContext` inside of the component:

```
const Login = (props) => {
  const { onLogin } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
```

Since the function name has not changed, only the way you access it, you do not need to modify `handleLogin` or anything else in the component.

## REFACTORING EDIT AND DELETE LINKS

Now that you have updated your header navigation, let’s turn our attention to the Edit and Delete links in your Posts component.

First, make sure to import `useContext` and `UserContext` to the `Posts.js` file.

Then destructure the `user` object from `UserContext`. Use `user.isAuthenticated` to only display the edit and delete options if the user is logged into the site.

```
{user.isAuthenticated && (
  <p>
    <Link to={`/edit/${post.slug}`}>Edit</Link>
    {" | "}
    <button className="linkLike" onClick={() => deletePost(post)}>
      Delete
    </button>
  </p>
)}
```

When you test your app now, you should see the Edit and Delete Button elements only visible if the user is authenticated.

## REDIRECT ROUTES BASED ON ISAUTHENTICATED

The next thing you want to do is add some conditional code to protect certain routes and make sure that others, like the “/login” route are only accessibly under the correct conditions.

Here is what you are going to do:

- Redirect “/login” to “/” if the user is authenticated
- Redirect “/new” to “/login” if not authenticated
- Redirect “/edit/post-slug” to “/login” if not authenticated

There are several ways you can handle this. You can pass user.isAuthenticated into the components called via these routes and add conditional logic there telling a user to log in to access that page.

Or you can add conditional logic in the Route render() method and prevent the protected component from ever loading. There is a further option to create your own `AuthenticatedRoute` compoent.

For this project, we are going to go with the conditional statements in our Route render functions, but each could be valid in certain instances based on the design of your app.

Let’s start off coming down into the `/login` route in your app and only make it accessible if the user has not authenticated, which makes sense. You add this extra layer of protection because even though the Login link is not accessible when authenticated, the path itself still is.

```
<Route
  exact
  path="/login"
  render={() =>
    !user.isAuthenticated ? <Login /> : <Redirect to="/" />
  }
/>
```

You can see here, in the updated code above, that if the user is not authenticated, you will load the Login component. You also see that if a user has already authenticated, you will redirect them back to the homepage.

In your next update, you want to come down into your `/new` route, which should only be accessible if the user is authenticated. Your update in the `/new` route will actually look like the opposite of the example above.

```
<Route
  exact
  path="/new"
  render={() =>
    user.isAuthenticated ? (
      <PostForm
        addNewPost={addNewPost}
        post={{ key: null, slug: "", title: "", content: "" }}
      />
    ) : (
      <Redirect to="/login" />
    )
  }
/>
```

Here you are only loading the `<PostForm />` component if the user is authenticated.

The update for your edit form route will look very similar to the new post. The exception is that you already had a conditional in the edit post route checking to make sure the post you were trying to edit actually existed.

So, in the update to your `/edit/:postSlug` route, include checking to see if the post exists. Also include the state of isAuthenticated.

```
<Route
  path="/edit/:postSlug"
  render={(props) => {
    const post = posts.find(
      (post) => post.slug === props.match.params.postSlug
    );
    if (post) {
      if (user.isAuthenticated) {
        return <PostForm updatePost={updatePost} post={post} />;
      } else {
        return <Redirect to="/login" />;
      }
    } else {
      return <Redirect to="/" />;
    }
  }}
/>
```

You can see that you first check to see if a post exists. Then you load the `<PostForm />` if the post exists and the user is authenticated. If the post exists and the user is not authenticated, you redirect them to the Login page. Finally, if no post exists, then you redirect them to the homepage.

Now you have your protected path working. If someone is on the add new post or edit a post page and clicks Logout, they will be redirected to the appropriate place.

## WRITING AN ONLOGOUT FUNCTION

You now have a clear difference in your app between being logged in and logged out. Let’s complete the process now with a Logout link to terminate your authentication with Firebase and update the state of `user.isAuthenticated` back to `false`.

You will start off in your App component, adding an `onLogout` function right after your `onLogin` function.

The `onLogout` function will call a special `firebase.auth()` method called `signOut()`, which will automatically stop the current user’s authentication with Firebase.

It looks like this in action:

```
const onLogout = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      setUser({ isAuthenticated: false });
    })
    .catch((error) => console.error(error));
};
```

You can see here that after Firebase signs the user out, you are able to set `user.isAuthenticated` back to false.

Note when we pass the user object to `setUser` with only `isAuthenticated`, there will be no value of `user.email`. This is fine in this case, but it is important to know that passing an object with a single property into `setUser` does not just update that property, it overrides the entire current `user` object in state to just have that one property.

With this set up, you can now add `onLogout` to `UserContext` and call the function directly from within your Header.

```
<Router>
  <UserContext.Provider value={{ user, onLogin, onLogout }}>
    <div className="App">
      <Header />
```

With this function written and added to context, let’s look at how to create the Logout link.

## CREATING A LOGOUT LINK

Actually, you are going to create a Logout button and style it as a link. The reason is similar to the Delete button you created earlier.

Semantically, you want an action to occur (logging out). However, you don’t actually have a page you need to send the user to in order for you to execute this action and update your app accordingly.

So, in your `Header.js` file, get `onLogout` from context and add a logout button like so:

```
const Header = (props) => {
  const { user, onLogout } = useContext(UserContext);

  return (
    <header className="App-header">
      <ul className="container">
        <li>
          <Link to="/">My Site</Link>
        </li>
        {user.isAuthenticated ? (
          <>
            <li>
              <Link to="/new">New Post</Link>
            </li>
            <li>
              <button
                className="linkLike"
                onClick={(event) => {
                  event.preventDefault();
                  onLogout();
                }}
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </header>
  );
};
```

Note that you had to add a Fragment wrapper around the New Post and Logout list item because this expression must return a single React element, not two.

You now have authentication set up in your app. You accomplished this using Firebase, component state and context.

While this is a pretty solid workflow, and Firebase is certainly a great choice for production React projects, there still are a few things you can do to further lock down your App.

## Disabling React Developer Tools

The React Developer Tools browser extension allows you to explore your React apps in the browser. It also allows you to even make changes to the state of your app.

This can present a bit of a problem since a savy user could manually change the state of `user.isAuthenticated` to true in an attempt to spoof your app. Now, luckily they will not be able to add, edit, or delete anything since just changing the state of your app does not authenticate the user.

However, it is possible to prevent React Developer Tools from working on your site with the following snippet of code:

```
<script>
if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ ===  'object') {
__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function() {};
}
</script>
```

This should be placed in the `/public/index.html` file before the link to the `manifest.json` file.

If adding extra layers of security to prevent a user from messing with your React app too much appeals to you, remember, you only want to add this code when you go to build your production for shipping to production. React Developer Tools is a handy tool for React app, and one you should explore a bit more as you’re building your React Apps, if you haven’t already.

However, ultimately, your add, edit, and delete functions require true authentication with firebase, so your app is not necessarily at risk with React Developer Tools enabled in production.

## USING SSL IN DEVELOPMENT

Another good general security practice is that you should try to use SSL across not just your production and staging environments, but also for your local development environment.

This is especially true if your local development needs to make a request to third party APIs (as does your app).

Create React App will easily let you start your development server using https rather than http by setting an HTTPS setting to true.

If you are running Linux, you will call what you see below:

```
HTTPS=true npm start
```

Notice that this is the same as your npm start command, but you just added `HTTPS=true` before it.

It is also important to note that Create React App will use a self signed certificate, so most modern browsers will display a warning asking if you want to trust this site. It is fine to trust this. The process for trusting self signed certificates is a bit more complex, and not always worth the extra work, but you can now trust that your development server will run on https, which is what you want.

You do not necessarily need to use https with every single project, but it is a good idea when dealing with APIs or external data sources.

## FINAL CODE

You did a lot in this chapter, and it might not be a bad idea to look over the final code if you got stuck along the way, or if you want to just see everything up and running.

You can access the completed code for this chapter here:

https://github.com/zgordon/react-book/tree/master/project/step-08-authentication

## WHAT’S NEXT?

Although you have authenticated with Firebase, all of your posts are still only saving to state.

So let’s take a look at how to go about connecting our state to the Firebase database to keep it persistent from session to session.

# REACT PROJECT STEP #9. CRUD AND LIVE SYNCING WITH FIREBASE

You are now at the final step of building your project. In this chapter, you are going to connect your posts to the Firebase database.

Since authentication is already set up, you do not have to worry about connecting to Firebase.

However, you will need to modify a few things in your app in order to get everything working:

- Update `addNewPost()` to push to Firebase
- Update `updatePost()` to work with Firebase
- Update `deletePost()` to remove from Firebase
- Add `useEffect()` to make API call for posts from Firebase
- Change `post.id` to reference Firebase keys

Let’s go ahead and look at each one of these steps, and learn some things about the Firebase database API along the way.

## GETTING STARTED

To get started, you can either use your code from the previous step, or you can start with the completed files from the last step available in the course repo here:

https://github.com/zgordon/react-book/tree/master/project/step-08-authentication

## SWITCHING FROM IDS TO FIREBASE KEYS

When you work with Firebase, it can automatically provide you unique identifiers for your posts.

Previously, your app used post IDs based on the length of the posts array. Once you start deleting and adding new posts, it is possible with this setup to have posts with duplicate IDs, which defeats the purpose of having IDs.

The first change you want to make to your app is to remove reference to IDs and replace them with reference to Firebase keys.

To start, come down into the `/new` route in your App component and modify this line:

```
post={{ id: 0, slug: "", title: "", content: "" }}
```

And change it to reference a null key instead:

```
post={{ key: null, slug: "", title: "", content: "" }}
```

Next come into the `src/components/PostForm.js` file, and in the `useEffect`, change the reference from id to key:

```
useEffect(() => {
  if (prevPost && quillRef.current) {
    if (propsPost.key !== prevPost.key) {
      setPost({ ...propsPost });
      quillRef.current.getEditor().setContents(``);
    }
  }
}, [prevPost, propsPost]);
```

Technically, within your App, you could refer to `key` as `ID`, but I think it makes more sense to use key as a reference name in your app since that is what Firebase calls it.

What these changes so far have done is prepare you for when you modify your add, edit, and delete functions. Each of these functions will need to reference the Firebase post key. Now you will have either the correct post key when you need it, or you will have a null post key for new posts – and Firebase can generate one for us.

Next let’s look at modifying your `addNewPost()` function to save your posts to Firebase.

## ADDING NEW POSTS TO FIREBASE DATABASE

In this section, you will tackle modifying your `addNewPost()` function in your App component to save posts to Firebase rather than state.

You will still be able to sync your posts from the Firebase database to your App state, but you do not need to do it inside your `addNewPost()` anymore. You will come back to syncing Firebase posts to state shortly. For now you can focus on just saving to Firebase.

The first thing you need to know is how to reference your posts in the Firebase database.

You can do that with the following code:

```
const postsRef = firebase.database().ref("posts");
```

This will give you access to your main project database, and within that, a subset of data stored under `posts`. A single Firebase database can actually store different subsets of data. For example, you could also have something like the following in an imagined project:

```
const pagesRef = firebase.database().ref("pages");
const eventsRef = firebase.database().ref("events");
const commentsRef = firebase.database().ref("comments");
```

So, once you have reference to your `posts` in Firebase, which is currently empty, you have access to several built in methods to do things with this data.

To add content to the posts database, you can call `.push()`, which will push your post object to the `posts` array in Firebase.

Here is what your updated `addNewPost()` function will look like:

```
const addNewPost = (post) => {
  const postsRef = firebase.database().ref("posts");
  post.slug = getNewSlugFromTitle(post.title);
  delete post.key;
  postsRef.push(post);
  setFlashMessage(`saved`);
};
```

You can see you set up your posts ref in Firebase, create a slug for your post, delete the null post key you had set up for new posts, and then finally, call `.push(post)`.

You also remove the updating of posts in state. Since Firebase is a "real time" database, when you load your posts from Firebase later in this chapter, your posts will automatically update on your site whenever a change is made to the data in Firebase.

So now, if you log in to your site and add a new post, you should see that post show up in your Firebase database console.

Log in to Firebase and click into your project. Then find Database in the navigation, and you should see your new post there.

However, your new post is not yet showing up in your app itself. So, now that you have posts saved in Firebase, let’s look at how to display them in your app.

## DISPLAYING REAL TIME POSTS FROM FIREBASE

Firebase is a "real time" database. That means that it has the functionality built in to display a live version of posts in your app. If a post is added, edited, or deleted via the Firebase API or console, then your app will automatically be updated as well.

You will set up this live link between Firebase and your app in a `useEffect()` hook in your App component.

To start, you will add `useEffect()` and set up your posts reference.

```
useEffect(() => {
  const postsRef = firebase.database().ref("posts");
});
```

Now that you have access to your posts `ref`, you can call the `.on()` method Firebase gives you for a real time sync with your data. The `.on()` method gives you what Firebase calls a snapshot of your data that contains an updated reference to your posts.

```
useEffect(() => {
  const postsRef = firebase.database().ref("posts");
  postsRef.on("value", (snapshot) => {
    const posts = snapshot.val();
  });
});
```

Now you have access to your posts in Firebase. You can add them to your state and they will keep their live sync with Firebase.

What you will do is create a new empty posts array and then loop through the Firebase posts and add them to your new array. Finally, you will add that new array to state.

```
useEffect(() => {
  const postsRef = firebase.database().ref("posts");
  postsRef.on("value", (snapshot) => {
    const posts = snapshot.val();
    const newStatePosts = [];
    for (let post in posts) {
      newStatePosts.push({
        key: post,
        slug: posts[post].slug,
        title: posts[post].title,
        content: posts[post].content,
      });
    }
    setPosts(newStatePosts);
  });
}, [setPosts]);
```

One important thing to point out here is that when you first get each post from the snapshot, what you actually have is the post key.

So let’s look at this line found above:

```
key: post
```

You are assigning `post` from Firebase, which is actually the key, to `post.key` in your state. Then, to access a specific post object, you use the following bracket object reference:

```
posts[post]
```

If you were to just do a direct mapping of posts from the snapshot into your state, you would not actually get what you were expecting and your app would break.

The great thing about these updates you have made is that if you make a change to any of the posts in Firebase, those changes will automatically be reflected on the site.

Notice that we are also setting a dependency of `setPosts`, which is not going to change, causing the `useEffect()` to only execute on page load.

To test this, log into your app and add a new post. The post should display on the homepage.

Now go into Firebase > Your Project > Database, and you should see that post. Modify the title of the post within Firebase. Then come back into your app and you should see those changes reflected.

The same would be true if you were to delete this post in Firebase or add a new post. It should now make sense why you don’t need to update state when you add a new post to Firebase. Firebase will automatically update your snapshot of posts in your app whenever changes are made.

To continue with the process, let’s look next at how to modify your `updatePost()` function so that you can edit Firebase posts within your app.

## UPDATE THE UPDATEPOST() FUNCTION

Now that you have new posts saving into Firebase, let’s look at how to edit these Firebase posts within your `updatePost()` function in your App component.

To do this, you need to know that you can get a specific post in your Firebase database by adding the post key to your post reference lookup.

```
const postRef = firebase.database().ref("posts/" + post.key);
```

Then you can call the `.update()` method that Firebase gives you and identify what you want to update from that post.

Here is what your modified `updatePost()` function will look like once it is integrated with Firebase:

```
const updatePost = (post) => {
  const postRef = firebase.database().ref("posts/" + post.key);
  postRef.update({
    slug: getNewSlugFromTitle(post.title),
    title: post.title,
    content: post.content,
  });
  setFlashMessage(`updated`);
};
```

Once again, you do not need to update your posts in state since they will automatically receive these changes automatically.

There should not really be anything confusing about what you have done here. Go ahead and test this out in your app.

Log in, create a new post, edit that post and see that the changes are reflected both in the app and in the Firebase database dashboard.

Now you just have a final step of updating your `deletePost()` function to delete posts from Firebase rather than directly from state.

## UPDATING DELETEPOSTS() FUNCTION

Find the `deletePost()` function in the App component.

Inside of the `window.confirm` check, you will first find the post you want to delete with the following:

```
const postRef = firebase.database().ref("posts/" + post.key);
```

Then you can simply call the `.remove()` method Firebase gives you to remove items based on their key.

Here is what your updated `deletePost()` method will look like:

```
const deletePost = (post) => {
  if (window.confirm("Delete this post?")) {
    const postRef = firebase.database().ref("posts/" + post.key);
    postRef.remove();
    setFlashMessage(`deleted`);
  }
};
```

Once again, because of your live database sync, you do not need to remove the post from state here. You can simply tell Firebase to delete the post and your app and state will automatically receive the update that a post has been deleted.

## FINAL CODE

You have now fully integrated your app with Firebase. The authentication works, and rather than adding, updating and deleting posts in state, you are updating your Firebase database and letting the changes be live updated automatically in your app.

If you got stuck along the way, or just want to look over the final code, you can find it here:

## WHAT’S NEXT?

You could continue to build out your app with additional features, like pages, comments, or the ability to register a user from your site. But for now, let’s call your project done and focus next on how to push a completed app to production.

# REACT PROJECT STEP #10. DEPLOYING THE PROJECT

In the final step here, you will look at how to deploy your React app live with a hosting account.

There are many hosting options for React apps like yours. Technically there aren’t many server requirements. This is because your final code to deploy will all be HTML, CSS, and client side JavaScript.

However, there are several hosting providers that allow you to easily push to your staging or production environments from the command line. These are particularly appealing to React developers.

For this project, you will use netlify.com for hosting. The main reason for this is that they offer free hosting plans. They also have a great number of other features that make them a popular hosting provider for React developers.

## GETTING STARTED

To get started, you can either use your code from the previous step, or you can start with the completed files from the last step available in the course repo here:

https://github.com/zgordon/react-book/tree/master/project/step-09-database

If you are using the code from the last step in the link above, make sure to run npm install before proceeding with further steps.

## BUILDING YOUR APP FOR PRODUCTION

The first thing to remember is that Create React App offers a build command that will bundle your app and get it ready for production.

Before you push your site to Netlify, let’s create a build version of your app.

Open your project directory and run the following:

```
npm run build
```

This will create a build folder with all of your bundled JavaScript, CSS, and HTML.

If you have already installed the Serve package in the Create React App chapter and practice exercises, you should be able to run the following command to see a local version of what you are going to push to production.

If you have not already installed the Serve package, go ahead and run the following:

```
npm install -g serve
```

Once this is done, or if you have already installed Serve, go ahead and launch your build on a local server with the following command:

```
serve -s build
```

You now see a production ready version of your app running on a local server. Hopefully your app functions properly. There should not be any difference in functionality between this version of your app and the one you get when you run npm start.

Go ahead and stop your build server with `ctl + C`.

This build version is what you want to push to production, so next let’s set up a Netlifly account.

## SET UP A NETLIFY ACCOUNT

To set up a free Netlify account is quite simple. Head over to https://app.netlify.com/signup and create a free account. I like to log in via Github, but you can create an account using the format best for you.

## INSTALLING THE NETLIFY COMMAND LINE UTILITY

Now you can install the Netlify command line tool. In your project directory, run the following:

```
npm install netlify-cli -g
```

This will give you a global install of the command line tools for pushing to Netlify servers.

## A TEST DEPLOY OF YOUR SITE TO NETLIFY

Before you push directly to production, let’s look at “staging,” a testing feature netlify offers.

Run the following command:

```
netlify deploy

This will launch your browser to connect to your Netlify account. Once you have granted permission for your terminal to access your netlify account, you can come back into the terminal.

You should see a prompt like the following:

```

You are now logged into your Netlify account!
Run netlify status for account details
To see all available commands run: netlify help
This folder isn't linked to a site yet
? What would you like to do?
❯ ⇄ Link this directory to an existing site

- Create & configure a new site

Press the down arrow to highlight and select "+ Create & configure a new site".

Next you will be asked what account you would like to tie this site to. Likely you just have your own personal account you just set up to select from. Select the appropriate account and press enter.

Then enter in a name for your site like `react-explained-demo` and press enter. This will serve as the site URL, so you want to make sure the name is URL friendly.

Finally, you need to tell it what to deploy from your project. You want to enter in `build` so that it will only deploy your build directory and not your entire project, including your un-compiled source code. Type `build` and hit enter.

It should now prompt you with a test Live Draft URL to check. Use this to test that everything looks correct.

You can now go back and make changes to your app if necessary and run npm run build and netlify deploy again to retest everything.

Or, if everything looks good, you can go ahead and push straight to production.

## PUSHING TO PRODUCTION ON NETLIFY

Once you make sure everything looks correct, you can add the `--prod` flag to the `netlify deploy` command to skip the testing link.

Run the following command to push directly to production:

```
netlify deploy --prod
```

Once again, you will have to tell it the path to deploy. Type `build` again and hit enter.

You should now get the Live URL of your site, which you can visit to see your site live.

## PUSHING FUTURE UPDATES

In the future, if you need to make changes to your app, you can do so as you have done throughout all the last steps.

Run `npm start` to enter your development environment, and when you are done, run `npm build` followed by `netlify deploy` or `netlify deploy -- prod`.

You can easily repeat this process whenever you need to make updates to your app.

## WHAT’S NEXT?

There is a lot more to hosting with Netlify, and I encourage you to check out their site and some of their resources.

There is also a lot more you could do to your app to improve it. However, at this point we have build a production application with CRUD functionality, database integration as well as route functionality.

# TAKING REACT FURTHER

## A REVIEW OF WHAT WE’VE LEARNED

In this book, we have learned many of the foundations of the React user interface library.

We started off with a review of some helpful JavaScript and development tools.

We then looked at the how Elements and Components work in React. We looked at how to write JSX in our React apps. We also looked at how we can use Create React App for easily spinning up and maintaining React apps.

Then we got into some of the most important React concepts: props, state and the component lifecycle.

From there we explored context for making data available throughout a component tree and hooks for using state, context and the lifecycle in functional components.

Finally, we built an entire app from scratch with React, learned how to integrate with the Firebase Real Time Database, and push our app live to production with Netlify hosting.

## NEXT STEPS FOR LEARNING

From here, I would suggest you go out and start trying to build an app of your own.

It is less important what you build and more important that you build something. In trying to build projects with React on your own, you will hit walls that help you more deeply understand how to architecture code with React.

Remember, there is often more than one way to build something with React.

When you get stuck with how to do something, try searching around for answers. Sites like Stack Exchange, blogs on Medium, and just the web in general have tons of resources on how to solve specific problems and explain React concepts in different ways than we have here.

However, it is essential you now apply what you have learned to a project of your own.

## MORE ADVANCED REACT TOPICS

This book should serve as a solid foundation for working with React. However, there is certainly more you could learn.

Here are a few more advanced React topics that would be worth exploring once you feel you have a good understanding of the basics we have covered so far in this book.

Styled Components is an alternative way to applying CSS in React that involves placing your styles in your JavaScript rather than in a separate CSS file, like we did in our project.

Higher Order Components are special components that take a component in, populate it with data, and return a new data. A common place you see these used is when you want to pass data from an API into a component.

Redux is a global state management library for React. Although this library is usually not necessary until you have apps with more complex data structure and functionality, it is a helpful library to learn along with React.

Server Side React can also be very helpful to learn because it will let you to render server side content with React. This way you do not have blank pages loading that require API calls in the browser to run before any data is displayed on the page.

Although these next topics are important to learn in time, it is important to make sure you firmly understand and can implement the concepts we have already covered in this book.

## APPLYING WHAT YOU LEARN

As you continue to learn React, try to apply what you learn into real world projects at work or into personal projects of your own. This will ensure that what you learn stays with you.

You may also want to access whether you are getting paid the right amount based on your skills set. It may be helpful to research what jobs or pay scales are available based on what you now know.

Also, remember, the technology landscape is always changing. Learn React well and apply it to your projects. But also keep in mind that eventually there will be new things to learn about React, and eventually something new to learn that replaces React.

However, at the time of publication (and for some time to come) React stands as one of the best choices for frontend JavaScript libraries. So, practice what you have learned and go out and create something great!
