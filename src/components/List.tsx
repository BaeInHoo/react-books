import { Button, PageHeader, Table } from "antd";
import { useEffect } from "react";
import { BookType } from "../types";
import Book from "./book";
import Layout from "./Layout";
import styles from "./List.module.css";

interface ListProps {
  books: BookType[] | null;
  loading: boolean;
  error: Error | null;
  getBooks: () => void;
  logout: () => void;
  goAdd: () => void;
}

const List: React.FC<ListProps> = ({books, loading, getBooks, error, logout, goAdd}) => {
  useEffect(() => {
    getBooks();
  }, [getBooks]);

  useEffect(() => {
    if (error) {
      logout();
    }
  }, [error, logout])

  return (
    <Layout>
      <PageHeader 
        title={<div>Book List</div>} 
        extra={[
          <Button key="2" type="primary" onClick={goAdd} className={styles.button}>
            Add Book
          </Button>,
          <Button key="1" type="primary" onClick={logout} className={styles.button}>
            Logout
          </Button>]}
      />
      <Table 
        dataSource={[books || []]} 
        columns={[
          {
            title: 'Book',
            dataIndex: "book",
            key: "book",
            render: (text, recode) => <Book bookId={0} title={""} author={""} createdAt={""} url={""} {...recode}/>,
          },
        ]} 
        loading={books === null || loading}
        showHeader={false}
        rowKey="bookId"
        pagination={false}
        className={styles.table}
      />
    </Layout>
    
  );

};

export default List;