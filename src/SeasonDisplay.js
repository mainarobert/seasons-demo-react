import React from 'react'
import './SeasonDisplay.css'

const seasonConfig = {
    summer: {
        text: 'It\'s summer, yay!',
        iconName : 'sun icon'
    },
    winter: {
        text: "It's winter, Brrr!",
        iconName: 'snowflake icon'
    }
}

const getSeason = (latitude, month) => {

    //months between Apr-Sept check reference.txt file
    if (month > 2 && month < 9) {

        //if latitude is greater than 0 its northern hemisphere, else southern
        return latitude > 0 ? 'summer' : 'winter';
    }

    //months other than Apr-Sept
    else {
        return latitude > 0 ? 'winter' : 'summer';
    }
    
}

const SeasonDisplay = (props) => {
    console.log(props.latitude);

    const season = getSeason(props.latitude, new Date().getMonth());
    console.log(season)

    //const text = season === 'winter' ? 'Its winter, brr!' : 'Its summer, yay!'
    const {text, iconName} = seasonConfig[season]

    return (
        <div className={`season-display ${season}`}>
            <i className= {`icon-left massive ${iconName} icon1`}></i>
            <h1>{text}</h1>
            <i className= {`icon-right massive ${iconName} icon1`}></i>
        </div>
    )
}

export default SeasonDisplay