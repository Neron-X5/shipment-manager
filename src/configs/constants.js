export const APP_CONSTANTS = {
    PAGE_LIMIT: 20,
    STORAGE_KEY: 'SHIPMENT_APP',
    ERROR_MESSAGE: 'Could not fetch the data. Please try again in a moment.',
    ACTION_TYPE: {
        LIST_LOADING: 'LIST_LOADING',
        DETAILS_LOADING: 'DETAILS_LOADING',
        LOAD_SHIPMENTS: 'LOAD_SHIPMENTS',
        LOAD_SHIPMENT_DETAILS: 'LOAD_SHIPMENT_DETAILS',
        RENAME_SHIPMENT: 'RENAME_SHIPMENT',
        CLOSE_LIST_TOAST: 'CLOSE_LIST_TOAST',
        CLOSE_DETAILS_TOAST: 'CLOSE_DETAILS_TOAST'
    },
    API: {
        BASE_URL: 'http://localhost:3300',
        LOAD_SHIPMENTS: 'shipments?q={query}&_page={page}&_limit={limit}&_sort={sort_by}&_order={order_by}',
        LOAD_SHIPMENT_DETAILS: 'shipments?q={shipment_id}',
        SEARCH_SHIPMENTS: 'shipments?q={query}'
    }
};
