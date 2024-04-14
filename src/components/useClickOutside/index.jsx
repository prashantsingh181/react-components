import { useEffect } from "react";

export default function useClickOutside(elementRef, fn) {
    useEffect(() => {
        function handleClickOutside(event){
            if(elementRef && elementRef.current && !elementRef.current.contains(event.target)){
                fn();
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [elementRef, fn])
}
