const {getTitle} = require('./view') 
const {printTable} = require('console-table-printer')

//impure
function app(state, update, view){
    const {model, currentView} = state
    const {title, table} = currentView
    console.clear()
    console.log(title)
    printTable(table)
}

module.exports = {
    app
}

