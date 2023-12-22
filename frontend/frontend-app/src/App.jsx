import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store } from './store/store'
import { persistor } from './store/store'

import { HashRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <HashRouter>
            <AppRouter />
          </HashRouter>
        </PersistGate>
      </Provider>
    </>
  )
}
