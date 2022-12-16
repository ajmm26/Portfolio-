const { Router, request, response, urlencoded } = require('express');
const router = Router();



const{pagInicial}=require('../controllers/pagInicial')

router.get('/',pagInicial)


module.exports={
router
}