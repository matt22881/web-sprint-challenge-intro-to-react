import React from 'react'

export default function Episode(props) {
    

    const episode = props.episode
    const epiName = props.episodes.map(epi => (epi.url === episode) ?  epi.name : null)
    return (
       <li>
           <a href={episode.url}>{epiName}</a>
       </li>
    )
}

            
    
        
                        