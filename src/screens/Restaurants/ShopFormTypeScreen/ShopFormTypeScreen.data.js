import * as Yup from "yup";
import "yup-phone-lite";

export function initialValues() {
  return {
    BusinessType: "Shop",
    ShopType: "",
    DiscountForUsingOwncup: false,
    ExtracargheForSingleUseCup: false,
    MugCupLibrary: false,
    BiodegradableCups: false,
    BiodegradableLids: false,
    optionNotgetiingTheLids: false,
    plantBasedMilkOption: false,
  };
}
export function validationSchema() {
  return Yup.object().shape({
    BusinessType: Yup.string(),
    ShopType: Yup.string().required("Shop type is required"),
    DiscountForUsingOwncup: Yup.boolean(),
    ExtracargheForSingleUseCup: Yup.boolean(),
    MugCupLibrary: Yup.boolean(),
    BiodegradableCups: Yup.boolean(),
    BiodegradableLids: Yup.boolean(),
    optionNotgetiingTheLids: Yup.boolean(),
    plantBasedMilkOption: Yup.boolean(),
  });
}
