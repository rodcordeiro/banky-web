FROM node as vite-app

WORKDIR /banky
COPY ./ .

RUN npm i -g pnpm
RUN pnpm install
RUN pnpm lint
RUN pnpm build

FROM nginx:alpine

WORKDIR /usr/share/nginx/

RUN rm -rf html
RUN mkdir html

WORKDIR /

COPY ./.github/configs/nginx.conf /etc/nginx
COPY --from=vite-app ./banky/dist /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]