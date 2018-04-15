import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Layout.css';
import * as actions from '../store/actions/index';
import Card from '../components/Card/Card';
class Layout extends Component {
    componentDidMount () {
        this.props.onInitMovies();
    }

  render() {
        let index = this.props.current;
  return (
    <Card
          title = {this.props.movies[index].title}
          summary = {this.props.movies[index].summary}
          score = {this.props.movies[index].score}
          showNextCardandAccept = {() => this.props.showNextCardandAccept(this.props.movies[index].id)}
          showNextCardandReject = {() => this.props.showNextCardandReject(this.props.movies[index].id)}
          imageURL = {this.props.movies[index].imageURL}
          current = {index}/>
  )
}
  }
const mapStateToProps = state => {
    return  {
        movies: state.movies,
        error: state.error,
        current: state.current
    }
}
const mapDispatchToProps = dispatch => {
    return {
    onInitMovies: () => dispatch(actions.initMovies()),
    showNextCardandAccept: ( id ) => dispatch(actions.showNextCardandAccept( id )),
    showNextCardandReject: ( id ) => dispatch(actions.showNextCardandReject( id ))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Layout);