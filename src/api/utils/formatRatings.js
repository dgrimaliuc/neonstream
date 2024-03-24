export function formatRatings(vote_average, vote_count) {
  if (!vote_count || !vote_average) return 'N/A';

  const countVote =
    vote_count > 1000 ? `${(vote_count / 1000).toFixed(1)}k` : vote_count;
  return `${parseFloat(vote_average).toFixed(1)} (${countVote})`;
}
