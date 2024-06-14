import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const POST = async (request: NextRequest) => {
	try {
		const { image, title, note } = await request.json();

		if (!image || !title || !note) {
			throw new Error('Fields can not be empty');
		}

		const article = await prisma.article.create({
			data: { image, title, note },
		});

		return NextResponse.json({ article }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: error }, { status: 500 });
	}
};

export const GET = async (request: NextRequest) => {
	try {
		const articles = await prisma.article.findMany();
		return NextResponse.json({ articles }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: 'Error' }, { status: 500 });
	}
};
