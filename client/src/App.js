import React, { Component } from "react";
import SimpleStorageContract from "./contracts/Election.json";
import getWeb3 from "./getWeb3";

import "./App.css";

class App extends Component {
  state = { storageValue: null, web3: null, accounts: null, contract: null, add: "", id1: 0, id2: 0 };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
    
  };
  onchange = (event) => {
    var c = event.target.value;
    this.setState({ add : c });

  }
  onchange2 = (event) => {
    var c = event.target.value;
    this.setState({ id1 : c });

  }
  onchange3 = (event) => {
    var c = event.target.value;
    this.setState({ id2 : c });

  }
 

  vote = async () => {
    const { accounts, contract } = this.state;
    try {
      // Stores a given value, 5 by default.
      await contract.methods.vote(this.state.id1, this.state.add).send({ from: accounts[0] });
    }
    catch (error) {
      alert("YOU HAVE ALREADY VOTED")
    }
      
  };
  getResult = async () => {
    
    const { accounts, contract } = this.state
    
    // Get the value from the contract to prove it worked.
    const response = await contract.methods.parties(this.state.id2).call();
    
    // Update state with the result.
    this.setState({ storageValue: response.voteCount });
  }

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <h1>Good to Go!</h1>
        <p>Ballet paper</p>
        <h2>Vote for You</h2>
        <ul type="none">
          <li>id name</li>
          <li> 1 NDA</li>
          <li>2 UPA</li>
          <li>3 other</li>
          </ul>
        <p>
          <label> KINDLY ENTER YOUR ADDRESS
          <input type="text" onChange={this.onchange}/>
          </label>
          
        </p>
        <label> Enter the Party Id
          <input type="text" onChange={this.onchange2}/>
          </label>
        <p>
        <input type="Submit" onClick={this.vote} value="vote" />
        </p>
        
        <label> Enter the Party Id for result
          <input type="text" onChange={this.onchange3}/>
        </label>
        <p>
        <input type="Submit" onClick={this.getResult} value="result" />
          </p>
        <div>The count of vote is: {this.state.storageValue}</div>
      </div>
    );
  }
}

export default App;
