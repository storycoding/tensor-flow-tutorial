import numpy as np
from utils import pattern_to_number

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
