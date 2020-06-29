import packageConfig from "../package.json";
const Utils = {
  version: packageConfig.version, // 版本号
  // 首字母大写
  titleCase: (str) => {
    var lstr = str.toLowerCase().split(" ");
    for (var i = 0; i < lstr.length; i++) {
      lstr[i] = lstr[i][0].toUpperCase() + lstr[i].substring(1, lstr[i].length);
    }
    var res = lstr.join(" ");
    return res;
  },
  /**
   * 查询是否手机号
   * @param phone
   * @returns
   */
  isPhone: (phone) => {
    var phoneReg = new RegExp(
      "^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9]|19(1|[8-9])|166)[0-9]{8}$",
      ""
    )
    if (phoneReg.test(phone)) return true
    else return false;
  },
  /**
   * 查询是否中国移动手机号
   * @param phone
   * @returns
   */
  isMobilePhone: (phone) => {
    var mobilereg = new RegExp(
      "[+]{0,1}[0-9]{0,2}1((3[4-9])|4([7])|(5[0-27-9])|(78)|8[23478]|(98))[0-9]{8}$",
      ""
    )
    if (mobilereg.test(phone)) return true
    else return false
  }
}
export default Utils;
