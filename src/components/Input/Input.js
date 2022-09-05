const Input = ({name, placeholder, type, value, change}) => {
  return <input 
    name={name}
    placeholder={placeholder}
    type={type}
    value={value}
    onChange={change} 
    />
};

export default Input