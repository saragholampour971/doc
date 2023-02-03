import { Combobox, Transition } from "@headlessui/react";
import {
  CheckIcon,
  ChevronDownIcon,
  SearchIcon,
  XIcon,
} from "@heroicons/react/solid";
import { debounce } from "lodash";
import { Fragment, ReactNode, useMemo, useState } from "react";
import BaseLabel, { BaseLabelProps } from "./BaseLabel";
import LoadingSpinner from "./loading/loading-spinner";
import cx from "classnames";

type OptionType = {
  label: ReactNode;
  value: string | null;
  [key: string]: any;
};

export type SelectWithSearchProps = {
  label?: string;
  labelProps?: BaseLabelProps;
  value: any;
  onChange: (payload?: any) => any;
  className?: string;
  displayValue?: (payload?: any) => string;
  options: OptionType[];
  isLoading?: boolean;
  comboBoxContainerProps?: any;
  trailingIcon?: ReactNode;
  tabIndex?: number;
  textClassName?: string;
  placeholder?: string;
};

export default function SelectWithSearch(props: SelectWithSearchProps) {
  const {
    className,
    label,
    labelProps,
    value,
    onChange,
    displayValue,
    options: defaultOptions = [],
    isLoading,
    trailingIcon,
    tabIndex,
    comboBoxContainerProps,
    textClassName,
    ...rest
  } = props;
  const [query, setQuery] = useState("");

  const options = useMemo(() => {
    return defaultOptions.filter((item) => item?.value?.includes(query));
  }, [query, defaultOptions]);

  return (
    <div className={className}>
      <BaseLabel {...labelProps}>{label}</BaseLabel>
      <Combobox {...comboBoxContainerProps} value={value} onChange={onChange}>
        <div className="relative h-full">
          <div className="relative w-full h-full cursor-default overflow-hidden bg-white text-right ">
            <Combobox.Input
              {...rest}
              tabIndex={tabIndex}
              className={cx(
                "w-full h-full text-slate-600 border-none py-2 pl-8 pr-10 text-sm leading-[1.5rem] text-gray-900 focus:ring-0",
                textClassName
              )}
              displayValue={displayValue}
              onChange={debounce((event) => setQuery(event.target.value), 600)}
            />
            <Combobox.Button className="absolute inset-y-0 flex items-center pr-2 right-2">
              {trailingIcon ? (
                trailingIcon
              ) : (
                <SearchIcon
                  className="h-6 w-6 text-[#9F9FA0] "
                  aria-hidden="true"
                />
              )}
            </Combobox.Button>

            {value && (
              <Combobox.Button
                className="absolute inset-y-0 flex items-center pr-2 left-8"
                onClick={() => {
                  onChange(null);
                }}
              >
                <XIcon className="w-4 h-4 text-red-500" />
              </Combobox.Button>
            )}

            <Combobox.Button className="absolute inset-y-0 flex items-center pr-2 left-2">
              {isLoading ? (
                <LoadingSpinner />
              ) : (
                <ChevronDownIcon
                  className="h-4 w-4 text-[#9F9FA0]"
                  aria-hidden="true"
                />
              )}
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute z-[2] mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {options.map((option, index) => (
                <Combobox.Option
                  key={index}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-teal-600 text-white" : "text-gray-900"
                    }`
                  }
                  value={option}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {option.label}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? "text-white" : "text-teal-600"
                          }`}
                        >
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
