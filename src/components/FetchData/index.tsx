import classNames from "classnames";
import React, { ReactNode, useEffect, useState } from "react";

import LoadingSpinner from "../loading/loading-spinner";
import { Error } from "./Error";

type StateType = {
  data?: any;
  setData: (payload?: any) => void;
  error?: any;
  setError?: () => void;
  loading?: any;
  setLoading?: () => void;
  fetchData?: () => void;
};

type Props<T> = {
  request?: () => Promise<T>;
  children: (data: T | null, state: StateType) => ReactNode;
  defaultValue?: T;
  handleError?: boolean;
  handleLoading?: boolean;
  handleEmptyData?: boolean;
  deps?: any[];
  loadingClassName?: string;
  resetDataBeforeFetch?: boolean;
};

function FetchData<T = any>(props: Props<T>) {
  const {
    deps = [],
    request,
    defaultValue,
    children,
    handleError = true,
    handleLoading = true,
    handleEmptyData = true,
    loadingClassName,
    resetDataBeforeFetch,
  } = props;
  const [data, setData] = useState(defaultValue);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    setError(null);
    if (typeof request === "function") {
      if (resetDataBeforeFetch) {
        setData(defaultValue);
      }
      request()
        .then(setData)
        .catch((er: any) => setError(er.toString()))
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const states = {
    data,
    setData,
    error,
    setError,
    loading,
    setLoading,
    fetchData,
  };

  useEffect(() => {
    if (deps) {
      fetchData();
    }
  }, deps);

  // handle error
  if (error && handleError)
    return (
      <Error
        fetchData={fetchData}
        error={error}
        loadingClassName={loadingClassName}
      />
    );

  if (handleLoading && loading)
    // handle loading
    return (
      <div
        className={classNames(
          "w-[100%]  flex justify-center items-center ",
          loadingClassName
        )}
      >
        <LoadingSpinner className={"w-8 h-8 my-4"} />
      </div>
    );

  if (
    handleEmptyData &&
    !loading &&
    //@ts-ignore
    (data?.items ? data.items.length === 0 : data?.length === 0)
  )
    return (
      <div
        className={classNames(
          "font-semibold w-full h-full items-center flex justify-center text-xl text-[#858C94]",
          loadingClassName
        )}
      >
        موردی یافت نشد
      </div>
    );

  // default return
  return (
    <>
      {typeof children === "function"
        ? children(data || null, states as any)
        : null}
    </>
  );
}

export default FetchData;
