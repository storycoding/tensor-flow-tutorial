from utils import get_nucleotide_value

def pattern_to_number(pattern, index = None, total = 0):
  index = len(pattern) - 1 if index is None else index
  if index < 0:
    return total

  nucleotide = pattern[index]
    
  value = get_nucleotide_value(nucleotide)
  
  binominal_decimal = len(pattern) - ( index + 1)

  total += value * ( 4 ** binominal_decimal )

  return pattern_to_number(pattern, index - 1, total)
