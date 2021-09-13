FROM node:12.18.1

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=http://localhost:5000/graphql

WORKDIR /client
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install

COPY . .
RUN npm build
CMD ["npm", "start"]