#!/bin/sh
START_ISO_DATE=$1
END_ISO_DATE=$2

if [ ! -f ../.env ]
then
  export $(cat .env.cli | xargs)
else
  echo "Missing .env.cli file."
  exit
fi

DATE_RANGE="./scripts/date-range.sh $START_ISO_DATE $END_ISO_DATE"
KHOROS_FLAGS="--khorosURL=$KHOROS_API_URL --khorosUser=$KHOROS_LOGIN --khorosPassword=$KHOROS_PASSWORD"
PROCESS_DAY="sleep 1; ./bin/run khoros messages $KHOROS_FLAGS --date=DAY"

$DATE_RANGE | xargs -I DAY sh -c "$PROCESS_DAY"