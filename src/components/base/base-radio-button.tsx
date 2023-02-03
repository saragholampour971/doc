import { DetailedHTMLProps, InputHTMLAttributes } from "react";
const ButtonColors = {
  green: "bg-[#8BBEB5]",
};

type BtnColors = keyof typeof ButtonColors;

type PropType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { color: BtnColors };

const BaseRadioButton = (props: PropType) => {
  const { className, checked, onClick, color, ...restProps } = props;
  return (
    <>
      <input type="radio" className="hidden" {...restProps} checked={checked} />
      <span
        className={`rounded-full inline-block flex-no-shrink w-4 h-4 flex justify-center items-center cursor-pointer ${
          checked
            ? `${ButtonColors[color]} text-blue-300 `
            : "border border-gray-400 bg-white"
        } ${className || ""}`}
        onClick={onClick}
      >
        {checked && <div className="w-1 h-1 bg-white rounded-full " />}
      </span>
    </>
  );
};

export default BaseRadioButton;
