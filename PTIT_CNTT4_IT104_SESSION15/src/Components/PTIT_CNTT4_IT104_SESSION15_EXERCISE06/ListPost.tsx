import React, { Component } from "react";
import DetailPost from "./DetailPost";

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}

interface ListPostState {
  posts: Post[];
}

class ListPost extends Component<{}, ListPostState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          title: "Tại sao nên học ReactJS",
          content: "Học ReactJS dễ đi làm",
          author: "David"
        },
        {
          id: 2,
          title: "Props trong ReactJS",
          content: "Props giúp truyền dữ liệu từ component cha xuống component con",
          author: "Linda"
        },
        {
          id: 3,
          title: "State trong ReactJS là gì?",
          content: "State giúp lưu trữ trạng thái dữ liệu bên trong một component",
          author: "David"
        }
      ]
    };
  }

  render() {
    return (
      <div style={{ width: "600px", margin: "20px auto" }}>
        <h2>Danh sách bài viết</h2>
        {this.state.posts.map((post) => (
          <DetailPost key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

export default ListPost;
