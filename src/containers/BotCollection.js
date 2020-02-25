import React from "react";
import BotCard from "../components/BotCard";
// import BotSpecs from "../components/BotSpecs";

class BotCollection extends React.Component {
  //your code here

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {/*...and here..*/}
			  {
			  this.props.allBots.map(bot => <BotCard key={Math.random()} bot={bot} addToArmy={this.props.addToArmy}/>)
			  }
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
