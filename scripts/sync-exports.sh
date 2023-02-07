#!/bin/sh
aws s3 sync ./exports s3://community.neo4j.com --exclude "*.DS_Store"
