#!/bin/bash

# Create runtime-config.js from environment variables
echo "window.env = {" > /usr/share/nginx/html/envs.js

# Loop through all environment variables starting with REACT_APP_
for var in $(printenv | grep '^REACT_APP_'); do
  varname=$(echo "$var" | cut -d'=' -f1)
  varvalue=$(echo "$var" | cut -d'=' -f2-)
  echo "  $varname: \"$varvalue\"," >> /usr/share/nginx/html/envs.js
  echo "Found environment variable: $varname = $varvalue"
done

# Close the JS object
echo "};" >> /usr/share/nginx/html/envs.js

# Print the contents of the generated file
echo "Contents of /usr/share/nginx/html/envs.js:"
cat /usr/share/nginx/html/envs.js

# Start nginx
exec "$@"
