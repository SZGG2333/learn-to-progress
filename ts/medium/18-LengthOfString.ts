/* eslint-disable */
/*
  298 - Length of String
  -------
  by Pig Fang (@g-plane) #中等 #template-literal

  ### 题目

  计算字符串的长度，类似于 `String#length` 。

  > 在 Github 上查看：https://tsch.js.org/298/zh-CN
*/

/* _____________ 你的代码 _____________ */

type LengthOfString<S extends string, T extends unknown[] = []> = S extends `${infer F}${infer R}` ? LengthOfString<R, [F, ...T]> : T['length'];

type length = LengthOfString<'1234567'>
