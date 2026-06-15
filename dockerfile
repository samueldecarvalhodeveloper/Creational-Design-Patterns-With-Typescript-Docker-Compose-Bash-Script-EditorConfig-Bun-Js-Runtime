#syntax=docker/dockerfile:1

FROM oven/bun:1.2.20-alpine

WORKDIR /src/app/

COPY ./tsconfig.json /src/app/tsconfig.json
COPY ./package.json /src/app/package.json
COPY ./main.ts /src/app/main.ts
COPY ./src/ /src/app/src/

RUN bun install --production

CMD bun run program
