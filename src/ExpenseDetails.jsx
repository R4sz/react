import React from 'react'
import {connect} from 'react-redux'


const ExpenseDetails = ({ expense }) => {
    console.log(expense);
        return <div className="expenses-container">
                <div className="row">
                    <div className="col-8">Date:</div>
                    <div className="col-4">{expense.date}</div>
                </div>
                <div className="row">
                    <div className="col-8"> Description:</div>
                    <div className="col-4"> {expense.description}</div>
                </div>
                <div className="row">
                    <div className="col-8"> Category:</div>
                    <div className="col-4"> {expense.category}</div>
                </div>
                <div className="row">
                    <div className="col-8"> Amount:</div>
                    <div className="col-4"> {expense.amount.value}</div>
                </div>
                <div className="row">
                    <div className="col-8"> Status:</div>
                    <div className="col-4"> {expense.status? 'DONE': 'PENDING'}</div>
                </div>
            </div>
}

const mapStateToProps = state => {
    return {
        expense : state.expenses[state.selected]
    }
}



export default connect(mapStateToProps)(ExpenseDetails)
