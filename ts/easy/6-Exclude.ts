/* eslint-disable */
/*
  43 - 实现 Exclude
  -------
  by Zheeeng (@zheeeng) #简单 #built-in #union

  ### 题目

  实现内置的 `Exclude<T, U>` 类型，但不能直接使用它本身。

  > 从联合类型 `T` 中排除 `U` 中的类型，来构造一个新的类型。

  例如：

  ```ts
  type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
  ```

  > 在 Github 上查看：https://tsch.js.org/43/zh-CN
*/

type MyExclude<T, K> = T extends K ? never : T

type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'