import React from 'react'
import ExpenseList from './ExpenseList'
import Container from './Container'
import ExpenseDetails from './ExpenseDetails'
import {reduce, values} from 'lodash'

class App extends React.Component {


    // changeStatus = expense => {
    //     const {expenses} = this.state
    //
    //     const updatedExpense = {...expense, status: !expense.status}
    //     const updateExpenses = {
    //         ...expenses,
    //         [updatedExpense.id]: updatedExpense
    //     }
    //
    //     this.setState({
    //         expenses: updateExpenses
    //     })
    // }
    //
    // selectExpense = selected => {
    //     this.setState({
    //         selected: selected.id
    //     })
    // }
    //
    // onAddNewRow = (expense) => {
    //     console.log(expense)
    //     const { expenses } = this.state
    //     this.setState({
    //         expenses: {...expenses, [expense.id] : expense}
    //     })
    // }

    render() {
        return (
            <div>
                <ExpenseList/>
                <div className='container-fluid'>
                    <div className='row fill-height'>
                        <div className='col-md-8 pb-3'>
                        </div>
                        <div className='col-md-4'>
                                <Container> <ExpenseDetails/>
                                </Container>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
