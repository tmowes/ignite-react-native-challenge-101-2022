import { Text, View } from 'react-native'

import { Check, Trash } from 'phosphor-react-native'
import { RectButton } from 'react-native-gesture-handler'

import { colors } from '@styles/theme'

import { styles } from './styles'
import { TaskCardProps } from './types'

export function TaskCard(props: TaskCardProps) {
  const { data, onRemove, onComplete } = props
  const { id, task, isDone } = data
  return (
    <View style={styles.container}>
      <RectButton
        style={styles.button}
        rippleColor={colors.gray_300}
        onPress={() => onComplete(id)}
      >
        <View style={styles.content}>
          <View style={[styles.check, isDone && styles.checked]}>
            {isDone && <Check color={colors.gray_100} weight="bold" size={18} />}
          </View>
          <Text style={[styles.title, isDone && styles.isDoneTitle]}>{task}</Text>
        </View>
        <RectButton
          style={styles.rectButton}
          rippleColor={colors.gray_400}
          onPress={() => onRemove(id)}
        >
          <Trash color={colors.gray_300} weight="regular" size={22} />
        </RectButton>
      </RectButton>
    </View>
  )
}
