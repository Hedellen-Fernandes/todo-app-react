import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { add, changeDescription, search, clear } from './todoActions'


class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        const { add, search, description, clear } = this.props
        if (e.key == 'Enter') {
            e.shiftKey ? search() : add(description)
        } else if (e.key === 'Escape') {
            clear()
        }
    }

    render() {
        const { add, search, description } = this.props
        return (
            <div role="form" className="todoForm">
                <div className="row">
                    <Grid cols="12 7 7">
                        <input 
                            id="description" 
                            className="form-control" 
                            placeholder="Adicione uma tarefa" 
                            onChange={this.props.changeDescription} 
                            onKeyUp={this.keyHandler}
                            value={this.props.description} 
                            type="text"
                        />

                    </Grid>
                    <Grid cols="12 3 5">
                        <IconButton style="primary" texto="Adicionar" onClick={() => add(description)}></IconButton>
                        <IconButton style="info" texto="Pesquisar" onClick={search}></IconButton>
                        <IconButton style="danger" texto="Limpar Formulário" onClick={this.props.clear}></IconButton>
                    </Grid>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => bindActionCreators({ add, changeDescription, search, clear }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)