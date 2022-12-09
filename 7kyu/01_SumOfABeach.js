// Beaches are filled with sand, water, fish, and sun. Given a string, calculate how many times the words "Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).

function sumOfABeach(beach) {
  return (beach.match(/(sand)|(sun)|(water)|(fish)/gi) || []).length;
}
