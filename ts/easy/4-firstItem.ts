/* eslint-disable */
/*
  14 - 第一个元素
  -------
  by Anthony Fu (@antfu) #简单 #array

  ### 题目

  实现一个`First<T>`泛型，它接受一个数组`T`并返回它的第一个元素的类型。

  例如：

  ```ts
  type arr1 = ['a', 'b', 'c']
  type arr2 = [3, 2, 1]

  type head1 = First<arr1> // 应推导出 'a'
  type head2 = First<arr2> // 应推导出 3
  ```

  > 在 Github 上查看：https://tsch.js.org/14/zh-CN
*/

type First<T extends unknown[]> = T extends [infer F, ...infer R] ? F : never;

type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = First<arr1> // 应推导出 'a'
type head2 = First<arr2> // 应推导出 3