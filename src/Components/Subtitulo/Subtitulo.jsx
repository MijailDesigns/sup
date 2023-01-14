import React, { useEffect, useState } from 'react'
import style from './Subtitulo.module.css'

const Subtitulo = () => {

  const [input, setInput] = useState("");
  const [errors, setErrors] = useState({});
  const [info, setInfo] = useState({});
  console.log(info)


  function validate(input) {
    let errors = {};
    if (input !== 'hola') {
      errors.name='no es correcto'
    }
    return errors
  }

  async function fetchdate(input) {
    return await fetch(`https://rickandmortyapi.com/api/character/?name=${input}`)
        .then(response => response.json()).then(data => setInfo(data));
  }

  console.log(input)

  useEffect(() => {
    return setInput("")

    
  }, [])

  useEffect(() => {
    console.log(input)
    fetchdate(input)
  }, [input])

 function handleChange(e) {
  setInput(e.target.value)
 }

  return (
    <div className={style.subtitulo}>
      <h2 className={style.h2}>Subtitulo hello</h2>
      <form>
        <input onChange={handleChange} type="text" name='name' />
      </form>

      <h2>Resultados de busqueda:</h2>


      <div className={style.container}>
        {info.results?.map(e => 
        <div className={style.subContainer}>
          <p>{e.name}</p>
          <img src={e.image} alt={e.name} style={{"width": "100px"}} /> 
        
        </div>
        )}
      </div>
      

      {errors.name && <p>{errors.name}</p>}
    </div>
  )
}

export default Subtitulo