import React, { Component } from 'react';

import "antd/dist/antd.css";

import {List, Checkbox } from "antd";


const Item = List.Item;


class ListItem extends React.Component{


  constructor(props)
  {
    super(props);
    this.state =
    {
      checked: false
    }

    this.isChecked = this.isChecked.bind(this)
  };

  isChecked =()=>{
    this.setState(function (prevState)
    {
      return{
        checked: !prevState.checked
      }
    }

    )
  }

  render(){
    return (
     <Item onClick={this.isChecked}>
        {this.props.title}
        <Checkbox checked = {this.state.checked}/>
     </Item>
  );
   }
}


export default ListItem;