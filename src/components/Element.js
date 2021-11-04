import React from 'react'
import ArrayComp from './elements/ArrayComp';
import Input from './elements/Input';
import Select from './elements/Select';
const Element = (props) => {

   // console.log(props.fieldProp.title);

    if(!!props.fieldProp.enums){
    return <Select
    
    field_label={props.fieldProp.title}
   
    field_options={props.fieldProp.enums}
    />}

    switch (props.fieldProp.type) {
        case 'string':
            return (<Input
                field_label={props.fieldProp.title}

            />)
        case 'integer':
            return (<Input
                field_label={props.fieldProp.title}
               
            />)
        
        case 'array':
            return (
                <ArrayComp fields = {props.fieldProp.items.anyOf[0].properties} info = {props.fieldProp} />
            )

        default:
            return null;
    }


}

export default Element
