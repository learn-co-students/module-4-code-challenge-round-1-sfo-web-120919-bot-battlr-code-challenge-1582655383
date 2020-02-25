import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
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
    if (!this.state.myArmy.includes(bot))
    {
    this.setState(prevState => ({...prevState,myArmy: [...prevState.myArmy,bot]}))
    }
  }

  removeToArmy = (bot) => {
    let newarmy = this.state.myArmy.filter(armybot => bot!== armybot)
    this.setState({myArmy:newarmy})
  }

  render() {
    return (  
      <div>
        <h1>__Bot Battlr__</h1>
        {/* put your components here */}
        <YourBotArmy myArmy={this.state.myArmy} removeToArmy={this.removeToArmy}/>
        <BotCollection allBots={this.state.allBots} addToArmy={this.addToArmy} />
      </div>
    );
  }

}

export default BotsPage;
