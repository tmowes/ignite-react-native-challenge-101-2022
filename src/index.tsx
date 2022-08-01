import { StatusBar } from 'react-native'

import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter'

import { colors } from '@styles/theme'

import { Home } from './pages/Home'

export default function AppSrc() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: colors.gray_600 }}>
      <Home />
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
    </GestureHandlerRootView>
  )
}
