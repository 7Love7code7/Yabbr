
class ConstantHelper {
  static getListItem(list, key, value, defaultValue = null) {
    if (list && list.length > 0) {
      for (let i = 0, ni = list.length; i < ni; i++) {
        const item = list[i];
        if (item[key] === value) {
          return item;
        }
      }
    }
    return defaultValue;
  }
}

export default ConstantHelper;
