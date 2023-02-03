import FormikCategoryAutoComplete from "../../components/formik/FormikCategoryAutoComplete";
import { Formik } from "formik";
import FomrikBimehAutoComplete from "../../components/formik/FomriktBimehAutoComplete";
import { NewspaperIcon } from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/solid";
import FormikCityAutoComplete from "../../components/formik/FormikCityAutoComplete";
// import FormikCityAutoComplete from "../../formik/FormikCityAutoComplete";

const SearchBox = () => {
  return (
    <Formik onSubmit={() => console.log("submit")} initialValues={{}}>
      {() => {
        return (
          <div className={"flex w-full justify-center mt-[350px]"}>
            <div
              className={
                "border border-4 border-dark-blue rounded-lg flex bg-dark-blue shadow-lg"
              }
            >
              <FormikCategoryAutoComplete
                placeholder={"چه دکتری میخوای ؟"}
                name={"city"}
                className={"w-[300px] h-[80px] border-0 rounded-[4rem] "}
                textClassName={"text-[18px] pr-[4rem] "}
              />
              <FomrikBimehAutoComplete
                name={"bimeh"}
                placeholder={"بیمت چیه ؟"}
                trailingIcon={
                  <NewspaperIcon className={"w-6 text-base-gray "} />
                }
                className={"w-[300px]  h-[80px] !leading-8 "}
                textClassName={"text-[18px] pr-[4rem] "}
              />{" "}
              <FormikCityAutoComplete
                name={"city"}
                placeholder={"کدوم شهری ؟"}
                trailingIcon={
                  <NewspaperIcon className={"w-6 text-base-gray "} />
                }
                className={"!w-[300px]  !h-[80px] !leading-8 "}
                textClassName={"text-[18px] pr-[4rem] "}
              />
              <div
                className={
                  "w-[100px] h-full bg-dark-blue flex items-center justify-center"
                }
              >
                {" "}
                <SearchIcon className={"w-6 text-white"} />
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};
export default SearchBox;
