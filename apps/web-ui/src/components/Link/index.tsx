import React, {ComponentProps} from "react";
import {default as NextLink} from "next/link";
import {twMerge} from "tailwind-merge";

type Props = ComponentProps<typeof NextLink> & {
    selected?: boolean;
    disabled?: boolean;
}

const Link: React.FC<Props> = ({children, selected, disabled, ...props}) => {
    return (
        <NextLink
            {...props}
            target={disabled ? "_blank" : undefined}
            style={{
                ...props.style,
                pointerEvents: (disabled) ? "none" : "auto",
            }}
            className={twMerge(
                "rounded-md px-3 py-2 text-sm font-medium",
                !!selected
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
            )
            }
            aria-current={!!selected ? "page" : undefined}
        >
            {children}
        </NextLink>
    )
}

export default Link;