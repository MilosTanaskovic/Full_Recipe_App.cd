const initState = {
    popularRecipes: null,
}

export const FetchRecipes = (state = initState, action) => {
    switch (action.type) {
        case "GET_RANDOM_POPULAR_RECIPES":
            return {
                ...state,
                popularRecipes: action.payload,
            }
    
        default:
            return state;
    }
}