import Editor from './Editor';
import History from './History';

describe('Memento Design Pattern', () => {
    test('Can undo content', () => {
        const editor = new Editor();
        const history = new History();

        editor.setContent('a');
        history.push(editor.createState());

        editor.setContent('b');
        history.push(editor.createState());

        editor.restore(history.pop());

        console.log(editor.getContent());
    });
});