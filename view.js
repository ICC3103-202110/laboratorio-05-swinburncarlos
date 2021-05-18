const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')
const {model} = require ('./model')
const prompt = require('prompt-sync')({sigint: true})
const {printTable} = require('./model')

function getTitle(){
    return chalk.yellow(
        figlet.textSync(
            'Counter App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function getTable(model){
    const {BillAmount} = model
    return [
        {'Bill Amount': model.BillAmount, 'Tip %': model.TipPercentage, 'Tip': model.tipValue, 'Total': model.total}
    ]
}

// Get actual console view
function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

function inputForm(model){
    //const {input} = model
    return inquirer.prompt([
        { name: 'BillAmount', type: 'input', message: 'Enter the bill amount?', default: model.BillAmount },
        { name: 'TipPercentage', type: 'input', message: 'Enter the tip percentage', default: model.TipPercentage }
    ])
}

// Get actual console view
function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view,
    inputForm
    //getTitle
}
