import numpy as np
import math

def check_if_clump(list, k_mer_length, ori_length, occurences):
  for x in range(len(list)):
    first = list[x]
    last = list[x + occurences - 1]
    if last + k_mer_length - first <= ori_length:
      return True
  return False

####################

def compute_frequencies(dna_string, k_mer_length):
  frequency_array = np.zeros( (4 ** k_mer_length), dtype=int)

  for start in range(len(dna_string)):
    try:
      dna_string[(start + k_mer_length) - 1]
    except:
      break

    end = start + k_mer_length
    current_sequence = dna_string[start:end]
    index = pattern_to_number(current_sequence)
    frequency_array[index] += 1

  return frequency_array

####################

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

####################

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

####################

def get_nucleotide_by_index(index):
  nucleotides = ["A", "C", "G", "T"]
  return nucleotides[index]

####################

def get_nucleotide_value(nucleotide):
  nucleotide_values = {
      "A" : 0,
      "C" : 1,
      "G" : 2,
      "T" : 3
  }

  return nucleotide_values[nucleotide]
  
####################

def number_to_pattern(number, patternLength):
  pattern = []

  for x in range(patternLength):
    remainder = number % 4
    nucleotide = get_nucleotide_by_index(remainder)
    pattern.insert(0, nucleotide)
    number = math.floor(number / 4)

  return "".join(pattern)

####################

def pattern_to_number(pattern, index = None, total = 0):
  index = len(pattern) - 1 if index is None else index
  if index < 0:
    return total

  nucleotide = pattern[index]
    
  value = get_nucleotide_value(nucleotide)
  
  binominal_decimal = len(pattern) - ( index + 1)

  total += value * ( 4 ** binominal_decimal )

  return pattern_to_number(pattern, index - 1, total)

####################

def reverse_complement_string(dnaString):
  reversed_complement_string = ""

  paired_nucleotides = {
    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C"
  }

  for nucleotide in dnaString:
    try:
      reversed_complement_string += paired_nucleotides.get(nucleotide)
    except:
      raise Exception(f"invalid nucleotide in string: {nucleotide}")

  return reversed_complement_string
  