export function composeProps(...props) {
  const append = props.map((prop) => prop.append_to_response).join(',');
  const all = props.reduce((a, b) => (a = { ...a, ...b }), {});

  return {
    ...all,
    append_to_response: append,
  };
}
