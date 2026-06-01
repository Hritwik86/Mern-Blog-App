import React from 'react'

const Input = ({
    type = "text",
  placeholder = "",
  value,
  onChange,
}) => {
  return (
    <>
    <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="w-full border rounded px-3 py-2"
    />
    </>
  );
}

export default Input