import Vue from 'vue';

export const state = () => (
  {
    currentUser: window.localStorage.getItem( 'user' )
  }
)

export const actions = {
  setUser( { commit }, payload ) {
    commit( 'SET_USER', { id: 'currentUser', data: payload } );
  }  
}

export const mutations = {
  SET_USER( state, {id, data} ) {
    if ( !data ) {
      Vue.set( state, id, null );
      window.localStorage.removeItem( 'user' );
      return;
    }
    let theUser = JSON.stringify( data );
    Vue.set( state , id, data );
    window.localStorage.setItem( 'user', theUser );
  }  
}
