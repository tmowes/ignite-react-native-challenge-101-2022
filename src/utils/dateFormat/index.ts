import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { convertToTitle } from '../convertString/toTitle'

export const dateFormat = (date: Date) =>
  convertToTitle(format(date, "eeee', 'dd' de 'MMMM' de 'yyyy", { locale: ptBR }))
