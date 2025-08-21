import { useState } from "react"

export function usePasswordTypeToggled() {
    const [isShow, setIsShow] = useState({
        password: false,
        confirmPassword: false
    })

    function passwordTextToggle(event) {
        setIsShow(prev => ({...prev, [event] : !prev[event]}))
    }

    return {isShow, setIsShow, passwordTextToggle}

}