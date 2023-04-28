// 转换时间格式
export const shiftTimeStamp = (millisecond) => {
  let str = "";
  if (millisecond >= 1000) {
    var days = parseInt(millisecond / (1000 * 60 * 60 * 24));
    var hours = parseInt(
      (millisecond % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = parseInt((millisecond % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = parseInt((millisecond % (1000 * 60)) / 1000);
    var millisconds = millisecond % 1000;
    if (days > 0) {
      str = `${str}${days}天`;
    }
    if (hours > 0) {
      str = `${str}${hours}小时`;
    }
    if (minutes > 0) {
      str = `${str}${minutes}分钟`;
    }
    if (seconds > 0) {
      str = `${str}${seconds}秒`;
    }
    if (millisconds > 0) {
      str = `${str}${millisconds}毫秒`;
    }
  } else if (millisecond >= 0 && millisecond < 1000) {
    str = `${str}${millisecond}毫秒`;
  }
  return str;
};

// 随机获取两个数据
export function getRandomArrayElements(arr, count) {
  var shuffled = arr.slice(0),
    i = arr.length,
    min = i - count,
    temp,
    index;
  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(min);
}
// 时间戳转换年月日时分秒
export function timestampConversionDate(timdedetail) {
  //获取年份
  var year = new Date(timdedetail).getFullYear();
  //获取月份
  var month = new Date(timdedetail).getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }
  //获取日
  var date = new Date(timdedetail).getDate();
  if (date < 10) {
    date = "0" + date;
  }
  //获取小时
  var h1 =
    new Date(timdedetail).getHours() < 10
      ? "0" + new Date(timdedetail).getHours()
      : new Date(timdedetail).getHours();
  //获取分钟
  var m1 =
    new Date(timdedetail).getMinutes() < 10
      ? "0" + new Date(timdedetail).getMinutes()
      : new Date(timdedetail).getMinutes();
  //获取秒
  var s1 =
    new Date(timdedetail).getSeconds() < 10
      ? "0" + new Date(timdedetail).getSeconds()
      : new Date(timdedetail).getSeconds();
  //组合格式为年-月-日 时：分：秒（2021-07-05 21:21:21）
  return year + "-" + month + "-" + date + " " + h1 + ":" + m1 + ":" + s1;
}
