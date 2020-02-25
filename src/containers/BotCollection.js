import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs"

class BotCollection extends React.Component {
    state = {
        botty: null
    }

    handleBotClick = (bot) => {
        this.setState({
            botty: bot
        })
    }

    handleBackButton = () => {
        this.setState({
            botty: null
        })
	}
	

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.state.botty ?  <BotSpecs botty={this.state.botty} handleSelectClick={this.props.handleSelectClick} handleBackButton={this.handleBackButton}/> : this.props.allBots.map(bot => < BotCard key={Math.random()} bot={bot} handleBotClick={this.handleBotClick}/> )}
        
			 </div>
  	  </div>
  	);
  }

};

export default BotCollection;
