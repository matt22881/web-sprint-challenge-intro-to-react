// Write your Character component here
import React, { useState } from 'react'
import Episode from './Episode'
// import Location from './Location'
import styled from 'styled-components'

const Char =styled.div`
    display: block;
    border: 1px solid  #f9e7dc;
    margin-left: 50%;
    margin-bottom: 2rem;
    width: 40vw;
    background: rgba(0, 0, 0, 0.6);
    text-align: center;
    position: relative;
`

const Head = styled.h1`
    display:block;
    width: 100%;
    margin: auto 0;
    
`

const Epis = styled.ul`
    columns: 2;
    list-style: none;
`

const ImgContainer = styled.div`
    display: inline-block;
    width: 75%;
    img {
        width: 75%;
        }
`

const BodyContainer = styled.div`
    color: #f9e7dc;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 1rem;
`

const ContentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto 0;
`

const ShowEpisodes = styled.button`
    background-color: #f9e7dc;
    display: inline-block;
    border: 1px solid black;
    width: 25%;
    margin: 1rem auto;
    border-radius: 5px;
`

export default function Character(props) {

    const { name, url, status, species, image, episode, location  } = props.character

    const [toggle, toggleToggle] = useState(false)
    const onClick = (e) => {
        toggleToggle(!toggle)
    } 

    return (
        <Char> 
            <BodyContainer>
                <Head>  {/* eslint-disable-next-line*/}
                    <a href={url} target='_blank'>{name}</a>
                </Head>
                <ContentContainer id='big'>
                    <ImgContainer>
                        <img src={image} alt={name} />
                    </ImgContainer>
                    <ContentContainer className='column'>
                        <ContentContainer className='column'>
                            <h2>Species:</h2>
                            <p>{species}</p>
                        </ContentContainer>
                        <ContentContainer className='column'>
                            <h2>Status:</h2>
                            <p>{status}</p>
                        </ContentContainer>
                        <ContentContainer className='column'>
                            <h3>Last Known Location:</h3>  {/*eslint-disable-next-line*/}
                            <a href={location.url} target='_blank'>{location.name}</a>
                        </ContentContainer>
                    </ContentContainer>
                </ContentContainer>
                    <ContentContainer className='row'>
                        <h4>Want to see all their Episodes?</h4>
                        <ShowEpisodes onClick={onClick}>{!toggle ? 'Show Me!' : 'Hide Them'}</ShowEpisodes>
                    </ContentContainer>
            </BodyContainer>

                <Epis>
                    {toggle ? 
                        episode.map(epi => {
                        return (<Episode
                            episode={epi}
                            episodes={props.episodes}
                            key={episode.id}
                        />)
                        })
                    : null}
                </Epis>
        </Char>
    )
}
