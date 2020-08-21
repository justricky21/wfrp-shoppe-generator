import React, { Component } from 'react'
import PopulationDropdown from './PopulationDropdown'
import './MainForm.css'
import * as core from '../item_lists/core'
import { rollItemsInArray } from '../util/utils'


class MainForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gossipScore: 0,
            gossipRoll: 0,
        }
    }
   
    onRollPress = () => {
        const { gossipScore, gossipRoll } = this.state;
        const { onSetAvailableItems } = this.props
        const { meleeWeapons } = core;
        const availableItems = rollItemsInArray(meleeWeapons, gossipScore, gossipRoll);
        onSetAvailableItems(availableItems);
    }

    onChange = (stateKey, newState) => {
        this.setState({[stateKey]: newState})
    }

    render() {
        const { onClearPress } = this.props;
        return (
            <div className='main-form'>
                <PopulationDropdown/ >
                <input
                    placeholder='Input gossip score...'
                    type='number'
                    onChange={e => this.onChange('gossipScore', e.target.valueAsNumber)}
                />
                <input
                    placeholder='Input gossip roll...'
                    type='number'
                    onChange={e => this.onChange('gossipRoll', e.target.valueAsNumber)}
                />
                <button onClick={this.onRollPress}>Roll!</button>
                <button onClick={onClearPress}>Clear</button>
            </div>
        )
    }
}

export default MainForm