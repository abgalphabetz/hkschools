const logger = (store: any) => (next: any) => (action: any) => {
    console.group(action.type);
    console.log('dispatching: ', action);
    console.log('prev state: ', store.getState());
    const result = next(action);
    console.log('next state: ', store.getState());
    // console.groupEnd(action.type);
    console.groupEnd();
    return result;
  };
  
  export default logger;