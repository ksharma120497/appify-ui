/* eslint-disable import/no-anonymous-default-export */
import {
  ADD_WIDGET,
  ADD_PAGE,
  ADD_PAYLOAD,
  ADD_TEMPLATE,
  INCREMENT_PAGE,
  UPDATE_PAGE_NUMBER,
  DELETE_PAGE,
  DECREMENT_PAGE,
  DRAG_DROP,
  SAVE_EDITABLE,
  UPDATE_EXISTING
} from "./type";

const initialState = {
  currentPage: 1,
  payload: [],
  deletedPages: [],
};

export default (state = initialState, { type, value }) => {
  switch (type) {
    case ADD_WIDGET: {
      const { pgNo, widArr } = value;
      return {
        ...state,
        selectedWidget: {
          pgNo,
          widArr,
        },
      };
    }

    case ADD_PAGE: {
      const { pageContent, pageNumber } = value;
      return {
        ...state,
        widget: {
          ...state.widget,
          [`Page${pageNumber}`]: pageContent,
        },
      };
    }
    case ADD_PAYLOAD: {
      const lastFoundIndex = state.payload.findIndex(
        (m) => m.page === value.page
      );
      lastFoundIndex > -1
        ? state.payload.splice(lastFoundIndex, 1, value)
        : state.payload.push(value);
      return {
        ...state,
        payload: [...state.payload],
      };
    }
    case ADD_TEMPLATE: {
      return {
        ...state,
        widget: value
    }
  }
    case DRAG_DROP:{
      const { pageNumber } = value;
      return {
        ...state,
        widget: {
          ...state.widget,
          [`Page${pageNumber}`]: {
            ...state.widget[`Page${pageNumber}`],
            order: pageNumber,
          },
        },
      };
    }

    case DELETE_PAGE: {
      delete state.widget[`Page${value}`];
      return {
        ...state,
        deletedPages:
          state.deletedPages.indexOf(value) === -1
            ? [...state.deletedPages, value]
            : [...state.deletedPages],
        order: value
      };
    }
    case DECREMENT_PAGE: {
      const { currentPage } = state;
      return {
        ...state,
        currentPage: currentPage === 0 ? 0 : currentPage - 1,
      };
    }
    case INCREMENT_PAGE: {
      const { currentPage } = state;
      return {
        ...state,
        currentPage: currentPage + 1,
      };
    }
    case SAVE_EDITABLE: {
      const { pageName, pageNumber } = value;
      return {
        ...state,
        widget: {
          ...state.widget,
          [`Page${pageNumber}`]: {
            ...state.widget[`Page${pageNumber}`],
            pageName,
          },
        },
      };
    }
    case UPDATE_PAGE_NUMBER: {
      return {
        ...state,
        currentPage: value,
      };
    }

    default:
      return state;
  }
};
