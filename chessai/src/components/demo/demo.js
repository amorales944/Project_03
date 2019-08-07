
import React from "react";
import Chess from '../../react-chess'

require('./demo.css')

class Demo extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {pieces: Chess.getDefaultLineup()}
    this.handleMovePiece = this.handleMovePiece.bind(this)
  }

  handleMovePiece(piece, fromSquare, toSquare) {
    const newPieces = this.state.pieces
      .map((curr, index) => {
        if (piece.index === index) {
          return `${piece.name}@${toSquare}`
        } else if (curr.indexOf(toSquare) === 2) {
          return false // To be removed from the board
        }
        return curr
      })
      .filter(Boolean)

    this.setState({pieces: newPieces})
  }

  render() {
    const {pieces} = this.state
    return (
      <div className="mt-5 demo">
        <div className="row justify-content-center">
          <div className="col-5"><Chess className="chess" pieces={pieces} onMovePiece={this.handleMovePiece} /></div>
          </div>
          </div>
    )
  }
}



export default Demo;
