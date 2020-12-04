export default (req, res) => {
  res.statusCode = 200
  res.json([
    { code: 'GBP', symbol: '£' },
    { code: 'EUR', symbol: '€' },
    { code: 'USD', symbol: '$' },
    { code: 'AUD', symbol: '$' }
  ])
}