import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
		console.log("Here are BotCollection props", this.props)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {/*...and here..*/}
					{this.props.BotCollection.map( bot => <BotCard key={bot.id} bot={bot}/> )}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
