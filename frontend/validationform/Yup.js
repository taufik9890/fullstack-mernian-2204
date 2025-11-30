import * as Yup from "yup";

export const leavecomment = Yup.object().shape({
  comment: Yup.string().required("Comment is required"),
});

export const buyerInfo = Yup.object().shape({
  name: Yup.string().required("Name required"),
  address: Yup.string().required("Address required"),
});