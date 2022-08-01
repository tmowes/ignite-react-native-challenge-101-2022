import { View } from 'react-native'

import { LogoSvg } from '@components/Logo'

import { styles } from './styles'

export function Header() {
  return (
    <View style={styles.container}>
      <LogoSvg />
    </View>
  )
}
