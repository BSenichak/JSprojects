import "./App.css";
import Dialogs from "./components/Dialogs";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogsData: [
        {
          id: 1,
          name: "Bohdan",
          image:
            "https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg",
        },
        {
          id: 2,
          name: "Ihor",
          image:
            "https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg",
        },
        {
          id: 3,
          name: "Alex",
          image:
            "https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg",
        },
      ],
      messagesData: [
        {
          id: 1,
          username: "Bohdan",
          message:
            "https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg",
          time: "16:15",
        },
        {
          id: 2,
          username: "Ihor",
          message:
            "https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg",
          time: "16:15",
        },
        {
          id: 3,
          username: "Alex",
          message:
            "https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg",
          time: "16:15",
        },
      ],
      postData: [
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
      ],
      profile: {
        img: "https://media.wired.com/photos/5954a299267cf6013d251f86/master/pass/catinbox_cally_by-helen-haden_4x31.jpg",
        userName: "Bohdan Senichak.",
        dateOfByrgth: "15 january",
        city: "Kyiv",
        education: "KNU'22, OMK'19",
        webSite: "http://google.com",
      },
    };
    this.newPost = this.newPost.bind(this)
    this.likePost = this.likePost.bind(this)
  }
  newPost(message, userName, image, likecount) {
    let post = {
      id: this.state.postData.length + 1,
      username: userName,
      image: image,
      message: message,
      likecount: likecount,
    };
    this.setState({ postData: [ post ,...this.state.postData] });
  }

  likePost(post){
    let id = this.state.postData.findIndex(el => el.id === post.id)
    let newState = this.state.postData
    newState[id] = post;
    this.setState({postData: newState})
  }

  render() {
    return (
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="content-wrapper">
          <Routes>
            <Route
              path="/dialogs/*"
              element={
                <Dialogs
                  messagesData={this.state.messagesData}
                  dialogsData={this.state.dialogsData}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  profile={this.state.profile}
                  postData={this.state.postData}
                  newPost={this.newPost}
                  likePost={this.likePost}
                />
              }
            />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
