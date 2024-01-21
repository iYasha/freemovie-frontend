#!/bin/sh

ROOT_DIR=/app

# Replace env vars in files served by NGINX
for file in $ROOT_DIR/js/*.js* $ROOT_DIR/index.html $ROOT_DIR/precache-manifest*.js;
do
  sed -i 's|VITE_API_URL_PLACEHOLDER|'${VITE_API_URL}'|g' $file
  sed -i 's|VITE_AUTH_TOKEN_PLACEHOLDER|'${VITE_AUTH_TOKEN}'|g' $file
done
exec "$@"