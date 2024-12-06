document.getElementById('btn-add-money').addEventListener('click',function(event){
  event.preventDefault();

  const inputMoneyField = document.getElementById('input-add-money').value;
  const addMoneyNumber = parseFloat(inputMoneyField);

  const inputPinField = document.getElementById('input-pin-field').value;

  if(inputPinField === '1234'){
    const balance = document.getElementById('account-balance').innerText;
    const balanceNumber = parseFloat(balance);

    const newBalance = balanceNumber + addMoneyNumber;

    document.getElementById('account-balance').innerText = newBalance;

  }else
  {
    alert("Please try again.");
  }
})