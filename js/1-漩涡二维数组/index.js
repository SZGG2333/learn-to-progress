/**
 * 
 * @param {二维数组的行} m 
 * @param {二维数组的列} n 
 * @returns {返回二维数组}
 */
function creatWhirlpool(m, n) {
  let target=m*n;    //正方形矩阵
  let sum=1;  //计数从一开始
  let left=0;    //左端点代表列
  let right=n-1;  //右端点代表列
  let top=0; //上端点代表行
  let under=m-1;//下端点代表行
  // ***此处Array.fill有个大坑，如果填充的内容是引用数据类型，改一个元素的内容，其他填充的会一起改变
  // 先填充0再映射成引用数据类型
  let num = new Array(m).fill(0).map(() => ([]))
  while(target>=sum) {//循环条件，当n*n的值小于sum时终止循环
    for(let i=left;i<=right;i++) { //第一行赋值，列变换
      num[top][i]=sum++;   //输入后再++
    }
    top++;   //因为右端点的最后已经输过一个数了，所以此时上端点下移一格
    for(let i=top;i<=under;i++) {//行变换，直到下端点
      num[i][right]=sum++;
    }
    right--;    //同理，右端点向左移动一格
    for(let i=right;i>=left;i--) {//列变换
      num[under][i]=sum++;
    }
    under--;    //同理，下端点向上移动一格
    for(let i = under;i>=top;i--) {//行变换
      num[i][left]=sum++;
    }
    left++;   //同理右端点向右移动一格，若未满足循环中止条件则重新开启循环，而数字则向内圈存储了，达到了题目目的
  }
  return num;
}

let arr = creatWhirlpool(4,3);
console.log(arr);