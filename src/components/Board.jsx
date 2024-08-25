import { useEffect, useState } from 'react'

const Board = () => {
    const [boardSize, setBoardSize] = useState()
    const [winningArea, setWinningArea] = useState()

    const ratio = 2.7;

    useEffect(() => {
        const uiBoard = document.querySelector('.board').getBoundingClientRect()
        setWinningArea(uiBoard.width - ((uiBoard.width / ratio) *2) )
        setBoardSize(uiBoard.width)        
    },[])
    
  return (
    <div className='board' id="board">
        <div className="player-ground p1" style={{width: `${boardSize / ratio}px`}}>
            <div className="user-profile">
                <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="User Profile" />
                <span>Mohit</span>
            </div>
            <container className="p-avatar">
                <div className="dots"></div>
                <div className="dots"></div>
                <div className="dots"></div>
                <div className="dots"></div>
            </container>
        </div>
        <div className="player-ground p2" style={{width: `${boardSize / ratio}px`}}>
            <div className="user-profile"></div>
            <container className="p-avatar">
                <div className="dots"></div>
                <div className="dots"></div>
                <div className="dots"></div>
                <div className="dots"></div>
            </container>
        </div>
        <div className="player-ground p3" style={{width: `${boardSize / ratio}px`}}>
            <div className="user-profile"></div>
            <container className="p-avatar">
                <div className="dots"></div>
                <div className="dots"></div>
                <div className="dots"></div>
                <div className="dots"></div>
            </container>
        </div>
        <div className="player-ground p4" style={{width: `${boardSize / ratio}px`}}>
            <div className="user-profile"></div>
            <container className="p-avatar">
                <div className="dots"></div>
                <div className="dots"></div>
                <div className="dots"></div>
                <div className="dots"></div>
            </container>
        </div>
        <div className="winning-area" style={{width: `${winningArea}px`}}></div>
        <div className="area a1" style={{height: `calc(50% - ${winningArea/2}px)`, width: `calc(${(boardSize/3.8)}px)`}}>
            <div className="row r1">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div>
            <div className="row r2 center">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div></div>
            <div className="row r3">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div></div>
        </div>
        <div className="area a2" style={{width: `calc(50% - ${winningArea/2}px)`, height: `calc(${(boardSize/3.8)}px)`}}>
            <div className="row r1">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div>
            <div className="row r2 center">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div>
            <div className="row r3">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div>
        </div>
        <div className="area a3" style={{height: `calc(50% - ${winningArea/2}px)`, width: `calc(${(boardSize/3.8)}px)`}}>
            <div className="row r1">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div>
            <div className="row r2 center">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div>
            <div className="row r3">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div>
        </div>
        <div className="area a4" style={{width: `calc(50% - ${winningArea/2}px)`, height: `calc(${(boardSize/3.8)}px)`}}>
            <div className="row r1">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div>
            <div className="row r2 center">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div>
            <div className="row r3">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div>
        </div>
    </div>
  )
}

export default Board