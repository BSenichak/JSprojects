import React, { Component } from "react";
import { AiOutlineLike } from "react-icons/ai";

export class Post extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.id,
      image: this.props.img,
      message: this.props.message,
      username: this.props.username,
      likecount: this.props.likecount
    }
  }
  render() {
    return (
      <div className="post_item">
        <img
          alt="user"
          className="post_img"
          src={this.props.img}
        />
        <div className="post_text">
          <span className="post_username">{this.props.username}</span>
          <br />
          {this.props.message}
        </div>
        <div className="like_btn" onClick={ ()=>{
          this.setState({likecount: this.state.likecount + 1})
          this.props.likePost(this.state)
        }}>
          {this.state.likecount}<AiOutlineLike />
        </div>
      </div>
    );
  }
}

export default Post;
