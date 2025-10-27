import React, { useEffect, useState } from 'react'
import { Space, Table, Tag } from 'antd';
import axios from 'axios'
const ViewSubCategory = () => {


    
    const [subCategoryList, setSubCategoryList] = useState([])


 
    useEffect(() => {
        async function allsubcategory() {
          let data = await axios.get(
            "http://localhost:8000/api/v1/product/viewsubcategory");
            let subCategoryData = []
    
            data.data.map((item)=>{
                subCategoryData.push({
                key: item._id,
                name: item.name,
                status: item.status,
                category: item.categoryId?.name,
                image: item.image,
              },)
              console.log('every item', item.categoryId?.name);
            })
            setSubCategoryList(subCategoryData)
          console.log("hello", data.data);
        }
    
        allsubcategory();
      }, []);



      const dataSource = [
        {
          key: '1',
          name: 'Mike',
          status: ""
        },
        {
          key: '2',
          name: 'John',
          status: ""
        },
      ];
      


      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
        },
        {
          title: 'Category',
          dataIndex: 'category',
          key: 'category',
        },
        {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (_, record) => (
        <img width={50} src={`http://localhost:8000${record.image}`} />
      ),
    },
      ];


   
 

  return (
    
    <Table dataSource={subCategoryList} columns={columns} />
  )
}

export default ViewSubCategory
