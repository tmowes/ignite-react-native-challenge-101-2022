import { StyleSheet } from 'react-native'

import { colors, fonts } from '@styles/theme'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    ...fonts.bold,
    ...fonts.sm,
    textAlign: 'center',
  },
  tag: {
    marginLeft: 4,
    maxWidth: '50%',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 16,
    marginHorizontal: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.gray_400,
  },
  tagText: {
    ...fonts.bold,
    ...fonts.sm,
    color: colors.gray_200,
    textAlign: 'center',
  },
})
