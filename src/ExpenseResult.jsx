/**
 * Created by MBNX36 on 15.01.2018.
 */
import {reduce} from 'lodash'
import React from 'react'

const ExpenseResult = ({expense}) => (
    <tr>
        <td/>
        <td/>
        <td/>
        <td>{reduce(expense, (acc, e) => {
            return acc + e.amount.value
        }, 0
        )}</td>
    </tr>
)

export default ExpenseResult
