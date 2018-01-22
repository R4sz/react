/**
 * Created by MBNX36 on 15.01.2018.
 */
import {filter, orderBy, map, values} from 'lodash'
import React from 'react'
import ExpenseRow from './Expense-row'
import ExpenseResult from './ExpenseResult'
import AddNewRow from './AddNewRow'
import { connect } from 'react-redux'

class ExpenseList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sortedList: props.expenses,
            orderColumn: 'date',
            order: 'asc',
            description: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        const filteredList = filter(nextProps.expenses, (expense) => {
            return expense.description.startsWith(this.state.description);
        })
        const sortedList = orderBy(filteredList, this.state.orderColumn, this.state.order);
        this.setState({
            sortedList: sortedList
        })
    }

    handleSortClick = (column) => {
        const newOrder = this.state.orderColumn === column && this.state.order === 'asc' ? 'desc' : 'asc'
        const sortedList = orderBy(this.props.expenses, column, newOrder);

        this.setState({
            orderColumn: column,
            order: newOrder,
            sortedList: sortedList
        })
    }

    onInputChange = (e) => {
        const value = e && e.target.value
        this.setState({
            description: value
        })

        const filteredList = filter(this.props.expenses, function (expense) {
            return expense['description'].startsWith(value);
        })

        this.setState({
            sortedList: filteredList
        })

    }



    render() {
        const {description} = this.state;

        return (

            <table className="table table-hover">
                <thead>
                <tr>
                    <th onClick={() => this.handleSortClick('date')}>
                        Date {this.state.orderColumn === 'date' ? this.state.order : ''}</th>
                    <th onClick={() => this.handleSortClick('category')}>
                        Category {this.state.orderColumn === 'category' ? this.state.order : ''}
                        <input/></th>
                    <th onClick={() => this.handleSortClick('description')}>
                        Description {this.state.orderColumn === 'description' ? this.state.order : ''}
                        <input value={description || ''} onChange={this.onInputChange}/></th>
                    <th onClick={() => this.handleSortClick('amount.value')}>
                        Amount {this.state.orderColumn === 'amount.value' ? this.state.order : ''}</th>
                    <th onClick={() => this.handleSortClick('status')}>
                        Status {this.state.orderColumn === 'status' ? this.state.order : ''}</th>
                </tr>
                </thead>
                <tbody>

                {
                    map(this.state.sortedList, (singleExpense) => (
                        <ExpenseRow expense={singleExpense} clickHandler={this.props.onSelect}
                                    onChangeStatus={this.props.onChangeStatus}/>
                    ))
                }
                <ExpenseResult expense={this.state.sortedList}/>

                </tbody>
                <AddNewRow onAddNewRow={this.props.onAddNewRow}/>
            </table>
        )
    }
}

const mapStateToProps = state => {
    return {
        expenses: values(state.expenses)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSelect: (expense) => dispatch({
            type: 'SELECT_EXPENSES',
            payload: expense.id
        }),
        onChangeStatus: (expense) => dispatch({
            type: 'CHANGE_STATUS',
            payload: expense
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseList)
