import EorzeaTime from 'eorzea-time';
import Vue from 'vue';

const getEorzeaTime = () => {
  const eorzeaTime = new EorzeaTime();
  const AmOrPm = eorzeaTime.getHours() >= 12 ? 'pm': 'am';
  const newTime = `${eorzeaTime.getHours() % 12}`.slice(-2) + ':' + `0${eorzeaTime.getMinutes()}`.slice(-2) + AmOrPm;
  return newTime;
}

export const state = () => (
  {
    et: 'Not Bad'
  }
)

export const getters = {
  getTime(state) {
    return state.et;
  }
}

export const actions = {
  updateTime( { commit }, e ) {
    commit( 'updateTimeData', { id: 'et', data: getEorzeaTime() } );
  }  
}

export const mutations = {
  updateTimeData( state, data ) {
    Vue.set( state , data.id, data.data );
  }  
}

