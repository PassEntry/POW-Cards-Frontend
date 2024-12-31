FROM node:20.11.0 AS builder

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

ENV PATH=/usr/src/app/node_modules/.bin:$PATH
ENV NODE_ENV=production

COPY package*.json ./
RUN npm ci
COPY . .

RUN npm run build

# production environment
FROM nginx:stable
COPY --from=builder /usr/src/app/build /usr/share/nginx/html

# nginx configuration
RUN rm -rf /etc/nginx/conf.d
COPY nginx/conf.d /etc/nginx/conf.d

# set environment variables
COPY ./set-env.sh  /docker-entrypoint.d/
RUN chmod +x /docker-entrypoint.d/set-env.sh

EXPOSE 80
# Copy a script that generates the runtime-config.js
# CMD ["sh", "-c", "cd /usr/share/nginx/html/ && ./set-env.sh && nginx -g 'daemon off;'"]
CMD ["nginx", "-g", "daemon off;"]