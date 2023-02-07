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

CC_GO_FLAGS="--discourseKey=78c6318630db9526f9066d443d7b2144d10bb29beb251adbd6749d51f0fcf799 --discourseUsername=abk --discourseUrl=https://discourse.neo4j.com --discourseSecret=AKpf6uahPl02hw3XroRRGdQY6hQtU8bXYQ72pK-j3YtQ3SNn1puaVWppgFxfBkcX --khorosURL=https://community.neo4j.com --khorosUser=neo4j-khoros-ro --khorosPassword=djg_tdt8pxz9WJM_npf"

echo "#############################################"
echo "# Batch migration from Khoros to Discourse...\n"

for DAY in $( $DATE_RANGE ) ; do
  echo "\n########################"
  echo "# Migrating $DAY\n"
  ./bin/run k2d $CC_GO_FLAGS --date=$DAY
  RET=$?
  # echo $RET;
  if [ $RET -ne 0 ]; then 
    echo "\n${RED}*** Failed $DAY ***${NOCOLOR}"
    exit
  fi
done 

echo "${GREEN}\n*** Done with batch from $START_ISO_DATE to $END_ISO_DATE${NOCOLOR}"
