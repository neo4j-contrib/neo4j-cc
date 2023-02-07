#!/usr/bin/bash

start_date="2022-06-01"
end_date="2022-07-01"

# with "until"
d=$start_date
until [[ $d > $end_date ]]; do 
    echo "$d"
    d=$(date -I -d "$d + 1 day")
done
