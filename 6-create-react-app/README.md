## PRACTICE WITH CREATE REACT APP

Now that we have a basic understanding of what Create React Does and how to use it, let’s do some practice.

For these practice exercises you will need a generic practice folder.  Then for each exercise you will spin up a new Create React App instance from that practice folder.

### Practice Exercise #1
Inside of a practice folder call npx create-react-app exercise-1 from the command line.

Then navigate into the new folder using cd exercise-1 and run `ls`.

You should see the list of default React files outlined in section, “Setting Up Create React App,” above.

This exercise will help you establish comfort setting up a new project with Create React App.

### Practice Exercise #2
Inside of a practice folder call npx create-react-app exercise-2 from the command line.

Open up the exercise-2 directory in your code editor.

Run the command `npm start` from inside the exercise-2 directory.  Open the URL it gives you for the development server in your browser.

Then in your code editor, change the name of the h1 title in the /src/App.js file from “Welcome to React” to something else.  On save you should see the browser refresh with your new value.

This exercise will help you gain confidence starting the Create React App development server and seeing the changes to your code reflected in the browser.

### Practice Exercise #3
Inside of a practice folder call `npx create-react-app exercise-3` from the command line.

Open up the exercise-3 directory in your code editor. Then change the name of the h1 title in the /src/App.js file from “Welcome to React” to something else.

Then run npm `run build` in your project directory.  It should create a build folder.

As suggested, then run the following two commands:

```
yarn global add serve
server -s build
```

This should in turn give you a link to open up the built version of the site on a server of it’s own, different from the development server.

If you are able to complete this exercise you should feel more comfortable running the build process for getting your app ready for production.

You can now also preview this built version using it’s own little server, although doing that is completely optional.