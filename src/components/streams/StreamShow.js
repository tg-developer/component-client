import React from 'react';
import {connect} from 'react-redux';
import {fetchStream} from '../../actions';
import "../../styles/Global.css";

class StreamShow extends React.Component {

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }
  render() {
    if(!this.props.stream) {
      return <div>Loading...</div> 
    }

    const {title, description1, description2, description3, description4, description5, img} = this.props.stream
      return (
        <div>
          <h1>{title}</h1>
          <img src={img} />
          <p>{description1}</p>
          <p>{description2}</p>
          <p>{description3}</p>
          <p>{description4}</p>
          <p>{description5}</p>
        </div>
      )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchStream}) (StreamShow)