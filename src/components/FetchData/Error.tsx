import { RefreshIcon } from "@heroicons/react/outline";
import classNames from "classnames";

type ErrorProps = {
  loadingClassName?: string;
  fetchData?: () => void;
  error?: any;
};

export const Error = (props: ErrorProps) => {
  const { error, fetchData, loadingClassName } = props;
  console.log("error in Error component", error);

  return (
    <div
      className={classNames(
        "flex justify-center items-center w-full h-full",
        loadingClassName
      )}
    >
      <div className={"flex justify-center"}>
        <div>
          <div className={"flex justify-center"}>
            <RefreshIcon
              className={
                "w-8 h-8 text-[#6366F1] hover:rotate-[-80deg] duration-300 cursor-pointer"
              }
              onClick={fetchData}
            />
          </div>
          {process.env.NODE_ENV === "development" && <div>{error}</div>}
        </div>
      </div>
    </div>
  );
};
