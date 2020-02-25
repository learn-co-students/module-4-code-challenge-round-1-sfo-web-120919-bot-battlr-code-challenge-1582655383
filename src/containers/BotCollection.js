import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '../components/BotSpecs'

class BotCollection extends React.Component {
	//your code here

	//clickBot={this.props.addToBotArmy}
	
	state = {
		bot: null
	}



	onBotClick = (bot) => {
		this.setState(previousState => {
			return {
				...previousState,
				bot: bot
			}
		})
	}

	onBackButtonClick = () => {
		this.setState(previousState => {
			return {
				...previousState,
				bot: null
			}
		}, () => console.log("fire"))
	}


  render(){
  	return (
  	  <div className="ui four column grid" >
    		<div className="row">
    		    {this.state.bot ? <BotSpecs bot={this.state.bot} onBackButtonClick={this.onBackButtonClick} addToBotArmy={this.props.addToBotArmy}/> : this.props.bots.map(bot => <BotCard key={bot.id} bot={bot} clickBot={this.onBotClick} />)}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
