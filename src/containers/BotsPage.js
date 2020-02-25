import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  state = {
    allBots: [],
    botArmy: []
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(res => res.json())
    .then(data => this.setState({
      allBots: data
    }, () => console.log(this.state)
    ))
  }
  
    handleFavsClick = (bot) => {
      if(!this.state.botArmy.includes(bot)) {
          this.setState(prevState => ({
              ...prevState,
              botArmy: [...prevState.botArmy, bot]
          }))
      }
  }

    removeBot = (bots) => {
        const newBots = this.state.botArmy.filter(bot => bot !== bots)
        this.setState(prevState => ({
            ...prevState,
            botArmy: newBots
        }))
    }
    
  render() {
    return (
      <div>
        <BotCollection handleFavsClick={this.handleFavsClick} bots={this.state.allBots}/>
        <YourBotArmy removeBot={this.removeBot} bots={this.state.botArmy}/>
      </div>
    );
  }

}

export default BotsPage;
