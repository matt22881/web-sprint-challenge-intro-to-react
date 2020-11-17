import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Character from './components/Character'
import styled from 'styled-components'

const app = styled.div`
    display: flex;
    max-width: 40vw;
    border: 2px dotted brown;
    padding: 2rem;
  `
const App = () => {

//   const [ myState, setMyState ] = useState(null) 
  
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters, setCharacters] = useState([])
  const [episodes, setEpisodes] = useState([])
  const [locations, setLocations] = useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

    useEffect(() => {
        axios
            .get('http://localhost:4242/api/character')
            .then(res => {
                setCharacters(Array.from(res.data)
            )})
            .catch(err => {
                console.log('!!ERR!! (get #1): ', err)
                // alert(`Something ain't right here, bud =( (get#1)`)
                // debugger
            })
    },[])

    useEffect(() => {
            axios
                .get(`http://localhost:4242/api/episode`)
                .then(res => {
                    setEpisodes(Array.from(res.data))
                })
                .catch(err => {
                    console.log('!!ERR!! (get #2): ', err)
                    // alert(`Something ain't right here, bud =( (get#2)`)
                    // debugger
                })            
    },[])

    useEffect(() => {
            axios
                .get(`http://localhost:4242/api/location`)
                .then(res => {
                    setLocations(Array.from(res.data))
                })
                .catch(err => {
                    console.log('!!ERR!! (get #3): ', err)
                    // alert(`Something ain't right here, bud =( (get#3)`)
                    // debugger
                })
    },[])

  return (

<div>
    <div className='filler'></div>
    <div>
        <app>
            {
            characters.map(character => {
                return (<Character
                    character={character}
                    episodes={episodes}
                    locations={locations}
                    key={character.id}
                    />)})
            }
        </app>
    </div>
</div>
  )
}


export default App;
