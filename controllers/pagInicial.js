const{request,response}=require('express')

const pagInicial=(request,response)=>{
    response.render(
        'index',
        {titulo:'home'})
}

module.exports={
    pagInicial
}