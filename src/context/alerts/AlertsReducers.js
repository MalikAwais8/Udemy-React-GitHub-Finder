const alertReducer = (state , action) => {
    switch(action.type){
        case 'SET_ALERT':
        //YAHAN SE HUM KOI STATE RETURN KRIENGY...
        return action.payload
        
        case 'REMOVE_ALERT':
            return  null
        default:
            return state
    }
}

export default alertReducer