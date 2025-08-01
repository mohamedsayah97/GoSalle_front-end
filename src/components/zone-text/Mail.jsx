import "./Mail.scss"

const Mail = ({labelText, type, name, holderValue, value, onChange}) => {
  return (
    <div className="mail-container">
      <label>{labelText} :</label>
      <input 
        type={type}
        name={name}
        placeholder={holderValue || ""}
        value={value}
        onChange={onChange}
        required
      /> 
    </div>
  )
}

export default Mail;