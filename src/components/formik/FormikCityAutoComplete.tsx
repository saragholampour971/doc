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

const FormikCityAutoComplete = (prp: FormikCityAutoCompletePrp) => {
  const { value, name, ...rest } = prp;

  const [field, , meta] = useField({ name: name, value: value });

  const fetch = () => {
    return BaseApi?.getAllCities.getAllCitiesList().then((res) => {
      return res?.data?.map((node) => ({
        label: node?.cityName || "",
        value: node?.cityName || "",
      }));
    });
  };
  return (
    <FetchData request={fetch} deps={[]} handleEmptyData={false}>
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
export default FormikCityAutoComplete;
