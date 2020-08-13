module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  // 配置 自动按需引入组件
  plugins: [
    [
      'import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true,
    }, 'vant'],
  ],
};
