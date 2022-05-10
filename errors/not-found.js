/**
 * Returns a 404 error if rquested resource is not found 
 */
const notFound = (req, res) => res.status(404).send('Route does not exist')

module.exports = notFound