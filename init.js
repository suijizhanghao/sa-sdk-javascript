(function(para) {
  var p = para.sdk_url, n = para.name, w = window, d = document, s = 'script',x = null,y = null;
  if(typeof(w['sensorsDataAnalytic201505']) !== 'undefined') {
      return false;
  }
  w['sensorsDataAnalytic201505'] = n;
  w[n] = w[n] || function(a) {return function() {(w[n]._q = w[n]._q || []).push([a, arguments]);}};
  var ifs = ['track','quick','register','registerPage','registerOnce','trackSignup', 'trackAbtest', 'setProfile','setOnceProfile','appendProfile', 'incrementProfile', 'deleteProfile', 'unsetProfile', 'identify','login','logout','trackLink','clearAllRegister'];
  for (var i = 0; i < ifs.length; i++) {
    w[n][ifs[i]] = w[n].call(null, ifs[i]);
  }
  if (!w[n]._t) {
    x = d.createElement(s), y = d.getElementsByTagName(s)[0];
    x.async = 1;
    x.src = p;
    w[n].para = para;
    y.parentNode.insertBefore(x, y);
  }
})({
      sdk_url: 'sensorsdata.min.js',
      name: 'sensors',
      server_url:'https://bigdata.cib.com.cn/sa?project=default',
      //heatmap_url神策分析中点击分析及触达分析功能代码，代码生成工具会自动生成。如果神策代码中 `sensorsdata.min.js` 版本是 1.13.1 及以前版本，这个参数须配置，高于此版本不需要配置。
      //heatmap_url: "在 GitHub 下载新版本的 heatmap.min.js",
      //web_url 神策分析中点击分析及触达分析功能会用到此地址，代码生成工具会自动生成。如果神策后台版本及 `sensorsdata.min.js` 均是 1.10 及以上版本，这个参数不需要配置。
      fenhang_code: "cc",
      web_url:"神策分析后台地址",
      heatmap: {
         //是否开启点击图，默认 default 表示开启，自动采集 $WebClick 事件，可以设置 'not_collect' 表示关闭
         //需要 JSSDK 版本号大于 1.7
         clickmap:'default',
         //是否开启触达注意力图，设置 default 表示开启，自动采集 $WebStay 事件，设置 'not_collect' 表示关闭
         //需要 JSSDK 版本号大于 1.9.1
         scroll_notice_map:'not_collect'
      }
    });
    sensors.registerPage({
      current_url: location.href,
      abc: 'cc_globle'
  });
    sensors.quick('autoTrack');
    sensors.quick('autoTrack');

    
