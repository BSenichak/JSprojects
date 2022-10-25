import React from "react";
import { connect } from "react-redux";
import s from "./Home.module.css"
import { MdKeyboardArrowDown} from "react-icons/md"
import ListItem from "./ListItem";
import { useState } from "react";

export const FilterItem = (props) => {
  const [isOpen, setIsOpen]= useState(false)
  return (
    <div className={s.filterItem}>
      <div className={s.filterTitle} onClick={()=>setIsOpen(!isOpen)}>
        {props.categ.title}
        <MdKeyboardArrowDown className={isOpen ? s.close : s.open} />
      </div>
      <div className={`${s.filterList} ${isOpen ? s.closelist : s.openlist}`}>
        {props.categ.subCat.map((el)=>{
          return <ListItem key={el} title={el}/>
        })}
        
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FilterItem);
