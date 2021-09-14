import React from 'react'

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

    const season = getSeason(props.latitude, new Date().getMonth())
    console.log(season)

    const text = season === 'winter' ? 'Its winter, brr!' : 'Its summer, yay!'

    return (
        <div>
            <h1>{text}</h1>
        </div>
    )
}

export default SeasonDisplay
