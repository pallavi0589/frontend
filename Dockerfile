FROM node:lts AS development
 
WORKDIR /code
COPY package.json /code/package.json
COPY package-lock.json /code/package-lock.json
RUN npm ci
COPY . /code
RUN npm run build
 
CMD [ "npm", "start" ]
 
EXPOSE 3000 3001
 
HEALTHCHECK --interval=30s --timeout=3s CMD curl -f http://localhost/:3001/health || exit 1