// //Composing functions together in order to get the end result, which is an object
// //with a pic property and a link property.
// var getProfilePic = function (username) {
//   return 'https://photo.fb.com/' + username
// }
//
// var getProfileLink = function (username) {
//   return 'https://www.fb.com/' + username
// }
//
// var getAvatarInfo = function (username) {
//   return {
//     pic: getProfilePic(username),
//     link: getProfileLink(username)
//   }
// }
//
// getAvatarInfo('tylermcginnis')
//
// //Component example ( in ES6 )
// const ProfilePic = () => {
//   return (
//     <img src={'https://photo.fb.com/' + this.props.username} />
//   )
// }
//
// const ProfileLink = () => {
//   return (
//     <a href={'https://www.fb.com/' + this.props.username}>
//       {this.props.username}
//     </a>
//   )
// }
//
// const Avatar = () => {
//   return (
//     <div>
//       <ProfilePic username={this.props.username} />
//       <ProfileLink username={this.props.username} />
//     </div>
//   )
// }
//
// <Avatar username="tylermcginnis" />
//
// //Imperative (How)
// let numbers = [4,2,3,6]
// let total = 0
// for (let i = 0; i < numbers.length; i++) {
//   total += numbers[i]
// }
//
// //Declarative (What)
// let numbers2 = [4,2,3,6]
// numbers.reduce((previous, current) => {
//   return previous + current
// })
// console.log(numbers2);
//
// //Just JavaScript
// <ul>
//   {friends.map((name) => {
//     <li>
//       {name }
//     </li>
//   })}
// </ul>
//
// //React Router
// <Router>
//   <div>
//     <ul>
//       <li><Link to="/">Home</Link></li>
//       li><Link to="/">about</Link></li>
//       li><Link to="/">topics</Link></li>
//     </ul>
//
//     <Route exact path="/" component={Home} />
//     <Route exact path="/about" component={About} />
//     <Route exact path="/topics" component={Topics} />
//   </div>
// </Router>

//Write a function called double which takes in an array of numbers and returns
//a new array after doubling every item in that array. double([1,2,3]) -> [2,4,6]

let doubled = []
let numbers = [1, 2, 3, 4]

double = (numbers) => {
  console.log(numbers)
  for (let i = 0; i < numbers.length; i++) {
    return doubled.push(numbers[i] * 2)
  }
}
double(doubled)

// console.log(doubled)
