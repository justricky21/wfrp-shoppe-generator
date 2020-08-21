import React, { Component } from 'react'
import PopulationDropdown from './PopulationDropdown'
import ResultsForm from './ResultsForm'
import * as core from '../item_lists/core'
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
        const { meleeWeapons } = core;
        const availableItems = rollItemsInArray(meleeWeapons, gossipScore, gossipRoll);
        this.setState({availableItems});
    }
    
    onClearPress = () => {
        this.setState({ availableItems: [] });
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.valueAsNumber || e.target.value})
    }

    render() {
        const { availableItems } = this.state;
        return (
            <div className='main-form'>
                <PopulationDropdown/ >
                <input
                    placeholder='Input gossip score...'
                    type='number'
                    onChange={e => this.onChange(e)}
                />
                <input
                    placeholder='Input gossip roll...'
                    type='number'
                    onChange={e => this.onChange(e)}
                />
                <button onClick={this.onRollPress}>Roll!</button>
                <button onClick={this.onClearPress}>Clear</button>
                <ResultsForm availableItems={availableItems} />
            </div>
        )
    }
}

export default MainForm