import React, { Component, useState, useEffect } from 'react';
import styled from 'styled-components'
import axios from 'axios'
import url from './url'
import './App.css';

class App extends Component{
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  
   this.setState([chars, addChars])
  [ currentChar, setCurrentChar ] = this.setState(null)
  
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
useEffect((chars) => {

    let i = 0
    const fetchChars = () => {
        i++
        if (i <= 34){
        axios.get(`${url}${i}`)
        .then(res => {
            
            addChars([...chars, res.data.results])
            console.log(res.data.results)
            // debugger
            })
        .catch(err => {
            console.log(err)
            // debugger
            })
        }
    
    } 
    fetchChars()

}, [])

    const openChar = id => {
        setCurrentChar(id)
    }

    const closeChar = () => {
        setCurrentChar(null)
    }

    const Current = (props) => (
        <div className='current'>
            {props.info.name}
            <button onClick={() => openChar(props.info.id)}>
                See Details
            </button>
        </div>
    )

    function Info(props) {
        console.log(props)
        debugger

    } 

    return (
        <div className='container'>
        <h1 className="Header">Characters</h1>
            {/* { 
            chars.map(ch => {
                return <Current key={ch.id} info={ch} />
            })}
            
            {
                currentChar && <Info charId={currentChar} close={closeChar} />
            } */}
        </div>
    );
}

export default App;
