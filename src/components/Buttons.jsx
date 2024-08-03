import { Children } from "react";

const Button = ({children, color, onChangeColor}) =>{
    return(
        <button onClick={onChangeColor} style={{backgroundColor: color}}>{children}</button>
    );
};

export default Button;