Context in React allows you to pass data through a tree of child components without using props.

This is helpful for data that needs to be used in multiple different components.

For performance reasons you do not want to put all of your data into context. However, it can be helpful for passing global data.

Examples of common use cases for the context API include user data, UI theme, localization information.

This is not a replacement for using props. For performance reasons you want to limit your use to just working with global data and data shared among many components in a specific component tree.

## An Example of Context in Action

In this example we take user data and add it to Context at the `<App />` component so nested children can access it.

To start we create a new file: `context/user-context.js`.

```
import React from "react";

const UserContext = React.createContext();
export default UserContext;
```

We do this in it's own file so the user context can be imported to any component that needs it.

Next we will import the user context into our App component.

Our App component here is simple. It has a Login button that adds some dummy user data to state. This data is then made available to all children components using a context.

```
import React from "react";
import UserContext from "./context/user-context";

class App extends React.Component {
  state = {
    user: {}
  };

  loginUser = () => {
    this.setState({
      user: {
        id: 1,
        first: `Zac`,
        last: `Gordon`,
        username: `zgordon`
      }
    });
  };

  render() {
    return (
      <UserContext.Provider
        value={this.state.user}
      >
        <Header>
          <button onClick={this.loginUser}>
            Login
          </button>
        </Header>
        <Content />
        <Sidebar />
        <Footer />
      </UserContext.Provider>
    );
  }
}

export default App;
```

You can see first we import our UserContext.

Then inside of the App component we something new:

```
<UserContext.Provider
  value={this.state.user}
>
```

Here we setup any component nested within `<UserContext.Provider>` to have access to the user data.

We also set the value of UserContext equal to the user data in state.

This way, the value in context will get updated anytime the App user state gets updated.

Let's imagine now that we have a WelcomeUser component that displays a welcome message with the user's name and it is spread throughout our application.

We could consume the user context like this:

```
import React from "react";
import UserContext from "./context/user-context";

const WelcomeMessage = ( props ) => (
  <UserContext.Consumer>
    {( context ) => <span>Welcome {context.first}!</span>}
  </UserContext.Consumer>
);

export default WelcomeMessage;
```

Here we import our user context.

Then we use the `<UserContext.Consumer>` component wrapped around where we want to use the context data.

You can see the syntax for consuming context data requires us to pass a function:

```
<UserContext.Consumer>
  {( context ) => <span>Welcome {context.first}!</span>}
</UserContext.Consumer>
```

This could also be simplified to the following:

```
<UserContext.Consumer>
  {({ first }) => <span>Welcome {first}!</span>}
</UserContext.Consumer>
```

With the example above you can see how to setup context, a context provider, and a context consumer.

## Updating Context from a Child Component

If we want to update a value in context from a child component, we would do it in a similar way to how we update state in a child component, we pass down the function to update the data.

Here is our previous example with some revisions to the App component to let child components modify data in context.

```
import React from "react";
import UserContext from "./context/user-context";

class App extends React.Component {
  state = {
    user: {}
  };

  loginUser = () => {
    this.setState({
      user: {
        id: 1,
        first: `Zac`,
        last: `Gordon`,
        username: `zgordon`
      }
    });
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state.user,
          loginUser: this.loginUser
        }}
      >
        <Header />
        <Content />
        <Sidebar />
        <Footer />
      </UserContext.Provider>
    );
  }
}

export default App;
```

The main difference we see here is that we have added the `this.loginUser()` function to our context.

Now we could have a LoginButton component like the following with the ability to udpate the user in context.

```
import React from "react";
import UserContext from "../context/user-context";

const LoginButton = () => (
  <UserContext.Consumer>
    {({ loginUser }) => <button onClick={loginUser}>Login</button>}
  </UserContext.Consumer>
);
export default LoginButton;
```

This pattern should feel familiar to you from working with updating state via props.

## Using the `contextType` Property with Class Based Components

If you are creating a component that needs to consume a single context, you can use the `context` type property for a cleaner syntax.

Here is our LoginButton from above rewritten using contextType:

```
import React from "react";
import UserContext from "../context/user-context";

class LoginButton extends React.Component {
  static contextType = UserContext;
  render() {
    <button onClick={this.context.loginUser}>Login</button>
  }
};
export default LoginButton;
```

What we are doing here is binding the UserContext to a context property that is available in React class based components.

Some find this a more preferable syntax to using a `<Context.Consumer>` component that needs a function returned.

The downside to the `contextType` property though is that you can only assign it to one context.

## Working with Multiple Contexts

Some applications may require multiple contexts. Rather than trying to use one global context, separate your concerns into relevant and distinct contexts.

