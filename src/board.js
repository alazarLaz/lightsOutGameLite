import React, { Component } from 'react'
import Cell from './cell'
import './board.css'

export default class Board extends Component {
    static defaultProps = 
    {
        ncols: 5,
        nrows: 5, 
        chanceLightStartsOn: 0.25
    }
    constructor(props) 
    {
      super(props)
    
      this.state = {
         hasWon : false,
         board : this.createBoard(),
      }
    }


    createBoard()
    {
        let board = []
        for (let y = 0; y < this.props.ncols; y++) {
            let rows = []
            for (let x = 0; x < this.props.nrows; x++) {
                rows.push(Math.random() > this.props.chanceLightStartsOn?true:false)
                
            }
            board.push(rows)
        }
        return board
    }


    flipCellsAround(coord) 
    {
        let {ncols, nrows} = this.props;
        let board = this.state.board;
        let [y, x] = coord.split("-").map(Number);


  function flipCell(y, x) 
  {
    // if this coord is actually on board, flip it

    if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
      board[y][x] = !board[y][x];
    }
  }
  flipCell(y,x)
  flipCell(y+1,x)
  flipCell(y-1,x)
  flipCell(y,x+1)
  flipCell(y,x-1)


  let hasWon = this.state.board.every((row)=>row.every((cell) => cell=== false))
  this.setState({
    hasWon,board
  })

}
render() {

 // if the game is won, just show a winning msg & render nothing else
 if(this.state.hasWon) 
 {
   return(
     <h1>You Won</h1>
   )
 }

 // TODO

 let tBoard = []
 for (let i = 0; i < this.props.nrows; i++) {
   let rows = [];
   for (let j = 0; j < this.props.ncols; j++) {
     rows.push(<Cell key={`${i}-${j}`} isLit = {this.state.board[i][j]} flipCellsAroundMe = {()=>{this.flipCellsAround(`${i}-${j}`)}} />)
   }
   tBoard.push(<tr>{rows}</tr>) 
 }

 // make table board
 return(
   <table className="Board">
     <tbody>
       {tBoard}
     </tbody>
   </table>
   )
  }
}
