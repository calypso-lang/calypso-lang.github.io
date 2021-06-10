initSidebarItems({"enum":[["LassoErrorKind","The kind of error that occurred"]],"struct":[["Capacity","The amount of strings and bytes that an interner can hold before reallocating"],["Iter","An iterator over an interner’s strings and keys"],["LargeSpur","A key type taking up `size_of::<usize>()` bytes of space (generally 4 or 8 bytes)"],["LassoError","An error encountered while using an interner"],["MemoryLimits","Settings for the memory consumption of an interner"],["MicroSpur","A miniature Key utilizing only 8 bits of space"],["MiniSpur","A miniature Key utilizing only 16 bits of space"],["Rodeo","A string interner that caches strings quickly with a minimal memory footprint, returning a unique key to re-access it with `O(1)` times."],["RodeoReader","A read-only view of a `Rodeo` or `ThreadedRodeo` that allows contention-free access to interned strings, both key to string resolution and string to key lookups"],["RodeoResolver","A read-only view of a `Rodeo` or `ThreadedRodeo` that allows contention-free access to interned strings with only key to string resolution"],["Spur","The default key for every Rodeo, uses only 32 bits of space"],["Strings","An iterator over an interner’s strings"],["ThreadedRodeo","A concurrent string interner that caches strings quickly with a minimal memory footprint, returning a unique key to re-access it with `O(1)` internment and resolution."]],"trait":[["Interner","A generic interface over any underlying interner, allowing storing and accessing interned strings"],["IntoReader","A generic interface over interners that can be turned into a [`Reader`]."],["IntoReaderAndResolver","A generic interface over interners that can be turned into both a [`Reader`] and a [`Resolver`] directly."],["IntoResolver","A generic interface over [`Reader`]s that can be turned into a [`Resolver`]."],["Key","Types implementing this trait can be used as keys for all Rodeos"],["Reader","A generic interface that allows using any underlying interner for both its reading and resolution capabilities, allowing both `str -> key` and `key -> str` lookups"],["Resolver","A generic interface that allows using any underlying interner only for its resolution capabilities, allowing only `key -> str` lookups"]],"type":[["LassoResult","A continence type for an error from an interner"]]});