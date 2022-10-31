const express = require('express');
const router = express.Router();
const bg = require("../bin/bluegreen")

router.get('/demo', function (req, res, next) {
    bg.getConfiguration().then(r => {
        const json = {key: "feature", value: r}
        res.json(json);
    }).catch((err) => console.log("ERROR:", err))
});

router.get('/health', function (req, res, next) {
    res.json("healthy");
});

module.exports = router;
