const validationString = (text) => {
  return (text.trim() !== '' && typeof(text) === 'string');
}

const validationSpend = (num) => {
  return (typeof(num) === 'number')
}

const validationAdd = (obj) => {
  if (!obj.hasOwnProperty('nameShop') || !obj.hasOwnProperty('spend')) {
    return true
  }
  const { nameShop: name, spend: num } = obj;
  const result = (!validationString(name) || !validationSpend(num));
  return result;
}

const validationChange = (obj) => {
  if (!obj.hasOwnProperty('date')) {
    return true;
  }
  const { date } = obj;
  const result = (!validationString(date) || validationAdd(obj));
  return result;
}

module.exports = {
  validationAdd,
  validationChange,
}