/* eslint-disable */
/*
  645 - Diff
  -------
  by ZYSzys (@ZYSzys) #中等 #object

  ### 题目

  获取两个接口类型中的差值属性。

  ```ts
  type Foo = {
    a: string;
    b: number;
  }
  type Bar = {
    a: string;
    c: boolean
  }

  type Result1 = Diff<Foo,Bar> // { b: number, c: boolean }
  type Result2 = Diff<Bar,Foo> // { b: number, c: boolean }

  ```

  > 在 Github 上查看：https://tsch.js.org/645/zh-CN
*/

/* _____________ 你的代码 _____________ */

type Diff<O, O1> = {
  [K in keyof O | keyof O1 as K extends keyof O ? K extends keyof O1 ? never : K : K]: K extends keyof O ? O[K] : K extends keyof O1 ? O1[K] : never;
}

type Foo = {
  a: string;
  b: number;
}
type Bar = {
  a: string;
  c: boolean
}

type Result1 = Diff<Foo,Bar> // { b: number, c: boolean }
type Result4 = Diff<Bar,Foo> // { b: number, c: boolean }