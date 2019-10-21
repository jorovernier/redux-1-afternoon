import {createStore} from 'redux';

const initialState = {
    name: '',
    category: '',
    authorFirst: '',
    authorLast: '',
    ingredients: [],
    instructions: [],
    recipes: []
};

export const SET_NAME = "SET_NAME";
export const SET_CAT = "SET_CAT";
export const SET_FIRST = "SET_FIRST";
export const SET_LAST = "SET_LAST";
export const SET_INGR = "SET_INGR";
export const SET_INST = "SET_INST";
export const SET_RECIPE = "SET_RECIPE";
export const CLEAR = "CLEAR";
export const REMOVE = "REMOVE";

function reducer(state = initialState, action){
    const {type,payload} = action;
    switch(type){
        case SET_NAME:
            return {...state, name: payload};
        case SET_CAT:
            return {...state, category: payload};
        case SET_FIRST:
            return {...state, authorFirst: payload};
        case SET_LAST:
            return {...state, authorLast: payload};
        case SET_INGR:
            const newIngr = [...state.ingredients, payload];
            return {...state, ingredients: newIngr};
        case SET_INST:
            const newInst = [...state.instructions, payload];
            return {...state, instructions: newInst};
        case SET_RECIPE:
            const {name, category, authorFirst, authorLast, ingredients, instructions} = state;
            const recipe = {name, category, authorFirst, authorLast, ingredients, instructions};
            const newRecipes = [...state.recipes, recipe];
            return {...state, recipes: newRecipes}
        case CLEAR:
            return {...state, name: '', category: '', authorFirst: '', authorLast: '', ingredients: [], instructions: []}
        case REMOVE:
            return {...state, recipes: [...state.recipes.slice(0, payload), ...state.recipes.slice(payload + 1)]}
        default:
            return state;
    }
}

export default createStore(reducer);