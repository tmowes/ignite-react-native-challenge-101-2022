import { StyleSheet } from 'react-native'

import { colors, fonts } from '@styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray_600,
  },
  content: {
    paddingHorizontal: 16,
  },

  listHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  title: {
    ...fonts.bold,
    ...fonts.lg,
    color: colors.primary_500,
  },
  description: {
    ...fonts.regular,
    ...fonts.md,
    color: colors.secondary_500,
  },
})
