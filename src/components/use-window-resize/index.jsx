import { useState, useLayoutEffect } from "react";

export default function useWindowResize(){
    const [size, setSize] = useState({
        height: 0,
        width: 0
    })

    useLayoutEffect(() => {
        function handleResize() {
            setSize({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return size;
}