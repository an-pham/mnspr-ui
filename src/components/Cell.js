import React from 'react';
import PropTypes from 'prop-types';
import './style/cell.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBomb } from '@fortawesome/free-solid-svg-icons'

export default class Cell extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      flaged: false,
      clicked: false,
      disabled: this.props.disabled
    }

    this.onClick = this.onClick.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (this.props.opened === true && this.props.value === 0) {
      this.props.openNeighbors(this.props.neighbors)
    } else {
      return false
    }
  }

  onClick = (e) => {
    if (this.state.clicked || this.props.disabled || this.props.opened) {
      e.preventDefault()
      return false;
    }

    this.setState({ clicked: true })

    switch (this.props.value) {
      case -1:
        this.props.onBombClicked()
        break;
      case 0:
        this.props.openNeighbors(this.props.neighbors)
        break;
      default:
        console.log(e.target)
    }
  }

  renderValue = () => {
    if (!this.props.opened && !this.state.clicked) return ''

    switch (this.props.value) {
      case 0:
        return ''
      case -1:
        return <FontAwesomeIcon icon={faBomb} />
      default:
        return this.props.value
    }
  }

  render() {
    return(
      <td className={`cell-content__wrapper opened-${this.props.opened || this.state.clicked} flaged-${this.state.flaged} disabled-${this.props.disabled}`}
          onClick={this.onClick}>
        {this.renderValue()}
      </td>
    )
  }
};


Cell.propTypes = {
  value: PropTypes.number,
  index: PropTypes.array,
  neighbors: PropTypes.array,
  disabled: PropTypes.bool,
  onBombClicked: PropTypes.func
};
