import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setMoviesList = ( movies ) => {
    return {
        type: actionTypes.SET_MOVIES,
        movies: movies
    }
}

export const fetchMoviesFailed = () => {
    return {
        type: actionTypes.FETCH_MOVIE_FAIL,
    };
};

export const showNextCardAccepted = () => {
    console.log('next card ACCEPTED')
    return {
        type: actionTypes.NEXT_CARD_ACCEPT,
    };
};

export const showNextCardRejected = () => {
    console.log('next card REJECTED')
    return {
        type: actionTypes.NEXT_CARD_REJECT,
    };
};

export const animateCardAccepted = () => {
    console.log('ANIMATE card accepted')
    return {
        type: actionTypes.ANIMATE_CARD_ACCEPT,
    };
};export const animateCardRejected = () => {
    console.log('ANIMATE card REJECTED')
    return {
        type: actionTypes.ANIMATE_CARD_REJECT,
    };
};
export const showNextCardandAccept = (id) => {
    const apiLink = "https://burger-a5d46.firebaseio.com/recommendation/";
    const key = id;
    const url = apiLink + key + "/accept.json";
    return dispatch => {
        dispatch (animateCardAccepted());
        axios.put( url, {choice: true})
            .then( response => {
                dispatch (showNextCardAccepted());
            } )
            .catch( error => {
                console.log( error );
            } );
    };
};

export const showNextCardandReject = (id) => {
    const apiLink = "https://burger-a5d46.firebaseio.com/recommendation/";
    const key = id;
    const url = apiLink + key + "/reject.json";
    return dispatch => {
        dispatch (animateCardRejected());
        axios.put( url, {choice: false})
            .then( response => {
                dispatch (showNextCardRejected());
            } )
            .catch( error => {
                console.log( error );
            } );
    };
};
export const initMovies = () => {
    return dispatch => {
        axios.get('https://burger-a5d46.firebase.com/Madmax.json')
            .then(response => {
            dispatch(setMoviesList(response.data));
            })
            .catch(error => {
            dispatch(fetchMoviesFailed());
            });
    };
};