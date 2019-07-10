import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export class AddTodo extends Component {

    state= {
        title: ""
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ""});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className="form">
                <TextField margin="normal" variant="outlined" 
                           label="New to-do" type="text" name="title" value={this.state.title} onChange={this.onChange}>
                </TextField>
                <Button id="btnSubmit" type="submit" value="Submit"variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        )
    }
}

export default AddTodo
