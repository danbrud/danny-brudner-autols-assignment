import React from 'react'
import { SELECT_OPTIONS } from '../consts'

const SelectDropdown = ({ selection, handleSelection }) => {

  const selectionOptions = [SELECT_OPTIONS.cpm, SELECT_OPTIONS.cpc, SELECT_OPTIONS.costPerConversion]

  return (
    <div id='selector'>
      <h5>VIEW BY:</h5>
      <select id='selection' value={selection} onChange={handleSelection}>
        {
          selectionOptions.map((selection, i) => (
            <option key={i} value={selection.value}>{selection.name}</option>
          ))
        }
      </select>
    </div>
  )
}

export default SelectDropdown