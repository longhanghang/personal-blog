/*
 * @Description: 
 * @Author: longhang
 * @Date: 2021-06-25 15:46:54
 * @LastEditors: longhang
 * @LastEditTime: 2024-03-18 20:11:29
 */
module.exports = {
  title: "折腾行",
  description: 'Everything is possible',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/image/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: '主页', link: '/', icon: 'reco-home' },
      { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
      { text: '文档', icon: 'reco-message',items: [{ text: 'vuepress-reco', link: '/docs/theme-reco/' }]},
      { text: '关于', link:'/docs/about/',icon:'reco-other'},
      { text: '留言', link:'/docs/message/',icon:'reco-message'}
    ],
    sidebar: {
      '/docs/theme-reco/': [
        '',
        'theme',
        'plugin',
        'api'
      ]
    },  
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认 “标签”
      }
    },
    friendLink: [
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: '1156743527@qq.com',
        link: 'https://www.recoluan.com'
      },
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
    ],
    logo: '/image/logo.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'longhanghang',
    // 作者头像
    authorAvatar: '/image/avatar.png',
    // 项目开始时间
    startYear: '2019',
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    valineConfig: {
      appId: 'pYIdH2cAGiKBr0POayNKYlqb-9Nh9j0Va',// your appId
      appKey: 'wTrruAUgQS5EhivlHqpJADuY', // your appKey
      placeholder:'赶快来留言吧',
    }
  },
  markdown: {
    lineNumbers: true
  }
}  