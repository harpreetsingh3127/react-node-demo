// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import logo from './logo.svg';
import ErrorBoundary from './errorBoundary';
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



import React from 'react';
import ReactDOM from 'react-dom';
// import  Header  from './header';
// import  Footer  from './footer';
import './modify.css'
// function Header(){
//   return <h1> function header</h1> ;
// }

// class Header extends React.Component{

//   render(){
//     return <h2>This is h2</h2>
//   }
// }

// function Component(){

//   return (

//     <div>
//       <Header/>
//       <Footer/>
//     </div>

//   );
// }
 
class Statedemo extends React.Component{


  componentWillUnmount(){
    console.log("this is monunt");
  }

  constructor(props){

   super(props);

    this.state={
      empID:this.props.empID,
      RollNum:this.props.RollNum,
      userList:["user_1","user_2","user_3","user_4"]
    }

    this.onCLick=this.onCLick.bind(this);
    this.onCLickRollnum=this.onCLickRollnum.bind(this);
  }

  onCLick(){
    
    let countNumber=this.state.empID;

    this.setState({
      empID:++countNumber,
    });

  
  }

  onCLickRollnum(){
    
    let countNumberRollnum=this.state.RollNum;

    this.setState({
      RollNum:++countNumberRollnum
    });

  
  }


  render(){

    if(logo === ""){
      throw new Error("Image not found");
    }

    return (
  <>  
<ErrorBoundary>


    <h1>State Count: {this.state.empID}</h1>
    <h1>State Rollnumber: {this.state.RollNum}</h1><br/>
   <button onClick={this.onCLick}>Count</button><br/>
   <button onClick={this.onCLickRollnum}>Count Roll Number</button>

   <hr></hr>
  </ErrorBoundary>


<ErrorBoundary>

<h4>list Map data </h4>
   <ul>
     {
       this.state.userList.map((user,index)=>(
         
         <li key={index}>{user}</li>
         ))}
     </ul>
         </ErrorBoundary>

<ErrorBoundary>

<img src ={logo}/>
</ErrorBoundary>

  </>
  );
  }
}

ReactDOM.render( 

    <React.StrictMode>
  <Statedemo empID="0" RollNum="12"/>
  </React.StrictMode>,
document.getElementById('root')

);