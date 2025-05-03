const currencyFormatter = new Intl.NumberFormat(
    undefined,
    { currency: 'XAF', style: 'currency' }
)

export const formatCurrency = (amount: number) => {
    return currencyFormatter.format(amount)
}