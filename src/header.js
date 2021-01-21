import React from "react";
import logo from "./img/vvlogo.png";



function Header(){

    const namee=" yess dynamic name harpreet singh"
    const dynamicFun=(parameter)=>{

        return "This is dynamic function "+ parameter  + ( 4*4);
    }

    const dataObj={
            StudentName:"HArpreet singh",
            StudentAge:24
    }


    
    
return (<div>

<img src={logo} />
        <h1>Dynamic data from obj : -- {"Name:  " + dataObj.StudentName + " Age: " + dataObj.StudentAge}</h1>
        <h1>Dynamic data from function: -- {dynamicFun("HArpreet singh")}</h1>
        <h1>{3*3 + namee}</h1>
        <h6 className="h6title">Sub title header</h6>
    </div>);
}

export default Header;
