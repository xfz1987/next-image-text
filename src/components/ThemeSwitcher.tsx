'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { Button } from '@nextui-org/react';

export function ThemeSwitcher() {
	const { theme, setTheme } = useTheme();
	return (
		<div>
			<Button
				isIconOnly
				color="warning"
				variant="faded"
				aria-label="switch theme mode"
				onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			>
				{theme === 'dark' ? <Sun size={30} /> : <Moon size={30} />}
			</Button>
		</div>
	);
}
