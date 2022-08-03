import React, { Component } from "react";
import Post from "./Post";

export class Mypost extends Component {
  constructor(props) {
    super(props);
    this.postsData = [
      {
        id: 1,
        username: "Bohdan",
        image:
          "https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg",
        message: "hello durak",
        likecount: 0,
      },
      {
        id: 2,
        username: "ihor",
        image:
          "https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg",
        message: "hello durak",
        likecount: 0,
      },
      {
        id: 3,
        username: "Alex",
        image:
          "https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg",
        message: "hello durak",
        likecount: 0,
      },
    ];
  }
  render() {
    return (
      <div>
        <p className="mypost_title">My posts</p>
        <div className="newpost">
          <textarea placeholder="Put your message"></textarea>
          <div>
            <button>Add post</button>
            <button>Clear</button>
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
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Mypost;
