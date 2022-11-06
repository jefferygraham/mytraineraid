import React, { useEffect } from 'react'
import { AppRegistry, LogBox } from 'react-native'
import { Provider } from 'react-redux'
import { extendTheme, DNProvider, TranslationProvider } from 'dopenative'
import reduxStore from './redux/store'
import AppContent from './AppContent'
import translations from './translations'
import { ConfigProvider } from './config'
import { AuthProvider } from './Core/onboarding/hooks/useAuth'
import { ProfileAuthProvider } from './Core/profile/hooks/useProfileAuth'
import { authManager } from './Core/onboarding/api'
import MytraineraidTheme from './theme'
import 'react-native-gesture-handler'

const App = () => {
  const theme = extendTheme(MytraineraidTheme)

  useEffect(() => {
    LogBox.ignoreAllLogs(true)
  }, [])

  return (
    <Provider store={reduxStore}>
      <TranslationProvider translations={translations}>
        <DNProvider theme={theme}>
          <ConfigProvider>
            <AuthProvider authManager={authManager}>
              <ProfileAuthProvider authManager={authManager}>
                <AppContent />
              </ProfileAuthProvider>
            </AuthProvider>
          </ConfigProvider>
        </DNProvider>
      </TranslationProvider>
    </Provider>
  )
}

App.propTypes = {}

App.defaultProps = {}

AppRegistry.registerComponent('App', () => App)

export default App
