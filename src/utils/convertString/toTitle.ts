export const convertToTitle = (text: string) =>
  text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\w\S*/g, (char) =>
      char.length > 2
        ? char.charAt(0).toUpperCase() + char.substring(1).toLowerCase()
        : char,
    )
    .replace(/-/g, ' ')
    .trim()
