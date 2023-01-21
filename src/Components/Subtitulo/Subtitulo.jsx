import React, { useEffect, useState } from 'react'
import style from './Subtitulo.module.css'
import { Link } from 'react-router-dom';


import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from '../../actions';
import Filter from '../Filter/Filter';

const Subtitulo = () => {

  const dispatch = useDispatch();
  const personajes = useSelector(state => state.characters)

  const [input, setInput] = useState({
    name: "",
    status: "",
    species: "",
    type: "",
    gender: ""
  });

  useEffect(() => {
    return setInput({
      name: "",
      status: "",
      species: "",
      type: "",
      gender: ""
    })

    
  }, [])

  useEffect(() => {
    console.log(input)
    dispatch(getCharacters(input))
  }, [input])

 function handleChange(e) {
  setInput({
    ...input,
    [e.target.name]: e.target.value
  })
 }

  return (
    <div className={style.subtitulo}>
      <h2 className={style.h2}>Subtitulo hello</h2>
      <form>
        <input onChange={handleChange} type="text" name='name' placeholder='Search by name' />
      </form>

      <Filter handleChange={handleChange} />

      <h2>Resultados de busqueda:</h2>


      <div className={style.container}>
        {personajes?.map(e => 
        <div className={style.subContainer}>
          <p>{e.name}</p>
          <img src={e.image} alt={e.name} style={{"width": "100px"}} /> 
          <Link to={`detail/${e.id}`}>ver detalle</Link>
        </div>
        )}
      </div>
      
    </div>
  )
}

export default Subtitulo