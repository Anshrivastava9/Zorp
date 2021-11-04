import React,{useContext} from 'react'
import Input from './Input'
import { FormContext } from '../../FormContext';
import { useState } from 'react/cjs/react.development';


const ArrayComp = (props) => {
    const { handleChange } = useContext(FormContext)
    const field_label = props.info.title;

    const [obj,setObj] = useState({});
    const addObjs = (label,e) => {
        var newObj = {...obj};
        newObj[label] = e.target.value;
        setObj(newObj);
        
       // console.log("------------->>>>>>INS",obj);
    }
    
    const arr = Object.entries(props.fields).map((e) => ( { [e[0]]: e[1] } ))
    //console.log(arr[0])

    return (
        <>
        <h6>{props.info.title}</h6>
        <div class="border border-primary p-3">

            {arr.map((e,i)=>{
            const x = Object.keys(e);  
                
               return (
                    <>
               <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label"><b>{x[0]}</b></label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
           
            onChange={
                e=> addObjs(x[0],e)}
            />
            <div id="emailHelp" className="form-text"></div>
            </div>
            
                    </>
                )

        })}
       
        
        <button type="button" class="btn btn-dark" onClick={(event)=>handleChange("Array",event,obj)}>+</button>
        </div>
        </>
    )
}

export default ArrayComp
