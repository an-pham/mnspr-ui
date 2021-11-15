import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell'

export default class Board extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      disabledAll: this.props.disabledAll,
      openedIndex: {}
    }

    this.endGame = this.endGame.bind(this)
    this.openNeighbors = this.openNeighbors.bind(this)
  }

  endGame = () => {
    this.setState({
      disabledAll: true,
      openedIndex: {}
    })
    alert("Oh no!!!! Game over")
  }

  findNeighbors = (r, c) => {
    let arr = []
    for (let i=Math.max(r-1,0); i<=r+1 && i<this.props.rows; i++) {
      for (let j=Math.max(c-1,0); j<=c+1 && j<this.props.cols; j++) {
        if (i!==r || j!==c) {
          arr.push([i,j])
        }
      }
    }
    return arr
  }

  openNeighbors = (neighbors) => {
    neighbors.forEach((cell) => {
      if (this.props.cells[cell[0]][cell[1]] !== -1 && !this.state.openedIndex[cell]) {
        this.setState({
          openedIndex: Object.assign(this.state.openedIndex, { [cell]: true })
        })
      }
    })
  }

  render() {
    const items = this.props.cells.map((row, i) =>
      <tr key={i}>
        { row.map((cellVal, j) =>
            <Cell key={[i,j]} value={cellVal} index={[i,j]} opened={this.state.openedIndex[[i,j]]}
                  disabled={this.state.disabledAll} neighbors={this.findNeighbors(i, j)}
                  onBombClicked={this.endGame} openNeighbors={this.openNeighbors}>
            </Cell>
          )
        }
      </tr>
    )
    return (
      <div className="board-container__wrapper">
        <table>
          <tbody>{items}</tbody>
        </table>
      </div>
    )
  }
};


Board.propTypes = {
  cells: PropTypes.array,
  rows: PropTypes.number,
  cols: PropTypes.number,
  disabledAll: PropTypes.bool
};

Board.defaultProps = {
  cells: [
    [0, 0, 0, 0, 0, 1, -1, 2, 1, 1],
    [0, 1, 1, 1, 0, 2, 2, 3, -1, 1],
    [0, 1, -1, 1, 0, 1, -1, 2, 1, 1],
    [0, 1, 1, 1, 0, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 1, -1, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 2, -1, 2, 0, 0],
    [0, 0, 0, 0, 0, 2, -1, 2, 1, 1],
    [0, 1, 1, 1, 1, 2, 2, 1, 1, -1],
    [0, 1, -1, 1, 1, -1, 1, 0, 1, 1]
  ],
  rows: 10,
  cols: 10,
  disabledAll: false
};
