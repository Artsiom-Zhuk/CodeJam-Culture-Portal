import React from 'react';
import ModalVideo from 'react-modal-video';
import { Translation } from 'react-i18next';
import { video } from '../../data/constants';
import PropTypes from 'prop-types';
import './videoWidget.scss';

export default class VideoWidget extends React.Component {
  constructor() {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal() {
    this.setState({ isOpen: true })
  }

  render() {
    const { videoId } = this.props
    return (
      <Translation>
        {t => (
          <div className='videoButtonContainer'>
            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={videoId} onClose={() => this.setState({ isOpen: false })} />
            <button onClick={this.openModal} className='videoButton'>{t(video)}</button>
          </div>
        )}
      </Translation>
    )
  }
}

VideoWidget.propTypes = {
  videoId: PropTypes.string,
};
