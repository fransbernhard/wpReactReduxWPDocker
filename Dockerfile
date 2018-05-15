FROM node

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn

COPY public public
COPY webpack webpack
COPY .babelrc .babelrc
COPY index.html index.html
COPY .htaccess .htaccess

CMD yarn serve
