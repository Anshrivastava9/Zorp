import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';

const Input = (props) => {
    const { handleChange } = useContext(FormContext)

    return (
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label"><b>{props.field_label}</b></label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
           
            onChange={
                event=> handleChange(props.field_label,event,{})}
            />
            <div id="emailHelp" className="form-text"></div>
        </div>
    ) 
}

export default Input
