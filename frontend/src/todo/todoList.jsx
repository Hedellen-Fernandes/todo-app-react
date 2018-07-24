import React from 'react'
import IconButton from '../template/iconButton'

export default props => {
    const renderRows = () => {

        const list = props.list || []

        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>
                    {todo.description}
                </td>
                <td className="actions">
                    <IconButton style="success" texto="Concluir" onClick={() => props.handleMarkAsDone(todo)} hide={todo.done}></IconButton>
                    <IconButton style="warning" texto="Pendente" onClick={() => props.handleMarkAsPending(todo)} hide={!todo.done}></IconButton>
                    <IconButton style="danger" texto="Apagar" onClick={() => props.handleRemove(todo)} hide={!todo.done}></IconButton>
                </td>
            </tr>
        ))
    } 
    
    return (
        <table className="table">
            <thead class="thead-dark">
                <tr>
                    <td scope="col">Descrição</td>
                    <td scope="col">Ações</td>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )

}