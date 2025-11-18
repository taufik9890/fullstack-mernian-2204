import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Select } from 'antd';

const FlashSale = () => {
    let [date, setDate] = useState("")
    let [time, setTime] = useState("")
    let [idList, setIdList] = useState("")
    let [yearname, setYearName] = useState({
        '01': "Jan",
        '02': "Feb",
        '03': "March",
        '04': "April",
        '05': "May",
        '06': "June",
        '07': "July",
        '08': "August",
        '09': "September",
        '10': "October",
        '11': "November",
        '12': "December",
    })



    const [options, setOption] = useState([])
// for (let i = 10; i < 36; i++) {
// //   options.push({
// //     value: i.toString(36) + i,
// //     label: i.toString(36) + i,
// //   });
// }

const handleChange = value => {
  console.log(`selected ${value}`);
  setIdList(value)
};
useEffect(()=>{
     async function pro (){
        let data = await axios.get(`${import.meta.env.VITE_DASHBOARD_REACT_APP_BASEURL}/product/viewproduct`)
        console.log(data.data);
        let arr = []
        data.data.map((item)=>{
          console.log(item);
          
            arr.push({
                value: item._id,
                label: item.name,
            })
            setOption(arr)
        })
    }
    pro()
},[])



    let handleDateChange = (e)=>{
        let arr = e.target.value.split("-")
        let year = arr[0]
        let month = arr[1]
        let day = arr[2]
        // setDate(e.target.value)
        // console.log(year, month, day);
        // console.log(`${yearname[month]} ${day}, ${year}`);
        setDate(`${yearname[month]} ${day}, ${year},`);
        
    }
    
    let handleTimeChange = (e)=>{
        setTime(e.target.value)
    }
    let handleSubmit = async()=>{
      try{
         let data = await axios.post(`${import.meta.env.VITE_DASHBOARD_REACT_APP_BASEURL}/product/flashsale`,{
            ftime: date + " "  + time,
            idList: idList
        })
        // console.log(date + " " + time);
        console.log(data);
      }catch(error){
        console.error("Error submitting flash sale:", error)
      }
       
        
    }
  return (
    <div>
        <input onChange={handleDateChange} type='date'/>
        <input onChange={handleTimeChange} type='time'/>
        <button onClick={handleSubmit}>Submit</button>
      <Select
    mode="tags"
    style={{ width: '100%' }}
    onChange={handleChange}
    tokenSeparators={[',']}
    options={options}
    placeholder={"please select feature product"}
  />
    </div>
  )
}

export default FlashSale
