export default function Selector({ options, value = 0, onChange, className }) {
  if (!options) return null;
  return (
    <select className={className} value={value} onChange={onChange}>
      {options.map((option, i) => (
        <option key={i} value={i}>
          {option.label || option.name || option}
        </option>
      ))}
    </select>
  );
}
