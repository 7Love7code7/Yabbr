/* eslint-disable no-param-reassign */
const fetchIntercept = (statusHandlers = {}, fetchContext = global) => {
  const _fetch = fetchContext.fetch;

  return createStore => (reducer, initialState, enhancer) => {
    const store = createStore(reducer, initialState, enhancer);

    fetchContext.fetch = async (url, options) => {
      const resp = await _fetch(url, options);
      const maybeHandler = statusHandlers[`${resp.status}`];

      if (maybeHandler) {
        maybeHandler(store.dispatch, resp);
      }

      return resp;
    };

    return store;
  };
};

const FetchInterceptor = fetchIntercept({
  200: async (dispatch, response) => {
    console.log('response', response, dispatch);
    const text = await response.text();
    console.log(text);
  }
});

export default FetchInterceptor;
