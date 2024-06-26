/* eslint-disable */
/*
  531 - String to Union
  -------
  by Andrey Krasovsky (@bre30kra69cs) #中等 #union #string

  ### 题目

  实现一个将接收到的String参数转换为一个字母Union的类型。

  例如

  ```ts
  type Test = '123';
  type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"
  ```

  > 在 Github 上查看：https://tsch.js.org/531/zh-CN
*/

/* _____________ 你的代码 _____________ */

type StringToUnion<T extends string, U extends unknown[] = []> = T extends `${infer F}${infer R}` ? StringToUnion<R, [...U, F]> : U[number]

type Test = '123';
type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"