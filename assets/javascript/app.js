// var myEmail = $("#myEmail");
// var myNumber = $("#myEmail");
// var divEmail = $("#divEmail");
// var divNumber = $("#divNumber");
var copyStatus = $("#copyStatus");

// myEmail.click(function() {
//     myEmail.execCommand("copy");
//     divEmail.text("Copied!")
//     setTimeout(function(){ divEmail.text("") }, 5000)
// })

// myNumber.click(function() {
//     myNumber.select();
//     document.execCommand("copy");
//     divNumber.text("Copied!")
//     setTimeout(function(){ divNumber.text("") }, 5000)
// })

$(function() {
    $('.allowCopy').click(function() {
      $(this).focus();
      $(this).select();
      document.execCommand('copy');
      copyStatus.text("Copied to clipboard!")
        setTimeout(function(){ copyStatus.text("Click the texts to copy to clipboard") }, 5000)
    });
 });