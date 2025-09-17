import React, { useEffect, type ChangeEvent } from "react";
import { Table } from "react-bootstrap";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  image: string;
  date: string;
  status: boolean;
}
export default function ListPost() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [show, setShow] = useState<boolean>(false);
  const[post,setPost]=useState<any>({
    title:"",
    image:"",
    date:new Date().getDay,
    status:true
  })
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function getAllPost() {
    try {
      const reponse = await axios.get("http://localhost:8080/posts");
      setPosts(reponse.data);
    } catch (error) {
      console.error("Loi API: ", error);
    }
  }

  useEffect(() => {
    getAllPost();
  }, []);

  const handleSave= async()=>{
    const response= await axios.post("http://localhost:8080/posts",post);
     setPosts([...posts,response.data]);
     setShow(false);

  }
  const handleChange=(e:any)=>{
    const {name,value}=e.target;
    setPost({...post,[name]:value})
  }

  return (
    <div>
      <h1> Danh sách bài viết</h1>
      <input type="text" placeholder="nhập từ khóa tìm kiếm" />
      <select name="" id="">
        <option value="">Lựa chọn</option>
        <option value="">Đã xuất bản</option>
        <option value="">Chưa xuất bản</option>
      </select>

      <Button variant="primary" onClick={handleShow}>
        Thêm bài viết
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm bài viết mới </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Tên bài viết</Form.Label>
              <Form.Control type="email" autoFocus onChange={handleChange} name="title" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Hình ảnh</Form.Label>
              <Form.Control type="text" autoFocus onChange={handleChange} name="image" />
            </Form.Group>
             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ngày Viết</Form.Label>
              <Form.Control type="text" autoFocus onChange={handleChange} name="date" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Nội dung bài viết</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={handleChange} name="content"/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Hủy
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Lưu bài viết
          </Button>
        </Modal.Footer>
      </Modal>
      <Table striped bordered hover>
        <thead>x``
          <tr>
            <th>STT</th>
            <th>Tiêu đề</th>
            <th>Hình ảnh</th>
            <th>Ngày viết</th>
            <th>Trạng thái</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.image}</td>
                <td>{item.date}</td>
                <td>{item.status ? "Đã xuất bản" : "Chưa xuất bản"}</td>
                <td>
                  <Button variant="primary">Chặn</Button>
                  <Button variant="secondary">Sửa</Button>
                  <Button variant="success">Xóa</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}