import {
  ADD_WIDGET,
  ADD_PAGE,
  ADD_PAYLOAD,
  ADD_TEMPLATE,
  DECREMENT_PAGE,
  DELETE_PAGE,
  INCREMENT_PAGE,
  UPDATE_PAGE_NUMBER,
  SAVE_EDITABLE,
  DRAG_DROP,
 
} from "./type";
import { dispatch } from "../store";

export const saveWidget = (pgNo, widArr) => {
  dispatch({
    type: ADD_WIDGET,
    value: { pgNo, widArr },
  });
};

export const saveEditable = (pageName, pageNumber) => {
  dispatch({
    type: SAVE_EDITABLE,
    value: { pageName, pageNumber },
  });
};

export const savePageDesign = (pageContent, pageNumber) => {
  dispatch({
    type: ADD_PAGE,
    value: { pageContent, pageNumber },
  });
};

export const addTemplate = (pageContent) => {
  dispatch({
    type: ADD_TEMPLATE,
    value:  pageContent,
  });
};

export const dragDrop = (pageNumber) => {
  dispatch({
    type: DRAG_DROP,
    value: {pageNumber}
  })
}
export const incrementOnAddPage = () => {
  dispatch({
    type: INCREMENT_PAGE,
  });
};

export const decrementOnDeletePage = () => {
  dispatch({
    type: DECREMENT_PAGE,
  });
};

export const deletePage = (pageNumber) => {
  try {
    dispatch({
      type: DELETE_PAGE,
      value: pageNumber,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePageNumber = (number) => {
  dispatch({
    type: UPDATE_PAGE_NUMBER,
    value: number,
  });
};

export const savePayload = (payload) => {
  dispatch({
    type: ADD_PAYLOAD,
    value: payload,
  });
};
