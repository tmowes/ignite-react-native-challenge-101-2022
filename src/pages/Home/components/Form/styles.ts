import { StyleSheet } from 'react-native'

import { colors, fonts } from '@styles/theme'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: -52 / 2,
  },
  input: {
    flex: 1,
    marginRight: 4,
    height: 52,
    backgroundColor: colors.gray_500,
    borderRadius: 8,
    paddingHorizontal: 16,
    color: '#E1E1E6',
    ...fonts.regular,
    ...fonts.lg,
    borderWidth: 1,
    borderColor: colors.gray_700,
    elevation: 4,
  },
  inputFocused: {
    borderColor: colors.primary_700,
  },
  rectButton: {
    backgroundColor: colors.secondary_700,
    height: 52,
    width: 52,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
})
