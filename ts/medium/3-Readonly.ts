/* eslint-disable */
/*
  8 - 对象部分属性只读
  -------
  by Anthony Fu (@antfu) #中等 #readonly #object-keys

  ### 题目

  实现一个泛型`MyReadonly2<T, K>`，它带有两种类型的参数`T`和`K`。

  类型 `K` 指定 `T` 中要被设置为只读 (readonly) 的属性。如果未提供`K`，则应使所有属性都变为只读，就像普通的`Readonly<T>`一样。

  例如

  ```ts
  interface Todo {
    title: string
    description: string
    completed: boolean
  }

  const todo: MyReadonly2<Todo, 'title' | 'description'> = {
    title: "Hey",
    description: "foobar",
    completed: false,
  }

  todo.title = "Hello" // Error: cannot reassign a readonly property
  todo.description = "barFoo" // Error: cannot reassign a readonly property
  todo.completed = true // OK
  ```

  > 在 Github 上查看：https://tsch.js.org/8/zh-CN
*/


type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [Key in keyof T as Key extends K ? Key & string : never] : T[Key];
} & {
  [Key in keyof T as Key extends K ? never : Key & string]: T[Key];
}

interface Todo {
  title: string
  description: string
  completed: boolean
}

const todo2: MyReadonly2<Todo, 'title' | 'description'> = {
  title: "Hey",
  description: "foobar",
  completed: false,
}

todo2.title = "Hello" // Error: cannot reassign a readonly property
todo2.description = "barFoo" // Error: cannot reassign a readonly property
todo2.completed = true // OK