def count_non_overlapping_pattern_occurrences(string, sequence) :
  count = 0
  match = ""

  for x in range(len(string)) :

    for y in range(len(sequence)) :

      try :
        condition = string[x] and sequence[y]

        if string[x] == sequence[y] :
          match += string[x]

          if match == sequence :
            print(match)
            print(sequence)
            count += 1
            x += 1
            break
          else :
            x += 1

        else :
          match = ""
          x += 1
          break

      except :
        print('oops')
  return count