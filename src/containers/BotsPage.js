import React from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'
import BotSpecs from '../components/BotSpecs'
class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    allBots: [],
    yourBots: [],
    showDetailView: false,
    showDetailBot: {}
  }

  componentDidMount() {
     this.getAllBots().then(bots => this.setState(prevState => {
       return {
        ...prevState,
        allBots: bots}
     }))
  }

  getAllBots = () => {
     return fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
     .then(resp => resp.json())
  }

  botIsInCollection(botId, collectionName) {
    const bot = this.state[collectionName].find(b => b.id === botId)
    if (bot) return true
    else return false
  }

  addBotToArmy = (bot) => {
    console.log("AddbotToArmy called")
    if (!this.botIsInCollection(bot.id, 'yourBots')) {
          
        this.setState(prevState => {
          return {
            ...prevState,
            yourBots: [...prevState.yourBots, bot]
          }
        })

    }

  }

  removeBotFromArmy = (bot) => {
    if (this.botIsInCollection(bot.id, 'yourBots')) {
      this.setState(prevState => {
        return {
          ...prevState,
          yourBots: prevState.yourBots.filter(b => b.id !== bot.id)
        }
      })
    }
  }


  handleDetailView = (bot, status) => {
     this.setState(prevState => {
       return {
         ...prevState,
         showDetailView: status === 'on' ?  true : false,
         showDetailBot: status === 'on' ? bot : {}
       }
     })
  }


  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.yourBots} removeBotFromArmy={this.removeBotFromArmy} />
    {this.state.showDetailView ? <BotSpecs handleDetailView={this.handleDetailView} addBotToArmy={this.addBotToArmy} bot={this.state.showDetailBot} /> : <BotCollection handleDetailView={this.handleDetailView} bots={this.state.allBots} />} 
      </div>
    );
  }

}

export default BotsPage;
