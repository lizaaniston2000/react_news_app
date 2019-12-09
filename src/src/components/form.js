import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

class Form extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            content: this.props.content || 'some content',
            title: this.props.title || 'some title'
        }
    }
    handleBodyChange(e) {
        this.setState({
            content: e.target.value
        });
    }
    handleTitleChange(e) {
        this.setState({
            title: e.target.value
        });
    }
    componentWillReceiveProps(props) {
        this.setState(props)
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleSubmit(this.state);
    }
    render() {
        return (
            <div className='box'>
                <form onSubmit={this.handleSubmit}>
                    <input className="input" id='title' defaultValue={this.state.title} onChange={this.handleTitleChange.bind(this)} type="text"></input>
                    <textarea className="textarea" id='content' defaultValue={this.state.content} onChange={this.handleBodyChange.bind(this)}></textarea>
                    <button type='submit' className="button is-dark">Submit</button>
                    <Link to="/"><button className="button is-dark">Cansel</button></Link>
                </form>
            </div>
        )
    }

}


export default Form