FROM node:16-alpine as vuebuild
COPY . .
RUN yarn install && npm run build

FROM nginx:alpine
COPY --from=vuebuild ./dist /usr/share/nginx/html
