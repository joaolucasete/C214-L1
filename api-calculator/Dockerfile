FROM node:17

WORKDIR /api-calculator/

COPY package.json yarn.lock /api-calculator/

RUN yarn --frozen-lockfile

COPY . .

USER node

CMD yarn live-reload