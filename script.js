var isScrolling = false;
var activeInnerSections = {};
var autosave = `
<script src="//code.jquery.com/jquery.min.js"></script>
<script>
!function(t){t.fn.savy=function(e,i){const s="savy-";"load"==e?(t(this).each(function(){t(this).is(":radio")?(localStorage.getItem(s+t(this).attr("name"))&&(localStorage.getItem(s+t(this).attr("name"))==this.id?this.checked=!0:this.checked=!1),t(this).change(function(){localStorage.setItem(s+t(this).attr("name"),this.id)})):t(this).is(":checkbox")?(localStorage.getItem(s+this.id)&&(this.checked="1"==localStorage.getItem(s+this.id)),t(this).change(function(){localStorage.setItem(s+this.id,this.checked?"1":"0")})):t(this).is("input")||t(this).is("textarea")?(localStorage.getItem(s+this.id)&&(this.value=localStorage.getItem(s+this.id)),t(this).on("focus",function(){var e=setInterval(()=>{localStorage.setItem(s+this.id,this.value),t(this).is(":focus")||clearInterval(e)},500)})):t(this).is("select")&&(t(this).is("[multiple]")?(localStorage.getItem(s+this.id)?t(this).val(localStorage.getItem(s+this.id).split(",")):localStorage.setItem(s+this.id,t(this).val()),t(this).change(function(){localStorage.setItem(s+this.id,t(this).val())})):(localStorage.getItem(s+this.id)?t(this).val(localStorage.getItem("savy-"+this.id)):localStorage.setItem(s+this.id,t(this).val()),t(this).change(function(){localStorage.setItem(s+this.id,t(this).val())})))}),t.isFunction(i)&&i()):"destroy"==e?(t(this).each(function(){localStorage.getItem(s+this.id)&&localStorage.removeItem(s+this.id)}),t.isFunction(i)&&i()):console.error("savy action not defined please use $('.classname').savy('load') to trigger savy to save all inputs")}}(jQuery);
</script>`;
var loadautosave = `
<script>
$('.auto-save').savy('load');
</script>`;

$("body").append(autosave, loadautosave);

function change(event, sectionId) {
  $(".section🔸").hide();
  $(".button🔸").removeClass("active🔸");
  $("#" + sectionId).css("display", "flex");
  $(event.currentTarget).addClass("active🔸");

  activeInnerSections[sectionId] = activeInnerSections[sectionId] || "";

  if (activeInnerSections[sectionId]) {
    $("#" + activeInnerSections[sectionId]).css("display", "block");
    $(".button🔸[id='" + activeInnerSections[sectionId] + "']").addClass("active-v2🔸");
  }

  // scrollToTop();
}

function changeInner(event, id) {
  var sectionId = $(event.currentTarget).closest(".section🔸").attr("id");

  $("#" + sectionId + " .inner-section🔸").hide();
  $("#" + sectionId + " .button🔸").removeClass("active-v2🔸");

  $("#" + id).css("display", "block");
  $(event.currentTarget).addClass("active-v2🔸");

  activeInnerSections[sectionId] = id;
}

// function scrollToTop() {
//   if (!isScrolling) {
//     isScrolling = true;

//     $("html, body").animate({ scrollTop: 0 }, 600, function () {
//       isScrolling = false;
//     });
//   }
// }

// setInterval(() => {
//   if ($(document).scrollTop() > 500) {
//     $(".scroll-to-top🔸").stop().fadeIn(300);
//   } else {
//     $(".scroll-to-top🔸").stop().fadeOut(300);

//     setTimeout(() => {
//       $(".scroll-to-top🔸").stop().hide();
//     }, 300);
//   }
// }, 600);
