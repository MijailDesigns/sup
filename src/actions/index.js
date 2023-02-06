

//   export function getCharacters(input) {
//     return function(dispatch) {
//       return fetch(`https://rickandmortyapi.com/api/character/?name=${input}`)
//         .then(response => response.json())
//         .then(json => {
//           dispatch({ type: "GET_CHARACTERS", payload: json });
//         });
//     };
//   }


export function getCharacters(input) {
        return function(dispatch) {
          return fetch(`https://rickandmortyapi.com/api/character/?page=${input.page}&name=${input.name}&status=${input.status}&species=${input.species}&type=${input.type}&gender=${input.gender}`)
            .then(response => response.json())
            .then(json => {
              dispatch({ type: "GET_CHARACTERS", payload: json });
            });
        };
      }



  export function getDetail(id) {
    return function(dispatch) {
      return fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_DETAIL", payload: json });
        });
    };
  }

export function addCharacterFavorite(payload){
    return {type: 'ADD_FAVORITE' , payload}
}

export function deleteFavorite(payload){
    return {type: 'DELETE_FAVORITE' , payload}
}




