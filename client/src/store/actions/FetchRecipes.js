export const getFewRandomPopularRecipes = () => {
    return (dispatch) => {
        fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_KEY}&number=9`)
            .then((response) => response.json())
            .then((result) => dispatch({
                type: "GET_RANDOM_POPULAR_RECIPES",
                payload: result
            }));
    }
}