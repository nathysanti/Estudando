const {Router} = require('express');

const router = new Router();

router.get('/',(req,res) =>{
    return res.json({message: 'Okay'})
});

module.exports = routes;
