import React, {FC, ReactNode, useEffect, useRef, useState} from 'react';
import {createPortal} from "react-dom";

interface PortalProps {
    children: ReactNode
}

const Portal: FC<PortalProps> = (props) => {
    const ref = useRef<Element | null>(null)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        ref.current = document.querySelector<HTMLElement>("#portal")
        setMounted(true)
    }, [])

    return (mounted && ref.current) ? createPortal(props.children, ref.current) : null
}

export default Portal