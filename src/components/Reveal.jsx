import React, { useEffect, useRef, useState } from 'react';

// Kaydırınca görünür olduğunda aşağıdan süzülerek gelir (bir kez). delay ms: sıralı kartlar için.
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', style, children, ...rest }) {
	const ref = useRef(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return undefined;
		if (typeof IntersectionObserver === 'undefined') {
			setVisible(true);
			return undefined;
		}
		const io = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					io.disconnect();
				}
			},
			{ rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
		);
		io.observe(el);
		return () => io.disconnect();
	}, []);

	return (
		<Tag ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`} style={{ '--reveal-delay': `${delay}ms`, ...style }} {...rest}>
			{children}
		</Tag>
	);
}
