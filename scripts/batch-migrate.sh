#!/bin/sh
START_ISO_DATE=$1
END_ISO_DATE=$2


DATE_RANGE="./scripts/date-range.sh $START_ISO_DATE $END_ISO_DATE"
CC_GO_FLAGS="--discourseKey=78c6318630db9526f9066d443d7b2144d10bb29beb251adbd6749d51f0fcf799 --discourseUsername=abk --discourseUrl=https://discourse.neo4j.com --discourseSecret=AKpf6uahPl02hw3XroRRGdQY6hQtU8bXYQ72pK-j3YtQ3SNn1puaVWppgFxfBkcX --khorosURL=https://community.neo4j.com --khorosUser=neo4j-khoros-ro --khorosPassword=djg_tdt8pxz9WJM_npf"

for DAY in $( $DATE_RANGE ) ; do
  echo "\n########################"
  echo "# Migrating $DAY\n"
  ./bin/run k2d $CC_GO_FLAGS --date=$DAY
  RET=$?;
  # echo $RET;
  if [ $RET -ne 0 ]; then 
    say "Error, error!";
    echo "Failed $DAY";
    break; 
  fi
done 

say "Done"
