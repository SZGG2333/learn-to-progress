/* eslint-disable */
/*
  529 - Absolute
  -------
  by Andrey Krasovsky (@bre30kra69cs) #中等 #math #template-literal

  ### 题目

  实现一个接收string,number或bigInt类型参数的`Absolute`类型,返回一个正数字符串。

  例如

  ```ts
  type Test = -100;
  type Result = Absolute<Test>; // expected to be "100"
  ```

  > 在 Github 上查看：https://tsch.js.org/529/zh-CN
*/

/* _____________ 你的代码 _____________ */

type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer U}` ? U : T;

type Test2 = -100;
type Result2 = Absolute<Test2>; // expected to be "100"