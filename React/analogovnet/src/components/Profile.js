import React, { Component } from 'react'

export class Profile extends Component {
  render() {
    return (
        <div className="content">
        <img
          src="https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?cs=srgb&dl=pexels-joyston-judah-933054.jpg&fm=jpg"
          alt="gg"
          className='content-header'
        />
        <div>
          <img
            alt="gh"
            src="https://media.wired.com/photos/5954a299267cf6013d251f86/master/pass/catinbox_cally_by-helen-haden_4x31.jpg"
          />
          sescription
        </div>
        <div>
          My posts
          <div>New post</div>
          <div>
            <div>post 1</div>
            <div>post 2</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile