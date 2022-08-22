// HtmlElement
// HtmlSelectElement
function HtmlElement() {
  this.click = function () {
    console.log("clicked");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("focused");
};

function HtmlSelectElement(items = []) {
  this.items = items;
  this.addItem = function (item) {
    this.items.push(item);
  };
  this.removeItem = function () {
    this.items.pop();
  };
}

HtmlSelectElement.prototype = HtmlElement.call({});
HtmlSelectElement.prototype.constructor = HtmlSelectElement;
