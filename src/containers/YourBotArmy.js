import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    // console.log(this.props.selectedBots)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army:
          {this.props.selectedBots.map(bot => <BotCard bot={bot} handleBotClick={this.props.removeSelectedBot}/>)}
          
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
