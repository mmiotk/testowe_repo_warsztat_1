#!/bin/bash
# .github/actions/custom-deploy/deploy.sh

ENVIRONMENT=$1
DEPLOY_KEY=$2

echo "🚀 Wdrażam na środowisko: $ENVIRONMENT"

# Przygotuj klucz SSH
mkdir -p ~/.ssh
echo "$DEPLOY_KEY" > ~/.ssh/deploy_key
chmod 600 ~/.ssh/deploy_key

# Wykonaj wdrożenie (symulacja)
case $ENVIRONMENT in
  "staging")
    DEPLOY_URL="https://staging.myapp.com"
    ;;
  "production")
    DEPLOY_URL="https://myapp.com"
    ;;
esac

echo "✅ Wdrożenie zakończone"
echo "deployment-url=$DEPLOY_URL" >> $GITHUB_OUTPUT
