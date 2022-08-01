import { StyleSheet } from 'react-native'

import { colors, fonts } from '@styles/theme'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.gray_500,
    borderRadius: 8,
    marginBottom: 8,
    borderColor: colors.gray_400,
    borderWidth: 1,
    overflow: 'hidden',
    elevation: 4,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    padding: 12,
    paddingRight: 8,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  check: {
    backgroundColor: 'transparent',
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.secondary_500,
    borderWidth: 2,
  },
  checked: {
    backgroundColor: colors.primary_700,
    borderColor: colors.primary_700,
    borderWidth: 2,

  },
  title: {
    flex: 1,
    paddingHorizontal: 8,
    ...fonts.regular,
    ...fonts.md,
    color: colors.gray_100,
  },
  isDoneTitle: {
    textDecorationLine: 'line-through',
    color: colors.gray_300,
  },
  rectButton: {
    backgroundColor: colors.gray_500,
    height: 52,
    width: 52,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
