/**
 * Created by MBNX36 on 15.01.2018.
 */

import React from 'react'
import DateCell from './DateCell.jsx'
import DescriptionCell from './DescriptionCell.jsx'
import AmountCell from './AmountCell.jsx'
import CategoryCell from './CategoryCell.jsx'
import StatusCell from './StatusCell.jsx'

class ExpenseRow extends React.Component {
    handleClick = () => {
        this.props.onClick(this.props.expense)
    }

    render() {
        const { expense, onChangeStatus } = this.props
        return (
        (
            <tr onClick={this.handleClick}>
                <DateCell data={expense.date}/>
                <CategoryCell category={expense.category}/>
                <DescriptionCell desc={expense.description}/>
                <AmountCell amount={expense.amount}/>
                <StatusCell onClick={() => onChangeStatus(expense)} status={expense.status}/>
            </tr>)
    )
}
}

export default ExpenseRow
