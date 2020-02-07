import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import {fetchStream, deleteStream} from '../../actions'

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }

  renderActions() {

    const id = this.props.match.params.id
  return (
    <React.Fragment>
      <button onClick={() => this.props.deleteStream(id)} className="ui button negative">Deletar</button>
      <Link to="/" className="ui button">Cancel </Link>

    </React.Fragment>
  )

}

renderContent() {
  if(!this.props.stream) {
    return 'Você está certo de que quer deletar o componente:?'
  }
  return `Você está certo de que quer deletar o componente com o título: ${this.props.stream.title}`
}
  render() {
  return (
      <Modal
        title="Deletar Componente"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
      
  )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {stream: state.streams[ownProps.match.params.id]}
}
export default connect(mapStateToProps, {fetchStream, deleteStream}) (StreamDelete)