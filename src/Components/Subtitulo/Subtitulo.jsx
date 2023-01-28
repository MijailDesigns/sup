import React, { useEffect, useState } from 'react'
import style from './Subtitulo.module.css'
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom';
import { addCharacterFavorite } from '../../actions';

import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from '../../actions';
import Filter from '../Filter/Filter';

const Subtitulo = () => {

  const dispatch = useDispatch();
  const personajes = useSelector(state => state.characters)
  let history = useHistory();
  let {search} = useLocation();

  let query = new URLSearchParams(search);

  const [input, setInput] = useState({
    name: query.get("name") || "",
    status: query.get("status") || "",
    species: query.get("species") || "",
    type: query.get("type") || "",
    gender: query.get("gender") || ""
  });

  // useEffect(() => {
  //   return setInput({
  //     name: "",
  //     status: "",
  //     species: "",
  //     type: "",
  //     gender: ""
  //   })

    
  // }, [])

  useEffect(() => {
    console.log(input)
    dispatch(getCharacters(input))
  }, [input])

  
  //console.log(useHistory())
  //let query = new URLSearchParams(search);

  // let query = new URLSearchParams(search);

  // query.set("page", 1)
  //     query.set(e.target.name, e.target.value)
  //     history.push({search: query.toString()})

 function handleChange(e) {
  setInput({
    ...input,
    [e.target.name]: e.target.value
  })
  let query = new URLSearchParams(search);
  query.set(e.target.name, e.target.value)
  //name=rick&status=dead
  history.push({search: query.toString()})


 }

  return (
    <div className={style.subtitulo}>
      <h2 className={style.h2}>Subtitulo hello</h2>
      <form>
        <input onChange={handleChange} type="text" name='name' placeholder='Search by name' value={input.name} />
      </form>

      <Filter input={input} handleChange={handleChange} />

      <h2>Resultados de busqueda:</h2>


      <div className={style.container}>
        {personajes?.map(e => 
        <div key={e.id} className={style.subContainer}>
          <p>{e.name}</p>
          <img src={e.image} alt={e.name} style={{"width": "100px"}} /> 
          <Link to={`detail/${e.id}`}>ver detalle</Link>
          <button onClick={() => dispatch(addCharacterFavorite(e))}>Agregar favorito</button>
        </div>
        )}
      </div>
      
    </div>
  )
}

export default Subtitulo