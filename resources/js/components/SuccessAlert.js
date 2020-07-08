import React, { Component } from "react";

export default class SuccessAlert extends Component{
    render(){
        return(
            <div className="alert alert-success" role="alert">
               <strong> Record Created/Updated Successfully </strong>
               <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
           
        );
    }
}

