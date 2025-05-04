#syntax=docker/dockerfile:1

FROM oven/bun:latest

WORKDIR /src/app/

COPY ./tsconfig.json /src/app/tsconfig.json
COPY ./package.json /src/app/package.json
COPY ./main.ts /src/app/main.ts
COPY ./src/ /src/app/src/

RUN bun install

CMD bun run program
