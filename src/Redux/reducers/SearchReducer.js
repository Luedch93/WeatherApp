
const initialState = {
    'search': '',
    'weatherList': [],
}

export default function(state=initialState, action) {
    switch (action.type) {
        case 'SET_SEARCH_VAL':
            return { ...state, search: action.payload.value} 
        case 'SET_WEATHER_DATA':
            return { ...state, weatherList: action.payload.weatherList }   
        default:
            return state
    }
}