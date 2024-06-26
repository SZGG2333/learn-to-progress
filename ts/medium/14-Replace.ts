/* eslint-disable */
/*
  116 - Replace
  -------
  by Anthony Fu (@antfu) #中等 #template-literal

  ### 题目

  实现 `Replace<S, From, To>` 将字符串 `S` 中的第一个子字符串 `From` 替换为 `To` 。

  例如

  ```ts
  type replaced = Replace<'types are fun!', 'fun', 'awesome'> // 期望是 'types are awesome!'
  ```

  > 在 Github 上查看：https://tsch.js.org/116/zh-CN
*/

/* _____________ 你的代码 _____________ */

type Replace<S extends string, From extends string, To extends string> = S extends `${infer F}${From}${infer R}` ? `${F}${To}${R}` : never

type replaced = Replace<'types are fun!', 'fun', 'awesome'> // 期望是 'types are awesome!'
