FROM node:20.12.1-slim
WORKDIR /opt/app
COPY mashroom.json package.json package-lock.json ./
COPY ./dist ./dist
RUN npm ci --production
EXPOSE 6088
CMD ["node", "dist/server/index.js"]
