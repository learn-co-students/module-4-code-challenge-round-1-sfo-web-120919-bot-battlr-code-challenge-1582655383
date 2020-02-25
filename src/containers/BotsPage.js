import React from "react";
import BotCollection from './BotCollection'

class BotsPage extends React.Component {
constructor(){
  super()
  this.state = {
    battleBots: [],
    botArmy: [], 
    botClicked: null
  }
}

  componentDidMount = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots').then(resp => resp.json())
    .then(data => this.setState(previousState => ({
      ...previousState,
      battleBots: data
    })))
  }

  handleBotClick = () => {
    if (!this.state.botClicked) {
      
    }
    // this.setState(previousState => ({
    //   ...previousState,

    // }))
  }

  render() {

    return (
      <div>
        <BotCollection handleBotClick={this.props.handleBotClick} battleBots={this.state.battleBots}/>
      </div>
    );
  }

}

export default BotsPage;
