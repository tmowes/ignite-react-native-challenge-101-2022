import { Text, View } from 'react-native'

import { ClipboardText } from 'phosphor-react-native'

import { colors } from '@styles/theme'

import { styles } from './styles'

export function EmptyMessage() {
  return (
    <View style={styles.container}>
      <ClipboardText size={56} color={colors.gray_400} weight="light" />
      <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.description}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  )
}
