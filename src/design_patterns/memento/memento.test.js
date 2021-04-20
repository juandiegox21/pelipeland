import Editor from './Editor';
import History from './History';

describe('Memento Design Pattern', () => {
  test('Can undo once', () => {
    const editor = new Editor();
    const history = new History();

    editor.setContent('a');
    history.push(editor.createState());

    editor.setContent('b');
    editor.restore(history.pop());

    expect(editor.getContent()).toBe('a');
  });

  test('Can undo more than once', () => {
    const editor = new Editor();
    const history = new History();

    editor.setContent('a');
    history.push(editor.createState());

    editor.setContent('b');
    history.push(editor.createState());

    editor.setContent('c');
    editor.restore(history.pop());

    editor.restore(history.pop());

    expect(editor.getContent()).toBe('a');
  });
});
