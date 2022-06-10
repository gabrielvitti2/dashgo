import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
    children: ReactElement
}

export default function ActiveLink({children, ...rest}:ActiveLinkProps) {

    let isActive = false

    const {pathname} = useRouter()

    if(pathname.startsWith(String(rest.href)) || pathname.startsWith(String(rest.as)) ) {
        isActive = true
    }

  return (
    <Link {...rest}>
        {cloneElement(children, {
            color: isActive ? 'pink.500' : 'gray.50'
        })}
    </Link>
  )
}
