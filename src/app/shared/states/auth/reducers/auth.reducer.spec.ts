import * as fromAuth from './auth.reducer';
import * as fromActions from '../actions/auth.actions';


describe('AuthReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialState } = fromAuth;
      const action = {} as any ;
      const state = fromAuth.reducer(undefined, action);

      expect(state).toBe(initialState);
    });
  });


  describe('IdentificationSuccess action', () => {
    it('should return a token', () => {
      const { initialState } = fromAuth;
      const previousState = { ...initialState };
      const action = new fromActions.IdentificationSuccess({token: 'tokenPrueba'});
      const state = fromAuth.reducer(previousState, action);

      expect(state.token).toEqual('tokenPrueba');
    });
  });
  describe('IdentificationFailed action', () => {
    it('should return the initialState', () => {
      const { initialState } = fromAuth;
      const previousState = { ...initialState };
      const action = new fromActions.IdentificationFailed('error');
      const state = fromAuth.reducer(previousState, action);

      expect(state.token).toEqual('');
      expect(state).toEqual(initialState);
    });
  });

  describe('IdentificationLogout action', () => {
    it('should return the initialState', () => {
      const { initialState } = fromAuth;
      const previousState = { ...initialState };
      const action = new fromActions.IdentificationLogout();
      const state = fromAuth.reducer(previousState, action);

      expect(state.token).toEqual('');
      expect(state).toEqual(initialState);
    });
  });
  describe('IdentificationRefresh action', () => {
    it('should return a token', () => {
      const { initialState } = fromAuth;
      const previousState = { ...initialState };
      const action = new fromActions.IdentificationRefresh({token: 'tokenPrueba'});
      const state = fromAuth.reducer(previousState, action);

      expect(state.token).toEqual('tokenPrueba');
    });
  });

});
