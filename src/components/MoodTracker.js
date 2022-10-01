import React, {useState} from 'react';

const MoodTracker = (props) => {
const [state, setState] = useState({
    moodPoints:0

})

const onChangeMoodUpdateFn = (e) => {
    let NewMoodPoints = state.moodPoints + 10;
    setState({
        moodPoints: NewMoodPoints
    })
}

  return (
    <div>
         <p>On a scale of 1-100</p>
    <p>You are this happy: {state.moodPoints}</p>
    <button onClick={onChangeMoodUpdateFn}>Cheer Up!</button>
    </div>
  )
}

export default MoodTracker;