import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { Button, Col, Form, ListGroup, Row } from "react-bootstrap";
import Message from "../Message/Message";
import { addList, removeList, toggleList } from "../../store/TodoListSlice";

const TodoList = () => {
  const dispatch = useAppDispatch();
  const [list, setList] = useState("");
  const data = useAppSelector((state) => state.todo);
  const { todoList, repeat } = data;

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addList({ name: list, complete: false }));
    setList("");
  };

  const toggleCompleteHandler = (item: string) => {
    dispatch(toggleList(item));
  };

  const removeHandler = (item: string) => {
    dispatch(removeList(item));
  };
  return (
    <div className="todoList">
      <Form className="mx-2 my-2" onSubmit={submitHandler}>
        <Form.Group controlId="inputList">
          <Row>
            <Col xs={8} sm={9}>
              <Form.Control
                type="text"
                value={list}
                onChange={(e) => setList(e.target.value)}
                placeholder="할일을 적으세요!"
                required
                className="opacity-75"
              />
            </Col>
            <Col>
              <Button type="submit" className="btn btn-warning opacity-75">
                추가
              </Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
      {todoList.length > 0 ? (
        <>
          {repeat && <Message variant="danger">이미 존재합니다.</Message>}
          <ListGroup className="listgroup">
            {todoList.map((item) => (
              <ListGroup.Item
                key={item.name}
                variant={item.complete ? "success" : "primary"}
              >
                <Row>
                  <Col xs={8} sm={8}>
                    ◉ {item.name}
                  </Col>
                  <Col xs={2} sm={2}>
                    <Button
                      variant={item.complete ? "success" : "danger"}
                      onClick={() => toggleCompleteHandler(item.name)}
                    >
                      {item.complete ? (
                        <i className="fas fa-check"></i>
                      ) : (
                        <i className="fas fa-eraser"></i>
                      )}
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      variant="dark"
                      onClick={() => removeHandler(item.name)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </>
      ) : (
        <ListGroup className="text">
          <ListGroup.Item>해야 할 일이 없습니다.</ListGroup.Item>
        </ListGroup>
      )}
    </div>
  );
};

export default TodoList;
