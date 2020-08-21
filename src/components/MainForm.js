import React, { Component } from 'react'
import PopulationDropdown from './PopulationDropdown'
import ResultsForm from './ResultsForm'
import { meleeWeapons } from '../item_lists/core/core'
import { rollItemsInArray } from '../util/utils'


class MainForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gossipScore: 0,
            gossipRoll: 0,
            availableItems: []
        }
    }
   
    onRollPress = () => {
        const { gossipScore, gossipRoll } = this.state;
        const availableItems = rollItemsInArray(meleeWeapons, gossipScore, gossipRoll);
        this.setState({availableItems});
    }
    
    onClearPress = () => {
        this.setState({ availableItems: [] });
    }

    onChange(newValue, stateKey) {
        this.setState({[stateKey]: newValue})
    }

    render() {
        const { availableItems } = this.state;
        return (
            <div className='main-form'>
                <PopulationDropdown/ >
                <input
                    placeholder='Input gossip score...'
                    onChange={e => this.onChange(e.target.value, 'gossipScore')}
                />
                <input
                    placeholder='Input gossip roll...'
                    onChange={e => this.onChange(e.target.value, 'gossipRoll')}
                />
                <button onClick={this.onRollPress}>Roll!</button>
                <button onClick={this.onClearPress}>Clear</button>
                <ResultsForm availableItems={availableItems} />
            </div>
        )
    }
}

export default MainForm