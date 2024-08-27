import { useEffect, useState } from 'react'
import { boxes } from '../JSON/Box'
import { FaStar } from "react-icons/fa6";
import { FaChessPawn } from "react-icons/fa";

const Board = () => {
    const [boardSize, setBoardSize] = useState()
    const [winningArea, setWinningArea] = useState()
    const [playerPosition, setPlayerPosition] = useState([
        {p1: {g1: 'b1', g2: 'b20', g3: 'b25', g4: 'b4'}},
        {p2: {g1: 'b5', g2: 'b6', g3: 'b7', g4: 'b8'}},
        {p3: {g1: 'b30', g2: 'b10', g3: 'b11', g4: 'b12'}},
        {p4: {g1: 'b40', g2: 'b14', g3: 'b15', g4: 'b16'}},
    ])

    const ratio = 2.7;

    useEffect(() => {
        const uiBoard = document.querySelector('.board').getBoundingClientRect()
        setWinningArea(uiBoard.width - ((uiBoard.width / ratio) *2) )
        setBoardSize(uiBoard.width)        
    },[])

    const renderBoxes = (start, end,  shouldReverse = false, player = '') => {
        const slicedBoxes = boxes.slice(start, end);
        const displayBoxes = shouldReverse ? slicedBoxes.reverse() : slicedBoxes;

        // console.log("displayBoxes", playerPosition?.p1);
        // dt?.p1[posti[ind+1]] === box.n ? 'goti' : ''
        let playe = ['p1', 'p2', 'p3', 'p4']
        let dx = ['g1', 'g2', 'g3', 'g4']
        
        return displayBoxes?.map?.((box, index) => (
            <div key={index} className={`box ${box.t} ${box.s === 'start' ? `${player} start` : ''} ${(box.t === "s" && box.s !== 'start') ? 'star' :''}`}>
                {/* Render a star if needed */}
                {box.t === "s" && box.s !== 'start' ? <FaStar className='ico'/> : ''}

                {/* Check for each player if their position matches the current box */}
                {playerPosition.map((playerData, playerIndex) => {
                    const playerKey = `p${playerIndex + 1}`;
                    const playerPositions = playerData[playerKey];

                    return Object.keys(playerPositions).map((gotiKey) => {
                        if (playerPositions[gotiKey] === box.n) {
                            console.log(box.n, gotiKey, playerKey)
                            
                            return (
                                <span className={`p-icon ${playerKey}`} key={`${playerKey}-${gotiKey}`} style={{zIndex: '20'}}>
                                    {/* {playerKey}-{gotiKey} */}
                                    <FaChessPawn />
                                </span>
                            );
                        }
                        return null;
                    });
                })}
            </div>
        ));
    };


    // console.log("playerPosition", playerPosition);
    // console.log("playerPosition", Object.keys(playerPosition?.[0]?.p1));
    
    
    const renderCenterRow = (start, player,shouldReverse = false) => {
        const list = boxes.slice(start, start+1);
        const mappedList = Array.from({ length: 5 }).map((_, index) => ({n: `${player}-${index+1}`, t: player}))        
        const combined = [...list, ...mappedList ]
        const displayBoxes = shouldReverse ? combined.reverse() : combined;

        return displayBoxes?.map?.((box, index) => (
            <div key={index} className={`box ${box.t}`}></div>
        ))        
    }
    
  return (
    <div className='board' id="board">
        <div className="player-ground p1" style={{width: `${boardSize / ratio}px`}}>
            <a href="https://mohitagarwal.dev" target='_blank'>
                <div className="user-profile">
                    <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="User Profile" />
                    <span>Mohit</span>
                </div>
            </a>
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
        <div className="winning-area" style={{width: `${winningArea}px`}}>W</div>
        <div className="area a1" style={{height: `calc(50% - ${winningArea/2}px)`, width: `calc(${(boardSize/3.8)}px)`}}>
            <div className="row r1">
                {renderBoxes(0, 6, true, 'a1')}
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
                {renderBoxes(13, 19, false, 'a2')}
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
                {renderBoxes(26, 32, false, 'a3')}
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
                {renderBoxes(39, 45, true, 'a4')}
            </div>
        </div>
    </div>
  )
}

export default Board