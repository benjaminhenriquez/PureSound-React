import { combineReducers } from 'redux'

function reducerUser(state = {}, action){
  switch (action.type){
    case "NEW_USER":
    debugger
    console.log(action.payload)
    //maybe should be id here?
    case "LOGIN_USER":
      return action.payload
    //maybe save user id and current user t or false
    default:
      return state
  }
}

function reducerLikedArtists(state= [], action){
  switch (action.type){
    case "SAVE_LIKED_ARTISTS":
      return state = action.payload
    default:
      return state
  }
}

function reducerSwipeArtist(state= {}, action){
  switch (action.type){
    case "SET_SWIPE_ARTIST":
      debugger
      return state = action.payload
    default:
      return state
  }
}

function reducerSongs(state={}, action){
  switch (action.type){
    case "SAVE_SONGS":
      return {...state, songs: action.payload}
    default:
      return state
  }
}

const rootReducer = combineReducers({user: reducerUser, likedArtists: reducerLikedArtists, swipeArtist: reducerSwipeArtist, songs: reducerSongs})
// {user:{} artist{artist_spotifyId}}
// include later songs: reducerSongs, and artist: reducerArtist


export default rootReducer
