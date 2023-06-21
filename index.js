let name = prompt ('Как вас зовут?').toLowerCase().trim()
if (name !== 'alex') {alert ('Пользователь не найден.'),}
let account = prompt ('Номер счета:')
if (account !== '7777') {
  alert ('Не правильный номер')}
  let money = +prompt ('Сколько обналичить?')
  if (money < 10000 || money === 10000) {
    alert ('всё отлично. ' + ' Вы обналичили: ' + money + ' Остаток: ' + ( '10000' - money)   )
  }
  else {
    alert ('недосдаточно средств')
  }




