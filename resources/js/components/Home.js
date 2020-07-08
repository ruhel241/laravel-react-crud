import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import Pagination from "react-js-pagination";


// import Post1 from "./Post1"

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            activePage: 1,
            itemsCountPerPage: 1,
            totalItemsCount: 1,
            pageRangeDisplayed: 5
        };

        this.handlePageChange = this.handlePageChange.bind(this);
    }

    componentDidMount() {
        axios
            .get("http://127.0.0.1:8000/api/posts")
            .then(response => {
                this.setState({
                    posts: response.data.data,
                    activePage: response.data.current_page,
                    itemsCountPerPage: response.data.per_page,
                    totalItemsCount: response.data.total
                });
            })
            .catch(function(error) {
                console.log("error");
            });
    }

    onDelete(post_id){
       axios.delete(`http://127.0.0.1:8000/api/delete/post/${post_id}`)
        .then(response => {
           var posts = this.state.posts;
            for(var i = 0; i < posts.length; i++ ){
                if(posts[i].id == post_id){
                    posts.splice(i, 1);
                    this.setState({posts: posts});
                }
            }
        })
        .catch(error => {
            console.log(error)
        });
    }

    // Pagination
    handlePageChange(pageNumber) {
         console.log(`active page is ${pageNumber}`);
        
        axios
         .get(`http://127.0.0.1:8000/api/posts?page=${pageNumber}`)
         .then(response => {
             this.setState({ 
                posts: response.data.data,
                activePage: response.data.current_page,
                itemsCountPerPage: response.data.per_page,
                totalItemsCount: response.data.total
            });
         });

    }
     


    render() {
        const { posts } = this.state;
        // console.log(posts);
        return (
            <div className="jumbotron">
            
                <div className="posts">
                    {posts.map((post, index) => (
                        <div className="post-item" key={index}>
                            <h1 className="title">{post.title}</h1>
                            <p className="description">{post.description}</p>
                               <Link  to={`edit/post/${post.id}`}> 
                                    <button
                                        type="button"
                                        className="btn btn-success edit"
                                    >
                                        Edit
                                    </button> 
                                </Link>
                            
                                <a href='#' onClick={this.onDelete.bind(this, post.id)}>
                                <button
                                    type="button"
                                    className="btn btn-danger delete"
                                >
                                Delete
                                </button>
                            </a>
                            
                        </div>
                    ))}
                </div>



                <div className="d-flex justify-content-center">
                    <Pagination
                       // hideNavigation
                        //hideFirstLastPages
                        prevPageText='Prev'
                        nextPageText='Next'
                        activePage={this.state.activePage}
                        itemsCountPerPage={this.state.itemsCountPerPage}
                        totalItemsCount={this.state.totalItemsCount}
                        pageRangeDisplayed={this.state.pageRangeDisplayed}
                        onChange={this.handlePageChange}
                        itemClass="page-item"
                        linkClass="page-link"
                    />
                </div>



            </div>
        );
    }
}
