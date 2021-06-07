const path = require('path');
const router = require ('express').router();

router.get('/notes') 
{
    res.sendfile (path.join(__dirname, '../public/notes.html'));

}

router.get('/index')
{
    res.sendfile (path.join(__dirname, "../public/index.html"));
}

module.exports = router;