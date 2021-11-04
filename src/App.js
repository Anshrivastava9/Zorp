
import formJSON from './formElement.json';
import { useState, useEffect } from 'react';
import Element from './components/Element';
import { FormContext } from './FormContext';
function App() {
  const [elements, setElements] = useState(null);
  const [finalJSON,setFinalJSON] = useState({});
  const [expArray,setArr] = useState([]);
  useEffect(() => {
    setElements(formJSON.properties);

  }, [])
  
  const handleSubmit = (event) => {
     event.preventDefault();
      console.log(finalJSON);

  }
  
  useEffect(()=>{
   // console.log(expArray);
    const newfinalJSON = { ...finalJSON }
    newfinalJSON["experience"] = expArray;
    setFinalJSON(newfinalJSON);
    
  },[expArray])

  const handleChange = (label, event, obj) => {

    if(label === "Array"){
      
      const arr1 = [...expArray];
      arr1.push(obj);
     // console.log(expArray);
     // console.log(arr1,'----',obj);
      setArr(arr1);
      
    }else{

    const newfinalJSON = { ...finalJSON }
    const value = event.target.value;
    newfinalJSON[label] = value;
    setFinalJSON(newfinalJSON);

    }
    //console.log(finalJSON);
  //  console.log("handle change")
  }

  
  const fieldsArr = Object.entries(formJSON.properties).map((e) => ( { [e[0]]: e[1] } ));
  const x = ['name']
  //console.log(fieldsArr[0][x[0]].type);
  return (
    <FormContext.Provider value={{ handleChange }}>
      <div className="App container">
        
        <form >
          {fieldsArr ? fieldsArr.map((e,i) => 

              {
                const x = Object.keys(e,i);
               return <Element fieldProp = {e[x[0]]} key={i}/>
              }
          
          
          ) : null}
          <button type="submit" className="btn btn-primary" onClick={(e)=>handleSubmit(e)}>Submit</button>
        </form>

      </div>
    </FormContext.Provider>
  );
}

export default App;
