export function formatRatings(vote_average, vote_count) {
  if (!vote_count || !vote_average) return 'N/A';

  const countVote = formatVoteCount(vote_count);
  return `${formatVoteAverage(vote_average)} (${countVote})`;
}

export function formatVoteAverage(vote_average) {
  return parseFloat(vote_average).toFixed(1);
}

export function formatVoteCount(vote_count) {
  return vote_count > 1000 ? `${(vote_count / 1000).toFixed(1)}k` : vote_count;
}
