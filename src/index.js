import packageConfig from '../package.json'
const Utils = {
  version: packageConfig.version, // 版本号
  // 首字母大写
  titleCase:(str) => {
      var lstr = str.toLowerCase().split(' ');
      for(var i = 0 ; i < lstr.length; i++) {
        lstr[i] = lstr[i][0].toUpperCase() + lstr[i].substring(1, lstr[i].length);
      }
      var res = lstr.join(' ');
      return res;
  }
}
export default Utils