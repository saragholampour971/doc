import { Combobox, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setDoctorType } from "../../store/search";
import { CheckIcon, SearchIcon } from "@heroicons/react/outline";
import BaseApi from "../../api/Api";
import axios from "axios";

const mockData: { label: string; key: number }[] = [
  { label: "عمومی", key: 1 },
  { label: "چشم پزشک", key: 2 },
  { label: "ریه", key: 3 },
  { label: "قلب", key: 4 },
  { label: "کودکان", key: 5 },
];

const DoctorTypAutocomplete = () => {
  const { doctorType } = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch();
  const [search, setSearch] = useState<string>();
  const [selected, setSelected] = useState<typeof mockData[number]>(
    mockData[0]
  );
  const fetch = () => {
    BaseApi.getAllCategories
      .getAllCategoriesList()
      .then((res: any) => console.log("rea", res));
  };
  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <Combobox
        value={mockData.find((node) => node.label === String(doctorType))}
        onChange={(e) => dispatch(setDoctorType(e.label))}
      >
        <div className="relative ">
          <div className="relative w-[300px] h-[50px] cursor-default overflow-hidden rounded-lg bg-white text-right shadow-md">
            <Combobox.Button className=" h-full w-full flex items-center pr-2">
              <div className={"h-full flex items-center w-full border-none"}>
                <SearchIcon className=" w-7 text-gray-400" aria-hidden="true" />
                <Combobox.Input
                  className=" leading-5 h-full flex flex-1 outline-0 pr-2 border-none  text-gray-900 focus:ring-0 text-gray-500 text-[16px] rounded-lg"
                  onChange={(event) => setSearch(event.target.value)}
                />
              </div>
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setSearch("")}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {mockData?.length === 0 && search !== "" ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                mockData.map((person) => (
                  <Combobox.Option
                    onClick={() => setSelected(person)}
                    key={person.key}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-teal-600 text-white" : "text-gray-900"
                      }`
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {person.label}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </>
  );
};
export default DoctorTypAutocomplete;
