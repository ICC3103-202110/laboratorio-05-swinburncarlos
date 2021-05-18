function update(input, model){
    const {BillAmount} = input
    const {TipPercentage} = input
    const Tip = BillAmount * (TipPercentage / 100)
    Total = parseInt(BillAmount) + parseInt(Tip)
    
    return {
        ...model,
        BillAmount: BillAmount,
        TipPercentage: TipPercentage,
        total: Total,
        tipValue: Tip,
    }
}

module.exports = {
    update
}