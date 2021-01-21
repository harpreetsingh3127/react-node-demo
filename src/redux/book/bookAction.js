import {BUY_BOOKS} from './bookType';

export const buyBook=(number=1)=>{
    return {
        type:BUY_BOOKS,
        payload:parseInt(number),
    }
}