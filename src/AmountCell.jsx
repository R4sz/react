    import React from 'react'

const AmountCell = (props) => (
    <td>{props.amount.currency} {props.amount.value}</td>
)

export default AmountCell
