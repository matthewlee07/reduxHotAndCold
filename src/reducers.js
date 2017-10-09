import { SET_GUESS } from './actions';

const initialState = {
    guess: null,
    feedback: 'Make your guess!',
    correctAnswer: Math.floor(Math.random() * 100) + 1
};

export const guessReducer = (state = initialState, action) => {

    if (action.type === SET_GUESS) {
        const difference = Math.abs(action.guess - state.correctAnswer);
        console.log(state.correctAnswer);
        let feedback;
        if (difference >= 50) {
            feedback = 'You\'re Ice Cold...';
        }
        else if (difference >= 30) {
            feedback = 'You\'re Cold...';
        }
        else if (difference >= 10) {
            feedback = 'You\'re Warm';
        }
        else if (difference >= 1) {
            feedback = 'You\'re Hot!';
        }
        else {
            feedback = 'You got it!';
        }

        return Object.assign({}, state, {
            feedback: feedback
        }
        )
    }
    return state;
}

