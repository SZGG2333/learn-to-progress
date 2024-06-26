/* eslint-disable */
/*
  191 - 追加参数
  -------
  by Maciej Sikora (@maciejsikora) #中等 #arguments

  ### 题目

  > 由 @antfu 翻译

  实现一个泛型 `AppendArgument<Fn, A>`，对于给定的函数类型 `Fn`，以及一个任意类型 `A`，返回一个新的函数 `G`。`G` 拥有 `Fn` 的所有参数并在末尾追加类型为 `A` 的参数。

  ```typescript
  type Fn = (a: number, b: string) => number

  type Result = AppendArgument<Fn, boolean>
  // 期望是 (a: number, b: string, x: boolean) => number
  ```

  > 本挑战来自于 [@maciejsikora](https://github.com/maciejsikora) 在 Dev.io 上的[文章](https://dev.to/macsikora/advanced-typescript-exercises-question-4-495c)

  > 在 Github 上查看：https://tsch.js.org/191/zh-CN
*/

/* _____________ 你的代码 _____________ */

type AppendArgument<Fn extends Function, A> = Fn extends (...args: infer Args) => any ? (...args: [...Args, A]) => any : never;

type Fn = (a: number, b: string) => number

type Result = AppendArgument<Fn, boolean>