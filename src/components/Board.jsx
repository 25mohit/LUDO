import { useEffect, useState } from 'react'
import { boxes } from '../JSON/Box'

const Board = () => {
    const [boardSize, setBoardSize] = useState()
    const [winningArea, setWinningArea] = useState()

    const ratio = 2.7;

    useEffect(() => {
        const uiBoard = document.querySelector('.board').getBoundingClientRect()
        setWinningArea(uiBoard.width - ((uiBoard.width / ratio) *2) )
        setBoardSize(uiBoard.width)        
    },[])

    const renderBoxes = (start, end,  shouldReverse = false) => {
        const slicedBoxes = boxes.slice(start, end);
        const displayBoxes = shouldReverse ? slicedBoxes.reverse() : slicedBoxes;

        return displayBoxes?.map?.((box, index) => (
            <div key={index} className={`box ${box.t}`}>{box.n.slice(1,3)}</div>
        ));
    };
    
    const renderCenterRow = (start, player,shouldReverse = false) => {
        const list = boxes.slice(start, start+1);
        const mappedList = Array.from({ length: 5 }).map((_, index) => ({n: `${player}-${index+1}`, t: player}))        
        const combined = [...list, ...mappedList ]
        const displayBoxes = shouldReverse ? combined.reverse() : combined;

        return displayBoxes?.map?.((box, index) => (
            <div key={index} className={`box ${box.t}`}>{box.n.slice(1,4)}</div>
        ))

        
    }
    
    console.log("boxes", renderCenterRow(51, 'p1'));
    
  return (
    <div className='board' id="board">
        <div className="player-ground p1" style={{width: `${boardSize / ratio}px`}}>
            <div className="user-profile">
                <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="User Profile" />
                <span>Mohit</span>
            </div>
            <section className="p-avatar">
                <div className="dots"></div>
                <div className="dots"></div>
                <div className="dots"></div>
                <div className="dots"></div>
            </section>
        </div>
        <div className="player-ground p2" style={{width: `${boardSize / ratio}px`}}>
            <div className="user-profile"></div>
            <section className="p-avatar">
                <div className="dots"></div>
                <div className="dots"></div>
                <div className="dots"></div>
                <div className="dots"></div>
            </section>
        </div>
        <div className="player-ground p3" style={{width: `${boardSize / ratio}px`}}>
            <div className="user-profile"></div>
            <section className="p-avatar">
                <div className="dots"></div>
                <div className="dots"></div>
                <div className="dots"></div>
                <div className="dots"></div>
            </section>
        </div>
        <div className="player-ground p4" style={{width: `${boardSize / ratio}px`}}>
            <div className="user-profile"></div>
            <section className="p-avatar">
                <div className="dots"></div>
                <div className="dots"></div>
                <div className="dots"></div>
                <div className="dots"></div>
            </section>
        </div>
        <div className="winning-area" style={{width: `${winningArea}px`}}></div>
        <div className="area a1" style={{height: `calc(50% - ${winningArea/2}px)`, width: `calc(${(boardSize/3.8)}px)`}}>
            <div className="row r1">
                {renderBoxes(0, 6, true)}
            </div>
            <div className="row r2 center">
                {renderCenterRow(51,'p1', true)}
            </div>
            <div className="row r3">
                {renderBoxes(45, 51)}
            </div>
        </div>
        <div className="area a2" style={{width: `calc(50% - ${winningArea/2}px)`, height: `calc(${(boardSize/3.8)}px)`}}>
            <div className="row r1">
                {renderBoxes(13, 19)}
            </div>
            <div className="row r2 center">
                
                {renderCenterRow(12,'p2')}
            </div>
            <div className="row r3">
                {renderBoxes(6, 12, true)}
            </div>
        </div>
        <div className="area a3" style={{height: `calc(50% - ${winningArea/2}px)`, width: `calc(${(boardSize/3.8)}px)`}}>
            <div className="row r1">
                {renderBoxes(19, 25, true)}
            </div>
            <div className="row r2 center">
                {renderCenterRow(25,'p3')}
            </div>
            <div className="row r3">
                {renderBoxes(26, 32)}
            </div>
        </div>
        <div className="area a4" style={{width: `calc(50% - ${winningArea/2}px)`, height: `calc(${(boardSize/3.8)}px)`}}>
            <div className="row r1">
                {renderBoxes(32, 38)}
            </div>
            <div className="row r2 center">
                {renderCenterRow(38,'p4', true)}
            </div>
            <div className="row r3">
                {renderBoxes(39, 45, true)}
            </div>
        </div>
    </div>
  )
}

export default Board