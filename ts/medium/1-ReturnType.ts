/* eslint-disable */
/*
  2 - 获取函数返回类型
  -------
  by Anthony Fu (@antfu) #中等 #infer #built-in

  ### 题目

  不使用 `ReturnType` 实现 TypeScript 的 `ReturnType<T>` 泛型。

  例如：

  ```ts
  const fn = (v: boolean) => {
    if (v)
      return 1
    else
      return 2
  }

  type a = MyReturnType<typeof fn> // 应推导出 "1 | 2"
  ```

  > 在 Github 上查看：https://tsch.js.org/2/zh-CN
*/

type MyReturnType<T> = T extends (...args: any) => infer R ? R : never;

const fn = (v: boolean) => v ? 1 : 2
const fn1 = (v: boolean, w: any) => v ? 1 : 2

type a = MyReturnType<typeof fn>;
type b = MyReturnType<typeof fn1>;

