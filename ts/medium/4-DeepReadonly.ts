/* eslint-disable */
/*
  9 - 对象属性只读（递归）
  -------
  by Anthony Fu (@antfu) #中等 #readonly #object-keys #deep

  ### 题目

  实现一个泛型 `DeepReadonly<T>`，它将对象的每个参数及其子对象递归地设为只读。

  您可以假设在此挑战中我们仅处理对象。不考虑数组、函数、类等。但是，您仍然可以通过覆盖尽可能多的不同案例来挑战自己。

  例如

  ```ts
  type X = {
    x: {
      a: 1
      b: 'hi'
    }
    y: 'hey'
  }

  type Expected = {
    readonly x: {
      readonly a: 1
      readonly b: 'hi'
    }
    readonly y: 'hey'
  }

  type Todo = DeepReadonly<X> // should be same as `Expected`
  ```

  > 在 Github 上查看：https://tsch.js.org/9/zh-CN
*/

/* _____________ 你的代码 _____________ */

type DeepReadonly<T> = keyof T extends never ? T : {
  readonly[P in keyof T]: DeepReadonly<T[P]>;
}

type X = {
  x: {
    a: 1
    b: 'hi'
  }
  y: 'hey'
}

type Todo2 = DeepReadonly<X> // should be same as `Expected`

const obj: Todo2 = {
  x: {
    a: 1,
    b: 'hi'
  },
  y: 'hey'
}
