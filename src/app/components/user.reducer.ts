import { Action } from '@ngrx/store';

var stateG = {
    'nombreUsr' : 'Admin' 
}

export function userReducer(state: object = stateG, action: Action) {

    switch (action.type) {
        default:
            return state;
    }

}