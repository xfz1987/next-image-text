'use client';
import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
// eslint-disable-next-line
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<NextUIProvider>
			<NextThemesProvider
				attribute="class"
				defaultTheme="dark"
			>
				{children}
			</NextThemesProvider>
		</NextUIProvider>
	);
}
