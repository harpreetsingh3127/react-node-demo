import React,{useState} from 'react'
import {buyBook} from '../redux/index';
import {connect} from 'react-redux';

function BookComponents(props) {
    const [number, setNumber] = useState(1);
    return (
        <div>
            <h1>Number of books - {props.numberOfBooks} </h1>
            <input type="number" value={number}  onChange={e=>setNumber(e.target.value)}/>
            <button onClick={()=>props.buyBook(number)}>Buy {number}  Book</button>
            
        </div>
    )
}

const mapStateToProps=(state)=>{

        return {
            numberOfBooks:state.numberOfBooks,
        }
}

const mapDispatchToProps=(dispatch)=>{

    return {
            buyBook:function(number){
                dispatch(buyBook(number));
            }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(BookComponents);