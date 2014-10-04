From "id" column framework expects the following:
- IDs are essentially generated on server.
- ID cannot be changed. Record's id may be <kw>null</kw> for new records, but you cannot change id of existing record from database.

If you want to create a column class, that violates those conventions - that will not be an ID column.
If used as ID column - it may break Module functionality in current or future builds.