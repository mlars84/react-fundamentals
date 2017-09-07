//Composing functions together in order to get the end result, which is an object
//with a pic property and a link property.
var getProfilePic = function (username) {
  return 'https://photo.fb.com/' + username
}

var getProfileLink = function (username) {
  return 'https://www.fb.com/' + username
}

var getAvatarInfo = function (username) {
  return {
    pic: getProfilePic(username),
    link: getProfileLink(username)
  }
}

getAvatarInfo('tylermcginnis')

//Component example ( in ES6 )
const ProfilePic = () => {
  return (
    <img src={'https://photo.fb.com/' + this.props.username} />
  )
}

const ProfileLink = () => {
  return (
    <a href={'https://www.fb.com/' + this.props.username}>
      {this.props.username}
    </a>
  )
}

const Avatar = () => {
  return (
    <div>
      <ProfilePic username={this.props.username} />
      <ProfileLink username={this.props.username} />
    </div>
  )
}

<Avatar username="tylermcginnis" />
