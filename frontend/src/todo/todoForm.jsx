import React from 'react'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {
    const keyHandler = e => {
        if (e.key == 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    return (
        <div role="form" className="todoForm">
            <div className="row">
                <Grid cols="12 7 7">
                    <input 
                        id="description" 
                        className="form-control" 
                        placeholder="Adicione uma tarefa" 
                        onChange={props.handleChange} 
                        onKeyUp={keyHandler}
                        value={props.description} 
                        type="text"
                    />

                </Grid>
                <Grid cols="12 3 5">
                    <IconButton style="primary" texto="Adicionar" onClick={props.handleAdd}></IconButton>
                    <IconButton style="info" texto="Pesquisar" onClick={props.handleSearch}></IconButton>
                    <IconButton style="danger" texto="Limpar Formulário" onClick={props.handleClear}></IconButton>
                </Grid>
            </div>
        </div>
    )
}