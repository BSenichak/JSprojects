import "./App.css";
import React from "react";
import { connect } from "react-redux";
import { addNewItem, changeText, switchLamp } from "../store/actions";

export const App = (props) => {
  return (
    <div className="Wrapper">
      <div onClick={props.switchLampState}>
        Clik me to switch it: {JSON.stringify(props.lampState)}
      </div>
      <input
        type="text"
        placeholder="text"
        value={props.text}
        onChange={(event) => props.changeText(event)}
      />
      <p>{props.text}</p>
      <div
        onClick={() => {
          props.addItem(props.text);
        }}
      >
        click me to add new item
      </div>
      <div>
        {props.items.map((el) => {
          return <div>{el}</div>;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    lampState: state.lampState,
    text: state.text,
    items: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    switchLampState: () => dispatch(switchLamp()),
    changeText: (event) => dispatch(changeText(event.target.value)),
    addItem: (text) => dispatch(addNewItem(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
