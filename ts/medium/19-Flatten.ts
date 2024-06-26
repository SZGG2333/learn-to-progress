/* eslint-disable */
/*
  459 - Flatten
  -------
  by zhouyiming (@chbro) #中等 #array

  ### 题目

  在这个挑战中，你需要写一个接受数组的类型，并且返回扁平化的数组类型。

  例如:

  ```ts
  type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]
  ```

  > 在 Github 上查看：https://tsch.js.org/459/zh-CN
*/

/* _____________ 你的代码 _____________ */

type Flatten<T extends unknown[], U extends unknown[] = []> = T extends [infer F, ...infer R] ? F extends any[] ? Flatten<[...F, ...R], U> : Flatten<R, [...U, F]> : U

type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]
