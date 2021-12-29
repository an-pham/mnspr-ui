import React, { useState } from 'react';
import Cell from '../Cell'
import { Layout } from './style';
import { NumArr, IndexMap, openedIndexState } from '../../dataStructure';
import { useRecoilState, useSetRecoilState } from 'recoil';

type BoardProps = {
  disabledAll: boolean;
  cells: NumArr;
  rows: number;
  cols: number;
}

const Board: React.FC<BoardProps> = (props) => {
  const [disabledState, setDisabledState] = useState(false);
  const [openedIndex, setOpenedIndex] = useRecoilState(openedIndexState);

  function endGame(): void {
    setDisabledState(true);
    setOpenedIndex([]);
    alert("Oh no!!!! Game over");
  }

  function findNeighbors(r: number, c: number): NumArr {
    let arr = [];
    for (let i = Math.max(r - 1, 0); i <= r + 1 && i < props.rows; i++) {
      for (let j = Math.max(c - 1, 0); j <= c + 1 && j < props.cols; j++) {
        if (i !== r || j !== c) {
          arr.push([i, j]);
        }
      }
    }
    return arr;
  }

  function openNeighbors(neighbors: NumArr): void {
    let newIndex = [...openedIndex]

    neighbors.forEach((cell) => {
      let key = cell.join("_");
      let itemVal = openedIndex.find(e => e.k === key);
      if (props.cells[cell[0]][cell[1]] !== -1 && !itemVal) {
        newIndex = [...newIndex, { k: key, v: true }];
        setOpenedIndex(newIndex);

      }
    })
    console.log("before: ", openedIndex);
    return;
  };

  return (
    <Layout className="board-container__wrapper">
      <table>
        <tbody>
          {
            props.cells.map((row, i) => {
              return <tr key={i}>
                {
                  row.map((cellVal, j) => {
                    let keyInd = `${i}_${j}`

                    return <Cell key={keyInd} value={cellVal} index={[i, j]}
                      disabled={disabledState} neighbors={findNeighbors(i, j)}
                      onBombClicked={endGame} openNeighbors={openNeighbors}>
                    </Cell>
                  })
                }
              </tr>
            })
          }
        </tbody>
      </table>
    </Layout>
  )
};

export default Board
