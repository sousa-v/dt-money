export const { format: dateFormatter } = Intl.DateTimeFormat('pt-BR')

export const { format: priceFormatter } = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})
