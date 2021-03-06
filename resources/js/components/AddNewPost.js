import React, { Component } from "react";
import SuccessAlert from './SuccessAlert';
import ErrorAlert from './ErrorAlert';

export default class AddNewPost extends Component {
    constructor(props) {
        super(props);
        this.onChangePost = this.onChangePost.bind(this);
        this.onSubmitPost = this.onSubmitPost.bind(this);
        this.state = {
            post_title: "",
            description: "",
            alert_message: ""
        };
    }

    //Dynamic value
    onChangePost(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmitPost(e) {
        e.preventDefault();
        const addPost = {
            post_title: this.state.post_title,
            description: this.state.description
        };

        // console.log(addPost);
        axios
            .post("http://127.0.0.1:8000/api/add/post", addPost)
            .then(response => {
                console.log(response.data)
                this.setState({
                    alert_message: "Success"
                })
            })
            .catch(error => {
               this.setState({
                   alert_message: "Error"
               })
            });
        
        this.setState({
            post_title: "",
            description: ""
        });
    }

    render() {
        const { post_title, description } = this.state;
        return (
            <div className="jumbotron">
                 {this.state.alert_message == "Success" ? <SuccessAlert/> : null }
                {this.state.alert_message == "Error" ? <ErrorAlert/> : null }
                <div className="add-post">
                    <h1> Add New Post </h1> 
                    <form onSubmit={this.onSubmitPost}>
                        <div className="form-group row">
                            <label
                                htmlFor="inputtitle"
                                className="col-sm-2 col-form-label"
                            >
                                Title
                            </label>
                            <div className="col-sm-10">
                                <input
                                    name="post_title"
                                    type="text"
                                    className="form-control"
                                    id="inputtitle"
                                    placeholder="Title"
                                    value={post_title}
                                    onChange={this.onChangePost}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label
                                htmlFor="exampleFormControlTextarea1"
                                className="col-sm-2 col-form-label"
                            >
                                Description
                            </label>
                            <div className="col-sm-10">
                                <textarea
                                    name="description"
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="7"
                                    value={description}
                                    onChange={this.onChangePost}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-10">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                   Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
