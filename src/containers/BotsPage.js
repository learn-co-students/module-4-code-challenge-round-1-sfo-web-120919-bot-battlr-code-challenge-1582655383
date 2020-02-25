import React from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'

class BotsPage extends React.Component {
  //start here with your code for step one
  //https://bot-battler-api.herokuapp.com/api/v1/bots

  state = {
    bots: [],
    botArmy: []
    
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(res => res.json())
      .then(data => {
        this.setState({
          bots: data,
        })
      })
  }

  addToBotArmy = (bot) => {
    if(!this.state.botArmy.includes(bot)) {
      this.setState(previousState => {
        return {
          ...previousState,
          botArmy: [...previousState.botArmy, bot]
        }
      })
    }
  }

  removeBotFromArmy = (currentBot) => {
    const newBotArmy = this.state.botArmy.filter(bot => bot !== currentBot)
    this.setState(previousState => {
      return {
        ...previousState,
        botArmy: newBotArmy
      }
    })
  }

 



 

  render() {
    return (
      <div>
        {<YourBotArmy botArmy={this.state.botArmy} removeBotFromArmy={this.removeBotFromArmy}/>}
        {<BotCollection bots={this.state.bots} addToBotArmy={this.addToBotArmy} />}
      </div>
    );
  }

}

export default BotsPage;
