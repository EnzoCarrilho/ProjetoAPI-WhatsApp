/***********************************************************************************************************************
 * Objetivo: Arquivo de funções para gerenciar a API do projeto Whatsapp
 * Data: 24/09/2025
 * Autor: Enzo Felix Carrilho
 * Versão: 1.0
 * ***********************************************************************************************************************/ 

const dados = require('./contatos.js')
const MESSAGE_ERROR = {status: false, status_code: 500, development: 'Enzo Felix Carrilho'}

// Retorna informações de todos usuários
const getAllUsers = function(){
   let users = dados.contatos['whats-users']
   
   let message = {status: true, status_code: 200, development: 'Enzo Felix Carrilho', users}
   return message
}

// Retorna dados do Perfil do usuário
const getUserProfile = function(userNumber){
    number = userNumber
    let user = dados.contatos['whats-users'].find(user => user.number == number)
    delete user.contacts

    let message = {status: true, status_code: 200, development: 'Enzo Felix Carrilho', user}
    return message
    
}

// Retorna todos os contatos de um usuário
const getUserContacts = function(userNumber){
    number = userNumber
    let user = dados.contatos['whats-users'].find(user => user.number == number)

    delete user.nickname
    delete user['created-since']
    delete user['profile-image']
    delete user.background
    user.contacts.forEach((user) => {
        delete user.messages
    })

    let message = {status: true, status_code: 200, development: 'Enzo Felix Carrilho', user}
    return message
}

// Retorna todas as mensagens de todos os contatos de um usuário
const getUserMessages = function(userNumber){
    let number = userNumber
    let user = dados.contatos['whats-users'].find(user => user.number == number)

    delete user.nickname
    delete user['created-since']
    delete user['profile-image']
    delete user.background
    user.contacts.forEach(contact => {
        delete contact.description
        delete contact.image
    })

    let message = {status: true, status_code: 200, development: 'Enzo Felix Carrilho', user}
    return message
}

// Retorna todas as mensagens de um contatos específico de um usuário
const getMessagesByContactNumber = function(userNumber, contactNumber){
    let number = userNumber
    let user = dados.contatos['whats-users'].find(user => user.number == number)

    let contact = user.contacts.find(contact => contact.number == contactNumber)
    delete contact.description
    delete contact.image

    let message = {status: true, status_code: 200, development: 'Enzo Felix Carrilho', contact}
    return message
}

// Retorna uma mensagem específica de um contato na lista de contatos do usuário
const getMessageByKeyWord = function(userNumber, contactNumber, keyWord){
    let number = userNumber
    let user = dados.contatos['whats-users'].find(user => user.number == number)

    delete user.nickname
    delete user['created-since']
    delete user['profile-image']
    delete user.background

    let contact = user.contacts.find(contact => contact.number == contactNumber)
    let contactMessage = contact.messages.filter(message => message.content.includes(keyWord))
    
    let message = {status: true, status_code: 200, development: 'Enzo Felix Carrilho', contactMessage}
    console.log(message)
    return message
    
}

module.exports = {
    getAllUsers,
    getUserProfile,
    getUserContacts,
    getUserMessages,
    getMessagesByContactNumber,
    getMessageByKeyWord,
}

//getAllUsers()
//getUserProfile('11987876567')
//getUserContacts(11987876567)
//getUserMessages(11987876567)
//getMessagesByContactNumber(11987876567, 269999799601)
//getMessageByKeyWord(11987876567, 269999799601, 'project')
