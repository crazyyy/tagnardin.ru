/* wwb9 */
function PlaySound(a){a=eval("document."+a);try{a.Play()}catch(b){a.DoPlay()}}function OnGoMenuFormLink(a){var b=a.options[a.selectedIndex].value,c=a.options[a.selectedIndex].className;a.selectedIndex=0;a.blur();b&&(NewWin=window.open(b,c),window.NewWin.focus())}
function popupwnd(a,b,c,d,e,l,g,h,k,f,m){-1==h&&(h=screen.width/2-f/2);-1==k&&(k=screen.height/2-m/2);this.open(a,"","toolbar="+b+",menubar="+c+",location="+d+",scrollbars="+l+",resizable="+e+",status="+g+",left="+h+",top="+k+",width="+f+",height="+m)}function displaylightbox(a,b){b.padding=0;b.autoScale=!0;b.href=a;b.type="iframe";$.fancybox(b)}function ShowObject(a,b){var c=document.getElementById(a);c&&(c.style.visibility=b?"visible":"hidden")}
function MoveObject(a,b,c){if(a=document.getElementById(a))a.style.left=b+"px",a.style.top=c+"px"}function Rotate(a,b){$("#"+a).wwbrotate(b)}function SetImage(a,b){var c=document.getElementById(a);c&&(c.src=b)}function SetStyle(a,b){var c=document.getElementById(a);c&&(c.className=b)}
function Animate(a,b,c,d,e,l,g,h){var k="#"+a,f={};""!=b&&(f.left=b);""!=c&&(f.top=c);""!=d&&(f.width=d);""!=e&&(f.height=e);""!=l&&(f.opacity=l/100);0==a.indexOf("wb_")&&(a="#"+a.substring(3),$(a).stop().animate(f,g));""!=h&&(f.rotate=h);$(k).stop().animate(f,g)}function LoadValue(a,b,c){var d=document.getElementById(a);if(d&&(b=window[b+"Storage"])&&null!=b.getItem(a))switch(c){case 1:d.checked="true"==b.getItem(a);break;case 2:d.selectedIndex=b.getItem(a);break;default:d.value=b.getItem(a)}}
function StoreValue(a,b,c){var d=document.getElementById(a);if(d&&(b=window[b+"Storage"]))switch(c){case 1:b.setItem(a,d.checked);break;case 2:b.setItem(a,d.selectedIndex);break;default:b.setItem(a,d.value)}}function PlayAudio(a){(a=document.getElementById(a))&&a.play()}function PauseAudio(a){(a=document.getElementById(a))&&a.pause()}function StopAudio(a){if(a=document.getElementById(a))a.pause(),a.currentTime=0}
function ToggleHelper(a,b,c,d,e,l){b="#"+b;var g={},h,k="horizontal vertical left right up down".split(" ");for(i=0;6>i;i++)h=d.indexOf(k[i]),-1!=h&&(g={direction:k[i]},d=d.substring(0,h));"hidden"==$(b).css("visibility")&&($(b).css("display","none"),$(b).css("visibility",""));"undefined"!=typeof l&&(g.easing=l);1==a?0==e?$(b).toggle():$(b).toggle(d,g,e):""==d?c?$(b).css("display",""):$(b).css("display","none"):1==c?$(b).show(d,g,e):$(b).hide(d,g,e)}
function ShowObjectWithEffect(a,b,c,d,e){ToggleHelper(0,a,b,c,d,e)}function Toggle(a,b,c,d){ToggleHelper(1,a,1,b,c,d)}function ToggleStyle(a,b,c,d){a="#"+a;0==c?$(a).toggleClass(b):$(a).toggleClass(b,c,d)}function AnimationResume(a){if(a=document.getElementById(a))a.style.animationPlayState="running"}function AnimationPause(a){if(a=document.getElementById(a))a.style.animationPlayState="paused"};
/* bloshar */
$(document).ready(function()
{
   $("#indexRollOver1 a").hover(function()
   {
      $(this).children("span").stop().fadeTo(500, 0);
   }, function()
   {
      $(this).children("span").stop().fadeTo(500, 1);
   });
   $("#indexRollOver2 a").hover(function()
   {
      $(this).children("span").stop().fadeTo(500, 0);
   }, function()
   {
      $(this).children("span").stop().fadeTo(500, 1);
   });
   $("#indexRollOver3 a").hover(function()
   {
      $(this).children("span").stop().fadeTo(500, 0);
   }, function()
   {
      $(this).children("span").stop().fadeTo(500, 1);
   });
   $("#indexRollOver4 a").hover(function()
   {
      $(this).children("span").stop().fadeTo(500, 0);
   }, function()
   {
      $(this).children("span").stop().fadeTo(500, 1);
   });
   $("#indexRollOver5 a").hover(function()
   {
      $(this).children("span").stop().fadeTo(500, 0);
   }, function()
   {
      $(this).children("span").stop().fadeTo(500, 1);
   });
});