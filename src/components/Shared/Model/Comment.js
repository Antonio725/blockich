export class Comment {
  constructor(id, authorId, postId, content) {
    this.id = id;
    this.authorId = authorId;
    this.postId = postId;
    this.content = content;
  }

  getId() {
    return this.id;
  }

  getAuthorId() {
    return this.authorId;
  }

  getPostId() {
    return this.postId;
  }

  getContent() {
    return this.content;
  }
}
