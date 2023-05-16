function calculateMinCost() {
  // Get the input value and convert it to an array of integers
  const input = document.getElementById('ropeLengths').value;
  const lengths = input.split(',').map((length) => parseInt(length.trim(), 10));

  // Calculate the minimum cost
  const minCost = calculateMinimumCost(lengths);

  // Update the result div with the minimum cost
  resultDiv.textContent = `Minimum Cost: ${minCost}`;
}
