import { TOGGLE_LEADER_RAMA,  
    TOGGLE_LEADER_NEKEISHA, 
    TOGGLE_LEADER_TONIA, 
    TOGGLE_LEADER_CRYSTAL,
    TOGGLE_MARCH,
    TOGGLE_DECEMBER,
    TOGGLE_NOVEMBER} from './../Actions';

const initialState = {
    showLeaderRama: false,
    showLeaderNekeisha: false,
    showLeaderTonia: false,
    showLeaderCrystal: false,
    showMediaDec: false,
    showMediaNov: false,
    showMediaMarch: false,

}

export const toggleReducers = (state = initialState, {type}) => {
    switch(type) {
        case TOGGLE_LEADER_RAMA:
            return {...state, showLeaderRama: !state.showLeaderRama}
        case TOGGLE_LEADER_NEKEISHA:
            return {...state, showLeaderNekeisha: !state.showLeaderNekeisha}
        case TOGGLE_LEADER_TONIA:
            return {...state, showLeaderTonia: !state.showLeaderTonia}
        case TOGGLE_LEADER_CRYSTAL:
            return {...state, showLeaderCrystal: !state.showLeaderCrystal}
        case TOGGLE_DECEMBER:
            return {...state, showMediaDec: !state.showMediaDec}
        case TOGGLE_NOVEMBER:
            return {...state, showMediaNov: !state.showMediaNov}
        case TOGGLE_MARCH:
            return {...state, showMediaMarch: !state.showMediaMarch}
        default:
            return state;
    }
}

