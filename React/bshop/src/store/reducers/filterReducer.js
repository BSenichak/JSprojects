import {
  ACTIVE_CATEG,
  CLEAR_CATEG,
  DISACTIVE_CATEG,
  SET_ACTIVE_RANGE,
  SET_SORTING,
} from "../actions/filterActions";

const initalState = {
  categ: [
    {
      title: "Категорія 1",
      subCat: ["Підкатегорія 1.1", "Підкатегорія 1.2", "Підкатегорія 1.3"],
    },
    {
      title: "Категорія 2",
      subCat: ["Підкатегорія 2.1", "Підкатегорія 2.2", "Підкатегорія 2.3"],
    },
    {
      title: "Категорія 3",
      subCat: ["Підкатегорія 3.1", "Підкатегорія 3.2", "Підкатегорія 3.3"],
    },
  ],
  activeCateg: [],
  moneyRange: {
    min: 35,
    max: 1500,
  },
  activeRange: {
    min: 35,
    max: 1500,
  },
  sort: 1
};

export function filterReducer(store = initalState, action) {
  switch (action.type) {
    case ACTIVE_CATEG:
      return { ...store, activeCateg: [...store.activeCateg, action.payload] };
    case DISACTIVE_CATEG:
      return {
        ...store,
        activeCateg: store.activeCateg.filter((el) => el !== action.payload),
      };
    case SET_ACTIVE_RANGE:
      return {
        ...store,
        activeRange: {min: action.payload[0],max: action.payload[1]}
      };
    case SET_SORTING:
      return {
        ...store,
        sort: action.payload
      };
    case CLEAR_CATEG:
      return {
        ...store,
        activeCateg: [],
        activeRange: [35, 1500]
      };
    default:
      return store;
  }
}
