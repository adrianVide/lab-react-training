import React, { Component } from 'react';

export default class LikeButton extends Component {

    state = {
        likes: 0,
        clicks: 0
    }

    colors = ['purple','blue','green','yellow','orange','red'];

    handlerClicks = () =>{
        this.setState({
            likes: this.state.likes + 1,
            clicks: this.state.clicks < this.colors.length - 1 ? this.state.clicks + 1 : 0
        })
    }


    render() {
        let butStyle = {backgroundColor: this.colors[this.state.clicks], fontSize: 100}
        return (
            <div>
                <button style={butStyle} onClick={this.handlerClicks}>{this.state.likes} Likes</button>
            </div>
        )
    }
}


// export default LikeButton;