module.exports = (intervals) => {
  const sorted = [...intervals.map(v => [...v])].sort((a, b) => a[0] - b[0])

  const combined = []

  for (const interval of sorted) {
    const max = combined.length - 1

    if (combined.length === 0 || interval[0] > combined[max][1]) {
      combined.push(interval)
    } else {
      combined[max][1] = Math.max(interval[1], combined[max][1])
    }
  }

  return combined.reduce((a, [u, v]) => a + (v - u), 0)
};