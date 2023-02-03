import SelectWithSearch, { SelectWithSearchProps } from "../SelectWithSearch";
import { useField } from "formik";
import BaseApi from "../../api/Api";
import FetchData from "../FetchData";

export type FormikSelectBimehPrp = Omit<
  SelectWithSearchProps,
  "options" | "onChange" | "displayValue" | "value"
> & {
  name: string;
  value?: any;
};

const FomrikBimehAutoComplete = (prp: FormikSelectBimehPrp) => {
  const { value, name, ...rest } = prp;

  const [field, , meta] = useField({ name: name, value: value });

  const fetch = () => {
    return BaseApi?.getAllInsurances.getAllInsurancesList().then((res) => {
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
              console.log("payload", payload);
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
export default FomrikBimehAutoComplete;
