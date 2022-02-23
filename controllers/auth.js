const router = express.Router();

router.get('/login', (req, res) => {
    res.send('A GET route!');
});

module.exports = router;
