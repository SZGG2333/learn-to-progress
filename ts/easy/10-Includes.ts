/* eslint-disable */
/*
  898 - Includes
  -------
  by null (@kynefuk) #简单 #array

  ### 题目

  在类型系统里实现 JavaScript 的 `Array.includes` 方法，这个类型接受两个参数，返回的类型要么是 `true` 要么是 `false`。

  例如：

  ```ts
  type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
  ```

  > 在 Github 上查看：https://tsch.js.org/898/zh-CN
*/

type Includes<T extends unknown[], K> = K extends keyof T[number] ? true : false;

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
