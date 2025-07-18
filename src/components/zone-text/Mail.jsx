import "./Mail.scss"

const Mail = ({labelText, type, name, holderValue}) => {
  return (
    <div className="mail-container">
      <label>{labelText} :</label>
      <input 
        type={type}
        name={name}
        placeholder={holderValue || ""}
        required
      /> 
    </div>
  )
}

export default Mail;