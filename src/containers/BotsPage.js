import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {allBots: [], myArmy: [],activeBot:""}

  componentDidMount()
  {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(resp => resp.json())
    .then(data => this.setState({allBots : data}))
  }

  addToArmy = (bot) => {
    this.clearState()
    if (!this.state.myArmy.includes(bot))
    {
    this.setState(prevState => ({...prevState,myArmy: [...prevState.myArmy,bot]}))
    }
  }

  removeToArmy = (bot) => {
    let newarmy = this.state.myArmy.filter(armybot => bot!== armybot)
    this.setState({myArmy:newarmy})
  }

  clearState = () => {
    this.setState({activeBot:""})
  }

  setBotActive = (bot) => {
    this.setState({activeBot:bot})
  }

  render() {
    return (  
      <div>
        <h1><center>__Bot Battlr__</center></h1>
        {/* put your components here */}
        <YourBotArmy myArmy={this.state.myArmy} removeToArmy={this.removeToArmy}/>
        {this.state.activeBot ? 
			  <BotSpecs bot={this.state.activeBot} clearState={this.clearState} addToArmy={this.addToArmy}/>
			  :
        <BotCollection allBots={this.state.allBots} addToArmy={this.setBotActive} />
			  }
      </div>
    );
  }

}

export default BotsPage;
