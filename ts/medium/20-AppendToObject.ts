/* eslint-disable */
/*
  527 - Append to object
  -------
  by Andrey Krasovsky (@bre30kra69cs) #中等 #object-keys

  ### 题目

  实现一个为接口添加一个新字段的类型。该类型接收三个参数，返回带有新字段的接口类型。

  例如:

  ```ts
  type Test = { id: '1' }
  type Result = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }
  ```

  > 在 Github 上查看：https://tsch.js.org/527/zh-CN
*/

/* _____________ 你的代码 _____________ */

type AppendToObject<T, U extends string, V> = {
  [K in keyof T | U]: K extends keyof T ? T[K] : V
}

type Test = { id: '1' }
type Result = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }