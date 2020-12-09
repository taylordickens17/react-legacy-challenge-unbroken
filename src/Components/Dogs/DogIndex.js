import React from 'react'
import { Button } from 'reactstrap'

export default class DogIndex extends React.Component {
    constructor() {
        super();
        this.state = {
            myDog: []
        }
    }

    fetchDogs = () => {
        fetch('https://dog.ceo/api/breeds/image/random', {
            headers: {
                "Accept": "application/json"
            }
        })
            .then(res => res.json())
            .then(getDog => {
                this.setState({
                    myDog: getDog
                })
                console.log(this.state.myDog);
            }).catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <Button onClick={() => this.fetchDogs()}>Click for Dog</Button>
                <img src={this.state.myDog.message} />
            </div>
        )
    }
}


