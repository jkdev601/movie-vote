import { createAction, handleActions } from 'redux-actions';
import Immutable from 'immutable';
import axios from 'axios';
//Data
const data = {
        movies: [{
            id: "1",
            imageURL: "https://images-na.ssl-images-amazon.com/images/I/91jzAhhTxVL._SY445_.jpg",
            title: "The Fate of the Furious",
            summary: "Dominic i Letty spędzają miesiąc miodowy na Kubie, gdy nagle pojawia się Cipher (Charlize Theron). Kobieta okazuje się być cyberterrorystką, która wciąga Toretta w pracę dla niej.",
            score: 4.2
        },{
            id: "2",
            imageURL: "https://images-na.ssl-images-amazon.com/images/I/51Qvs9i5a%2BL.jpg",
            title: "Władca Pierścieni: Powrót króla",
            summary: "Zwieńczenie filmowej trylogii wg powieści Tolkiena. Aragorn jednoczy siły Śródziemia, szykując się do bitwy, która ma odwrócić uwagę Saurona od podążających w kierunku Góry Przeznaczenia hobbitów.",
            score: 6.3
        },{
            id: "3",
            imageURL: "https://images-na.ssl-images-amazon.com/images/I/81WIsWbdQ1L._SY445_.jpg",
            title: "Catch Me If You Can",
            summary: "Oparta na faktach historia młodego fałszerza, który w latach 60., podając się za pilotów, lekarzy i profesorów, wyłudził z banków ponad 2,5 mln dolarów.",
            score: 8.6},{
            id: "4",
            imageURL: "https://images-na.ssl-images-amazon.com/images/I/51bXBtSePpL._SY445_.jpg",
            title: "Casino Royale",
            summary: "Agent specjalny James Bond dostaje pierwsze ważne zadanie, w którym pomóc ma mu piękna Vesper Lynd. Jego przeciwnikiem jest demoniczny Le Chiffre.",
            score: 3.4},{
            id: "5",
            imageURL: "https://images-na.ssl-images-amazon.com/images/I/71uMOmpZZQS._SL1422_.jpg",
            title: "Up in the Air",
            summary: "Ryan Bingham jest specjalistą zajmującym się zwalnianiem pracowników, a podróżowanie zajmuje znaczną część jego życia. Kiedy poznaje Alex, zaczyna myśleć o zmianach.",
            score: 6.3},{
            id: "6",
            imageURL: "https://images-na.ssl-images-amazon.com/images/I/819jjLQ%2BfvL._SL1500_.jpg",
            title: "Flight",
            summary: "Pilot William Whitaker szczęśliwie ląduje zepsutym samolotem. W sprawie wypadku toczy się śledztwo.",
            score: 8.2},{
            id: "7",
            imageURL: "https://images-na.ssl-images-amazon.com/images/I/91JB9IFFHpL._SY445_.jpg",
            title: "Mr. Robot",
            summary: "Grupa hakerów planuje atak na międzynarodową korporację Evil Corp. ",
            score: 8.7},{
            id: "8",
            imageURL: "https://images-na.ssl-images-amazon.com/images/I/51pusjfT7jL.jpg",
            title: "Ghost Rider",
            summary: "Johny Blaze podpisuje pakt z diabłem. W ciągu dnia jest znanym kierowcą motocyklowym, a nocą staje się Ghost Riderem - łowcą zbuntowanych demonów.",
            score: 9.2},{
            id: "9",
            imageURL: "https://images-na.ssl-images-amazon.com/images/I/81CvIQTx66L._RI_.jpg",
            title: "Top Gun",
            summary: "Uczniowie elitarnej jednostki lotniczej, Maverick i Tom Kasansky, rywalizują o tytuł najlepszego pilota.",
            score: 9.0}],
        current: 0,
        error: false,
        animationAccept: false,
        animationReject: false
    };

//Actions
export const initialState = Immutable.fromJS(data);
export const setMoviesList = createAction('SET_MOVIES');
export const fetchMoviesFailed = createAction('FETCH_MOVIE_FAIL');
export const showNextCardAccepted = createAction('NEXT_CARD_ACCEPT');
export const showNextCardRejected = createAction('NEXT_CARD_REJECT');
export const animateCardAccepted = createAction('ANIMATE_CARD_ACCEPT');
export const animateCardRejected = createAction('ANIMATE_CARD_REJECT');

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
            })
            .catch( error => {
                console.log( error );
            });
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
            console.log('error');
            });
    };
};

//Reducer 
export default handleActions({
    SET_MOVIES: (state, action) => {
        return state
            .set('movies', action.payload)
    },
    FETCH_MOVIE_FAIL: (state, action) => {
        return state
            .set('error', true)
    },
    ANIMATE_CARD_ACCEPT: (state, actions) => {
        return state
            .set('current', state.get('current'))
            .set('animationAccept', !state.get('animationAccept'))
    },
    ANIMATE_CARD_REJECT: (state, actions) => {
        return state
           .set('current', state.get('current'))
           .set('animationReject', !state.get('animationReject'))
    },
    NEXT_CARD_ACCEPT: (state, actions) => {
        if (state.get('current') < state.get('movies').toJS().length - 1) {            
                return state
                            .set('current', state.get('current') + 1)
                            .set('animationAccept', !state.get('animationAccept'))
                }   
                 return state
                    .set('current', 0)
                    .set('animationAccept', !state.get('animationAccept'))
                  
    },
    NEXT_CARD_REJECT: (state, actions) => {
         if (state.get('current') < state.get('movies').toJS().length - 1) {            
            return state
                            .set('current', state.get('current') + 1)
                            .set('animationReject', !state.get('animationReject'))
                }   
                 return state
                    .set('current', 0)
                    .set('animationReject', !state.get('animationReject'))

    }
}, initialState);
