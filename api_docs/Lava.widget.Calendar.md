How the widget works: it builds an array of "day" objects (6 rows of 7 days), then binds to it in the template.

The year is limited to at least 3 digits and at most 5, cause of issues with the Date object:
1. if created with 2 or more arguments and year less than three digits - than year starts from 1900.
Example: new Date(99, 0) -> Fri Jan 01 1999 00:00:00 GMT+0200...
2. Maximum range for the date is 1970 (+/-) 100 000 000 days

UTC time must be used to remove DST adjustment (it adds 1 hour in winter, which breaks the selection)
and time zone adjustments.