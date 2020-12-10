import API from "../../API";

const initialState = {
	result: ''
};

const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_SEARCH_RESULT':
			return {
				...state,
				result: action.result,
			}
		default:
			return state;
	}
}


export const setResultData = (searchWord) => async (dispatch) => {
  const result = await API.searchFilmsByTitle(searchWord);
  result.data.Response === "True"
    ? dispatch({
        type: "SET_SEARCH_RESULT",
        result: JSON.stringify(result.data.Search),
      })
    : dispatch({ type: "SET_SEARCH_RESULT", result: result.data.Error });
};

export default searchReducer;


