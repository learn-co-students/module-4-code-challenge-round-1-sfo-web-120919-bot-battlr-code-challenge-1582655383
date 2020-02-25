import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"


class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    botArmy: []
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then( botsData => this.setState({bots: botsData},()=> console.log("this is bots data", botsData)))
  }

  addToBotArmy = (bot) => {
   if(!this.state.botArmy.includes(bot)) {
     this.setState(prevState => ({
       ...prevState,
       botArmy: [...prevState.botArmy, bot]
     }))
   }
    console.log("INSIDE add to BOT ARMY method")
  }

  render() {
    return (
      <div>
        {/* put your components here */}
        
        <BotCollection BotCollection={this.state.bots} />
        <YourBotArmy addToBotArmy={this.addToBotArmy}/>
      </div>
    );
  }

}

export default BotsPage;
