import './app.css'
import Board from './board';

function App() {
  return (
    <div className="App">
        <h1>Lights Out</h1>
      <Board ncols = {3} nrows = {3} chanceLightStartsOn = {0.3} />
    </div>
  );
}

export default App;


// flipCellsAround(coord) {
//   let {ncols, nrows} = this.props;
//   let board = this.state.board;
//   let [y, x] = coord.split("-").map(Number);


//   function flipCell(y, x) {
//     // if this coord is actually on board, flip it

//     if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
//       board[y][x] = !board[y][x];
//     }
//   }
