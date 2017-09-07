# Tyler McGinnis React-Fundamentals
[Course info](https://tylermcginnis.com/courses/react-fundamentals/)
- What does React exist? Will it make me a better developer?

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
- Inside `<Map />` component. May of some piece of state(specific location of map we're
looking at). Might need to make ajax requests in order to get more info about another
location.
- Same idea as functions
- Rather than have all of the state of our app live in the DOM, we have the individual
components manage their own state. Sets very clear boundaries.

### How do you build a large app? By building a bunch of small apps.
- See example.js
- Three components: ProfileLink, ProfilePic, Avatar. Avatar returns the UI, contains
a <div> with ProfilePic img and ProfileLink anchor tag. We're composing the first two
components into the Avatar component.
## Encapsulate all the complexity into specific components and then compose them
together to build your interface!
