// ./react-redux-client/src/reducers/tempoReducer.js
const INITIAL_STATE = {
  tempos:[],
  tempo:null,
  isFetching: false,
  error: null,
  successMsg:null,
  showDeleteModal: false,
  tempoToDelete: null,
  showEditModal: false,
  tempoToEdit: null,
}
export  const tempoReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_TEMPOS_REQUEST':
    return {
      ...currentState,
      tempos:[],
      tempo:null,
      isFetching: true,
      error: null,
      successMsg:null,
      showDeleteModal: false,
      tempoToDelete: null,
      showEditModal: false,
      tempoToEdit: null,
    }
    case 'FETCH_TEMPOS_SUCCESS':
    return {
      ...currentState,
      tempos:action.tempos,
      tempo:null,
      isFetching: false,
      error: null,
      successMsg:action.message,
      showDeleteModal: false,
      tempoToDelete: null,
      showEditModal: false,
      tempoToEdit: null,
    }
    case 'FETCH_TEMPOS_FAILED':
    return {
      ...currentState,
      tempos:[],
      tempo:null,
      isFetching: false,
      error: action.error,
      successMsg:null,
      showDeleteModal: false,
      tempoToDelete: null,
      showEditModal: false,
      tempoToEdit: null,
    }
    case 'FETCH_TEMPO_REQUEST':
    return {
      ...currentState,
      tempos:currentState.tempos,
      tempo:null,
      isFetching: true,
      error: null,
      successMsg:null,
      showDeleteModal: false,
      tempoToDelete: null,
      showEditModal: false,
      tempoToEdit: null,
    }
    case 'FETCH_TEMPO_SUCCESS':
    return {
      ...currentState,
      tempos:currentState.tempos,
      tempo:action.tempo,
      isFetching: false,
      error: null,
      successMsg:action.message,
      showDeleteModal: false,
      tempoToDelete: null,
      showEditModal: false,
      tempoToEdit: null,
    }
    case 'FETCH_TEMPO_FAILED':
    return {
      ...currentState,
      tempos:[],
      tempo:null,
      isFetching: false,
      error: action.error,
      successMsg:null,
      showDeleteModal: false,
      tempoToDelete: null,
      showEditModal: false,
      tempoToEdit: null,
    }
    case 'ADD_NEW_TODO_REQUEST':
    return {
      ...currentState,
      tempos:currentState.tempos,
      tempo:null,
      isFetching: true,
      error: null,
      successMsg:null,
      showDeleteModal: false,
      tempoToDelete: null,
      showEditModal: false,
      tempoToEdit: null,
      newTempo: action.tempo
    }
    case 'ADD_NEW_TODO_REQUEST_FAILED':
    return {
      ...currentState,
      tempos:currentState.tempos,
      tempo:null,
      isFetching: true,
      error: action.error,
      successMsg:null,
      showDeleteModal: false,
      tempoToDelete: null,
      showEditModal: false,
      tempoToEdit: null,
      newTempo: null
    }
    case 'ADD_NEW_TODO_REQUEST_SUCCESS':
    return {
      ...currentState,
      tempos:[...currentState.tempos, action.tempo],
      tempo:null,
      isFetching: false,
      error: null,
      successMsg:action.message,
      showDeleteModal: false,
      tempoToDelete: null,
      showEditModal: false,
      tempoToEdit: null,
      newTempo: action.tempo
    }
    default:
      return currentState;
  }
}
export default tempoReducer;
