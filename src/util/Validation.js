import * as Yup from "yup";

export const searchValidaitonSchema = Yup.object().shape({
  search: Yup.string().required("You have to type something")
});
