import * as React from 'react';
import { Button, Radio } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio';
import '@Multiplayer/stylesheets/ChessFooter.css';
const RadioGroup = Radio.Group;

interface ChessFooterProps {
  gameType: 'friends' ;
  setOrientation: (side: 'w' | 'b') => void;
  resetGame: () => void;
  onGameTypeSelected: (e: RadioChangeEvent) => void;
}

const ChessFooter = (props: ChessFooterProps) => {
  return (
    <div className="chessfooter-wrapper">
      <Button type="primary" onClick={props.resetGame}>Start New Game</Button>
      <Button onClick={() => props.setOrientation('w')}>White</Button>
      <Button className="bg-secondary text-white" onClick={() => props.setOrientation('b')}>Black</Button>
      <RadioGroup onChange={e => props.onGameTypeSelected(e)} value={props.gameType}>
        <Radio value={'friends'}>Vs. Friends</Radio>
      </RadioGroup>
    </div>
  );
};

export default ChessFooter;