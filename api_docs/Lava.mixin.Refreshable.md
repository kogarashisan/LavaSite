Architecture notes
==================

@todo проставить ссылки на _doRefresh ScopeManager и события_.

Difference between `_waits_refresh` and `_is_dirty`:
`_waits_refresh` means that scope will be refreshed in the next refresh cycle, either directly, with `doRefresh()` call
from ScopeManager, or indirectly via the 'refreshed' event in one of it's dependencies. `_is_dirty` is set in classes that
implement Refreshable, it indicates the 'real' dirtiness and the need to perform `_doRefresh()` call. So, during the refresh
cycle, a scope may set it's `_waits_refresh=true`, when one of it's dependencies is queued for refresh, and optionally
`_is_dirty` - when one of it's dependencies fired the 'changed' or 'property_changed' event.