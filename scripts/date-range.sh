#!/bin/sh
startdate=$1
enddate=$2

sDateTs=$(date -j -f "%Y-%m-%d" $startdate "+%s")
eDateTs=$(date -j -f "%Y-%m-%d" $enddate "+%s")
dateTs=$sDateTs
offset=86400

while [[ "$dateTs" < "$eDateTs" ]]
do
  date=$(date -j -f "%s" $dateTs "+%Y-%m-%d")
  printf '%s\n' $date
  dateTs=$(($dateTs+$offset))
done
