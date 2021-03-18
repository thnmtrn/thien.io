import {useState} from 'react'

const useDropdown = (label, defaultstate, options) => {
    const [state, setState] = useState(defaultState);
    const Dropdownmaker = () => (
      <label htmlFor={label}>
        {label}
          <select
          id={label}
          value={state}
          onChange={e=>setState(e.target.value)}
          onBlur={e=>setState(e.target.value)}
          disabled={!options.length}
            >
            <option>All</option>
            {options.map(item=>
            <option key={item} value={item}>{item}</option>)}
          </select>
    </label>
    );
    return [state, Dropdownmaker, setState]
    }

    export default useDropdown