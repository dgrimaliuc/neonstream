export function handleSettledResults(results) {
  const fulfilledResults = [];
  const rejectedResults = [];

  results.forEach(result => {
    if (result.status === 'fulfilled' && !result.value?.error) {
      fulfilledResults.push(result.value);
    } else {
      rejectedResults.push(result.reason || result.value);
    }
  });

  // Optionally log or handle errors here
  if (rejectedResults.length > 0) {
    console.error('Failed to process:', rejectedResults);
  }

  return { fulfilledResults, rejectedResults };
}
