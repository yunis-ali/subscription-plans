export default (req, res) => {
  res.statusCode = 200
  res.json([
    { code: 'GB', name: 'UK', monthly: 10, annually: 50 },
    { code: 'FR', name: 'France', monthly: 10, annually: 60 },
    { code: 'DE', name: 'Germany', monthly: 15, annually: 75 },
    { code: 'US', name: 'USA', monthly: 25, annually: 150 },
    { code: 'JP', name: 'Japan', monthly: 15, annually: 65 }
  ])
}
