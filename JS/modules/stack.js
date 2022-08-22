const _items = new WeakMap();
class Stack {
  constructor() {
    _items.set(this, []);
  }

  get count() {
    return _items.get(this).length;
  }
  push(item) {
    return _items.get(this).push(item);
  }
  pop() {
    return _items.get(this).pop();
  }
  peek() {
    return _items.get(this)[this.count - 1];
  }
}

module.exports = Stack;
