// npm.im/varam
// ryanve.dev/varam
!function(n,m){function t(b){var d=!1,c=new f(b);b=m.querySelectorAll("[data-varam]");p(b,function(e){var h=e.getAttribute("data-varam");(h=h&&h.match(u))&&p(h,function(q){var v=c.get(q);d=r(e.style,"--"+q,v)||d})});a.state=c.toString();return d}function k(){return!1}function w(){return a(location.search)}function x(){return a("")}function r(b,d,c){var e=b.getPropertyValue(d);(e=c?e===c:!e)||b.setProperty(d,c);return!e}function p(b,d){for(var c=b.length;c--;)d(b[c])}var u=/\S+/g,f=n.URLSearchParams,
a=f?t:k,g=(m.querySelector||k).call(m,"meta[name=varam][content]");g=g&&g.content;var l="string"==typeof g;a.flow=f?w:k;a.fresh=r;a.help=function(){console.dir(a);return a.state};a.reset=f?x:k;a.state="";f&&a(l?l&&g:location.search);a.meta=l?a.state:!1;a.via=l?"meta":"flow";n.varam=a;"undefined"!=typeof module&&module.exports&&(module.exports=a)}(window,document);

// ¡! fragile
!function(willow, duende, search) {
  function zef(f) { f(0) }
  function reset(elephant, name, value) {
    var ph = elephant.style
    ph.setProperty("--" + name, value)
  }
  
  var animal = willow.requestAnimationFrame || zef
  var urchin = willow.URLSearchParams
  var morf = duende.querySelector("form")
  var bttm = morf.querySelector("button")
  var thc = duende.querySelector("meta[name=theme-color]")
  
  if (urchin) new urchin(search)
    .forEach(function(hex, ki) {
    var input = morf[ki]
    var value = input && input.value
    if (value !== hex) input.value = hex
    if ("tape-blaq" === ki) thc.setAttribute("content", hex)
  })

  morf.addEventListener("change", function(e) {
    var input = e.target
    var name = input.name
    var value = input.value
    var label = input.parentNode
    animal(function() {
      reset(label, name, value)
      reset(bttm, name, value)
    })
  })

  duende.title = "illbang ¡! remixyz"
}(window, document, location.search);



