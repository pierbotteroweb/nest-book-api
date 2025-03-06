interface Book {
    id: number;
    title: string;
    author: string;
    publicationYear: number;
  }
  
  const books: Book[] = [
    { id: 1, title: "1984", author: "George Orwell", publicationYear: 1949 },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", publicationYear: 1960 },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", publicationYear: 1925 },
    { id: 4, title: "Moby-Dick", author: "Herman Melville", publicationYear: 1851 },
    { id: 5, title: "Pride and Prejudice", author: "Jane Austen", publicationYear: 1813 }
  ];
  
  export { Book, books };
  