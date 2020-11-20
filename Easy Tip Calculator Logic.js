// When document is ready, do the following (lines 2 - 41)...
$(document).ready(function() {

  // On click of button with id="calculateTip", do the following (lines 5 - 39)...
  $('#calculateTip').click(function(){

    // Set var billInput = input from input with id="billAmount"
    var billInput = parseFloat($("#billAmount").val());

    // Set var tipInput = input from input with id="tipPercentage"
    var tipInput = parseFloat($("#tipPercentage").val());

    // The calculated tip
    var calculatedTip = billInput * (tipInput / 100);

    // Function for rounding decimals to 2 places correctly
    // toFixed(2) doesn't work well
    // Credit: https://stackoverflow.com/a/20701492

    function roundNum(num, length) {
      var number = Math.round(num * Math.pow(10, length)) / Math.pow(10, length);
      return number;
    };

    // The calculated tip converted to 2 decimal places
    var calculatedTipTwoDecimals = roundNum(calculatedTip, 2);

    // The total bill (including tip)
    var totalBill = calculatedTipTwoDecimals + billInput;
    // The total bill (including tip) converted to 2 decimal places
    var totalBillTwoDecimals = roundNum(totalBill, 2);

    // Write the calculated tip to the page
    $(document.body).append(
      `
      <br />Your Tip: ${calculatedTipTwoDecimals}
      <br />Your Total Bill (including Tip): ${totalBillTwoDecimals}
      `);

  });

});
