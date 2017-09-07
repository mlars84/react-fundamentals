# Tyler McGinnis React-Fundamentals
[Course info](https://tylermcginnis.com/courses/react-fundamentals/)
- Why does React exist? Will it make me a better developer?

## Biggest Benefits
  - Composition
  - Unidirectional Dataflow
  - Declarative
  - Explicit Mutations
  - Just JavaScript

## Composition
- The composition of components. Allows you to take a certain functionality of a
small piece of your application and really encapsulate it into an isolated container.
```
<Slider />      <Navbar />        <Date />      <Router />
<Map />         <Datepicker />    <Header />    <Calendar />
<Avatar />      <Carousel />      <Chart />     <Icon />    
```
- Inside `<Map />` component. Maybe some piece of state(specific location on map we're
looking at). Might need to make ajax requests in order to get more info about another
location.
- Same idea as functions
- Rather than have all of the state of our app live in the DOM, we have the individual
components manage their own state. Sets very clear boundaries.

### How do you build a large app? By building a bunch of small apps.
- See example.js lines 21-44:
- Three components: ProfileLink, ProfilePic, Avatar. Avatar returns the UI, contains
a `<div>` with ProfilePic img and ProfileLink anchor tag. We're composing the first two
components into the Avatar component.
- Encapsulate all the complexity into specific components and then compose them
together to build your interface!

## Declarative
- Imperative is opposite of Declarative. When writing Imperative code, you're telling
the computer how to do something.
```
let numbers = [4,2,3,6]
let total= 0
for (let i = 0; i < total += numbers.length; i++) {
  total += numbers[i]
}
```
- With Imperative we are specifically telling the computer each step that needs to
happen in order to get the sum of the array.
- Declarative is more concerned with What we want to have happen, rather than How
we want to do it.
```
let numbers2 = [4,2,3,6]
numbers.reduce((previous, current) => {
  return previous + current
})
```
- Using `.reduce()` method and we tell it what we want to have happen. There's
some level of abstraction. All we have to specify is take the previous and add it
to the current.
### Benefits of Declarative
  - Reduce Side Effects
    - Side effect is whenever you're modifying state or mutating something pr
    making an API request.
  - Minimize Mutability
    - minimizing amount of mutating through state, makes programs more consistent.
  - More readable code
  - Less Bugs

### Is React Declarative
- For the most part because in order to update state, we need to call setState:
`<TylersBtn
  onClick={this.handleToggleHighlight}
  highlight={this.state.highlight} />`
`this.seState({
    highlight: !this.state.highlight
})`

## Unidirectional Dataflow
- Difference between static site and complex web application is that app has state/data
that it has to manage
- Main purpose of react is for managing state inside your application.
- Your UI is really just a function of your state. Your app collects the state
as your user interacts with it and as the state updates, the UI updates as well.
- In React all you need to do is worry about managing state.

## Explicit Mutations
- Whenever we want to update the state in our app, we have to call setState, which
updates the state and kicks off a re-render to update the UI.

## Just JavaScript
```
<ul>
  {friends.map((name) => {
    <li>
      {name }
    </li>
  })}
</ul>
```
- friends is an array that we are just map()-ing over and as we map() over it,
we create a list item for every name inside our friends array.

## React ecosystem
- Piecing the Puzzle
  - React
  - React Router
  - Webpack
  - Babel
  - Axios

### React Router allows us to map a specific url with a specific component
```
<Router>
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      li><Link to="/about">About</Link></li>
      li><Link to="/topics">Topics</Link></li>
    </ul>

    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/topics" component={Topics} />
  </div>
</Router>
```
- `<Route exact path=""` says if someone goes to a path, go ahead and render that
particular component.
- It's all just composing components.

### Webpack
- entry property points to index.js as the root component, which then goes and
renders a bunch of other components.
- whole purpose of webpack is that it takes entry point and all of the different files
and imports and it runs them all through transformers like babel, css-loader, etc
and outputs them into dist as index_bundle.js - It's just a code bundler

### Babel
- Babel is a code transformer. env allows us to use modern syntax and react, which
takes our JSX and transforms them to regular JS.

### Axios
- allows us to make some ajax requests.

### Intro to React Quiz
    - React's setState API is "declarative"?
      - False
    - React Components can be composed just like functions can be composed
      - True
    - The way you iterate over a list in React is with React.map?
      - False
    - Which isn't a benefit of using React?
      - Strictly typed
    - Which tool has become the most popular in the React community
      - Webpack
    - Imperative code is concerned with "How" to do a task while Declarative code is concerned with "What" task you want to have happen
      - True
    - Babel is used to bundle all of your code together
      - false (that's webpack)

##
