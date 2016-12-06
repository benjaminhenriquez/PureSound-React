import React, { Component } from 'react';
import { connect } from 'react-redux';
import { storeYesArtists } from '../actions/ReactActions'
import { bindActionCreators } from 'redux'

class CheckArtist extends Component {

  handleYesCheck(){
    event.preventDefault()
    this.props.storeYesArtists(this.props.initialArtist)
  }

  handleNoCheck(){
    event.preventDefault()
  }

  render(){
    let artist
    if(this.props.initialArtist){
      artist = this.props.initialArtist
    } else {
      artist = ""
    }
    return(
      <div>
        <h5>{artist.artistName} </h5>
        <h5>Correct?</h5>
        <button onClick={this.handleYesCheck.bind(this)}>Yes</button>
        <button onClick={this.handleNoCheck.bind(this)}>No</button>
      </div>
    )
  }
}

function mapStateToProps(state){

  return {initialArtist: state.initialArtist }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({storeYesArtists: storeYesArtists }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckArtist)
