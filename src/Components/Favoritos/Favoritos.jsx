import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { Link } from 'react-router-dom'
import style from './Favoritos.module.css'
// import { deleteFavorite } from '../../actions'
import CardFav from '../CardFav/CardFav'

const Favoritos = props => {

    const favoritos = useSelector(state => state.favoritos);
    const dispatch = useDispatch();


  return (

    <>
        <h2>Mis Favoritos</h2>
        <div className={style.container}>
          {favoritos?.map(e => {
            return (<CardFav key={e.id} e={e} />)
          }
        )}
    </div>
    </>
    
  )
}

Favoritos.propTypes = {}

export default Favoritos