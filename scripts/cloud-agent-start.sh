#!/usr/bin/env bash
set -euo pipefail

if [[ -n "${SERVICENOW_INSTANCE_URL:-}" && -n "${SERVICENOW_USERNAME:-}" && -n "${SERVICENOW_PASSWORD:-}" ]]; then
  echo "$SERVICENOW_PASSWORD" | npx now-sdk auth --add "$SERVICENOW_INSTANCE_URL" \
    --type basic \
    --alias default \
    --username "$SERVICENOW_USERNAME" \
    --password-stdin
  npx now-sdk auth --use default
  echo "ServiceNow SDK authenticated to ${SERVICENOW_INSTANCE_URL}"
else
  echo "ServiceNow instance credentials not configured; local build (npm run build) is still available."
fi
