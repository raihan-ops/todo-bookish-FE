import * as React from "react"
export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ type, ...props }, ref) => {
        return (
            <input
                type={type}
                className='h-[46px] rounded-[6px] bg-input-inner-bg-gray pt-[14px] pb-[16px] pl-[16px] pr-[50px] text-place-holder-color-gray1 text-[15px] font-inter font-medium outline-none	'
                ref={ref}
                {...props}
            />
        )
    }
)
Input.displayName = "Input"

export { Input }


