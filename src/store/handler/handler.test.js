import handleActions from './handler';
import {initialState} from './handler';
import Immutable from 'immutable';
import { fromJS } from 'immutable';

describe('inital render', () => {
    it('should return the initial state', () => {
        expect(handleActions(undefined, {})).toEqual(initialState);
    });
    
    it('when download movies from api fail, reducer should return state with error property equals true', () => {
        expect((handleActions(initialState, {type: 'FETCH_MOVIE_FAIL'})).toJS()).toHaveProperty('error', true)
    });
    
    it('when user click on green button "current" key should change', () => {
        const nextState = handleActions(initialState, {type: 'NEXT_CARD_ACCEPT'}).toJS();
        expect(nextState).not.toHaveProperty('current', 0);
    });
        it('when user click on red button "current" key should change', () => {
        const nextState = handleActions(initialState, {type: 'NEXT_CARD_REJECT'}).toJS();
        expect(nextState).not.toHaveProperty('current', 0);
    });
        it('when user click on green button "animationAccept" key should change to true', () => {
        const nextState = handleActions(initialState, {type: 'ANIMATE_CARD_ACCEPT'}).toJS();
        expect(nextState).toHaveProperty('animationAccept', true);
    });
        it('when user click on red button "animationReject" key should change to true', () => {
        const nextState = handleActions(initialState, {type: 'ANIMATE_CARD_REJECT'}).toJS();
        expect(nextState).toHaveProperty('animationReject', true);
    });  
});
describe('reducer changed state after vote', () => {
        const state = initialState.toJS();
        const stateAfterVote = {
            ...state,
            animationAccept: true,
            animationReject: true
        }
        const stateAfterVoteMap = Immutable.fromJS(stateAfterVote);
    it('when user click on green button and put request to api is successfull "animationAccept" key should change to false', () => {
        expect(handleActions(stateAfterVoteMap, {type: 'ANIMATE_CARD_ACCEPT'}).toJS()).toHaveProperty('animationAccept', false);
    });
        it('when user click on red button and put request to api is successfull "animationReject" key should change to false', () => {
        expect(handleActions(stateAfterVoteMap, {type: 'ANIMATE_CARD_REJECT'}).toJS()).toHaveProperty('animationReject', false);
    });
});
