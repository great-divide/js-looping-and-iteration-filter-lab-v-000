function findMatching(drivers, str) {
  let array = []
  for (const d of drivers) {
    if (d.toLowerCase() === str.toLowerCase() ) {
      array.push(d)
    }
  }
  return array
}

function fuzzyMatch(drivers, str) {
    let array = []
    for (const d of drivers) {
      if (d[0].toLowerCase === str.toLowerCase() ) {
        array.push(d)
      }
    }
    return array
}
