import React, { Component } from "react";

export default class Post1 extends Component {
   
    constructor(props){
      super(props);

    }
   
    render() {
        console.log(this.props.data);
        console.log( `Post1 ${this.props.data.posts}`)
        return (
            <div>
                   {/* <Post2 {...this.props} data={posts}/> */}

                <h2> Posts1 Component </h2>

                
            </div>
        );
    }
}
