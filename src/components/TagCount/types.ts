import { colors } from '@styles/theme'

export type TagCountProps = {
  title?: string
  count?: number
  color?: keyof typeof colors
}
