import React from 'react'

function MissedGoal() {
    return <h1>Missed Goal!</h1>
}

function MadeGoal() {
    return <h1>Made Goal!</h1>
}

function Goal(props) {
    const isGoal = props.isGoal;

    if (isGoal) {
        return <MadeGoal />
    }
    return <MissedGoal />
}

export default Goal;