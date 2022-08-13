import React, { Component } from "react";
import Post from "./Post";

export class Mypost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPostText: "",
      err: false,
    };
  }


  render() {
    return (
      <div>
        <p className="mypost_title">My posts</p>
        <div className="newpost">
          <textarea
            placeholder="Put your message here..."
            onChange={(e) => this.setState({ newPostText: e.target.value }, this.setState({err: false}))}
            value={this.state.newPostText}
          />
          
          <div>
            <span className="err">{this.state.err?"message must have more than one symbol":""}</span>
            
            <button
              onClick={() => {
                if (this.state.newPostText.length > 0) {
                  this.props.newPost(
                    this.state.newPostText,
                    this.props.profile.userName,
                    this.props.profile.img,
                    0
                  );
                  this.setState({ newPostText: "" });
                } else {
                  this.setState({err: true})
                }
              }}
            >
              Add post
            </button>
            <button onClick={() => this.setState({ newPostText: "" })}>
              Clear
            </button>
          </div>
        </div>
        <div className="posts">
          {this.props.postData.map((el) => {
            return (
              <Post
                key={el.id}
                message={el.message}
                username={el.username}
                img={el.image}
                likecount={el.likecount}
                likePost={this.props.likePost}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Mypost;
