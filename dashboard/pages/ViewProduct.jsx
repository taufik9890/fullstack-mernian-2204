import React, { useEffect, useState } from "react";
import { Space, Table, Tag } from "antd";
import axios from "axios";

const ViewProduct = () => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    async function allcategory() {
      let data = await axios.get(
        "http://localhost:8000/api/v1/product/viewproduct"
      );
      let categoryData = [];
 
      data.data.map((item) => {
        let details = item.description;
        const oembedRegex = /<oembed[^>]*>/g;
        const oembedMatch = details?.match(oembedRegex);
        console.log(oembedMatch);

        if (oembedMatch) {
          const oembedUrl = oembedMatch[0].match(/url="([^"]*)"/)[1];
          console.log(oembedUrl);
          console.log(oembedUrl.split("v=")[1].split("?")[0]);
          

          const iframeElement = `<iframe src="https://www.youtube.com/embed/${oembedUrl.split("v=")[1].split("?")[0]}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
          details = details.replace(oembedRegex, iframeElement);
        }

        categoryData.push({
          key: item._id,
          name: item.name,
          description: details,
          image: item.image,
        });
      });

      setCategoryList(categoryData);
      console.log("hello", data.data);
    }

    allcategory();
  }, []);

  const dataSource = [
    {
      key: "1",
      name: "Mike",
      status: "",
    },
    {
      key: "2",
      name: "John",
      status: "",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (_, record) => (
        <div dangerouslySetInnerHTML={{ __html: record.description }}></div>
      ),
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (_, record) => (
        <img width={50} src={`http://localhost:8000${record.image}`} />
        //   <a>Invite {record.image}</a>
      ),
    },
  ];

  return (
    <div>
      <Table dataSource={categoryList} columns={columns} />
    </div>
  );
};

export default ViewProduct;
