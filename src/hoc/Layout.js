import React, { Component } from 'react';
import { connect } from 'react-redux';
import {showNextCardandAccept, showNextCardandReject, initMovies} from '../store/handler/handler';
import Card from '../components/Card/Card';
export class Layout extends Component {
    componentDidMount () {
        this.props.onInitMovies();
    }

  render() {
        let index = this.props.current;
  return (
    <Card
          title = {this.props.movies.getIn([index, 'title'])}
          summary = {this.props.movies.getIn([index, 'summary'])}
          score = {this.props.movies.getIn([index, 'score'])}
          showNextCardandAccept = {() => this.props.showNextCardandAccept(this.props.movies.getIn([index, 'id']))}
          showNextCardandReject = {() => this.props.showNextCardandReject(this.props.movies.getIn([index, 'id']))}
          imageURL = {this.props.movies.getIn([index, 'imageURL'])}
          current = {index}/>
  )
}
}
const mapStateToProps = state => {
    return  {
        movies: state.get('movies'),
        error: state.get('error'),
        current: state.get('current')
    }
}
const mapDispatchToProps = dispatch => {
    return {
    onInitMovies: () => dispatch(initMovies()),
    showNextCardandAccept: ( id ) => dispatch(showNextCardandAccept( id )),
    showNextCardandReject: ( id ) => dispatch(showNextCardandReject( id ))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Layout);