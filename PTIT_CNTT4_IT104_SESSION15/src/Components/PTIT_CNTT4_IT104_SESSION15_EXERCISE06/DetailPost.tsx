import React, { Component } from "react";

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}

interface DetailPostProps {
  post: Post;
}

class DetailPost extends Component<DetailPostProps> {
  render() {
    const { id, title, content, author } = this.props.post;
    return (
      <div style={{ marginBottom: "20px" }}>
        <p><b>Id:</b> {id}</p>
        <p><b>Title:</b> {title}</p>
        <p><b>Content:</b> {content}</p>
        <p><b>Author:</b> {author}</p>
        <hr />
      </div>
    );
  }
}

export default DetailPost;
