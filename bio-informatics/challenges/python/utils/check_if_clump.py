def check_if_clump(list, k_mer_length, ori_length, occurences):
  for x in range(len(list)):
    first = list[x]
    last = list[x + occurences - 1]
    if last + k_mer_length - first <= ori_length:
      return True
  return False
