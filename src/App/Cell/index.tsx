import React, { useState, useEffect } from 'react';
import { NumArr, openedIndexState } from '../../dataStructure';
import { Row } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBomb } from '@fortawesome/free-solid-svg-icons';
// import useDeepCompareEffect from 'use-deep-compare-effect';
import { useRecoilValue } from 'recoil';

type CellProps = {
  value: number;
  index: Array<number>;
  neighbors: NumArr;
  disabled: boolean;
  onBombClicked: Function;
  openNeighbors: Function;
  // openedIndex: IndexMap;
  // isOpen?: boolean;
}

const Cell: React.FC<CellProps> = (props) => {
  const [clickedState, setClickedState] = useState(false);
  const [flagedState, setFlagedState] = useState(false);

  let key = props.index.join("_");
  const openedIndex = useRecoilValue(openedIndexState);
  let isOpen = openedIndex.find(e => e.k === key)
  const [isOpenState, setIsOpenState] = useState(isOpen && isOpen.v);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log("use effect: ", openedIndex);
    let isOpen = openedIndex.find(e => e.k === key)

    if (isOpen && isOpen.v && props.value !== -1) {
      setIsOpenState(true);
      props.openNeighbors(props.neighbors);
    }
    return;
  }, [openedIndex.find(e => e.k == key)]);

  function handleClick(e: React.MouseEvent<HTMLElement>): void {
    if (clickedState || props.disabled || isOpenState) {
      e.preventDefault();
      return;
    }

    setClickedState(true);
    setIsOpenState(true);

    switch (props.value) {
      case -1:
        props.onBombClicked()
        break;
      case 0:
        props.openNeighbors(props.neighbors)
        break;
      default:
        console.log(e.target)
    }
  }

  let renderValue = () => {
    if (!isOpenState && !clickedState) return ''

    switch (props.value) {
      case 0:
        return ''
      case -1:
        return <FontAwesomeIcon icon={faBomb} />
      default:
        return props.value
    }
  }

  return (
    <Row className={`cell-content__wrapper opened-${isOpenState || clickedState} flaged-${flagedState} disabled-${props.disabled}`}
      onClick={(e: React.MouseEvent<HTMLElement>) => { handleClick(e); }}>
      <div>
        {renderValue()}
      </div>
    </Row>
  )
};

export default Cell
