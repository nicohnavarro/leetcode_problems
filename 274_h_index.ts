function hindex(citations: number[]): number {
  const orderCitations = citations.sort().reverse();
  let h_index = 0;
  for (let i = 0; i < orderCitations.length; i++) {
    if (orderCitations[i] >= i + 1) {
      h_index++;
    } else {
      break;
    }
  }
  console.log(h_index);
  return h_index;
}

hindex([1, 1, 3, 6, 7, 10, 7, 1, 8, 5, 9, 1, 4, 4, 3]);
