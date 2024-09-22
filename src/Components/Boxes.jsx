export default function Boxes({ value, onClick }) {
  return (
    <div onClick={onClick} className="boxes">
      {value}
    </div>
  );
}
