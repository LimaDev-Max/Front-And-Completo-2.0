import React, { useState } from 'react';



function App() {

  // Declare uma nova variável de state, a qual chamaremos de "count"

  const [count, setCount] = useState(0);
  const [nome, setNome] = useState("Joao")
  const [numeros, setarNumeros] = useState([1,2,3,4,5,6])
  const [obj, setObj] = useState({nome: 'gui',idade:28});
  return (

    <div>
      {
        numeros.map(function(val){
          return(
            <p>{val}</p>
          )
        })
      }
      
      <button onClick={() => setNome("Fabio")}>
        Click me
      </button>
    </div>
  );
}

export default App;
