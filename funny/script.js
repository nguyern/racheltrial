//Credit to https://matildasutho.github.io/InteractiveMedia2024/Week3/script/script.js for showing me how to do this typing effect
var data = [
  {
    html: `
      &lt;!DOCTYPE html&gt;<br/>
      &lt;html lang="en"&gt;<br/>
      &lt;head&gt;<br/>
      <span class="tab1"></span>&lt;title&gt; trial &lt;/title&gt;<br/>
      &lt;style&gt;<br/>
      <span class="tab1"></span>body {<br/>
      <span class="tab2"></span>font-family: monospace;<br/>
      <span class="tab2"></span>color: do i look pretty in pink?;<br/>
      <span class="tab1"></span>}<br/>
      <span class="tab1"></span>body:hover {<br/>
      <span class="tab2"></span>font-family: sloop;<br/>
      <span class="tab2"></span>color: genuinely be honest does this color suit me?;<br/>
      <span class="tab1"></span>}<br/>
      &lt;/style&gt;<br/>
      &lt;/head&gt;<br/>
      &lt;body&gt;<br/>
      <span class="tab1"></span>&lt;h1&gt; do you think i'm cute? be honest like if you don't like me you can let me know like i won't even be hurt. &lt;/h1&gt;<br/>
      &lt;/body&gt;<br/>
      &lt;/html&gt;<br/>
    `,
  },
];

var allElements = document.getElementsByClassName("monospace");
for (var j = 0; j < allElements.length; j++) {
  var currentElementId = allElements[j].id;
  var currentElementIdContent = data[0][currentElementId];
  var element = document.getElementById(currentElementId);
  var devTypeText = currentElementIdContent;

  var i = 0,
    isTag,
    text;
  (function type() {
    text = devTypeText.slice(0, ++i);
    element.innerHTML = text + `<span class='typing-caret'>|</span>`;
    var char = text.slice(-1);
    if (char === "<") isTag = true;
    if (char === ">") isTag = false;
    if (isTag) return type();
    if (text === devTypeText) return;
    setTimeout(type, 15);
  })();
}