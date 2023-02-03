import SelectWithSearch, { SelectWithSearchProps } from "../SelectWithSearch";
import FetchData from "../FetchData";
import BaseApi from "../../api/Api";
import { useField } from "formik";

export type FormikCategoryAutoCompletePrp = Omit<
  SelectWithSearchProps,
  "options" | "onChange" | "displayValue" | "value"
> & {
  name: string;
  value?: any;
};

const FormikCategoryAutoComplete = (prp: FormikCategoryAutoCompletePrp) => {
  const { value, name, ...rest } = prp;

  const [field, , meta] = useField({ name: name, value: value });

  const fetch = () => {
    return BaseApi?.getAllCategories.getAllCategoriesList().then((res) => {
      return res?.data?.map((node) => ({
        label: node?.title || "",
        value: node?.title || "",
        node: node,
      }));
    });
  };
  return (
    <FetchData request={fetch} deps={[]}>
      {(opts) => {
        return (
          <SelectWithSearch
            {...rest}
            value={field?.value}
            displayValue={(val) => val?.label}
            onChange={(payload) => {
              meta?.setValue({
                label: payload?.node?.title || undefined,
                value: payload?.node?.id || undefined,
              });
            }}
            options={opts || []}
          />
        );
      }}
    </FetchData>
  );
};
export default FormikCategoryAutoComplete;
