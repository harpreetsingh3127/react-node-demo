import {BUY_BOOKS} from './bookType';

const initialState={
    numberOfBooks:0,
}

const bookReducer=(state=initialState,action)=>{

    switch (action.type) {
        case BUY_BOOKS: return{
            ...state,
            numberOfBooks:state.numberOfBooks + action.payload,
        }

        default: return state;
         
    }
}

export default bookReducer;