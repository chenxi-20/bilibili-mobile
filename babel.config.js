module.exports = {
  // 按需引入vant组件，需要额外配置插件，会在编译过程中自动转化为按需引入的方式
  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true
      }
    ]
  ],
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
