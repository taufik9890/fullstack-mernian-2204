const User = require('../model/userModel')

let changeRoleController = async (req, res) => {
    const { userId, role } = req.body
    if (!['Admin', 'Merchant', 'User'].includes(role)) {
        return res.status(400).json({ error: 'Invalid role' })
    }
    await User.findByIdAndUpdate(userId, { role })
    res.json({ success: `Role updated to ${role}` })
}

module.exports = changeRoleController