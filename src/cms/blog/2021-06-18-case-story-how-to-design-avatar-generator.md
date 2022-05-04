---
contentKey: blog
title: "Pattern for Composing React Components "
date: 2021-06-18T08:38:57.675Z
thumbnail: /img/screenshot-54-.png

tags:

- tag: "#Js"
- tag: "#React"

---


#Basic Component Relationship

Lets start with a code example:

```javascript
// inside App.js
export default function App(){
    const [counter, setCounter] = useState( 0 );

    const incrementCounter = () => setCounter( prevValue => prevValue + 1 )

    return (
        <div className="m-2 text-center">
            <Message theme="primary" message={`Counter: ${this.state.counter}`}/>

            <ActionButton theme="secondary" text="Increment"
                          callback={this.incrementCounter}/>
        </div>
    )
}

//inside Message.js
export function Message( { theme, message } ){

    return (
        <div className={`h5 bg-${theme} text-white p-2`}>
            {message}
        </div>
    )
}

//inside ActionButton.js
export const ActionButton = ( { theme, text, callback } ) => {

    return (
        <button className={` btn btn-${theme} m-2`} onClick={callback}>
            {text}
        </button>
    )
}

``` 

The above components are very simple, But they illustrate the basic relationship that underpins React philosophy: Parent
component( owners ) configure children with data props and receive notification through function props, Which triggers
an update process in case of state data change.

![Screenshot_44.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1646289179990/bwz49JB3S.png)

This pattern is easy to understand in a simple example, but its use in more complex situations can be less obvious, and
it can be hard to know how to locate and distribute the state data, props, and callbacks without duplicating code and
data.

###Using the Children Prop
React provides a special `children` prop that is used when a component needs to display content provided by its parent (
owner) component but doesn’t know what that content will be in advance. In the React documentation, it is described as
opaque because it is a property that does not tell you anything about the value it contains. This is a useful way of
reducing duplication of the component by standardizing features in that component that can be reused across an
application.

So that means Components can also be defined with nested components inside them, and they can access those children
using the `children` prop. To demonstrate, let create a `ThemeSelector` component that handles local theming.

```javascript
//inside ThemeSelector.js
export function ThemeSelector( { children } ){
    return (
        <div className="bg-dark p-2">
            <div className="bg-info p-2">
                {children} // render whatever component passed as child
            </div>
        </div>
    )
}

// inside App.js
import { ThemeSelector } from "./ThemeSelector";

export default function App(){
    //...

    return (
        <div className="m-2 text-center">
            <ThemeSelector>
                <Message theme="primary" message={`Counter: ${counter}`}/>
                <Button theme="secondary" text="Increment"
                        callback={incrementCounter}/>
            </ThemeSelector>

        </div>
    )
}

``` 

The App component provides content for the `ThemeSelector` component by defining elements between its start and end
tags. In this case `Message` and `ActionButton` components. When React processes the content rendered by the `App`
component, the content between the `ThemeSelector` tags is assigned to the `children` prop, producing the result shown:

### Adding `Props` to components received through the `children` prop.

A component can’t manipulate the content it receives from the parent directly, so to provide the components received
through the children prop with additional data or functions, the `React.Children.map` method is used in conjunction with
the `React.cloneElement` method to duplicate the child components and assign additional props.

Lets add `select` element to the content rendered by the` ThemeSelector` that updates a state and allows a user to
choose one of the theme colors provided by the Bootstrap CSS framework, which is then passed on to the container’s
children as a prop.

```javascript
export function ThemeSelector( { children } ){

    const themes = ["primary", "secondary", "success", "warning", "dark"];
    const [theme, setTheme] = useState( 'primary' )

    //handler for theme selection
    const changeTheme = ( event ) => setTheme( event.target.value );

    //iterate throughout the passed children components with map and pass the additional prop to the cloned element
    const childrenWithTheme = React.Children.map( children, child => React.cloneElement( child, { theme } ) )


    return (
        <div className="bg-dark p-2">

            <div className="form-group text-left">
                <label className="text-white">Theme:</label>
                <select className="form-control" value={theme}
                        onChange={changeTheme}>
                    {themes.map( theme => <option key={theme} value={theme}>{theme}</option> )}
                </select>
            </div>

            <div className="bg-info p-2">
                {childrenWithTheme}
            </div>
        </div>
    )
}
``` 

Because props are read-only, we can’t use the `React.Children.forEach` method to simply enumerate the child components
and assign a new property to their props object. Instead, I used the map method to enumerate the children and used
the `React.cloneElement` method to duplicate each child with an additional prop.

`React.cloneElement(c, { theme: this.state.theme})`
The `cloneElement` method accepts a child component and a props object, which is merged with the child component’s
existing props.

The result is that the props passed to the `Message` and `ActionButton` components are a combination of those defined by
the `App` component and those added using the `cloneElement` method by the `ThemeSelector` component. When you choose a
theme from the select element, an update is performed, and the selected theme is applied to the `Message`
and `ActionButton` components, as shown:

# Exploring the container and presentational patterns

