import React from "react";
import './Track.css';

class Track extends React.Component {
    constructor(props) {
        super(props);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }

    renderAction() {
        if(this.props.isRemoval) {
            return <button className="Track-action" onClick={this.removeTrack}>-</button>
        } else {
            return <button className="Track-action" onClick={this.addTrack}>+</button>
        }
    }
    
    addTrack() {
        this.props.onAdd(this.props.track);
    }

    removeTrack() {
        this.props.onRemove(this.props.track);
    }
 

    render() {
        return (
            <div className="Track">
                <img src={this.props.track.images} alt="" />
            <div className="Track-information">
                {console.log(this.props.track.images)}
                <h3>{this.props.track.name}</h3>
                <p>{this.props.track.artists} | {this.props.track.album}</p>
            </div>
            <audio class="audio-track" controls><source src={this.props.track.preview_url}></source></audio>
            {this.renderAction()}
            </div>
        )
    }
}

export default Track;