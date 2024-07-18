import {useEffect, useRef, useState} from "react";

export const useHover = () => {
	const [isHovering, setIsHovering] = useState(false)
	const ref = useRef(null);
	const on = () => setIsHovering(true)
	const off = () => setIsHovering(false)

	useEffect(() => {
		if (!ref.current) {
			return;
		}
		const node = ref.current
		node.addEventListener("mouseenter", on)
		node.addEventListener("mousemove", on)
		node.addEventListener("mouseleave", off)

		return () => {
			node.removeEventListener("mouseenter", on)
			node.removeEventListener("mousemove", on)
			node.removeEventListener("mouseleave", off)
		}
	}, [ref.current]);
	return [ref, isHovering]
}

// How to call a hook
// const [ref,hover] = useHover()
//  первый аргумент вызывает при помощи атрибута ref( <div ref={hookRef}></div>) в нужном элементе
//