import { ForkOutlined } from "@ant-design/icons";
import { Button, Divider, Input, PageHeader } from "antd";
import TextArea from "antd/lib/input/TextArea";
import Layout from "./Layout";

interface AddProps {

}

const Add: React.FC<AddProps> = () => {
  return (
    <Layout>
      <PageHeader 
        onBack={back}
        title={
          <div>
            <ForkOutlined />Add Book
          </div>
        }
        subTitle="Add Your Book"
        extra={[
          <Button
            key="1"
            type="primary"
            onClick={logout}
          >
            Logout
          </Button>
        ]}
      />
      <div>
        <div>
          Title
          <span> *</span>
        </div>
        <div>
          <Input placeholder="Title"/>
        </div>
        <div>
          Comment
          <span> *</span>
        </div>
        <div>
          <TextArea rows={4} placeholder="Comment"/>
        </div>
        <div>
          Author
          <span> *</span>
        </div>
        <div>
          <Input placeholder="Author"/>
        </div>
        <div>
          URL
          <span> *</span>
        </div>
        <div>
          <Input placeholder="URL"/>
        </div>
        <div>
          <Button size="large" loading={loading} onClick={click}>Add</Button>
        </div>
      </div>
    </Layout>
  );

  function click() {

  }
}