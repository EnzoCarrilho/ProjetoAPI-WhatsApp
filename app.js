/***********************************************************************************************************************
 * Objetivo: EndPoints referente API de contatos e mensagens
 * Data: 24/09/2025
 * Autor: Enzo Felix Carrilho
 * Versão: 1.0
 **********************************************************************************************************************/
const express = require('express') 
const cors = require('cors') 
const bodyParser = require('body-parser') 


const dados = require('./modulo/funcoes.js')
const { request } = require('http')

const PORT = process.PORT || 8080

const app = express()



app.use((request, response, next)=>{
    response.header('Access-Control-Allow-Origin', '*') 
    response.header('Access-Control-Allow-Methods', 'GET') 
    app.use(cors())
    next() 
})


//ENDPOINTS
app.get('/v1/whatsapp', (request,response)=>{ 
    let usuarios = dados.getAllUsers()
    response.status(usuarios.status_code)
    response.json(usuarios)
})

app.get('/v1/whatsapp/user/:number', (request,response)=>{ 
    let userNumber = request.params.number
    let usuario = dados.getUserProfile(userNumber)
    response.status(usuario.status_code)
    response.json(usuario)
})

app.get('/v1/whatsapp/contatos/:number', (request,response)=>{ 
    let userNumber = request.params.number
    let contacts = dados.getUserContacts(userNumber)
    response.status(contacts.status_code)
    response.json(contacts)
})


app.get('/v1/whatsapp/mensagens/:number', (request,response)=>{ 
    let userNumber = request.params.number
    let contactNumber = request.query.contactNumber
    let keyWord = request.query.keyWord

    if(contactNumber && keyWord){
        let messages = dados.getMessageByKeyWord(userNumber, contactNumber, keyWord)
        response.status(messages.status_code).json(messages)

    }else if(contactNumber){
        let messages = dados.getMessagesByContactNumber(userNumber, contactNumber)
        response.status(messages.status_code).json(messages)

    }else{
        let messages = dados.getUserMessages(userNumber)
        response.status(messages.status_code).json(messages)
    }


    let messages = dados.getMessagesByContactNumber(userNumber, contactNumber)
    response.status(messages.status_code).json(messages)
})



//Start na API
app.listen(PORT, () => {
    console.log('API aguardando requisições ...')
})

