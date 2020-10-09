import React, { useState, useEffect }from "react"
import axios from "axios"
import { getCharacter } from "rickmortyapi"
import {} from "./App"

export default function App() {
    const [char, setChar] = useState([])
    const [currentCharId, setCurrentCharId] = useState(null)
  
    const openDetails = id => {
      setCurrentCharId(id)
    }
  
    const closeDetails = () => {
      setCurrentCharId(null)
    }

    const setChars = () => {
        axios.get(`${BASE_URL}/char/${id}}`)
          .then(res => {
            setChar(res.data)
          })
          .catch(err => {
            debugger
          })
      }
      setChars()

      return () => {
        
      }
    }, [])

    const Friend = (props) => (
        <div className='friend'>
          {props.info.name}
          <button onClick={() => openDetails(props.info.id)}>
            See details
          </button>
        </div>
    )
    
    return (
        <div className='container'>
          <h1></h1>
          {
            
            char.map(fr => {
              return <Friend key={fr.id} info={fr} />
            })
          }
          {
            currentCharId && <Details friendId={currentCharId} close={closeDetails} />
          }
        </div>
      )
    }