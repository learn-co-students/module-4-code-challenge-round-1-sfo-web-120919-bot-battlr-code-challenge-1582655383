import React from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'
import BotSpecs from '../components/BotSpecs'
import Search from '../components/Search'
class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    allBots: [],
    shownBots: [],
    yourBots: [],
    showDetailView: false,
    showDetailBot: {},
    query: ""
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

  handleSearchChange = (e) => {
    console.log("handleSearchChange called")
    const value = e.target.value
    const q = value.toLowerCase()
    const filteredBots = this.state.allBots.filter(bot => {
      return bot.name.toLowerCase().includes(q)
    } )
    this.setState(prevState => {
      return {
        ...prevState,
        shownBots: filteredBots,
        query: q
      }
    })
  }

 


  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.yourBots} removeBotFromArmy={this.removeBotFromArmy} />
        <Search query={this.state.query} handleSearchChange={this.handleSearchChange} />
    {this.state.showDetailView ? <BotSpecs handleDetailView={this.handleDetailView} addBotToArmy={this.addBotToArmy} bot={this.state.showDetailBot} /> : <BotCollection handleDetailView={this.handleDetailView} bots={this.state.query === "" ? this.state.allBots :this.state.shownBots} />} 
      </div>
    );
  }

}

export default BotsPage;
