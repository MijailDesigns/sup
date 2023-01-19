

  export function getCharacters(input) {
    return function(dispatch) {
      return fetch(`https://rickandmortyapi.com/api/character/?name=${input}`)
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



