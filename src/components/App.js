import React, { Component } from 'react'
// import SimpleStorageContract from './../../build/contracts/SimpleStorage.json'
import MigrationsContract from './../../build/contracts/Migrations.json'
import OmniCatContract from './../../build/contracts/OmniCAT.json'
import IronLevelsContract from './../../build/contracts/IronLevels.json'
import Dass42Contract from './../../build/contracts/Dass42.json'
import getWeb3 from './../utils/getWeb3'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import './../css/oswald.css'
import './../css/open-sans.css'
import './../css/pure-min.css'
import './../css/App.css'

// ?? SET STATE CONTRACTS HERE FOR NOW
let keys =    { web3: null,
        omni: { addr: null, def: null, inst: null },
        iron: { addr: null, def: null, inst: null },
        dass: { addr: null, def: null, inst: null },
        migs: { addr: null, def: null, inst: null }
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      omni: null,
      dass: null,
      iron: null,
      migs: null,
      web3: null
    }
  }

  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.
    getWeb3
    .then(results => {
      this.setState({
        web3: results.web3
      })
      keys.web3 = this.state.web3
      // Instantiate contract once web3 provided.
      this.instantiateContracts()
    })
    .catch(() => {
      console.log('Error finding web3.')
    })
  }

  instantiateContracts() {
    /*
     * SMART CONTRACT EXAMPLE
     *
     * Normally these functions would be called in the context of a
     * state management library, but for convenience I've placed them here.
     */
    const contract = require('truffle-contract')

    keys.omni.def = contract(OmniCatContract)
    keys.omni.def.setProvider(keys.web3.currentProvider)

    keys.dass.def = contract(Dass42Contract)
    keys.dass.def.setProvider(keys.web3.currentProvider)

    keys.iron.def = contract(IronLevelsContract)
    keys.iron.def.setProvider(keys.web3.currentProvider)

    keys.migs.def = contract(MigrationsContract)
    keys.migs.def.setProvider(keys.web3.currentProvider)

    // Get accounts.
    keys.web3.eth.getAccounts((error, accounts) => {
      keys.omni.def.deployed().then((instance) => {
        keys.omni.inst = instance
        // Stores a given value, 5 by default.
      }).then((result) => {
        // Update state with the result.
        keys.omni.addr = keys.omni.inst.address
        return this.setState({ omni: keys.omni.inst.address })
      })

      keys.dass.def.deployed().then((instance) => {
        keys.dass.inst = instance
      }).then((result) => {
        // Update state with the result.
        keys.dass.addr = keys.dass.inst.address
        return this.setState({ dass: keys.dass.inst.address })
      })

      keys.iron.def.deployed().then((instance) => {
        keys.iron.inst = instance
      }).then((result) => {
        // Update state with the result.
        keys.iron.addr = keys.iron.inst.address
        return this.setState({ iron: keys.iron.inst.address })
      })

      keys.migs.def.deployed().then((instance) => {
        keys.migs.inst = instance
      }).then((result) => {
        // Update state with the result.
        keys.migs.addr = keys.migs.inst.address
        return this.setState({ migs: keys.migs.inst.address })
      })
    })
  }

  render() {
    return (
      <div className="pure-g">
        <Header />
        <Main props={ keys } />
        <Footer />
      </div>
    )
  }
}

export default App
