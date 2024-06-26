/* eslint-disable */
/*
  599 - Merge
  -------
  by ZYSzys (@ZYSzys) #中等 #object

  ### 题目

  将两个类型合并成一个类型，第二个类型的键会覆盖第一个类型的键。

  例如

  ```ts
  type foo = {
    name: string;
    age: string;
  }

  type coo = {
    age: number;
    sex: string
  }

  type Result = Merge<foo,coo>; // expected to be {name: string, age: number, sex: string}
  ```

  > 在 Github 上查看：https://tsch.js.org/599/zh-CN
*/

/* _____________ 你的代码 _____________ */

type Merge<F, S> = {
  [K in keyof F | keyof S]: K extends keyof S ? S[K] : K extends keyof F ? F[K] : never
}

type foo = {
  name: string;
  age: string;
}

type coo = {
  age: number;
  sex: string
}

type Result3 = Merge<foo,coo>; // expected to be {name: string, age: number, sex: string}