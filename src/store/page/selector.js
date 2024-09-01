import { createSelector } from 'reselect';

const rootSelector = state=>state.Page;

export const currentPageNumberSelector = createSelector(
    rootSelector,
    items=> items.currentPage
)

export const pageDesignSelector = createSelector(
    rootSelector,
    items=> items.widget
)

export const selectedWidget = createSelector(
    rootSelector,
    items=> items.selectedWidget
)

export const previousPagePayloadSelector = createSelector(
    rootSelector,
    items=>items.payload
)

export const deletedPageNumbersSelector = createSelector(
    rootSelector,
    items=>items.deletedPages
)