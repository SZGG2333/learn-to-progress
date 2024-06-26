/* eslint-disable */
/*
  612 - KebabCase
  -------
  by Johnson Chu (@johnsoncodehk) #中等 #template-literal

  ### 题目

  Replace the `camelCase` or `PascalCase` string with `kebab-case`.

  `FooBarBaz` -> `foo-bar-baz`

  For example

  ```ts
  type FooBarBaz = KebabCase<"FooBarBaz">
  const foobarbaz: FooBarBaz = "foo-bar-baz"

  type DoNothing = KebabCase<"do-nothing">
  const doNothing: DoNothing = "do-nothing"
  ```

  > 在 Github 上查看：https://tsch.js.org/612/zh-CN
*/

/* _____________ 你的代码 _____________ */

type KebabCase<S> = S extends `${infer F}${infer R}` ? R extends Uncapitalize<R> ? `${Uncapitalize<F>}${KebabCase<R>}` : `${Uncapitalize<F>}-${KebabCase<R>}` : S

type FooBarBaz = KebabCase<"FooBarBaz">
const foobarbaz: FooBarBaz = "foo-bar-baz"

type DoNothing = KebabCase<"do-nothing">
const doNothing: DoNothing = "do-nothing"