import React from "react";
import { connect, useDispatch } from "react-redux";
import s from "./Home.module.css";
import { BiCheckboxChecked, BiCheckbox } from "react-icons/bi";
import { activeCateg, disActiveCateg } from "../../store/actions/filterActions";

export const ListItem = (props) => {
  const disp = useDispatch();
  return (
    <div
      className={s.listItem}
      onClick={
        props.isActive.indexOf(props.title) !== -1
          ? () => {
              disp(disActiveCateg(props.title));
            }
          : () => {
              disp(activeCateg(props.title));
            }
      }
      style={props.isActive.indexOf(props.title) !== -1
        ?{fontWeight: 1000}:{}}
    >
      
      {props.isActive.indexOf(props.title) !== -1 ? (
        <BiCheckboxChecked />
      ) : (
        <BiCheckbox />
      )}
      {props.title}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isActive: state.filter.activeCateg,
});

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
