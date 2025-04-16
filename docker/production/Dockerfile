# Use Node 23 alpine as base image
FROM node:23-alpine3 AS base

ARG BUILD_DATE=unknown
LABEL build_date=$BUILD_DATE


# Change the working directory to /build
WORKDIR /build

# Copy the package.json and package-lock.json files to the /build directory
COPY package*.json yarn*.lock ./
RUN \
    if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
    # Install production dependencies and clean the cache
    elif [ -f package-lock.json ]; then npm ci --omit=dev && npm cache clean --force;  \
    else echo "Lockfile not found." && exit 1; \
    fi
    
# Copy the entire source code into the container
COPY . .

RUN yarn build

# Document the port that may need to be published
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
