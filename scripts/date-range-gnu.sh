#!/bin/bash

start_date=$1
end_date=$2

# with "until"
d=$start_date
until [[ $d > $end_date ]]; do 
    echo "$d"
    d=$(date -I -d "$d + 1 day")
done
