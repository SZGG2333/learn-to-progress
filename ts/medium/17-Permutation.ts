/* eslint-disable */
/*
  296 - Permutation
  -------
  by Naoto Ikuno (@pandanoir) #中等 #union

  ### 题目

  实现联合类型的全排列，将联合类型转换成所有可能的全排列数组的联合类型。

  ```typescript
  type perm = Permutation<'A' | 'B' | 'C'>; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']
  ```

  > 在 Github 上查看：https://tsch.js.org/296/zh-CN
*/

/* _____________ 你的代码 _____________ */

type Permutation<T, K = T> = [T] extends [never] ? [] : K extends K ? [K, ...Permutation<Exclude<T, K>>] : never

type perm = Permutation<'A' | 'B' | 'C'>; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']
