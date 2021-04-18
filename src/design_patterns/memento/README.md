# Memento Pattern

The memento pattern is a software design pattern that provides the ability to restore an object to its previous state (undo via rollback).

The memento pattern is implemented with three objects: the originator, a caretaker and a memento. The originator is some object that has an internal state. The caretaker is going to do something to the originator, but wants to be able to undo the change.

# In this example

Originator: Editor class
Memento: EditorState class
CareTaker: History class

# To run the test
npm test memento