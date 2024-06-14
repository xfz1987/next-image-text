## Prisma and MongoDB

- 1. bun add prisma -D
- 2. bunx prisma init --datasource-provider mongodb
- 3. Modify DatabaseURL from '.env' and edit schema.prisma
- 4. bunx prisma format
- 5. bunx prisma generate
- 6. bun add @prisma/client

## Notice

- In app directory does not use 'getServerSideProps' 和 'getStaticProps'了

```js
// pages/dashboard.js
export async function getServerSideProps() {
	const res = await fetch(`https://...`);
	const projects = await res.json();

	return { props: { projects } };
}

export default function Dashboard({ projects }) {
	return (
		<ul>
			{projects.map(project => (
				<li key={project.id}>{project.name}</li>
			))}
		</ul>
	);
}

// `pages` directory
export async function getStaticProps() {
  const res = await fetch(`https://...`)
  const projects = await res.json()

  return { props: { projects } }
}

export default function Index({ projects }) {
  return projects.map((project) => <div>{project.name}</div>)
}

// pages/posts/[id].js
import PostLayout from '@/components/post-layout'

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
  }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://.../posts/${params.id}`)
  const post = await res.json()

  return { props: { post } }
}

export default function Post({ post }) {
  return <PostLayout post={post} />
}

```

- In the app directory, we can colocate our data fetching inside our React components using Server Components. This allows us to send less JavaScript to the client, while maintaining the rendered HTML from the server.By setting the cache option to no-store, we can indicate that the fetched data should never be cached. This is similar to getServerSideProps in the pages directory.

```javascript
// `app` directory

// This function can be named anything
async function getProjects() {
	const res = await fetch(`https://...`, { cache: 'no-store' });
	const projects = await res.json();

	return projects;
}

export default async function Dashboard() {
	const projects = await getProjects();

	return (
		<ul>
			{projects.map(project => (
				<li key={project.id}>{project.name}</li>
			))}
		</ul>
	);
}
```

- getStaticProps
- - In the app directory, data fetching with fetch() will default to cache: 'force-cache', which will cache the request data until manually invalidated. This is similar to getStaticProps in the pages directory.

```javascript
// `app` directory

// This function can be named anything
async function getProjects() {
	const res = await fetch(`https://...`);
	const projects = await res.json();

	return projects;
}

export default async function Index() {
	const projects = await getProjects();

	return projects.map(project => <div>{project.name}</div>);
}
```

- Dynamic paths (getStaticPaths)
- - In the app directory, getStaticPaths is replaced with generateStaticParams.
    generateStaticParams behaves similarly to getStaticPaths, but has a simplified API for returning route parameters and can be used inside layouts. The return shape of generateStaticParams is an array of segments instead of an array of nested param objects or a string of resolved paths.

```javascript
// `app` directory
import PostLayout from '@/components/post-layout';

export async function generateStaticParams() {
	return [{ id: '1' }, { id: '2' }];
}

async function getPost(params) {
	const res = await fetch(`https://.../posts/${params.id}`);
	const post = await res.json();

	return post;
}

export default async function Post({ params }) {
	const post = await getPost(params);

	return <PostLayout post={post} />;
}
```
