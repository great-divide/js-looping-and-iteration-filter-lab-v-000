function findMatching(drivers, str) {
  let array = []
  for (const d of drivers) {
    if (d.toLowerCase() === str.toLowerCase() ) {
      array.push(d)
    }
  }
  return array
}
