const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: 'Lemon',
        artist: '米津玄師',
        url: 'http://www.ytmp3.cn/down/51031.mp3',
        cover: 'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=0fd61bdbfc1f3a295ac8d2c8a11edb0c/e824b899a9014c08ed8492a0067b02087bf4f47c.jpg',
      },
      {
        name: '火炎',
        artist: '女王蜂',
        url: 'http://www.ytmp3.cn/down/57377.mp3',
        cover: 'https://pic.superbed.cn/item/5c660aeb5f3e509ed9781e46',
      },
      {
        name: 'ブルーバード(青鳥)',
        artist: '生物股長',
        url: 'http://www.ytmp3.cn/down/36498.mp3',
        cover: 'https://ww1.sinaimg.cn/large/007i4MEmgy1g06tgdy957j30zk0k0q5a.jpg',
      }
    ]
});