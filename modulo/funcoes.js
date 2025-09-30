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
   console.log(message)
}

// Retorna dados do Perfil do usuário
const getUserProfile = function(userNumber){
    number = userNumber
    let user = dados.contatos['whats-users'].find(user => user.number == number)
    delete user.contacts

    let message = {status: true, status_code: 200, development: 'Enzo Felix Carrilho', user}
    console.log(message)
}

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
    console.log(message)
}

const getUserMessages = function(userNumber){
    let number = userNumber
    let user = dados.contatos['whats-users'].find(user => user.number == number)

    let userMessages = user.contacts
    userMessages.forEach((contact) => {
        delete contact.name
        delete contact.description
        delete contact.image
    })

    let message = {status: true, status_code: 200, development: 'Enzo Felix Carrilho', userMessages}
    console.log(message)
}

const getMessagesByContactNumber = function(userNumber, contactNumber){
    let number = userNumber
    let user = dados.contatos['whats-users'].find(user => user.number == number)

    let contact = user.contacts.find(contact => contact.number == contactNumber)
    delete contact.description
    delete contact.image

    let message = {status: true, status_code: 200, development: 'Enzo Felix Carrilho', contact}
    console.log(message)
}

const getMessageByKeyWord = function(userNumber, contactNumber, keyWord){
    let number = userNumber
    let user = dados.contatos['whats-users'].find(user => user.number == number)

    let contact = user.contacts.find(contact => contact.number == contactNumber)
    let contactMessage = contact.messages.filter(message => message.content.includes(keyWord))
    console.log(contactMessage)
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
//getUserProfile(11987876567)
//getUserContacts(11987876567)
//getUserMessages(11987876567)
//getMessagesByContactNumber(11987876567, 269999799601)
//getMessageByKeyWord(11987876567, 269999799601, 'project')
