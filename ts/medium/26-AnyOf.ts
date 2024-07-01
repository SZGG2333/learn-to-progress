/* eslint-disable */
/*
  949 - AnyOf
  -------
  by null (@kynefuk) #中等 #array

  ### 题目

  在类型系统中实现类似于 Python 中 `any` 函数。类型接收一个数组，如果数组中任一个元素为真，则返回 `true`，否则返回 `false`。如果数组为空，返回 `false`。

  例如：

  ```ts
  type Sample1 = AnyOf<[1, '', false, [], {}]> // expected to be true.
  type Sample2 = AnyOf<[0, '', false, [], {}]> // expected to be false.
  ```

  > 在 Github 上查看：https://tsch.js.org/949/zh-CN
*/

/* _____________ 你的代码 _____________ */
type AnyOf<T extends any[]> = T[number] extends 0 | '' | false | [] | {[key: string]: never} ? false : true

type Sample1 = AnyOf<[1, '', false, [], {}]> // expected to be true.
type Sample2 = AnyOf<[0, '', false, [], {}]> // expected to be false.
