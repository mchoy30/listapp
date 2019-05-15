import React from 'react';
import Accordion from './inputs/Accordion';
import Button from './inputs/Button';
import Modal from ''


const HomePage = props =>{

  return(
    <div style = {{display:"flex", flexDirection:"column", width:"50%"} }>
    <Accordion/>
    <Button  name="Add List" onClick={props.addList}/>
    </div>

  );




}

export default HomePage;