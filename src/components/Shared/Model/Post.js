export class Post {
  constructor(id, author, title, description, fileName, fileHash) {
    this.id = id;
    this.author = author;
    this.title = title;
    this.description = description;
    this.fileName = fileName;
    this.fileHash = fileHash;
  }

  getId() {
    return this.id;
  }

  getAuthor() {
    return this.author;
  }

  getTitle() {
    return this.title;
  }

  getDescription() {
    return this.description;
  }

  getFileName() {
    return this.fileName;
  }

  getFileUrl() {
    return `https://${this.fileHash}.ipfs.dweb.link/${this.fileName}`;
  }

  getFileHash() {
    return this.fileHash;
  }
}
