const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD': {
      const changedCounter = {
        ...state,
        good: state.good + 1
      }

      return changedCounter
    }
    case 'OK': {
      const changedCounter = {
        ...state,
        ok: state.ok + 1
      }

      return changedCounter
    }
    case 'BAD':{
      const changedCounter = {
        ...state,
        bad: state.bad + 1
      }

      return changedCounter
    }
    case 'ZERO':
      const initialState = {
        good: 0,
        ok: 0,
        bad: 0
      }

      return initialState
    default: return state
  }

}

export default counterReducer
