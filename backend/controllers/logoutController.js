let logoutController = async (req, res) => {
    try {
        res.json({ success: "Logout Successful!" })
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = logoutController