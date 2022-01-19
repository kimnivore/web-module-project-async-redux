import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { fetchActivityFail, FETCH_ACTIVITY_FAIL, getActivity } from './../actions';

const Activity = ({ activity, isFetching, error, dispatch }) => {
    
    useEffect(() => {
        dispatch(getActivity());
    }, []);

    if (error) {
        return <h2> There is an error: {error} </h2>;
    }

    if (isFetching) {
        return <h2> Searching for the perfect activity to cure your boredom! </h2>;
    }

    const handleClick = () => {
        dispatch(getActivity());
    }

    return (
        <div> 
            <button onClick={handleClick}>Click for an activity</button>
            <button onClick={() => {dispatch(fetchActivityFail('Error Triggered'));}}>Trigger an error</button>
            <h2>{activity.activity}</h2>
            <p>Type: {activity.type}</p>
            <p>Participants: {activity.participants}</p>
            <p>Price: ${activity.price}</p>
            <p>{activity.link}</p>
        </div>
    )
}

const mapStatetoProps = state => {
    return {
        activity: state.activity,
        isFetching: state.isFetching,
        error: state.error
    }
}
export default connect(mapStatetoProps)(Activity);