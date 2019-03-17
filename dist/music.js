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
        name: 'アイロニ-[反语]',
        artist: '4円',
        url: 'http://www.ytmp3.cn/down/51036.mp3',
        cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552107089869&di=6937d2da568735e7d256dae02759a11d&imgtype=0&src=http%3A%2F%2Fp1.music.126.net%2FiFKN61k9tOCRoq8hg9ri3Q%3D%3D%2F109951163523069337.jpg',
      },
      {
        name: '暁の鎮魂歌',
        artist: 'Linked Horizon',
        url: 'http://win.web.nf01.sycdn.kuwo.cn/568890173cf72c88b976fd7b3450ef3d/5c831fa2/resource/n1/47/60/3734609011.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M00000312jqw2AxkhU.jpg?max_age=2592000',
      },
      {
        name: '白雪 ~sirayuki~',
        artist: 'とのん',
        url: 'http://www.ytmp3.cn/down/36120.mp3',
        cover: 'https://pic.xiami.net/images/album/img0/62500/4055451286766365.jpg?x-oss-process=image/resize,limit_0,s_410,m_fill',
      },
      {
        name: 'Genius',
        artist: 'LSD',
        url: 'http://www.170mv.com/kw/other.web.no01.sycdn.kuwo.cn/resource/n3/57/26/2844699014.mp3',
        cover: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2733699664,1627965535&fm=58&bpow=1500&bpoh=1500',
      },
      {
        name: 'Nevada',
        artist: 'Vicetone',
        url: 'http://nq01.sycdn.kuwo.cn/05467fea69ecff45cebc90b970add404/5c8d9dd5/resource/n3/37/52/2766180443.mp3',
        cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552795113025&di=938a060fbaeb15fd09733e33108d8447&imgtype=0&src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Farchive%2Ffcd22340068dc33576b6486c68fb7815cdf2569e.jpg',
      }
    ]
});