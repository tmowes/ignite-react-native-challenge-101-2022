import { useState } from 'react'
import { TextInput, View } from 'react-native'

import { PlusCircle } from 'phosphor-react-native'
import { RectButton } from 'react-native-gesture-handler'

import { colors } from '@styles/theme'

import { styles } from './styles'
import { FormProps } from './types'

export function Form(props: FormProps) {
  const { onAdd } = props
  const [isFocused, setIsFocused] = useState(false)
  const [value, setValue] = useState('')

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, isFocused && styles.inputFocused]}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={colors.gray_300}
        value={value}
        onChangeText={(text) => setValue(text)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onEndEditing={() => {
          setValue('')
          setIsFocused(false)
        }}
        onSubmitEditing={() => {
          onAdd(value)
          setValue('')
        }}
      />
      <RectButton style={styles.rectButton} onPress={() => onAdd(value)}>
        <PlusCircle color={colors.gray_100} weight="regular" size={22} />
      </RectButton>
    </View>
  )
}
