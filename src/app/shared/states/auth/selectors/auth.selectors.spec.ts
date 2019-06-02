import * as fromAuth from './auth.selectors';
import * as fromActions from '../actions/auth.actions';
import * as fromReducers from '../reducers/auth.reducer';


describe('AuthSelector', () => {
    it('getAuth', () => {
        const state = {token: 'tokenPrueba'};
        expect(fromAuth.getAuth).toBeTruthy();
        expect(fromAuth.getAuth.projector(state)).toEqual({token: 'tokenPrueba'});
    });
    it('getToken', () => {
        const state = {token: 'tokenPrueba'};
        expect(fromAuth.getToken).toBeTruthy();

        expect(fromAuth.getToken.projector(state)).toBe(state.token);
    });

});
