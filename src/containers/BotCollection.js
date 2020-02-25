import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
	state = {
        bots: null
    }

    handleCharClick = (bot) => {
        this.setState({
            bots: bot
        })
    }
  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
			{this.state.bots ?  <BotCard bots={this.state.bots} handleFavsClick={this.props.handleFavsClick}/> : this.props.bots.map(bot => <BotCard handleFavsClick={this.props.handleFavsClick} bot={bot}/>)}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
