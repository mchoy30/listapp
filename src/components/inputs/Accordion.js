import React from 'react';

import "antd/dist/antd.css";

import {Collapse, List } from "antd"
import ListItem from './ListItem';

const accordionStyle =
{
  width: "80%"

}

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

const Accordion = props =>{

  return(
    <Collapse style={accordionStyle} accordion>
      {panels.map((panel, index) =>
        {
          return (

            <Panel key={index} header={panel.header}>
              <List
                bordered
                dataSource={panel.body}
                renderItem={item  => <ListItem title = {item} />}
               />

            </Panel>
          )
        })
      }
      </Collapse>
  );

}

export default Accordion;