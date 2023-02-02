import React from 'react'
import { useState } from 'react'
import style from './CardFav.module.css'
import { Link } from 'react-router-dom'
import Modal from '../Modal/Modal'


const CardFav = ({e}) => {

    const [show, setShow] = useState(false);
    console.log(e)

  return (
        <div key={e.id} className={style.subContainer}>
            <p>{e.name}</p>
            <img src={e.image} alt={e.name} style={{"width": "100px"}} />
            <Link to={`detail/${e.id}`}>ver detalle</Link>
            <button key={e.id} onClick={() => setShow(!show)} >Eliminar</button>
            {show && <Modal show={show} setShow={setShow} id={e.id} name={e.name} />}
        </div>
  )
}

export default CardFav