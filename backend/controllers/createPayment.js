const axios = require("axios");
const url = "https://sandbox.aamarpay.com/jsonpost.php";

let createPayment = async (req,res)=>{
    // console.log(req.body.total);
    const total = req.body.total
    

    
const payload = {
  store_id: "aamarpaytest",
  tran_id: "tran_" + Date.now() + "_" + Math.floor(Math.random() * 1000000),
  success_url: "http://www.merchantdomain.com/successpage.html",
  fail_url: "http://www.merchantdomain.com/failedpage.html",
  cancel_url: "http://www.merchantdomain.com/cancelpage.html",
  amount: total,
  currency: "BDT",
  signature_key: "dbb74894e82415a2f7ff0ec3a97e4183",
  desc: "Merchant Registration Payment",
  cus_name: "Name",
  cus_email: "payer@merchantcusomter.com",
  cus_add1: "House B-158 Road 22",
  cus_add2: "Mohakhali DOHS",
  cus_city: "Dhaka",
  cus_state: "Dhaka",
  cus_postcode: "1206",
  cus_country: "Bangladesh",
  cus_phone: "+8801704",
  type: "json"
};

axios.post(url, payload, {
  headers: { "Content-Type": "application/json" }
})
.then((response)=> {
  console.log(response.data);
  res.send(response.data)
})
.catch(err => {
  console.error(err.response?.data || err.message);
});


}
module.exports = createPayment