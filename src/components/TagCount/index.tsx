import { Text, View } from 'react-native'

import { colors } from '@styles/theme'

import { styles } from './styles'
import { TagCountProps } from './types'

export function TagCount(props: TagCountProps) {
  const { count = 0, title = 'Concluídas', color = 'primary_500' } = props
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors[color] }]}>{title}</Text>
      <View style={styles.tag}>
        <Text style={styles.tagText}>{count}</Text>
      </View>
    </View>
  )
}
