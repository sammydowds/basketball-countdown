import React, { Component } from 'react'; 
import moment from 'moment';
import { highlights } from './highlights'; 
import {
    Jumbotron, 
    Container
} from 'reactstrap'; 


class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: null, 
            nbaStart: null, 
        }; 
    }

    tickDown() {
        let tick = this.state.count - 1; 
        this.setState({count: tick}); 
    }

    componentDidMount() {
        let now = moment(); 
        let nba = moment('2020-07-30'); 
        let delta = nba.diff(now, 'seconds'); 
        this.setState({count: delta, nbaStart: nba}); 
        setInterval(() => {
            this.tickDown(); 
        }, 1000); 
    }

    render () {
        let totalSeconds = this.state.count; 
        let days = Math.floor(totalSeconds/86400); 
        totalSeconds = totalSeconds %= 86400; 
        let hours = Math.floor(totalSeconds/3600); 
        totalSeconds = totalSeconds %= 3600; 
        let minutes = Math.floor(totalSeconds/60); 
        let seconds = totalSeconds % 60; 
        let highlight_info = highlights.map((highlight) => {
            return(
                <p>
                    <a href={highlight[0]} target="_blank">{highlight[1]}</a>
                </p>
            )
        })
        return(
            <div className='main-component' >
                <Jumbotron className='bg-transparent' fluid>
                    <Container fluid>
                        <img src="heart.png" /> <img src='nB@.png' />
                        <h1 className='display-2'>NBA is coming back in: </h1>
                        <h3 className='display-3'>{days} days {hours} hours {minutes} minutes {seconds} seconds</h3>
                        {highlight_info}
                    </Container>
                </Jumbotron>
            <div>
    </div>
                
            </div>
        ); 
    }

}

export default Main; 
