import Boxes from './Boxes';
import Strike from './strike';

export default function Board({ box, onBoxClick, strikeClass }) {
  return (
    <div className="board">
      <Boxes onClick={() => onBoxClick(0)} value={box[0]} />
      <Boxes onClick={() => onBoxClick(1)} value={box[1]} />
      <Boxes onClick={() => onBoxClick(2)} value={box[2]} />
      <Boxes onClick={() => onBoxClick(3)} value={box[3]} />
      <Boxes onClick={() => onBoxClick(4)} value={box[4]} />
      <Boxes onClick={() => onBoxClick(5)} value={box[5]} />
      <Boxes onClick={() => onBoxClick(6)} value={box[6]} />
      <Boxes onClick={() => onBoxClick(7)} value={box[7]} />
      <Boxes onClick={() => onBoxClick(8)} value={box[8]} />
      < Strike strikeClass = {strikeClass}/>
    </div>
  );
}
