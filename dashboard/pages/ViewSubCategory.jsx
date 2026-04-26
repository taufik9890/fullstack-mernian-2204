import React, { useEffect, useState } from 'react'
import { Space, Table, Tag } from 'antd';
import axios from 'axios'
import { useSelector } from 'react-redux'
const ViewSubCategory = () => {

const userInfo = useSelector(state => state.user.value)
    
    const [subCategoryList, setSubCategoryList] = useState([])
    const [refetch, setRefetch] = useState(false)


 

    useEffect(() => {
    async function allsubcategory() {
        let data = await axios.get(
            `${import.meta.env.VITE_DASHBOARD_REACT_APP_BASEURL}/product/viewsubcategory`
        )
        console.log("hello", data.data)  // check this in browser console
        
        let subCategoryData = data.data.map((item) => {
            console.log('categoryId full object:', item.categoryId)  // 👈 check this
            return {
                key: item._id,
                name: item.name,
                status: item.status,
                category: item.categoryId?.name || 'No Category',
                image: item.image,
            }
        })
        setSubCategoryList(subCategoryData)
    }
    allsubcategory();
}, [refetch])


    // useEffect(() => {
    //     async function allsubcategory() {
    //       let data = await axios.get(
    //         `${import.meta.env.VITE_DASHBOARD_REACT_APP_BASEURL}/product/viewsubcategory`);
    //         let subCategoryData = []
    
    //         data.data.map((item)=>{

    //             subCategoryData.push({
    //             key: item._id,
    //             name: item.name,
    //             status: item.status,
    //             category: item.categoryId?.name,
    //             image: item.image,
    //           },)
    //           console.log('every item', item.categoryId?.name);
    //         })
    //         setSubCategoryList(subCategoryData)
    //       console.log("hello", data.data);
    //     }
    
    //     allsubcategory();
    //   }, []);

      
const handleApprove = async (record) => {
  const user = JSON.parse(localStorage.getItem('user'))
    await axios.post(
      `${import.meta.env.VITE_DASHBOARD_REACT_APP_BASEURL}/product/approvesubcategory`,
      { id: record.key, status: record.status },
      { headers: { "Authorization": `Bearer ${user.token}` } } 
    )
    setRefetch(!refetch)
    // refetch
  }

  const handleDelete = async (id) => {
    // add delete subcategory route if needed
    setRefetch(!refetch)
    console.log('delete', id)
  }
   



      


      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Category',
          dataIndex: 'category',
          key: 'category',
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
        },
        {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (_, record) => (
        // <img width={50} src={`${import.meta.env.VITE_DASHBOARD_REACT_APP_BASEURL_IMG}${record.image}`} />
        <img width={50} src={record.image} />
        
      ),
    },
    userInfo.role === "Admin" && {
      title: "Action", key: "action",
      render: (_, record) => (
        <>
          <button onClick={() => handleApprove(record)}>
            {record.status === "waiting" ? "Approve" : "Reject"}
          </button>
          <button onClick={() => handleDelete(record.key)}>Delete</button>
        </>
      )
    }
      ].filter(Boolean);

 

  return (
    <Table dataSource={subCategoryList} columns={columns} />
  )
}

export default ViewSubCategory
