/* eslint-disable */
/*
  533 - Concat
  -------
  by Andrey Krasovsky (@bre30kra69cs) #简单 #array

  ### 题目

  在类型系统里实现 JavaScript 内置的 `Array.concat` 方法，这个类型接受两个参数，返回的新数组类型应该按照输入参数从左到右的顺序合并为一个新的数组。

  例如：

  ```ts
  type Result = Concat<[1], [2]> // expected to be [1, 2]
  ```

  > 在 Github 上查看：https://tsch.js.org/533/zh-CN
*/

type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U]

type MyResult2 = Concat<[1], [2]> // expected to be [1, 2]