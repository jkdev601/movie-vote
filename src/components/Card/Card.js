import React, {Component} from 'react';
import './Card.css';
import Button from '../Button/Button';
import { connect } from 'react-redux'; 

class Card extends Component {
    
    state = {
        isDragging: false,
        startPosition: [0, 0],
        offset: {x: 0, y: 0},
    }
    
    touchStartHandler = (e) => {
        if (e.type === 'touchstart') {
            e = e.touches[0];
        }
        
        this.setState({
            isDragging: true,
            startPosition: [e.pageX, e.pageY]
        });
    }
    touchMoveHandler = (e) => {
        if (e.type === 'touchmove') {
            e = e.touches[0];
        }
        const {isDragging, startPosition: [dx, dy]} = this.state;
        
        if (isDragging) {
            const offset = {x: e.pageX - dx, y: e.pageY - dy};
            this.setState({
                    offset: offset,
                });
            }
    }
    touchEndHandler = (e) => {
        if (this.state.offset.x > 100 ) {
            this.props.showNextCardandReject();
            this.setState({
                    isDragging: false,    
                    offset: {x: 0, y: 0},
                });
        } 
    }
    render() {
       return (
                <div className='main'>
                  <div className={["CardStyle", this.props.animationAccept ? "CardStyleVoted" : ' ', this.props.animationReject ?   "CardStyleVoted2" : ' '].join(' ')}
                  onTouchStart={this.touchStartHandler}
                  onTouchMove={this.touchMoveHandler}
                  onTouchEnd={this.touchEndHandler}
                  onMouseDown={this.touchStartHandler}
                  onMouseMove={this.touchMoveHandler}
                  onMouseUp={this.touchEndHandler}>
                  <div className="card">   
                    <div className="title">
                      <h1>{this.props.title}</h1>
                    </div>
                    <div className="images">
                      <img src={this.props.imageURL} alt={this.props.title}/>
                    </div>
                    <div className="score">
                      <p>Score: {this.props.score} / 10</p>
                    </div>
                    <div className="summary">
                      <p>{this.props.summary}</p>
                    </div>
                  </div>
                  </div>
                  <div className="buttons">
                    <Button clicked={this.props.showNextCardandAccept}    BtnType="Success">Accept!</Button>
                    <Button clicked={this.props.showNextCardandReject} BtnType="Danger">Reject!</Button>
                  </div>
              </div>
             )}
}

const mapStateToProps = state => {
    return  {
        animationAccept: state.animationAccept,
        animationReject: state.animationReject,
    }
}

export default connect(mapStateToProps, {})(Card);