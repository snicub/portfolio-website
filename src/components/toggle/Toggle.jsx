import "./toggle.css"
import Sun from "../../img/sun.png"
import Moon from "../../img/moon1.png"
import { useContext } from "react"
import { ThemeContext } from "../../context"

const Toggle = () => {
  const theme = useContext(ThemeContext);
  const handleClick = () => {
    theme.dispatch({type:"TOGGLE"})
  }

  return (
    <div classname = "t">
      <img src={Moon} alt="" className="t-icon" />
        <img src={Sun} alt="" className="t-icon" />
        
        <div className="t-button" onClick = {handleClick} style = {{left: theme.state.darkMode ? 0 : 25 }}></div>
    </div>
  )
}

export default Toggle