export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,
    //token:'BQBghpR7vo0QgIypnZvivEiJyvjpKJ7IKPOASe9jgz6kxmWfqquAouUNuuLcw5GZq0kLOUGoX6AUjGLayl0dG2sxl4UsHh_lAfOOIJBF3Yn9i9YD3F2nl9eCIM4FGGw1n072zZeReJwRx9rN3AbYsAIwAHZ2D35UMHNNOipJ0ZWJDHpLaS1_8NcL'
  };


const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'SET_USER':
        return{
            ...state,
            user:action.user
        }
        case 'SET_TOKEN':
            return{
                ...state,
                token:action.token
            }
        
            case "SET_PLAYLISTS":
                return {
                  ...state,
                  playlists: action.playlists,
                };
            case "SET_DISCOVER_WEEKLY":
                return {
                    ...state,
                    discover_weekly: action.discover_weekly,
                    };
                
        default:
            return state;
    }
}

export default reducer;