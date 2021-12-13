import { SEARCH_TITLE, CHANGE_SHOW_SET } from '../actionTypes';

export const searchTitle = (searchTerms) => {
  return {
    type: SEARCH_TITLE,
    payload: {
      searchTerms: searchTerms,
    },
  };
};

export const changeShowSet = (newSet) => {
  return {
    type: CHANGE_SHOW_SET,
    payload: {
      newSet: newSet,
    },
  };
};
