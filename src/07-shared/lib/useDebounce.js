import {useEffect} from "react";

export const useDebounce = (callback, delay) => {
	useEffect(() => {
		const timeout = setTimeout(() => {
			callback()
		}, delay)
		return () => {
			clearTimeout(timeout)
		}
	}, [callback, delay]);
}