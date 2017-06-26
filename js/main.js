function drawCPB(id) {
  var el = document.getElementById(id); // get canvas

  var options = {
      percent:  el.getAttribute('data-percent') || 25,
      size: el.getAttribute('data-size') || 100,
      lineWidth: el.getAttribute('data-line') || 6,
      rotate: el.getAttribute('data-rotate') || 0,
      title: el.getAttribute('data-title')
  }

  var canvas = document.createElement('canvas');
  var span = document.createElement('span');
  span.textContent = options.title;

  if (typeof(G_vmlCanvasManager) !== 'undefined') {
      G_vmlCanvasManager.initElement(canvas);
  }

  var ctx = canvas.getContext('2d');
  canvas.width = canvas.height = options.size;

  el.appendChild(span);
  el.appendChild(canvas);

  ctx.translate(options.size / 2, options.size / 2); // change center
  ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg

  //imd = ctx.getImageData(0, 0, 240, 240);
  var radius = (options.size - options.lineWidth) / 2;

  var drawCircle = function(color, lineWidth, percent) {
      percent = Math.min(Math.max(0, percent || 1), 1);
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
      ctx.strokeStyle = color;
          ctx.lineCap = 'round'; // butt, round or square
      ctx.lineWidth = lineWidth
      ctx.stroke();
  };

  drawCircle('#ccc', options.lineWidth, 100 / 100);
  drawCircle('#0aa6e1', options.lineWidth, options.percent / 100);
}

drawCPB('graph');
drawCPB('graph2');
drawCPB('graph3');
drawCPB('graph4');
drawCPB('graph5');