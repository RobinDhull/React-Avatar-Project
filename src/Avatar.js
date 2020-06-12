import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Avatar.css';
import AvatarList from './AvatarList';
import 'tachyons';

class Avatar extends Component {

  constructor() {
    super();
    this.state = {
      stateName : "Welcome to Avatar"
    }
  }

  changeState() {
    this.setState ({
      stateName : "Congratulations... :)"
    })
  }

  render() {
    const AvatarArrayList = [
      {
        id : 1,
        name : "Jeff Bezos",
        work : "Fonder & CEO Amazon"
      },
      {
        id : 2,
        name : "Elon Musk",
        work : "CEO spaceX, Tesla"
      },
      {
        id : 3,
        name : "Bill Gates",
        work : "Founder Microsoft"
      },
      {
        id : 4,
        name : "Mark Zukerberg",
        work : "CEO facebook"
      }
    ]

  const AvatarCardsArray = AvatarArrayList.map( (AvatarCard, i) => {
      return (
        <AvatarList key = {i}
                     id = {AvatarCard.id}
                   name = {AvatarCard.name}
                   work = {AvatarCard.work} />
      )
    })

    return (
      <div className="bg-light-blue" id="mainpage">
        <h1 className="tc text-light bg-dark pt-3 pb-3"> {this.state.stateName} </h1>
          {AvatarCardsArray}
        <button className="btn btn-primary ml-5 mb-5" onClick = { () => this.changeState() }> Select </button>
      </div>
    )
  }
}


export default Avatar;
