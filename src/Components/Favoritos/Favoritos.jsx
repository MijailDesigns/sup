import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import style from './Favoritos.module.css'
import { deleteFavorite } from '../../actions'

const Favoritos = props => {

    const favoritos = useSelector(state => state.favoritos);
    const dispatch = useDispatch();


  return (

    <>
        <h2>Mis Favoritos</h2>
        <div className={style.container}>
        {favoritos?.map(e => 
        <div key={e.id} className={style.subContainer}>
          <p>{e.name}</p>
          <img src={e.image} alt={e.name} style={{"width": "100px"}} /> 
          <Link to={`detail/${e.id}`}>ver detalle</Link>
          <button onClick={() => dispatch(deleteFavorite(e.id))} >Eliminar</button>
        </div>
        )}
    </div>
    </>
    
  )
}

Favoritos.propTypes = {}

export default Favoritos