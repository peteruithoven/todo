import React from 'react';
import ReactDom from 'react-dom';
import ToDoApp from './containers/ToDoApp.js';
import {createStore, compose} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers/index.js';
// import {devTools, persistState} from 'redux-devtools';
// import {DevTools, DebugPanel, LogMonitor} from 'redux-devtools/lib/react';

const store = createStore(rootReducer);
// const finalCreateStore = compose(
//   devTools(),
//   persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
//   createStore
// );
// 
// const store = finalCreateStore(rootReducer);

export default class Root extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <ToDoApp />
      </Provider>
    );
    // return (
    //   <div>
    //     <Provider store={store}>
    //       {() => <ToDoApp />}
    //     </Provider>
    //     <DebugPanel left top bottom>
    //       <DevTools store={store}
    //                 monitor={LogMonitor} />
    //     </DebugPanel>
    //   </div>
    // );
  }
}

ReactDom.render(<Root />, document.getElementById('app'));
