import { StyleSheet } from 'react-native'

import { colors, fonts } from '@styles/theme'

export const styles = StyleSheet.create({
  container: {
    padding: 32,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: colors.gray_400,
  },
  title: {
    ...fonts.bold,
    ...fonts.md,
    color: colors.gray_300,
    textAlign: 'center',
  },
  description: {
    ...fonts.regular,
    ...fonts.md,
    color: colors.gray_300,
    textAlign: 'center',
  },
})
