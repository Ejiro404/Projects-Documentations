#!/bin/sh

KEY_FILE=/tmp/fb-projects.pem

sed -i -e "s/{{PROJECT_ID}}/$PROJECT_ID/g" -e "s/TAG/$COMMIT_SHA/g" docker/production/docker-compose.yml

gsutil cp gs://fieldbase-deployment-scripts/keys/fb-projects.pem $KEY_FILE

chmod 0400 $KEY_FILE

scp -i $KEY_FILE -o StrictHostKeyChecking=no  docker/production/docker-compose.yml "$USER@$PRODUCTION_IP:~/fb-docs-production-deploy.yml"

ssh -i $KEY_FILE -T $USER@$PRODUCTION_IP -o StrictHostKeyChecking=no << 'EOF'
#!/bin/bash

# Deploy Docker stack using fb-docs-production-deploy.yml
docker-compose -f fb-docs-production-deploy.yml up -d

# Clean up local fb-docs-production-deploy.yml file
rm fb-docs-production-deploy.yml

# Clean up dangling images
docker image prune -f

# Clean up stopped containers
docker container prune -f
EOF

# Clean up local key.pem file after SSH command completes
rm $KEY_FILE
