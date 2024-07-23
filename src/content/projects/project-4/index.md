---
title: "Hashmap"
description: "Data structure from scratch in C."
date: "May 23 2024"
repoURL: "https://github.com/Mshra/Hashmap"
---

[Hashmap](https://en.wikipedia.org/wiki/Hash_table) is a special abstract data structure that maps two objects called keys and values in memory for faster lookup times.

| Operation  | Average | Worst Case |
| :--------: | :-----: | :--------: |
| **Search** |  Θ(n)   |    O(n)    |
| **Insert** |  Θ(n)   |    O(n)    |
| **Delete** |  Θ(n)   |    O(n)    |

## How does it work?

The data structure uses a [hash function](https://en.wikipedia.org/wiki/Hash_function) to compute the index(also called hash code). I have used [FNV-1a](https://en.wikipedia.org/wiki/Fowler%E2%80%93Noll%E2%80%93Vo_hash_function) hash function. The algorithm for which is given as...

```
hash := FNV_offset_basis
   for each byte_of_data to be hashed do
       hash := hash XOR byte_of_data
       hash := hash × FNV_prime

   return hash
```

This index is used in array of _buckets_ or _slots_ for lookup.
During this lookup, the key is hashed and the result hash indicates the index or where the corresponding _value_ is stored.

The methods implemented are:

- Create

```C
Hash_Map *init_hashmap() {
  Hash_Map *tmp_hmap = (Hash_Map *)malloc(sizeof(Hash_Map));
  if (tmp_hmap == NULL) {
    printf("memory allocation failed!\n");
    exit(EXIT_FAILURE);
  }

  tmp_hmap->length = 1;
  allocate_NULL_ITEM(tmp_hmap, tmp_hmap->length);
  return tmp_hmap;
}
```

- Print

```C
void print_hmap(Hash_Map *hmap) {
  printf("{\n");
  for (int i = 0; i < hmap->length; i++) {
    if ((hmap->map[i]).isEmpty) {
      print_item(NULL_ITEM);
    } else {
      print_item(hmap->map[i]);
    }
  }
  printf("}\n");
}
```

- Delete

```C
void delete(Hash_Map *hmap, char *key) {
  hmap->map[get_index(key, hmap->length)] = NULL_ITEM;
}
```

- Insert

Most often problems we encounter is that of _collision_, which can be solved by many methods and one of them is [Linear Probing](https://en.wikipedia.org/wiki/Linear_probing).
