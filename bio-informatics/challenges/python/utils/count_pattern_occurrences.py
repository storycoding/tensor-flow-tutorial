def count_pattern_occurrences(string, sequence) :
  count = 0

  for x in range(len(string)) :
    for y in range(len(sequence)) :
      try :
        if string[x+y] != sequence[y] :
          break
        elif (y == ( len(sequence) - 1) ) :
          count += 1

      except :
        None

  return count
