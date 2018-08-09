import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'

import IconButton from '../template/iconButton'
import {markAsDone, markAsPending, remove} from './todoActions'

const TodoList =  props => {
    const renderRows = () => {

        const list = props.list || []

        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>
                    {todo.description}
                </td>
                <td className="actions">
                    <IconButton style="success" texto="Concluir" onClick={() => props.markAsDone(todo)} hide={todo.done}></IconButton>
                    <IconButton style="warning" texto="Pendente" onClick={() => props.markAsPending(todo)} hide={!todo.done}></IconButton>
                    <IconButton style="danger" texto="Apagar" onClick={() => props.remove(todo)} hide={!todo.done}></IconButton>
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

const mapStateToProps = state => ({list: state.todo.list})
const mapDispatchToProps = dispatch => bindActionCreators({ markAsDone, markAsPending, remove }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)