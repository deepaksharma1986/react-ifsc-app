import {
    GET_BANKS, GET_STATES,
    UPDATE_BANK_NAME, GET_CITIES,
    UPDATE_STATE_NAME, UPDATE_CITY_NAME,
    GET_BANK_DETAILS
} from '../constants';

export function bankReducers(state = {
    banksList: [], statesList: [],
    selectedBankName: '', citiesList: [],
    selectedName: '', selectedCityName: '',
    data: []
}, action) {

    switch (action.type) {

        case GET_BANKS:
            return {
                banksList: action.payload,
                statesList: state.statesList,
                selectedBankName: state.selectedBankName,
                citiesList: state.citiesList,
                selectedName: state.selectedName,
                selectedCityName: state.selectedCityName,
                data: state.data
            }
            break;

        case GET_STATES:
            return {
                selectedBankName: state.selectedBankName,
                banksList: state.banksList,
                statesList: action.payload,
                selectedName: state.selectedName,
                selectedCityName: state.selectedCityName,
                citiesList: state.citiesList,
                data: state.data
            }
            break;

        case GET_CITIES:
            return {
                banksList: state.banksList,
                statesList: state.statesList,
                selectedBankName: state.selectedBankName,
                citiesList: action.payload,
                selectedCityName: state.selectedCityName,
                selectedName: state.selectedName,
                data: state.data
            }
            break;

        case UPDATE_BANK_NAME:
            return {
                banksList: state.banksList,
                statesList: state.statesList,
                selectedBankName: action.payload,
                selectedName: state.selectedName,
                selectedCityName: state.selectedCityName,
                citiesList: state.citiesList,
                data: state.data
            }
            break;

        case UPDATE_STATE_NAME:
            return {
                banksList: state.banksList,
                statesList: state.statesList,
                selectedBankName: state.selectedBankName,
                citiesList: state.citiesList,
                selectedName: action.payload,
                selectedCityName: state.selectedCityName,
                data: state.data
            }
            break;

        case UPDATE_CITY_NAME:
            return {
                banksList: state.banksList,
                statesList: state.statesList,
                selectedBankName: state.selectedBankName,
                citiesList: state.citiesList,
                selectedName: state.selectedName,
                selectedCityName: action.payload,
                data: state.data
            }
            break;

        case GET_BANK_DETAILS:
            return {
                banksList: state.banksList,
                statesList: state.statesList,
                selectedBankName: state.selectedBankName,
                citiesList: state.citiesList,
                selectedName: state.selectedName,
                selectedCityName: state.selectedCityName,
                data: action.payload
            }
            break;
    }

    return state;
}