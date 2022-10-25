export const ACTIVE_CATEG = "ACTIVE_CATEG";
export const DISACTIVE_CATEG = "DISACTIVE_CATEG";
export const CLEAR_CATEG = "CLEAR_CATEG";
export const SET_ACTIVE_RANGE = "SET_ACTIVE_RANGE";
export const SET_SORTING = "SET_SORTING"

export function activeCateg(categ) {
  return {
    type: ACTIVE_CATEG,
    payload: categ,
  };
}

export function disActiveCateg(categ) {
  return {
    type: DISACTIVE_CATEG,
    payload: categ,
  };
}

export function clearCateg() {
  return {
    type: CLEAR_CATEG,
  };
}

export function setActiveRange(a) {
  return {
    type: SET_ACTIVE_RANGE,
    payload: a,
  };
}
export function setSorting(number) {
  return {
    type: SET_SORTING,
    payload: number,
  };
}
