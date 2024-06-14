## Prisma and MongoDB

- 1. bun add prisma -D
- 2. bunx prisma init --datasource-provider mongodb
- 3. Modify DatabaseURL from '.env' and edit schema.prisma
- 4. bunx prisma format
- 5. bunx prisma generate
- 6. bun add @prisma/client
