import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getFewRandomPopularRecipes } from '../../store/actions/FetchRecipes';

const Popular = () => {
    //const [randomRecipes, setrandomRecipes] = useState([])
    const data = useSelector((state) => state.FetchRecipes.popularRecipes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFewRandomPopularRecipes());
    }, []);
    
    // useEffect(() => {
    //     getPopular();
    // }, []);

    // const getPopular = async () => {
    //     const query = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_KEY}&number=9`);
    //     const data = await query.json();
    //     setrandomRecipes(data);
    //     console.log(data);
    // };
    console.log(data);
    return (
        <section>
            Popular
        </section>
    )
}

export default Popular