There is a famous saying you hear everywhere in react community: You should avoid writing coupled components, your
component should be reusable, and maintainable! but how?

One thinking that helps me to grasp that rule is that React components typically contain a mix of ***logic*** and ***
presentation***. By *Logic* I refer to anything that is unrelated to the UI, These are API calls, data manipulation,
heavy computations, and event handlers. The *Presentation* is the part inside `render` where we create the elements to
be displayed to the UI. In React, there are simple and powerful patterns, known as **container and presentational**,
which we can apply when creating components that help us to separate those two concerns. Let's see an example:

```javascript

export default function CoolQuotes(){
    const [quote, setQuote] = useState( { quote: '...loading' } );

    useEffect( () => {
        refreshQuote()
    }, [] )

    const refreshQuote = () => {
        fetch( 'https://api.kanye.rest' )
            .then( res => res.json() )
            .then( setQuote )
    }

    return (
        <div className='rounded bg-light mt-5 p-3 mx-4'>
            <button className="btn btn-info" onClick={refreshQuote}>refresh</button>

            <p className='m-4'>
                {quote.quote}
            </p>
        </div>
    )
}




``` 

above am using a cool API by [Andrew Jazbec](https://github.com/ajzbc/kanye.rest) that serves quotes of Kanye. After the
first render we send `fetch` request to ['https://api.kanye.rest']('https://api.kanye.rest'), convert the response
to `.json()` and set the local state which then rerender the fetched data.

Now, this component does not have any problems, and it works as expected. But wouldn't it be nice to separate
the `fetch` logic from the part where the result is presented to make it clean? We will use the container and
presentational patterns to isolate the two.

The container knows everything about the logic of the component and is where the APIs are called. It also deals with
data manipulation and event handling.

The presentational component is where the UI is defined, and it receives data in the form of props from the container.
Since the presentational component is usually logic-free, we can create it as a functional, stateless component. There
are no rules that say that the presentational component must not have a state (for example, it could keep a UI state
inside it). Let's extract those two:

```javascript
// inside CoolQuoteContainer.js
export const CoolQuoteContainer = () => {
    const [quoteData, setQuoteData] = useState( { quote: '...loading' } );

    useEffect( () => {
        refreshQuote()
    }, [] )

    const refreshQuote = () => {
        fetch( 'https://api.kanye.rest' )
            .then( res => res.json() )
            .then( setQuoteData )
    }

    return <CoolQuote quote={quoteData.quote} onRefresh={refreshQuote}/>;
}


//inside CoolQuote.js
export const CoolQuote = ( { quote, onRefresh } ) => {
    return (
        <div className='rounded bg-light mt-5 p-3 mx-4'>
            <button className="btn btn-info" onClick={onRefresh}>refresh</button>
            <p className='m-4'> {quote} </p>
        </div>
    )
}

``` 

I renamed `CoolQuote` component to `CoolQuoteContainer`, this rule is not strict, but it is widely used in the React
community to append `Container` to the end of the `Container` component name and give the original name to the
presentational one.

As you can see in the preceding snippet, instead of creating the HTML elements inside the return of the container, we
just use the presentational one and pass the state (`quote` and `onRefresh`) to it.

Creating well-defined boundaries between logic and presentation not only makes
components more reusable, but also provides many other benefits like,

- We can pass a dummy or placeholder data and put it in other places that need to
  display the same data structure,
- Other developers in our team can improve the container that uses the API by adding some error-handling logic, without
  affecting its presentation.
- They can even build a temporary presentational component just to display and debug data and then replace it with the
  real presentational component when it is ready.

###What is the cue to use it?
Applying this pattern without a real reason can give us the opposite problem and make the code base less useful as it
involves the creation of more files and components. In general, the right path to follow is ***starting with a single
component and splitting it only when the logic and the presentation become too coupled*** .

In our example, we began from a single component, and we realized that we could separate the API call from the markup.
Deciding what to put in the container and what goes into the presentation is not always straightforward; the following
points should help you make that decision:

The following are the characteristics of container components:

- They are more concerned with behavior.
- They render their presentational components.
- They make API calls and manipulate data.
- They define event handlers.

The following are the characteristics of presentational components:

- They are more concerned with the visual representation.
- They render the HTML markup (or other components).
- They receive data from the parents in the form of props.
- They are often written as stateless functional components.

#Understanding HOCs( Higher Order Components )
A HOC is a function that accepts a component and returns a new component that wraps around it to enhance it or provide
additional features. `HOCs` are like *higher order functions* but in the realm of React components. While a component
transforms `props` into `UI`, a higher-order component transforms a component into another component, enhanced in some
way.

`const HoC = Component => EnhancedComponent`

Let's start with a very simple example to understand what an enhanced component looks like

###When to Use
We can use `HOCs` when we need to share functionality between many components.
Injectors can extend the functionality of a given component by passing new props to
it. Sometimes `HOCs` are used for accessing network requests, providing local storage
access, subscribing to event streams, or connecting components to an application
store. The latter was used in the Redux library to connect a component to the `Reduxstore`. These `HOCs` are often
called providers but they work basically the same way.
