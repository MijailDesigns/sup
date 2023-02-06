import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom';

const Pagination = ({input, setInput, totalPages}) => {

    // let characters = useSelector(state => state.characters)

    let history = useHistory();
    let {search} = useLocation();
    let query = new URLSearchParams(search);

    //let amountPage = Math.ceil(characters.length / 4); //5
    // let amountPage = totalPages.pages;

    const [amountPage, setAmountPage] = useState(totalPages)
    const [buttons, setButtons] = useState([amountPage])

    console.log(amountPage, buttons)

    useEffect(() => {
        setAmountPage(totalPages)
    },[totalPages])

    useEffect(() => {
        let button = []
        for (let i = 1; i < amountPage + 1; i++) {
            button.push(i)
        }
        setButtons(button)
    },[amountPage])

    
    //let amountPage = totalPages

    // setInput({
    //     ...input,
    //     [e.target.name]: e.target.value
    //   })

    const nextHandler = () => {
        const nextPage = input.page + 1;
        if (nextPage > amountPage) return;
        setInput({
            ...input,
            page: nextPage
        });
    
        query.set("page", nextPage)
        history.push({search: query.toString()})
      }
    
      const prevHandler = () => {
          const prevPage = input.page - 1;
          if (prevPage === 0) return;
          setInput({
                ...input,
                page: prevPage
              });
    
          query.set("page", prevPage)
          history.push({search: query.toString()})
      }
    
      const numHandler = (e) => {
          setInput(Number(e.target.value));
    
          query.set("page", Number(e.target.value))
          history.push({search: query.toString()})
      }

  return (
    <div>
        <button  onClick={prevHandler} style={ input === amountPage ? {display:"none"} : {display:"inline"}} >Prev</button>

        {buttons?.map((el) => {
        if(el <= input + 2 && el >= input){
            return (
            <button  value={el}  onClick={e => numHandler(e)} key={el} disabled={input === el ? true : false}>{el}</button>
            )
        }else if(el >= (input -2) && el <= input){
            return(<button value={el}  onClick={e => numHandler(e)} key={el} disabled={input === el ? true : false}>{el}</button>)
        }
        })}
      <button onClick={nextHandler} style={ input === amountPage ? {display:"none"} : {display:"inline"}}>Next</button>
    </div>
  )
}

export default Pagination