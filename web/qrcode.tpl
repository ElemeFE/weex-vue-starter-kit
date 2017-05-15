<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>weex-vue-demo</title>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
</head>
<body style="text-align: center;">
  <img id="qr" src="" alt="qrcode">
  <a href="" id="link"></a>
</body>
<script src="//unpkg.com/jr-qrcode"></script>
<script>
  var ip = '<%= process.env.IP %>:' + location.port
  var link = 'http://' + ip + '/app.weex.js'
  var code = jrQrcode.getQrBase64(link);
  var a = document.getElementById('link')

  document.getElementById('qr').src = code;
  a.textContent = a.href = link;
</script>
</html>
