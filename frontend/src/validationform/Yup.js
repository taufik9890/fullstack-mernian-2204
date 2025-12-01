import * as Yup from "yup";

export const reviewform = Yup.object({
  name: Yup.string().min(4).max(25).required("Please Enter Your Name"),
  email: Yup.string().nullable().email().required("Please Enter Your Email"),
  comment: Yup.string().required("Please write your comment"),
});

export const leavecomment = Yup.object().shape({
  comment: Yup.string().required("Comment is required"),
});

export const buyerInfo = Yup.object().shape({
  name: Yup.string().required("Name required"),
  address: Yup.string().required("Address required"),
});