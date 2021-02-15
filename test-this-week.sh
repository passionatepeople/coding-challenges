#!/usr/bin/env bash

YEAR=$(date +"%Y")
WEEK=$(date +"%U")

jest --runInBand --rootDir=$YEAR/w$WEEK