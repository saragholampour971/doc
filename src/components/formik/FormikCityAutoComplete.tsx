import SelectWithSearch, { SelectWithSearchProps } from "../SelectWithSearch";
import { useField } from "formik";
import BaseApi from "../../api/Api";
import FetchData from "../FetchData";

export type FormikCityAutoCompletePrp = Omit<
  SelectWithSearchProps,
  "options" | "onChange" | "displayValue" | "value"
> & {
  name: string;
  value?: any;
};

const FormikCityAutoComplete = (prop: FormikCityAutoCompletePrp) => {
  const { value, name, ...rest } = prop;

  const [field, , meta] = useField({ name: name, value: value });

  const fetch = () => {
    return BaseApi?.getAllCities.getAllCitiesList().then((res) => {
      return res?.data?.map((node) => ({
        label: node?.cityName || "",
        value: node?.cityName || "",
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
            displayValue={(val) => val?.label}
            onChange={(payload) => {
              console.log("payload", payload);
              meta?.setValue({
                label: payload?.label || undefined,
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
export default FormikCityAutoComplete;
