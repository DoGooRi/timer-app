// Import

// Actions

const START_TIMER = "START_TIMER"
const RESART_TIMER = "RESTART_TIMER"
const ADD_SECOND = "ADD_SECOND"

// Action Creators

function startTimer() {
  return {
    type: START_TIMER
  }
}

function restartTimer() {
  return {
    typs: RESART_TIMER
  }
}

function addSecond() {
  return {
    type: ADD_SECOND
  }
}

// Reducer

const TIME_DURATION = 1500

const initialState = {
  isPlaying: false,
  elapsedTime: 0,
  timerDuration: TIME_DURATION
}

// state를 안주면 initialState로 시작
function reducer(state = initialState, action) {
  switch (action.type) {
    case START_TIMER:
      return applyStartTimer(state)
    case RESART_TIMER:
      return applyRestartTimer(state)
    case ADD_SECOND:
      return applyAddSecond(state)
  }
}

// Reducer Functions

function applyStartTimer(state) {
  return {
    ...state,
    isPlaying: true,
    elapsedTime: 0
  }
}

function applyRestartTimer(state) {
  return {
    ...state,
    isPlaying: false,
    elapsedTime: 0
  }
}

function applyAddSecond(state) {
  if (state.elapsedTime < TIME_DURATION) {
    return {
      ...state,
      elapsedTime: state.elapsedTime + 1
    }
  } else {
    return {
      ...state,
      isPlaying: false
    }
  }
}

// Export Aciton Creators

const actionCreators = {
  startTimer,
  restartTimer,
  addSecond
}

// Export Reducer

export default reducer
