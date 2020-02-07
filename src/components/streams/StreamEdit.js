import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import {fetchStream, editStream} from '../../actions';
import StreamForm from './StreamForm';
import "../../styles/Global.css";

class StreamEdit extends React.Component {
  componentDidMount()  {
    this.props.fetchStream(this.props.match.params.id)
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues)
  }
render() {
  if (!this.props.stream) {
    return <div>Loading</div>
  }
  return (
    <div>
      <h3>Editar Componente</h3>
      <StreamForm 
      initialValues={_.pick(this.props.stream, 'title', 'img',
      'description1', 'description2', 'description3', 'description4', 'description5'
      
      )}
      onSubmit={this.onSubmit}/>
    </div>
  )
}
}

const mapStateToProps = (state, ownProps) => {
  return {stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit)