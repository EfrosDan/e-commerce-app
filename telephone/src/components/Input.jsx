import React from 'react'

const Input = ({handleChange,type, value, title, name, color}) => {
  return (
    <label className='sidebar-label-container'>
        <input onChange={handleChange} type={type} value={value} name={name} />
        <span className="checkmark" style={{backgroundColor: color}}></span>
        {title}
    </label>
  );
};

export default Input;