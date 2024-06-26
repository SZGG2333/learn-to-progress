/* eslint-disable */
/*
  110 - Capitalize
  -------
  by Anthony Fu (@antfu) #中等 #template-literal

  ### 题目

  实现 `Capitalize<T>` 它将字符串的第一个字母转换为大写，其余字母保持原样。

  例如

  ```ts
  type capitalized = Capitalize<'hello world'> // expected to be 'Hello world'
  ```

  > 在 Github 上查看：https://tsch.js.org/110/zh-CN
*/

/* _____________ 你的代码 _____________ */

type MyCapitalize<S extends string> = S extends `${infer F}${infer R}` ? `${Uppercase<F>}${R}` : never;

type capitalized = Capitalize<'hello world'> // expected to be 'Hello world'
