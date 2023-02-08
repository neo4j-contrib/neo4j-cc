#!/bin/sh
START_ISO_DATE=$1
END_ISO_DATE=$2

if [ ! -f ../.env.cli ]
then
  export $(cat .env.cli | xargs)
else
  echo "Missing .env.cli file."
  exit
fi


case "$OSTYPE" in
  darwin*)  DATE_RANGE="./scripts/date-range.sh $START_ISO_DATE $END_ISO_DATE" ;; 
  linux*)   DATE_RANGE="./scripts/date-range-gnu.sh $START_ISO_DATE $END_ISO_DATE" ;;
  *)        echo "unknown: $OSTYPE"; exit ;;
esac

GREEN='\033[0;32m' 
RED='\033[0;31m'   
NOCOLOR='\033[0m'

DISCOURSE_FLAGS="--discourseKey=$DISCOURSE_API_KEY --discourseUsername=$DISCOURSE_API_USER --discourseUrl=$DISCOURSE_API_URL --discourseSecret=$DISCOURSE_CONNECT_SECRET"
KHOROS_FLAGS="--khorosURL=$KHOROS_API_URL --khorosUser=$KHOROS_LOGIN --khorosPassword=$KHOROS_PASSWORD"

echo "#############################################"
echo "# Batch migration from Khoros to Discourse...\n"

for DAY in $( $DATE_RANGE ) ; do
  echo "\n########################"
  echo "# Migrating $DAY\n"
  ./bin/run k2d $DISCOURSE_FLAGS $KHOROS_FLAGS --date=$DAY
  RET=$?
  # echo $RET;
  if [ $RET -ne 0 ]; then 
    echo "\n${RED}*** Failed $DAY ***${NOCOLOR}"
    exit
  fi
done 

echo "${GREEN}\n*** Done with batch from $START_ISO_DATE to $END_ISO_DATE${NOCOLOR}"
