import React from 'react'
import uuid from 'uuid/v4'
import { connect } from 'react-redux'
import {values} from 'lodash'



class AddNewRow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: null,
            date: null,
            category: null,
            description: null,
            amount: null
        }
    }


        onInputChange = (name) => (e) => {
            const value = e && e.target.value
            this.setState({
                [name]: value
            })
        }

    addNewRow = () => {

        const expense = {
            id: uuid(),
            date: this.state.date,
            category: this.state.category,
            description: this.state.description,
            amount: {
                value:  parseFloat(this.state.amount),
                currency: "$",
            },
            status: false
        }
        // this.props.onAddNewRow(expense)
    }

    render() {
        return (

                <div>
                    <div>
                        Date
                        <input value={this.state.date || ''} onChange={this.onInputChange('date')}/>
                    </div>
                    <div>
                        Category
                        <input value={this.state.category || ''} onChange={this.onInputChange('category')}/>
                    </div>
                    <div>
                        Description
                        <input value={this.state.description || ''} onChange={this.onInputChange('description')}/>
                    </div>
                    <div>
                        Amount
                        <input id="Amount" value={this.state.amount || ''} onChange={this.onInputChange('amount')}/>
                    </div>
                    <div>
                        {/*<button onClick={() => this.addNewRow(this.state)}>Add</button>*/}
                        <button onClick={() => this.props.onAddNewRow()}>Add</button>
                    </div>
                </div>

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
        onAddNewRow: (expenses) => dispatch({
            type: 'ADD_NEW_ROW',
            payload: ""
        })
    }
}

    export default connect(mapStateToProps, mapDispatchToProps)(AddNewRow)
