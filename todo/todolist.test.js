const Todo = require('./todo');
const TodoList = require('./todolist');

describe('TodoList', () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    // This is setup.
    todo1 = new Todo('Buy milk');
    todo2 = new Todo('Clean room');
    todo3 = new Todo('Go to the gym');
    todo4 = new Todo('Attend study session');

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
    list.add(todo4);
  });

  afterEach( () => {
    // Tear down goes here.
  })

  test('todolist has a size of 4', () => {
    expect(list.size()).toBe(4); 
  })

  test('toArray returns the list as an array', () => {
    let arr = [todo1, todo2, todo3, todo4];
    expect(list.toArray()).toEqual(arr);
  })

  test('Invoking first will return the first todo item', () => {
    expect(list.first()).toEqual(todo1);
  })

  test('ivoking last will return the last todo item', () => {
    expect(list.last()).toEqual(todo4);
  })

  test('shift removes and returns the first todo', () => {
    expect(list.shift()).toEqual(todo1);
    expect(list.toArray()).toEqual([todo2, todo3, todo4]);
  })

  test('pop removes and return the last todo', () => {
    expect(list.pop()).toEqual(todo4);
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
  })

  test('returns true if all items are done', () => {
    expect(list.isDone()).toBe(false);

    list.toArray().forEach( todo => todo.markDone() )

    expect(list.isDone()).toBe(true);
  })

  test('add will only accept a Todo type', () => {
    let todolist = new TodoList();

    expect(() => list.add({})).toThrow(TypeError);
    expect(() => list.add(1)).toThrow(TypeError);
    expect(() => list.add('hi')).toThrow(TypeError);
    expect(() => list.add(todolist)).toThrow(TypeError);
  })

  test('itemAt will return the todo at passed index ', () => {
    expect(list.itemAt(0)).toEqual(todo1);
    expect(list.itemAt(1)).toEqual(todo2);
    expect(() => list.itemAt(-1)).toThrow(ReferenceError);
    expect(() => list.itemAt(10)).toThrow(ReferenceError);
  })

  test('markDoneAt will mark done at provided index', () => {
    expect(todo1.isDone()).toBe(false);
    list.markDoneAt(0);
    expect(todo1.isDone()).toBe(true);
    expect(todo2.isDone()).toBe(false);
    expect(todo3.isDone()).toBe(false);

    expect(() => list.markDoneAt(-1)).toThrow(ReferenceError);
  })

  test('markUndoneAt mark undone at provided index', () => {
    todo1.markDone(); 
    todo2.markDone(); 
    todo3.markDone(); 
    todo4.markDone(); 
    list.markUndoneAt(0);

    expect(todo1.isDone()).toBe(false);
    expect(todo2.isDone()).toBe(true);
    
    expect(() => list.markUndoneAt(-1)).toThrow(ReferenceError);
  })

  test('markAllDone will mark all todos done', () => {
    list.markAllDone();

    expect(todo1.isDone()).toBe(true);
    expect(todo2.isDone()).toBe(true);
    expect(todo3.isDone()).toBe(true);
    expect(todo4.isDone()).toBe(true);
    expect(list.isDone()).toBe(true);
  })

  test('removeAt will remove todo at provided index', () => {
    list.removeAt(0); 

    expect(list.first()).toEqual(todo2);
    expect(list.toArray()).toEqual([todo2, todo3, todo4]);
    expect(() => list.removeAt(10)).toThrow(ReferenceError);
  })

  test('toString returns string representation of the list', () => {
    let string = `--- Today's Todos ---
[ ] Buy milk.
[ ] Clean room.
[ ] Go to the gym.
[ ] Attend study session.
`;

    expect(list.toString()).toBe(string);
  });

  test('toString when one of todos is done', () => {
    let string = `--- Today's Todos ---
[X] Buy milk.
[ ] Clean room.
[ ] Go to the gym.
[ ] Attend study session.
`;
    todo1.markDone();
    expect(list.toString()).toBe(string);
  })

  test('toString when all of todos are done', () => {
    let string = `--- Today's Todos ---
[X] Buy milk.
[X] Clean room.
[X] Go to the gym.
[X] Attend study session.
`;
    todo1.markDone();
    todo2.markDone();
    todo3.markDone();
    todo4.markDone();
    expect(list.toString()).toBe(string);
  })

  test('forEach will iterate over all todos', () => {
    let match = [todo1, todo2, todo3, todo4 ];
    let assertion = [];
    list.forEach((todo) => assertion.push(todo));

    expect(assertion).toEqual(match);
  })


  test('filter will return a TodoList that match the filter condition', () => {
    todo1.markDone();
    let as = list.filter((todo) => todo.isDone());

    expect(as.first()).toEqual(todo1);
  })

});
