/* eslint-disable */
/*
  1097 - IsUnion
  -------
  by null (@bencor) #中等 #union

  ### 题目

  Implement a type `IsUnion`, which takes an input type `T` and returns whether `T` resolves to a union type.

  For example:

  ```ts
  type case1 = IsUnion<string> // false
  type case2 = IsUnion<string | number> // true
  type case3 = IsUnion<[string | number]> // false
  ```

  > 在 Github 上查看：https://tsch.js.org/1097/zh-CN
*/

/* _____________ 你的代码 _____________ */

type IsUnion<T, K = T> = [T] extends [never] ? false : T extends K ? [K] extends [T] ? false : true : never

type case1 = IsUnion<string> // false
type case2 = IsUnion<string | number> // true
type case3 = IsUnion<[string | number]> // false
type case4 = IsUnion<never> // false
