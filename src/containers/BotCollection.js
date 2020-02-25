import React from "react";
import BotCard from "../components/BotCard";
// import BotSpecs from "../components/BotSpecs";

class BotCollection extends React.Component {
  //your code here
//   state = {activeBot: null}

//   addToArmy = (bot) => {
// 	this.setState({activeBot:bot})
//   }

//   clearState = () => {
// 	console.log("hello")
// 	this.setState({activeBot:null})
//   }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {/*...and here..*/}
			  {
			  this.props.allBots.map(bot => <BotCard key={Math.random()} bot={bot} addToArmy={this.props.addToArmy}/>)
			  }
			  {/* {this.props.allBots.map(bot => <BotCard key={Math.random()} bot={bot} addToArmy={this.addToArmy}/>)} */}
			  {/* {this.props.allBots.map(bot => <BotCard key={Math.random()} bot={bot} addToArmy={this.props.addToArmy}/>)} */}
    		  {/* Collection of all bots */}
			  {/* <BotSpecs bot={this.state.activeBot} clear={this.clearState}/> */}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
