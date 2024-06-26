/* eslint-disable */
/*
  108 - 去除两端空白字符
  -------
  by Anthony Fu (@antfu) #中等 #template-literal

  ### 题目

  实现`Trim<T>`，它接受一个明确的字符串类型，并返回一个新字符串，其中两端的空白符都已被删除。

  例如

  ```ts
  type trimed = Trim<'  Hello World  '> // expected to be 'Hello World'
  ```

  > 在 Github 上查看：https://tsch.js.org/108/zh-CN
*/

/* _____________ 你的代码 _____________ */

type Trim<S extends string> = S extends `${' '}${infer T}` | `${infer T}${' '}` ? Trim<T> : S

type trimed = Trim<'  Hello World  '> // expected to be 'Hello World'
