FROM node:argon

# Create app directory
RUN mkdir -p /angular2/anguar2-webpack-heroes
WORKDIR /angular2/anguar2-webpack-heroes

# Install app dependencies
COPY package.json /angular2/anguar2-webpack-heroes/
RUN npm install

# Bundle app source
ADD . /angular2/anguar2-webpack-heroes
