FROM node:22-alpine as vuebuild
COPY . .
RUN yarn install && npm run build

FROM nginx:alpine
COPY --from=vuebuild ./dist /usr/share/nginx/html
