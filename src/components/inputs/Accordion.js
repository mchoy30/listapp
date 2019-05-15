import React, { Component } from 'react';

import "antd/dist/antd.css";

import {Collapse, List } from "antd"
import ListItem from './ListItem';
import Button from './Button';




const Panel = Collapse.Panel

const panels = [

  {
    header: "Card 1",
    body: ["Card 1 body", "test 2 ", "asasf"],

  },
  {
    header: "Card 2",
    body: ["Card 2 body"],
  }
]

class Accordion extends React.Component{
  constructor(props)
  {
    super(props)
    this.state = {
      panels: [

        {
          header: "Card 1",
          body: ["Card 1 body", "test 2 ", "asasf"],

        },
        {
          header: "Card 2",
          body: ["Card 2 body"],
        }
      ]
    }


  }



  render(){
    return(
    <Collapse accordion>
      {panels.map((panel, index) =>
        { return (
            <Panel key={index} header={panel.header}>
              <List
                bordered
                dataSource={panel.body}
                renderItem={item  => <ListItem title = {item} />}
               />
            <Button name="Add Item" onClick={console.log("asf")}/>
            </Panel>
          )
        })
      }
      </Collapse>
  );}

}

export default Accordion;