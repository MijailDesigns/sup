import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getDetail } from '../actions'

const Detail = () => {
    const {id} = useParams()
    

    const dispacth = useDispatch();
    const detalle = useSelector(state => state.detail)
    console.log(detalle)
    useEffect(() => {
        dispacth(getDetail(id))
    }, [])

    const history = useHistory();


  return (
    <div>
        <h2>Detail</h2>
        <button onClick={() => history.goBack()}>Volver</button>
        <img src={detalle.image} alt={detalle.name} />
        <p>Nombre: {detalle.name}</p>
        <p>Genero: {detalle.gender}</p>
        <p>Status: {detalle.status}</p>
        <p>Species: {detalle.species}</p>
        <p>Location: {detalle.location?.name}</p>
        <p>Origin: {detalle.origin?.name}</p>
    </div>
  )
}

export default Detail