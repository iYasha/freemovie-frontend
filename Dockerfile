FROM node:16.17.0 as build-stage
WORKDIR /app
ENV VITE_API_URL=VITE_API_URL_PLACEHOLDER
ENV VITE_AUTH_TOKEN=VITE_AUTH_TOKEN_PLACEHOLDER
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build

FROM nginx as production-stage
EXPOSE 8080
RUN mkdir /app
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist /app

# To set environment variables after the container is built
COPY ./substitute_environment_variables.sh /docker-entrypoint.d/substitute_environment_variables.sh
RUN chmod +x /docker-entrypoint.d/substitute_environment_variables.sh