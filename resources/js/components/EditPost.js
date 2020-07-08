import React, { Component } from "react";

import SuccessAlert from './SuccessAlert';
import ErrorAlert from './ErrorAlert';
export default class EditPost extends Component {
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


    componentDidMount(){
        axios.get("http://127.0.0.1:8000/api/edit/post/"+this.props.match.params.id)
        .then( response => {
            this.setState({ 
                post_title: response.data.title,
                description: response.data.description
             });
        })
        .catch(function(error) {
            console.log("error");
        });
       
    }


    //Dynamic value
    onChangePost(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmitPost(e) {
        e.preventDefault();
        const updatePost = {
            post_title: this.state.post_title,
            description: this.state.description
        };

       // console.log(updatePost);
        axios.put('http://127.0.0.1:8000/api/update/post/'+this.props.match.params.id,updatePost)
        .then(response => {
            this.setState({
                alert_message: "Success"
            })
        })
        .catch(error => {
            this.setState({
                alert_message: "Error"
            })
        });
    }

     render() {
        const { post_title, description } = this.state;
        return (
            <div className="jumbotron">
            {this.state.alert_message == "Success" ? <SuccessAlert/> : null }
            {this.state.alert_message == "Error" ? <ErrorAlert/> : null }
                <div className="add-post">
                    <h1> Edit Post  </h1> 
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
                                   Update
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
