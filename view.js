const figlet = require('figlet')
const chalk = require('chalk')

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
        {'Bill Amount': BillAmount, 'Tip %': 'tip percantage', 'Tip': 'tip', 'Total': 'total amount'},
    ]
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
    getTitle
}
