#!/bin/bash

##
## Common variable declarations
##

DOCKER_IMAGE_BASE_NAME="grafana/grafana-plugin-ci-e2e"
DOCKER_IMAGE_VERSION="1.1.0"
DOCKER_IMAGE_NAME="${DOCKER_IMAGE_BASE_NAME}:${DOCKER_IMAGE_VERSION}"
