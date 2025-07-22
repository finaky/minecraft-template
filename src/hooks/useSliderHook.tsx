"use client";

import { sliders } from "@/data/slider";
import { useEffect, useState } from "react";

export const useSlider = () => {
	const [currentSlide, setCurrentSlide] = useState<number>(0);
	const [progress, setProgress] = useState<number>(0);

	const maxSlide: number = sliders.length - 1;
	const timeToNextSlide: number = 5000;
	const tickInterval: number = 20;

	useEffect(() => {
		const interval = setInterval(() => {
			setProgress((prev) => {
				const next = prev + (tickInterval / timeToNextSlide) * 100;

				if (next >= 100) {
					setCurrentSlide((prevSlide) =>
						prevSlide >= maxSlide ? 0 : prevSlide + 1
					);
					return 0;
				}

				return next;
			});
		}, tickInterval);

		return () => clearInterval(interval);
	}, [currentSlide, maxSlide]);

	const slide = sliders[currentSlide];

	return {
		image: slide.image,
		title: slide.title,
		description: slide.description,
		progress,
	};
};
