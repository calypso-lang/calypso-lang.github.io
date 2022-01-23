initSidebarItems({"enum":[["Entry","A view into a single location in a map, which may be vacant or occupied."],["InlineEntry","A view into a single location in a map, which may be vacant or occupied."],["Item","Type representing either a value, a table, an array of tables, or none."],["Offset","A parsed TOML time offset"],["Value","Representation of a TOML Value (as part of a Key/Value Pair)."]],"fn":[["array","Returns an empty array of tables."],["table","Returns an empty table."],["value","Returns a formatted value."]],"mod":[["de","Deserializing TOML into Rust structures."],["ser","Serializing Rust structures into TOML."],["visit","Document tree traversal to walk a shared borrow of a document tree."],["visit_mut","Document tree traversal to mutate an exclusive borrow of a document tree in place."]],"struct":[["Array","Type representing a TOML array, payload of the `Value::Array` variant’s value"],["ArrayOfTables","Type representing a TOML array of tables"],["Date","A parsed TOML date value"],["Datetime","A parsed TOML datetime value"],["Decor","A prefix and suffix,"],["Document","Type representing a TOML document"],["Formatted","A value together with its `to_string` representation, including surrounding it whitespaces and comments."],["InlineOccupiedEntry","A view into a single occupied location in a `IndexMap`."],["InlineTable","Type representing a TOML inline table, payload of the `Value::InlineTable` variant"],["InlineVacantEntry","A view into a single empty location in a `IndexMap`."],["InternalString","Opaque string storage internal to `toml_edit`"],["Key","Key as part of a Key/Value Pair or a table header."],["KeyMut","A mutable reference to a `Key`"],["OccupiedEntry","A view into a single occupied location in a `IndexMap`."],["Repr","TOML-encoded value"],["Table","Type representing a TOML non-inline table"],["Time","A parsed TOML time value"],["TomlError","Type representing a TOML parse error"],["VacantEntry","A view into a single empty location in a `IndexMap`."]],"trait":[["TableLike","This trait represents either a `Table`, or an `InlineTable`."]],"type":[["ArrayIntoIter","An owned iterator type over `Table`’s key/value pairs."],["ArrayIter","An iterator type over `Array`’s values."],["ArrayIterMut","An iterator type over `Array`’s values."],["ArrayOfTablesIntoIter","An iterator type over `ArrayOfTables`’s values."],["ArrayOfTablesIter","An iterator type over `ArrayOfTables`’s values."],["ArrayOfTablesIterMut","An iterator type over `ArrayOfTables`’s values."],["InlineTableIntoIter","An owned iterator type over key/value pairs of an inline table."],["InlineTableIter","An iterator type over key/value pairs of an inline table."],["InlineTableIterMut","A mutable iterator type over key/value pairs of an inline table."],["IntoIter","An owned iterator type over `Table`’s key/value pairs."],["Iter","An iterator type over `Table`’s key/value pairs."],["IterMut","A mutable iterator type over `Table`’s key/value pairs."]]});