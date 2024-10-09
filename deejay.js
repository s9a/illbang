// npm.im/varam
// ryanve.dev/varam
!function(n,m){function t(b){var d=!1,c=new f(b);b=m.querySelectorAll("[data-varam]");p(b,function(e){var h=e.getAttribute("data-varam");(h=h&&h.match(u))&&p(h,function(q){var v=c.get(q);d=r(e.style,"--"+q,v)||d})});a.state=c.toString();return d}function k(){return!1}function w(){return a(location.search)}function x(){return a("")}function r(b,d,c){var e=b.getPropertyValue(d);(e=c?e===c:!e)||b.setProperty(d,c);return!e}function p(b,d){for(var c=b.length;c--;)d(b[c])}var u=/\S+/g,f=n.URLSearchParams,
a=f?t:k,g=(m.querySelector||k).call(m,"meta[name=varam][content]");g=g&&g.content;var l="string"==typeof g;a.flow=f?w:k;a.fresh=r;a.help=function(){console.dir(a);return a.state};a.reset=f?x:k;a.state="";f&&a(l?l&&g:location.search);a.meta=l?a.state:!1;a.via=l?"meta":"flow";n.varam=a;"undefined"!=typeof module&&module.exports&&(module.exports=a)}(window,document);

// ¡! fragile
!function(willow, dolphin, lion) {
  function zef(f) { f(0) }
  function reset(elephant, name, value) {
    var ph = elephant.style
    ph.setProperty("--" + name, value)
  }
  
  var animal = willow.requestAnimationFrame || zef
  var urchin = willow.URLSearchParams
  var search = lion.search
  var surprise = search === "?!"
  var morf = dolphin.querySelector("form")
  var bttm = morf.querySelector("button")
  var thc = dolphin.querySelector("meta[name=theme-color]")
  var all = [
    "?tape-play=%23d819e6&tape-loud=%2361e5e3&tape-luvu=%2364e87e&tape-bluv=%235918f2&tape-blaq=%23eee833&tape-watt=%23e0e0e0",
    "?tape-play=%23fbbfff&tape-loud=%23eee833&tape-luvu=%2344f477&tape-bluv=%2311dff1&tape-blaq=%230091ff&tape-watt=%232f0b4c",
    "?tape-play=%23da1fff&tape-loud=%233ce2b0&tape-luvu=%232adf5d&tape-bluv=%2311dff1&tape-blaq=%230b57d0&tape-watt=%23e0e0e0",
    "?tape-play=%23c612d3&tape-loud=%23ef34d6&tape-luvu=%2344f477&tape-bluv=%2311dff1&tape-blaq=%23ffe74d&tape-watt=%23322f2f",
    "?tape-play=%23fbbfff&tape-loud=%23eee833&tape-luvu=%2344f477&tape-bluv=%2311dff1&tape-blaq=%23523df0&tape-watt=%23e0e0e0",
    "?tape-play=%23e4ec74&tape-loud=%23ef34c6&tape-luvu=%236143f4&tape-bluv=%2304b8c8&tape-blaq=%23fbbfff&tape-watt=%23e0e0e0",
    "?tape-play=%23e4ec74&tape-loud=%234dffd2&tape-luvu=%23e208d0&tape-bluv=%2304b8c8&tape-blaq=%23560bb1&tape-watt=%23e0e0e0",
    "?tape-play=%23ec6051&tape-loud=%23eee833&tape-luvu=%2311d80e&tape-bluv=%2318eef2&tape-blaq=%236c19a4&tape-watt=%23bbaaee",
    "?tape-play=%2351ec63&tape-loud=%23eee833&tape-luvu=%2300e1ff&tape-bluv=%23f218c2&tape-blaq=%2339083f&tape-watt=%23bbaaee",
    "?tape-play=%23fbbfff&tape-loud=%23eee833&tape-luvu=%2344f477&tape-bluv=%2311dff1&tape-blaq=%233719a4&tape-watt=%23bbaaee"
  ]
  
  if (surprise) random()
  else if (urchin && search) new urchin(search)
    .forEach(function(hex, ki) {
    var input = morf[ki]
    if (!input) return
    var value = input.value
    if (value !== hex) input.value = hex
    if ("tape-blaq" === ki) thc.setAttribute("content", hex)
  })
  
  function random() {
    var nookie = Math.floor(Math.random() * all.length)
    var sh = all[nookie]
    if (sh === search) lion.href = "?"
    if (sh) lion.href = sh
  }

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

  dolphin.title = "illbang ¡! remixyz"
}(window, document, location);



