function ensureAdmin(req, res, next) {
    if (req.session.user && req.session.user.role === 'admin') {
        return next(); // Allow access if user is admin
    }
    res.redirect('/login'); // Redirect to login if not admin
}

module.exports = ensureAdmin;