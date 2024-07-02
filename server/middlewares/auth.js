const { verifyToken } = require('../adaptors/Users');

function ensureAuth(req, res, next) {
  const token = req.cookies.token

  if(!token) return res.status(401).json({ message: 'Não autorizado: nenhum token foi encontrado' })
  
  try {
    const user = verifyToken(token)
    req.user = user
    next()
  } catch (error) {
    res.clearCookie("token")
  }
  
}

module.exports = { ensureAuth }