If you use a single context, any time any part of that context changes, all consumers are updated, which is likely not as performant.

In our previous example we had a user context. Now let's add to that a shopping cart context so we can see multiple contexts in action.

First we create the context file: `context/cart-context.js`

```
import React from "react";

const CartContext = React.createContext();
export default CartContext;
```

Then we will want to setup the following things in our App component:

1. Add `cart` to state as an empty array
2. Create an `addToCart` event handler
3. Setup the `<CartContent.Provider>` component and pass it `cart` and `addToCart`.

Below you can see these three things added.

```
import React from "react";
import UserContext from "./context/user-context";
import CartContext from "./context/cart-context";

class App extends React.Component {
  state = {
    user: {},
    cart: []
  };

  addToCart = item => {
    const itemIndex = this.state.cart.findIndex(
      product => product.id === item.id
    );
    if (itemIndex === -1) {
      this.setState({
        cart: [...this.state.cart, { id: item.id, quantity: 1 }]
      });
    } else {
      const cart = [...this.state.cart];
      cart[itemIndex].quantity = cart[itemIndex].quantity + 1;
      this.setState({ cart });
    }
  };

  loginUser = () => {
    this.setState({
      user: {
        id: 1,
        first: `Zac`,
        last: `Gordon`,
        username: `zgordon`
      }
    });
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state.user,
          loginUser: this.loginUser
        }}
      >
        <CartContext.Provider
          value={{ cart: this.state.cart, addToCart: this.addToCart }}
        >
          <Header />
          <Content />
          <Sidebar />
          <Footer />
        </CartContext.Provider>
      </UserContext.Provider>
    );
  }
}

export default App;
```

The add to cart function may seem a little complicated at first pass. This is because it is not just adding items to the cart, but tracking the quantity of each item added.

With this added, we have the ability for our child components to access any items in the cart and to add items to the cart.

Now, let's imagine we had a `<MiniCart />` component that needed access to both the user's name and the items in the cart:

```
import React from "react";
import UserContext from "../context/user-context";
import CartContext from "../context/cart-context";

const MiniCart = () => {
  return (
    <UserContext.Consumer>
      {({ user }) => (
        <CartContext.Consumer>
          {({ cart }) =>
            cart.map(item => {
              const product = getProductInfo(item.id);
              return (
                <>
                <h4>Cart for {user.name}</h4>
                <li key={item.id}>
                  {product.name} [{item.quantity}]
                </li>
                </>
              );
            })
          }
        </CartContext.Consumer>
      })
    </UserContext.Consumer>
  );
};

export default MiniCart;
```

What is happening here is we start with our `<UserContext.Context>` component. Inside of that we have an arrow function that receives the user context as a parameter. We are getting user from that. That function is then returning the `<CartContext.Consumer>`, which also takes a function that receives context as a parameter.

While you may want to type carefully when you are first nesting context consumer components, this will allow us to connect to multiple contexts.

## Next Up

In this chapter you learned about what purpose context serves in React apps and some instances when you might want to use it. Remember to keep your concerns separated with different contexts and don't throw everything from state into context just to avoid passing props.

Now let's practice using context in a few examples.

## Practice Exercises

1. Create a new context file called `/src/context/UserContext`. In it create and export a `UserContext` using `React.createContext()`.
2. Import `UserContext` into the App component pass the `user` from state and the `updateUser()` function to a UserContext provider component wrapping the other components in `<App />`.
3. Open the `SignUpForm` component and set the contextType to `UserContext` (make sure to import it as well). Now, replace the `user` from the component state with the use of `user` from `UserContext`. Then at the end of the `updateUser()` function, call `this.context.updateUser(user)` to update the user in context when a form field is changed.
4. Now add a new context file for `FormContext`, import it into `App.js`, and place it inside of the `UserContext` provider so that all of the other components can consumer from it. Set the value of the FormContext provider an object that includes `step` from state and `updateStep()`.
5. Finally we will configure the components that consume from `FormContext`.

- Start with the `NavBarStep` component and replace the `step` state with the step from `FormContext`.
- Next, update the `StepButton` to use the context type of `FormContext` and call `this.context.updateStep(this.props.nextStep);` inside the `handleOnClick` function.
- Then, in the `ProgressBar` component, replace the `step` from props with the `step` from `FormContext`.
- From there, convert the `WelcomeMessage` to use the user information from `UserContext` instead of from props.
- Finally, in the `SignUpForm` component, wrap the `this.currentStep()` call with the `FormContext` provider and pass `context` into `this.currentStep()` as a prop.
