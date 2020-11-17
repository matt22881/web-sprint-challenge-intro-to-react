import React, { Component } from 'react'
import App from './components/Character'
import { props } from './App.js'

class GetCharCard extends Component(props) {
    super(props) {

        const [ isDead , checkIsDead() ] = useState(false)
        checkIsDead = () => { this.status!=="Alive" ? checkIsDead(true) : checkIsDead(false) }

        return (
            <Card { (this.status==='Alive') ? className='alive' : className='dead'} >      
                <moreCard inverse>
                    <CardImg width='100%' src='this.image' alt='Card image cap' />
                    <CardImgOverlay>
                        <CardTitle>this.Character</CardTitle>
                        <CardText>`${this.name} has been in ${this.episode.length} episode(s),`</CardText>
                        <CardText>
                            <small className='text-muted' textContent= { `( ${isDead} )` ? `alas they died `: `would you believe they still live??!!` } />
                        </CardText>
                    </CardImgOverlay>
                    <Button color="primary" onClick={toggle}>Toggle Fade</Button>
                    <Fade in={fadeIn} tag="h5" className="mt-3">Watch me disappear</Fade>
                </moreCard>
            </Card>
        )
    }
}
export default GetCharCard
