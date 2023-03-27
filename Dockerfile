FROM node:latest

WORKDIR /app

COPY . .

RUN npm install \
  && npm run build \
  && rm -rf node_modules \
  && npm install --pure-lockfile --ignore-scripts

CMD ["npm", "run", "start"]
