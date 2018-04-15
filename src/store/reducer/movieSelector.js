import * as actionTypes from '../actions/actionTypes';

   const initialState = {
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

const reducer = ( state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_MOVIES:
            return {
            ...state,
            movies: [action.movies],
            error: false
        };
        case actionTypes.FETCH_MOVIE_FAIL:
            return {
                ...state,
                error: true
        };
        case actionTypes.ANIMATE_CARD_ACCEPT:
            return {
                ...state,
                current: state.current,
                animationAccept: !state.animationAccept
        };
        case actionTypes.ANIMATE_CARD_REJECT:
            return {
                ...state,
                current: state.current,
                animationReject: !state.animationReject
        };
        case actionTypes.NEXT_CARD_ACCEPT:
            if (state.current < state.movies.length - 1) {
                    return {
                        ...state,
                        current: state.current + 1,
                        animationAccept: !state.animationAccept
                    }
                }   
                    else return {
                    ...state,
                    current: 0,
                    animationAccept: !state.animationAccept
                }   
        case actionTypes.NEXT_CARD_REJECT:
            if (state.current < state.movies.length - 1) {
                    return {
                        ...state,
                        current: state.current + 1,
                        animationReject: !state.animationReject
                    }
                }   
                    else return {
                    ...state,
                    current: 0,
                    animationReject: !state.animationReject
                } 
        default:
            return state;
        }
    };

export default reducer;