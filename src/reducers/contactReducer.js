import {
  FETCH_CONTACTS_REQUEST,
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACTS_FAILURE,
} from "../actions/contactActions";

const initialState = {
  loading: false,
  contacts: [],
  error: "",
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONTACTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CONTACTS_SUCCESS:
      return {
        ...state,
        loading: false,
        contacts: action.payload.contacts,
        error: "",
      };
    case FETCH_CONTACTS_FAILURE:
      return {
        ...state,
        loading: false,
        contacts: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default contactReducer;
