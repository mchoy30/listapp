import React from 'react';
import "antd/dist/antd.css";

import {Button as Btn} from "antd"

const buttonStyle =
{


}

const Button = props =>{

  return(

    <Btn onClick={props.onClick} style={buttonStyle}>
      {
        props.name
      }
    </Btn>

  );
}

export default Button;