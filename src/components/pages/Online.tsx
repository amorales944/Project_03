import * as React from 'react';
import '../../stylesheets/Multiplayer.css';
import 'normalize.css';
import 'antd/dist/antd.css';
import SocketIo from '../../socket.io.client';
import RoomDetailsAi from '@Multiplayer/components/RoomDetails/RoomDetailsAi';

interface AppProps {
}

interface AppState {
  isReset: boolean;
  fen: string;
  orientation: 'b' | 'w';
  roomId: string;
  roomUsers: string[];
  currentUser: string;
  messagesArray: any[];
  gameType: 'ai';
  gameStatus: {
    message: string,
    type: 'success' | 'info' | 'warning' | 'error',
    showIcon: boolean
  };
}

class Online extends React.Component<AppProps, AppState> {
  public constructor(props: any, context: object) {
    super(props, context);
    this.state = {
      isReset: false,
      fen: '',
      orientation: 'w',
      gameType: 'ai',
      roomId: '',
      roomUsers: [],
      currentUser: '',
      messagesArray: [],
      gameStatus: {
        message: 'Welcome to CheckMates. Start New Game',
        type: 'info',
        showIcon: false
      }
    };
  }

  public render() {
    return (
      <div className="app">
        <RoomDetailsAi
          resetGame={this.resetGame}
          gameType={this.state.gameType}
          isReset={this.state.isReset}
          fen={this.state.fen}
          gameStatus={this.state.gameStatus}
          orientation={this.state.orientation}
          roomUsers={this.state.roomUsers}
          messagesArray={this.state.messagesArray}
        />
      </div>
    );
  }

  private resetGame = () => {
    this.setState({
      isReset: true
    }, () => {
      this.setState({ isReset: false });
      SocketIo.emit(
        'board-update',
        'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
        this.state.gameType === 'ai' ? true : false, true,
        this.state.orientation
      );
    });
  }
}

export default Online;
