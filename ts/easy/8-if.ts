/* eslint-disable */
/*
  268 - If
  -------
  by Pavel Glushkov (@pashutk) #简单 #utils

  ### 题目

  实现一个 `IF` 类型，它接收一个条件类型 `C` ，一个判断为真时的返回类型 `T` ，以及一个判断为假时的返回类型 `F`。 `C` 只能是 `true` 或者 `false`， `T` 和 `F` 可以是任意类型。

  例如：

  ```ts
  type A = If<true, 'a', 'b'>  // expected to be 'a'
  type B = If<false, 'a', 'b'> // expected to be 'b'
  ```

  > 在 Github 上查看：https://tsch.js.org/268/zh-CN
*/

type If<C extends boolean, T, F> = C extends true ? T : F;
type A = If<true, 'a', 'b'>  // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'