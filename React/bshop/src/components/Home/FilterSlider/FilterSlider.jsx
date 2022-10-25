import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import Slider from "@mui/material/Slider";
import s from "./FilterSlider.module.css";
import { setActiveRange } from "../../../store/actions/filterActions";
import { createTheme } from "@mui/material";

export const FilterSlider = (props) => {
  const theme = createTheme({
    palette:{
      primary:{
        main: "#808080",
        light: "#808080",
        dark: "#808080",
        contrastText: "#808080"
        
      },
      
      secondary: {
        main: "#80808073",
        light: "#808080",
        dark: "#808080",
        contrastText: "#808080"
      },
      rail: {
        color: 'transparent'
      }
    }
  })
  const dispatch = useDispatch();
  const [value, setvalue] = useState([props.defaultMin, props.defaultMax]);
  return (
    <div className={s.wrapper}>
      <div className={s.inputBox}>
        <input
          type="number"
          value={value[0]}
          onChange={(e) => setvalue([e.target.value, value[1]])}
          onBlur={(e) =>
            Number(e.target.value) < props.defaultMin
              ? setvalue([props.defaultMin, value[1]])
              : setvalue([e.target.value, value[1]])
          }
        />
        <input
          type="number"
          value={value[1]}
          onChange={(e) => setvalue([value[0], e.target.value])}
          onBlur={(e) =>
            Number(e.target.value) > props.defaultMax
              ? setvalue([value[0], props.defaultMax])
              : setvalue([value[0], e.target.value])
          }
        />
        <div className={`${s.btn} ${props.curentReange.min !==  value[0] || props.curentReange.max !==  value[1] ? s.btnactive: ""}`} onClick={() => dispatch(setActiveRange(value))}>
          OK
        </div>
      </div>
      <div className={s.scont}>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={(e) => setvalue(e.target.value)}
        getAriaValueText={() => `${value}`}
        min={props.defaultMin}
        max={props.defaultMax}
        size="small"
        classes={{
          thumb: s.tbs
        }}
        theme={theme}
      /></div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  defaultMax: state.filter.moneyRange.max,
  defaultMin: state.filter.moneyRange.min,
  curentReange: state.filter.activeRange,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FilterSlider);
