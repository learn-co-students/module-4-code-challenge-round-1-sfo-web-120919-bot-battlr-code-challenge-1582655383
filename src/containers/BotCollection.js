import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
	  		{this.props.battleBots.map(bot => 
			  <BotCard key={Math.random()} handleBotClick={this.props.handleBotClick} bot={bot}/>)}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
