#!/bin/sh

cd /app

npm run build

http-server dist
