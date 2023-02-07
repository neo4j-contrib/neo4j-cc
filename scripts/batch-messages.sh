#!/bin/sh
START_ISO_DATE=$1
END_ISO_DATE=$2

if [ ! -f ../.env ]
then
  export $(cat .env | xargs)
else
  echo "Missing .env file."
  exit
fi

DATE_RANGE="./scripts/date-range.sh $START_ISO_DATE $END_ISO_DATE"
KHOROS_FLAGS="--khorosURL=$NX_KHOROS_API_URL --khorosUser=$NX_KHOROS_LOGIN --khorosPassword=$NX_KHOROS_PASSWORD"
PROCESS_DAY="sleep 1; ./bin/run khoros messages $KHOROS_FLAGS --date=DAY > exports/khoros/messages/messages.DAY.json"

$DATE_RANGE | xargs -I DAY sh -c "$PROCESS_DAY"