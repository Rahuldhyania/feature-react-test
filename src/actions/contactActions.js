import axios from "axios";

// Action Types
export const FETCH_CONTACTS_REQUEST = "FETCH_CONTACTS_REQUEST";
export const FETCH_CONTACTS_SUCCESS = "FETCH_CONTACTS_SUCCESS";
export const FETCH_CONTACTS_FAILURE = "FETCH_CONTACTS_FAILURE";

// Action Creators
const fetchContactsRequest = () => ({
  type: FETCH_CONTACTS_REQUEST,
});

const fetchContactsSuccess = (contacts) => ({
  type: FETCH_CONTACTS_SUCCESS,
  payload: contacts,
});

const fetchContactsFailure = (error) => ({
  type: FETCH_CONTACTS_FAILURE,
  payload: error,
});

export const fetchContacts = (params) => {
  return (dispatch) => {
    // Dispatching the initial request action
    dispatch(fetchContactsRequest());

    const endpoint = "https://api.dev.pastorsline.com/api/contacts.json";

    // Set headers and default params
    const headers = {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjU2MCwiZXhwIjoxNzI2NTY3MTc5LCJ0eXBlIjoiYWNjZXNzIiwidGltZXN0YW1wIjoxNjk1MDMxMTc5fQ.0y7NtuVDCvcPvmWbliMs1q02sov2oFC6u2Hi6H4A2W4",
    };

    const defaultParams = {
      // companyId: 171,
      companyId: 560,
      noGroupDuplicates: 1,
      ...params,
    };

    axios
      .get(endpoint, { headers, params: defaultParams })
      .then((response) => {
        // Dispatch the success action with the contacts data
        dispatch(fetchContactsSuccess(response.data));
      })
      .catch((error) => {
        // Dispatch the failure action with the error message
        dispatch(fetchContactsFailure(error.message));
      });
  };
};
