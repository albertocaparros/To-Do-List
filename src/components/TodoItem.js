import React, { Component } from 'react';
import PropTypes from "prop-types";
import Checkbox from '@material-ui/core/Checkbox';
import Icon from '@material-ui/core/Icon';

export class TodoItem extends Component {

    getStyle = () => {
        if(this.props.todo.completed) return {
            textDecoration: "line-through"
        }
        else return {
            textDecoration: "none"                 
        }
    }

    render() {
        const { id, title } = this.props.todo;

        return (
            <div className="todo" >
                <Checkbox color="primary" checked={this.props.todo.completed}  onChange={ this.props.toggleComplete.bind(this, id)}/>
                <h3 style={this.getStyle()}>{title}</h3>
                <Icon onClick={this.props.deleteTodo.bind(this,id)} className="btn">delete</Icon>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
