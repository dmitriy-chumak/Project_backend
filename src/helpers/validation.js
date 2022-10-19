const validationString = (string) => {
  return (typeof(string) === 'string' && string.trim() !== '');
}

const validationNumber = (spend) => {
  return (typeof(spend) === 'number')
}

const validationAdd = (obj) => {
  if (!obj.hasOwnProperty('name') || !obj.hasOwnProperty('spend')) {
    return false
  }
  const { name, spend } = obj;
  const result = (validationString(name) && validationNumber(spend));
  return result;
}

const validationChange = (obj) => {
  if (!obj.hasOwnProperty('date')) {
    return false;
  }
  const { date } = obj;
  const result = (validationString(date) && validationAdd(obj));
  return result;
}

module.exports = {
  validationAdd,
  validationChange,
}