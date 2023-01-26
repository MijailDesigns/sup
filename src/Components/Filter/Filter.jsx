import React from 'react'

const Filter = ({handleChange, input}) => {



    let spec = [
        "Human",
        "Alien",
        "Humanoid",
        "Poopybutthole",
        "Mythological",
        "Unknown",
        "Animal",
        "Disease",
        "Robot",
        "Cronenberg",
        "Planet",
      ];

    let gen = ["female", "male", "genderless", "unknown"]

    let sta = ["alive", "dead", "unknown"]

  return (
    <div>
        <form>
           

            <div>
                <label>Status</label>
                <select name='status' onChange={handleChange} >
                    <option value="" >All</option>
                    {sta.map((g, index) => 
                        <option key={index}  value={g} selected={input.status === g} >{g}</option>  
                        )}
                </select>
            </div>

            <div>
                <label>Species</label>
                <select name='species' onChange={handleChange} >
                    <option value="" >All</option>
                    {spec.map((g, index) => 
                        <option key={index}  value={g} selected={input.species === g} >{g}</option>  
                        )}
                </select>
            </div>

            <div>
                <label>Gender</label>
                <select name='gender' onChange={handleChange} >
                    <option value="" >All</option>
                    {gen.map((g, index) => 
                        <option key={index}  value={g} selected={input.gender === g} >{g}</option>  
                        )}
                </select>
            </div>
            


            
        </form>
    </div>
  )
}

export default Filter