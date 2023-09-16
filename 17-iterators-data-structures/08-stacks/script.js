class Stack {
  constructor() {
    this._items = [];
    this._count = 0;
  }

  push(item) {
    this._items[this._count] = item;
    this._count++;
  }

  pop() {
    if (this.isEmpty()) {
      return 'Underflow';
    }

    const item = this._items[this._count - 1];
    const decreaser = this._count--;
    const arrayLenght =  this._items.length

    console.log(`-----> ITEM: ${item} ::: COUNT: ${decreaser} ::: LENGTH: ${arrayLenght}`)

    for (let i = this._count; i < this._items.length; i++) {
      console.log(`COUNTER ::: ${i}`);
      console.log(`LENGHT ::: ${this._items.length}`);
      
      this._items[i] = this._items[i + 1];
      console.log(this._items)
    }

    this._items.length = this._count;
    return item;
  }

  peek() {
    if (this.isEmpty()) {
      return 'No items in stack';
    }

    return this._items[this._count - 1];
  }

  isEmpty() {
    return this._count === 0;
  }

  length() {
    return this._count;
  }

  clear() {
    this._items = [];
    this._count = 0;
  }

  popSIMPLE() {
    if (this.isEmpty()) {
      return 'Underflow';
    }
  
    const item = this._items[3 - 1];  // Item 3
    this._count--;                    // 2 
    
    this._items[2] = undefined;       // undefined

    this._items.length = this._count; // 2

    console.log(stack)                // Stack {_items: Array(2), _count: 2}
    console.log(item)                 // Item 3
    return item;
  }
}

const stack = new Stack();


stack.push('Item 1');
stack.push('Item 2');
stack.push('Item 3');


const removedItem = stack.popSIMPLE();
console.log('Returned by the "popSIMPLE" Function:', removedItem.slice(0, 6))
console.log('"Stack" Object after item has been removed:', stack) 


// stack.push('Item 1');
// console.log(stack._items, stack._count)
// stack.push('Item 2');
// console.log(stack._items, stack._count)
// stack.push('Item 3');
// console.log(stack._items, stack._count)
// stack.push('Item 4');
// console.log(stack._items, stack._count)
// stack.push('Item 5');
// console.log(stack._items, stack._count)

// const item = stack._items[stack._count - 1];
// const decreaser = stack._count--;
// const arrayLenght = stack._items.length;

// console.log(`-----> ITEM: ${item} ::: COUNT: ${decreaser} ::: LENGTH: ${arrayLenght}`)

// for (let i = stack._count; i < stack._items.length; i++) {
//   stack._items[i] = stack._items[i + 1];
//   console.log(stack._items[i])
//}


// stack.pop();
// stack.pop();

// stack.clear();

// console.log('Top Item: ', stack.peek());
// console.log('Stack Length: ', stack.length());






// -------------------------------------------







