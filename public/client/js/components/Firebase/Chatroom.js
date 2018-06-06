import React, {Component} from 'react';

class Chatroom extends Component {
	render(){
	  return (
      <div>
        <ol>
          <li>message 1</li>
          <li>message 2</li>
          <li>message 3</li>
          <li>message 4</li>
        </ol>
        <input type="text" placeholder="Message"/>
        <button>Send</button>
      </div>
    )
  }
}

export default Chatroom
