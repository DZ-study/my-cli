const fs = require('fs')
const path = require('path')
const execSync = require('child_process').execSync

class Utils {
  /**
   * 获取某个包的安装情况
   * 返回 0-未安装 1-已安装非最新 3-安装最新
   */
  getInstalledStatus(pkgName, targetDir) {
    // const 
  }

  /**
   * 获取路径下已经安装的包
   */
  getInstalledPkgs(targetDir) {
    const pkgJsonFile = path.resolve(targetDir, 'packeage.json')
    if (!fs.existsSync(pkgJsonFile)) return {}
    const pkgFile = require(pkgJsonFile)
    console.log(pkgFile);
  }
}

module.exports = Utils;