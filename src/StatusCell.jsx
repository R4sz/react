import React from 'react'

const StatusCell = ({ status, onClick }) => {
    const clickHandler = event => {
        event.stopPropagation()
        onClick()
    }

    return (
        <td onClick={clickHandler}>{ status ? 'DONE' : 'PENDING'}</td>
    )
}

export default StatusCell
