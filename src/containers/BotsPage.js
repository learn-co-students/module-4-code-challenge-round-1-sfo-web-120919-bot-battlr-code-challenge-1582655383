import React from "react";
import BotCollection from './BotCollection.js'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    allBots: [],
    selectedBots: []
  }


  handleSelectClick = (bot) => {
    if(!this.state.selectedBots.includes(bot)) {
        this.setState(prevState => ({
            ...prevState,
            selectedBots: [...prevState.selectedBots, bot]
        }))
    }
}

removeSelectedBot = (bot) => {
    const newBots = this.state.selectedBots.filter(armyBot => armyBot !== bot)
    this.setState(prevState => ({
        ...prevState,
        selectedBots: newBots
    }))
}

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
        .then(resp => resp.json())
        .then(data =>
          this.setState({allBots: data})
          )
  }


  render() {
    return (
      <div>
        < BotCollection allBots={this.state.allBots} handleSelectClick={this.handleSelectClick}/>
        <YourBotArmy selectedBots={this.state.selectedBots} removeSelectedBot={this.removeSelectedBot}/>
      </div>
    );
  }

}

export default BotsPage;
