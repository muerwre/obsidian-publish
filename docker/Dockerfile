FROM node:16-alpine as builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY . .

RUN yarn generate

FROM nginx
COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist /usr/share/nginx/html
