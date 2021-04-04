const short_urls = require('../models/short_url');
const express = require('express');
const router = express.Router();


router.get('/', async (req, res, next) => {
    const aurls_urls = await short_urls.find();
    res.render('index', { aurls_urls: aurls_urls });
});

router.post('/aurlshort', async (req, res) => {
    await short_urls.create({ full_url: req.body.url_field });
    res.redirect('/');
});

router.get('/delete/:aurls', async (req, res, next) => {
    const item = await short_urls.deleteOne({ short_url: req.params.aurls });
    if(item == null) return res.sendStatus(404)
    res.redirect('/');
});

router.get('/:aurls', async (req, res, next) => {
    // This is now used like else case
    const item = await short_urls.findOne({ short_url: req.params.aurls });
    if(item == null) return res.sendStatus(404)
    item.clicks++
    item.save()
    res.redirect(item.full_url)
});

module.exports = router;
