import React, { useState } from 'react';

const useDropdown = (label, defaultState, options) => {
  const [state, updateState] = useState(defaultState);
  const id = `use-dropdown-${label.toLowerCase()}`;
  const Dropdown = () => (
    <label htmlFor={id}>
      <span>{label}</span>
      <select
        disabled={options.length === 0}
        id={id}
        value={state}
        onChange={e => updateState(e.target.value)}
        onBlur={e => updateState(e.target.value)}
      >
        <option />
        {options.map(item => (
          <option
            value={item.node.login ? item.node.login : item.node.name}
            key={item.node.id}
          >
            {item.node.login ? item.node.login : item.node.name}
          </option>
        ))}
      </select>
    </label>
  );
  return [state, Dropdown, updateState];
};

export default useDropdown;
