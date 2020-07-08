import React, { Component } from "react";

export default class ErrorAlert extends Component{
    render(){
        return(
            <div className="alert alert-danger" role="alert">
               <strong> Error occured </strong>
               <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
           
        );
    }
}

