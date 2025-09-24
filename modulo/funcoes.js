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
    number = userNumber
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

const getMessagesByContact = function(contact){

}

const getMessageByKeyWord = function(contact, keyWord){

}

module.exports = {
    getAllUsers,
    getUserProfile,

}

//getAllUsers()
//getUserProfile(11987876567)
//getUserContacts(11987876567)
getUserMessages(11987876567)