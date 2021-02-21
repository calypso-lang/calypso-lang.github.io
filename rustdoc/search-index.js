var searchIndex = JSON.parse('{\
"calypso":{"doc":"","i":[[0,"commands","calypso","",null,null],[0,"explain","calypso::commands","",null,null],[5,"explain","calypso::commands::explain","",null,[[["argmatches",3]]]],[0,"internal","calypso::commands","",null,null],[5,"internal","calypso::commands::internal","",null,[[["argmatches",3]]]],[5,"lexer","","",null,[[["argmatches",3]]]],[5,"lexer_stdin","","",null,[[["argmatches",3]]]],[5,"lexer_stdin_repl","","",null,[[["bool",15]]]],[0,"messages","calypso","",null,null],[5,"error","calypso::messages","",null,[[["display",8]]]],[5,"_error_category","","",null,[[["display",8]]]],[5,"_info","","",null,[[["display",8]]]],[5,"_note","","",null,[[["display",8]]]],[5,"_warn","","",null,[[["display",8]]]],[5,"main","calypso","",null,[[]]]],"p":[]},\
"calypso_base":{"doc":"Base types and utilities for Calypso that don\'t require …","i":[[0,"macros","calypso_base","Common macros for ease of use in other parts of the …",null,null],[0,"span","","<code>Span</code> and <code>Spanned</code> types.",null,null],[3,"Span","calypso_base::span","The location in a slice in which some object spans.",null,null],[12,"lo","","",0,null],[12,"hi","","",0,null],[11,"new","","",0,[[["usize",15]]]],[11,"new_shrunk","","",0,[[["usize",15]]]],[11,"new_dummy","","Create a dummy span (that has a span equivalent to the …",0,[[]]],[11,"lo","","",0,[[],["usize",15]]],[11,"with_lo","","",0,[[["usize",15]]]],[11,"hi","","",0,[[],["usize",15]]],[11,"with_hi","","",0,[[["usize",15]]]],[11,"is_dummy","","Returns <code>true</code>  if this is a dummy span",0,[[],["bool",15]]],[11,"shrink_to_lo","","Returns a new span representing an empty span at the …",0,[[],["span",3]]],[11,"shrink_to_hi","","Returns a new span representing an empty span at the end …",0,[[],["span",3]]],[11,"is_empty","","Returns true if if <code>hi == lo</code>",0,[[],["bool",15]]],[11,"substitute_dummy","","Returns <code>self</code> if <code>self</code> is not a dummy span, and <code>other</code> …",0,[[["span",3]],["span",3]]],[11,"contains","","Returns <code>true</code> if <code>self</code> fully encloses <code>other</code>.",0,[[["span",3]],["bool",15]]],[11,"overlaps","","Returns <code>true</code> if <code>self</code> touches <code>other</code>.",0,[[["span",3]],["bool",15]]],[11,"to","","Returns a <code>Span</code> that would enclose both <code>self</code> and <code>end</code>.",0,[[["span",3]],["span",3]]],[11,"between","","Returns a <code>Span</code> between the end of <code>self</code> to the beginning …",0,[[["span",3]],["span",3]]],[11,"until","","Returns a <code>Span</code> from the beginning of <code>self</code> until the …",0,[[["span",3]],["span",3]]],[11,"add_hi","","",0,[[["usize",15]],["span",3]]],[3,"Spanned","","An object that\'s associated with a <code>Span</code>",null,null],[12,"span","","",1,null],[12,"value","","",1,null],[11,"new","","Associate a span with a value.",1,[[["span",3]]]],[11,"value","","Get a reference to the value.",1,[[]]],[11,"value_owned","","Get the owned value.",1,[[]]],[11,"span","","Get the value\'s <code>Span</code>",1,[[],["span",3]]],[0,"streams","calypso_base","Utilities for handling streams of data",null,null],[0,"generic","calypso_base::streams","Generic streams",null,null],[3,"Streamed","calypso_base::streams::generic","A generic stream.",null,null],[12,"elements","","A reference to the underlying slice",2,null],[12,"iter","","The stream\'s current char and index",2,null],[12,"num_passed","","The number of elements passed so far.",2,null],[12,"peek","","1elem peek",2,null],[12,"peek2","","2elem peek",2,null],[12,"peek3","","3elem peek",2,null],[12,"prev","","1elem backwards peek",2,null],[11,"new","","",2,[[]]],[0,"str","calypso_base::streams","String streams",null,null],[3,"StringStream","calypso_base::streams::str","A stream emitting tuples of byte locations and characters …",null,null],[12,"string","","A reference to the underlying string",3,null],[12,"num_chars","","The cached number of characters in the string, as …",3,null],[12,"indices","","The stream\'s current char and index",3,null],[12,"chars_passed","","The number of characters passed so far.",3,null],[12,"peek","","1ch peek",3,null],[12,"peek2","","2ch peek",3,null],[12,"peek3","","3ch peek",3,null],[12,"prev","","1ch backwards peek",3,null],[11,"new","","",3,[[["str",15]]]],[11,"slice","","",3,[[],["str",15]]],[3,"StringStream","calypso_base::streams","A stream emitting tuples of byte locations and characters …",null,null],[12,"string","","A reference to the underlying string",3,null],[12,"num_chars","","The cached number of characters in the string, as …",3,null],[12,"indices","","The stream\'s current char and index",3,null],[12,"chars_passed","","The number of characters passed so far.",3,null],[12,"peek","","1ch peek",3,null],[12,"peek2","","2ch peek",3,null],[12,"peek3","","3ch peek",3,null],[12,"prev","","1ch backwards peek",3,null],[3,"Streamed","","A generic stream.",null,null],[12,"elements","","A reference to the underlying slice",2,null],[12,"iter","","The stream\'s current char and index",2,null],[12,"num_passed","","The number of elements passed so far.",2,null],[12,"peek","","1elem peek",2,null],[12,"peek2","","2elem peek",2,null],[12,"peek3","","3elem peek",2,null],[12,"prev","","1elem backwards peek",2,null],[8,"Stream","","A trait for streamed data. For a stream, <code>EOF</code> means either …",null,null],[10,"is_at_end","","This stream can no longer produce elements if this …",4,[[],["bool",15]]],[10,"peek","","Peek at the value one element ahead, without consuming it.",4,[[],["option",4]]],[10,"peek2","","Peek at the value two element ahead, without consuming …",4,[[],["option",4]]],[10,"peek3","","Peek at the value three element ahead, without consuming …",4,[[],["option",4]]],[10,"prev","","Peek at the value one element behind, without moving …",4,[[],["option",4]]],[11,"next_if","","Consume the next element if the condition is true.",4,[[],["option",4]]],[11,"next_if_eq","","Consume the next element if it is equal to <code>expected</code>.",4,[[],["option",4]]],[11,"gorge_while","","Keep consuming elements while the condition is true and …",4,[[]]],[11,"gorge_while_eq","","Keep consuming elements while the element is equal to …",4,[[]]],[11,"peek_eq","","Returns <code>Some(true)</code> if the value one element ahead is …",4,[[],[["bool",15],["option",4]]]],[11,"peek2_eq","","Returns <code>Some(true)</code> if the value two elements ahead is …",4,[[],[["bool",15],["option",4]]]],[11,"peek3_eq","","Returns <code>Some(true)</code> if the value three elements ahead is …",4,[[],[["bool",15],["option",4]]]],[11,"prev_eq","","Returns <code>Some(true)</code> if the value one element behind is …",4,[[],[["bool",15],["option",4]]]],[11,"peek_cond","","Returns the value of the condition, wrapped in an <code>Option</code>. …",4,[[],[["bool",15],["option",4]]]],[11,"peek2_cond","","Returns the value of the condition, wrapped in an <code>Option</code>. …",4,[[],[["bool",15],["option",4]]]],[11,"peek3_cond","","Returns the value of the condition, wrapped in an <code>Option</code>. …",4,[[],[["bool",15],["option",4]]]],[11,"prev_cond","","Returns the value of the condition, wrapped in an <code>Option</code>. …",4,[[],[["bool",15],["option",4]]]],[14,"static_list","calypso_base","Initialize a <code>static</code> list with the values specified.",null,null],[14,"init_trie","","Initialize a <code>radix_trie::Trie</code> with specified values using …",null,null],[11,"from","calypso_base::span","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","calypso_base::streams::generic","",2,[[]]],[11,"into","","",2,[[]]],[11,"into_iter","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","calypso_base::streams::str","",3,[[]]],[11,"into","","",3,[[]]],[11,"into_iter","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"is_at_end","calypso_base::streams::generic","",2,[[],["bool",15]]],[11,"peek","","",2,[[],["option",4]]],[11,"peek2","","",2,[[],["option",4]]],[11,"peek3","","",2,[[],["option",4]]],[11,"prev","","",2,[[],["option",4]]],[11,"is_at_end","calypso_base::streams::str","",3,[[],["bool",15]]],[11,"peek","","",3,[[],["option",4]]],[11,"peek2","","",3,[[],["option",4]]],[11,"peek3","","",3,[[],["option",4]]],[11,"prev","","",3,[[],["option",4]]],[11,"from","calypso_base::span","",0,[[["usize",15],["range",3]]]],[11,"from","","",1,[[],[["char",15],["spanned",3]]]],[11,"next","calypso_base::streams::generic","",2,[[],["option",4]]],[11,"size_hint","","",2,[[]]],[11,"next","calypso_base::streams::str","",3,[[],["option",4]]],[11,"size_hint","","",3,[[]]],[11,"clone","calypso_base::span","",0,[[],["span",3]]],[11,"clone","","",1,[[],["spanned",3]]],[11,"clone","calypso_base::streams::str","",3,[[],["stringstream",3]]],[11,"default","calypso_base::span","",0,[[]]],[11,"cmp","","",0,[[["span",3]],["ordering",4]]],[11,"eq","","",0,[[["span",3]],["bool",15]]],[11,"ne","","",0,[[["span",3]],["bool",15]]],[11,"eq","","",1,[[["spanned",3]],["bool",15]]],[11,"ne","","",1,[[["spanned",3]],["bool",15]]],[11,"eq","","",1,[[],["bool",15]]],[11,"partial_cmp","","",0,[[["span",3]],[["option",4],["ordering",4]]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","calypso_base::streams::str","",3,[[["formatter",3]],["result",6]]],[11,"index","calypso_base::streams::generic","",2,[[]]],[11,"index","calypso_base::streams::str","",3,[[]]],[11,"hash","calypso_base::span","",0,[[]]],[11,"hash","","",1,[[]]]],"p":[[3,"Span"],[3,"Spanned"],[3,"Streamed"],[3,"StringStream"],[8,"Stream"]]},\
"calypso_diagnostic":{"doc":"","i":[[0,"diagnostic","calypso_diagnostic","",null,null],[4,"LabelStyle","calypso_diagnostic::diagnostic","",null,null],[13,"Primary","","Labels that describe the primary cause of a diagnostic.",0,null],[13,"Secondary","","Labels that provide additional context for a diagnostic.",0,null],[4,"Severity","","A severity level for diagnostic messages.",null,null],[13,"Bug","","An unexpected bug.",1,null],[13,"Error","","An error.",1,null],[13,"Warning","","A warning.",1,null],[13,"Note","","A note.",1,null],[13,"Help","","A help message.",1,null],[3,"Diagnostic","","",null,null],[12,"0","","",2,null],[12,"1","","",2,null],[3,"Builder","","",null,null],[12,"level","","",3,null],[12,"code","","",3,null],[12,"message","","",3,null],[12,"labels","","",3,null],[12,"notes","","",3,null],[12,"files","","",3,null],[11,"new","","",3,[[["severity",4],["filemgr",6]]]],[11,"code","","",3,[[]]],[11,"message","","",3,[[]]],[11,"label","","",3,[[["labelstyle",4],["usize",15],["span",3]]]],[11,"note","","",3,[[]]],[11,"build","","Build the diagnostic. This pre-renders the diagnostic.",3,[[],[["calresult",6],["diagnostic",3]]]],[11,"reason","","",2,[[],["str",15]]],[11,"code","","",2,[[],[["option",4],["str",15]]]],[11,"rendered","","",2,[[],["str",15]]],[0,"error","calypso_diagnostic","",null,null],[4,"DiagnosticError","calypso_diagnostic::error","An extension of [<code>CalError</code>] used for diagnostics.",null,null],[13,"Rendering","","",4,null],[13,"Diagnostic","","",4,null],[0,"report","calypso_diagnostic","",null,null],[3,"GlobalReportingCtxt","calypso_diagnostic::report","",null,null],[12,"errors","","",5,null],[12,"nonfatals","","",5,null],[11,"new","","",5,[[]]],[11,"report_syncd","","",5,[[["diagnostic",3]]]],[11,"report_non_fatal","","",5,[[["diagnostic",3]]]],[11,"nonfatals","","",5,[[]]],[11,"errors","","",5,[[]]],[0,"types","calypso_diagnostic","",null,null],[3,"DIAGNOSTICS","calypso_diagnostic::types","",null,null],[12,"__private_field","","",6,null],[0,"prelude","calypso_diagnostic","",null,null],[4,"CalError","calypso_diagnostic::prelude","The Calypso error type.",null,null],[13,"Io","","IO errors",7,null],[13,"FromUtf8","","UTF-8 decoding errors",7,null],[13,"Other","","Any other error, using [<code>anyhow</code>]",7,null],[6,"CalResult","","A handy alias for [<code>Result<T, CalError></code>], genericized over …",null,null],[4,"LabelStyle","","",null,null],[13,"Primary","","Labels that describe the primary cause of a diagnostic.",0,null],[13,"Secondary","","Labels that provide additional context for a diagnostic.",0,null],[6,"FileMgr","calypso_diagnostic","",null,null],[14,"gen_error","","Generate errors or report synchronized errors.",null,null],[11,"from","calypso_diagnostic::prelude","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","calypso_diagnostic::diagnostic","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"to_string","","",2,[[],["string",3]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","calypso_diagnostic::error","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_string","","",4,[[],["string",3]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","calypso_diagnostic::report","",5,[[]]],[11,"into","","",5,[[]]],[11,"to_owned","","",5,[[]]],[11,"clone_into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","calypso_diagnostic::types","",6,[[]]],[11,"into","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"from","calypso_diagnostic::prelude","",7,[[]]],[11,"into","","",7,[[]]],[11,"to_string","","",7,[[],["string",3]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"source","","",7,[[],[["error",8],["option",4]]]],[11,"fmt","","",7,[[["formatter",3]],[["result",4],["error",3]]]],[11,"fmt","","",7,[[["formatter",3]],[["result",4],["error",3]]]],[11,"from","","",7,[[["fromutf8error",3]],["calerror",4]]],[11,"from","","",7,[[["error",3]],["calerror",4]]],[11,"from","","",7,[[["error",3]],["calerror",4]]],[11,"fmt","","",0,[[["formatter",3]],[["result",4],["error",3]]]],[11,"fmt","calypso_diagnostic::diagnostic","",1,[[["formatter",3]],[["result",4],["error",3]]]],[11,"hash","","",1,[[]]],[11,"eq","","",1,[[["severity",4]],["bool",15]]],[11,"eq","calypso_diagnostic::prelude","",0,[[["labelstyle",4]],["bool",15]]],[11,"clone","calypso_diagnostic::diagnostic","",1,[[],["severity",4]]],[11,"clone","calypso_diagnostic::prelude","",0,[[],["labelstyle",4]]],[11,"partial_cmp","","",0,[[["labelstyle",4]],[["option",4],["ordering",4]]]],[11,"partial_cmp","calypso_diagnostic::diagnostic","",1,[[["severity",4]],[["option",4],["ordering",4]]]],[11,"from","calypso_diagnostic::error","",4,[[["diagrendererror",4]]]],[11,"from","calypso_diagnostic::prelude","",7,[[["diagnosticerror",4]]]],[11,"from","calypso_diagnostic::error","",4,[[["diagnostic",3]]]],[11,"clone","calypso_diagnostic::diagnostic","",2,[[],["diagnostic",3]]],[11,"clone","","",3,[[],["builder",3]]],[11,"clone","calypso_diagnostic::report","",5,[[],["globalreportingctxt",3]]],[11,"default","","",5,[[],["globalreportingctxt",3]]],[11,"deref","calypso_diagnostic::types","",6,[[],["hashmap",3]]],[11,"fmt","calypso_diagnostic::diagnostic","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","calypso_diagnostic::error","",4,[[["formatter",3]],["result",6]]],[11,"fmt","calypso_diagnostic::report","",5,[[["formatter",3]],["result",6]]],[11,"fmt","calypso_diagnostic::diagnostic","",2,[[["formatter",3]],["result",6]]],[11,"fmt","calypso_diagnostic::error","",4,[[["formatter",3]],["result",6]]],[11,"source","","",4,[[],[["option",4],["error",8]]]],[11,"initialize","calypso_diagnostic::types","",6,[[]]]],"p":[[4,"LabelStyle"],[4,"Severity"],[3,"Diagnostic"],[3,"Builder"],[4,"DiagnosticError"],[3,"GlobalReportingCtxt"],[3,"DIAGNOSTICS"],[4,"CalError"]]},\
"calypso_error":{"doc":"Error-handling utilities and types for use in Calypso.","i":[[4,"CalError","calypso_error","The Calypso error type.",null,null],[13,"Io","","IO errors",0,null],[13,"FromUtf8","","UTF-8 decoding errors",0,null],[13,"Other","","Any other error, using [<code>anyhow</code>]",0,null],[6,"CalResult","","A handy alias for [<code>Result<T, CalError></code>], genericized over …",null,null],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_string","","",0,[[],["string",3]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",0,[[["error",3]]]],[11,"from","","",0,[[["fromutf8error",3]]]],[11,"from","","",0,[[["error",3]]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"source","","",0,[[],[["option",4],["error",8]]]]],"p":[[4,"CalError"]]},\
"calypso_filety":{"doc":"<code>calypso_filety</code>Binary file type definitions, parsers, …","i":[[0,"ccff","calypso_filety","Calypso Container File Format. See the module-level docs …",null,null],[0,"hl","calypso_filety::ccff","A high-level interface for CCFF files",null,null],[3,"ContainerFile","calypso_filety::ccff::hl","A higher-level interface to a CCFF container file.",null,null],[12,"abi","","",0,null],[12,"filety","","",0,null],[12,"sections","","",0,null],[11,"new","","Create a new container file.",0,[[]]],[11,"abi","","Set the ABI of the container file. This can be any …",0,[[["u64",15]]]],[11,"filety","","Set the file type of the container file. This can be any …",0,[[["u64",15]]]],[11,"get_abi","","Get the ABI of the container file.",0,[[],["u64",15]]],[11,"get_filety","","Get the file type of the container file.",0,[[],["u64",15]]],[11,"add_section","","Add a section to the container file.",0,[[["section",3]]]],[11,"remove_section","","Remove a section from the container file. Does nothing if …",0,[[["str",15]]]],[11,"get_section","","Get a reference to a section in the container file.",0,[[["str",15]],[["option",4],["section",3]]]],[11,"get_section_mut","","Get a mutable reference to a section in the container …",0,[[["str",15]],[["option",4],["section",3]]]],[11,"sections","","Iterate over the sections in the container file.",0,[[]]],[11,"encode","","Encode the container file as its low-level counterpart. …",0,[[]]],[11,"decode","","Decode the container file from its low-level counterpart.",0,[[["ccffheader",3]]]],[11,"read_all","","Read the entirety of the container file\'s section data. …",0,[[],["calresult",6]]],[3,"Section","","A higher-level interface to a CCFF section.",null,null],[12,"name","","",1,null],[12,"stype","","",1,null],[12,"flags","","",1,null],[12,"data","","",1,null],[12,"offset","","",1,null],[12,"size","","",1,null],[11,"new","","",1,[[["string",3]]]],[11,"get_name","","Get the name of the section.",1,[[],["str",15]]],[11,"stype","","Set the type of the section. This can be any arbitrary …",1,[[["u64",15]]]],[11,"get_stype","","Get the type of the section.",1,[[],["u64",15]]],[11,"flags","","Set the flags of the section. This can be any arbitrary …",1,[[["u64",15]]]],[11,"get_flags","","Get the flags of the section.",1,[[],["u64",15]]],[11,"data","","Set the data of the section. This can be any arbitrary …",1,[[["vec",3],["u8",15]]]],[11,"get_data","","Get a reference to the data of the section. This may not …",1,[[],["option",4]]],[11,"get_data_mut","","Get a mutable reference to the data of the section. This …",1,[[],[["option",4],["vec",3]]]],[11,"seek_to_data","","Seek to the location of the data in the reader.",1,[[],["calresult",6]]],[11,"read_data","","Read the entirety of the section\'s data. It is not …",1,[[],["calresult",6]]],[11,"get_offset","","Get the offset of the data. This is only present if …",1,[[],[["option",4],["u64",15]]]],[11,"encode","","Encode the section as its low-level counterpart. This …",1,[[]]],[0,"ll","calypso_filety::ccff","Low-level (binary representation with bincode) for CCFF …",null,null],[3,"CcffHeader","calypso_filety::ccff::ll","The header for a CCFF file",null,null],[12,"magic","","The 2 magic bytes",2,null],[12,"abi","","A user-defined ABI version.",2,null],[12,"filety","","A user-defined file type.",2,null],[12,"sections","","The CCFF section headers, encoded as a length-array (i.e. …",2,null],[3,"CcffSectionHeader","","The header for a CCFF section. This does not include the …",null,null],[12,"name","","The section name, encoded as a length-string (i.e. a …",3,null],[12,"section_type","","A user-defined section type.",3,null],[12,"flags","","User-defined section flags.",3,null],[12,"offset","","The offset, in bytes, of the section from the begining of …",3,null],[12,"size","","The size, in bytes, of this section",3,null],[11,"read","","Read the CCFF header and magic bytes.",2,[[],["calresult",6]]],[11,"write","","Write the CCFF header and magic bytes.",2,[[],["calresult",6]]],[11,"size","","Get the size of the CCFF header, including the magic …",2,[[],["usize",15]]],[11,"seek_to_data","","Seek to the data.",3,[[],["calresult",6]]],[11,"read_data","","Read the entirety of the data. This function assumes that …",3,[[],[["calresult",6],["vec",3]]]],[11,"size","","Get the size of this header as it would be encoded.",3,[[],["usize",15]]],[11,"from","calypso_filety::ccff::hl","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","calypso_filety::ccff::ll","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"clone","calypso_filety::ccff::hl","",0,[[],["containerfile",3]]],[11,"clone","","",1,[[],["section",3]]],[11,"clone","calypso_filety::ccff::ll","",2,[[],["ccffheader",3]]],[11,"clone","","",3,[[],["ccffsectionheader",3]]],[11,"default","calypso_filety::ccff::hl","",0,[[],["containerfile",3]]],[11,"default","","",1,[[],["section",3]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","calypso_filety::ccff::ll","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"serialize","","",2,[[],["result",4]]],[11,"serialize","","",3,[[],["result",4]]],[11,"deserialize","","",2,[[],["result",4]]],[11,"deserialize","","",3,[[],["result",4]]]],"p":[[3,"ContainerFile"],[3,"Section"],[3,"CcffHeader"],[3,"CcffSectionHeader"]]},\
"calypso_opt":{"doc":"","i":[],"p":[]},\
"calypso_parsing":{"doc":"","i":[[0,"lexer","calypso_parsing","",null,null],[0,"types","calypso_parsing::lexer","",null,null],[4,"TokenType","calypso_parsing::lexer::types","Types of Calypso tokens",null,null],[13,"Lt","","<code><</code>",0,null],[13,"LtEq","","<code><=</code>",0,null],[13,"BangEq","","<code>!=</code>",0,null],[13,"EqEq","","<code>==</code>",0,null],[13,"Gt","","<code>></code>",0,null],[13,"GtEq","","<code>>=</code>",0,null],[13,"PipePipe","","<code>||</code>",0,null],[13,"AndAnd","","<code>&&</code>",0,null],[13,"Bang","","<code>!</code>",0,null],[13,"Plus","","<code>+</code>",0,null],[13,"PlusEq","","<code>+=</code>",0,null],[13,"Minus","","<code>-</code>",0,null],[13,"MinusEq","","<code>-=</code>",0,null],[13,"Star","","<code>*</code>",0,null],[13,"StarEq","","<code>*=</code>",0,null],[13,"Slash","","<code>/</code>",0,null],[13,"SlashEq","","<code>/=</code>",0,null],[13,"StarStar","","<code>**</code>",0,null],[13,"StarStarEq","","<code>**=</code>",0,null],[13,"Percent","","<code>%</code>",0,null],[13,"PercentEq","","<code>%=</code>",0,null],[13,"DotDot","","<code>..</code>",0,null],[13,"DotDotEq","","<code>..=</code>",0,null],[13,"LtLt","","<code><<</code>",0,null],[13,"LtLtEq","","<code><<=</code>",0,null],[13,"GtGt","","<code>>></code>",0,null],[13,"GtGtEq","","<code>>>=</code>",0,null],[13,"Pipe","","<code>|</code>",0,null],[13,"PipeEq","","<code>|=</code>",0,null],[13,"And","","<code>&</code>",0,null],[13,"AndEq","","<code>&=</code>",0,null],[13,"Caret","","<code>^</code>",0,null],[13,"CaretEq","","<code>^=</code>",0,null],[13,"Tilde","","<code>~</code>",0,null],[13,"TildeEq","","<code>~=</code>",0,null],[13,"Eq","","<code>=</code>",0,null],[13,"Keyword","","Keywords",0,null],[13,"Eof","","End of file",0,null],[13,"Ws","","Whitespace, including newlines. This token just spans the …",0,null],[13,"Unexpected","","Unexpected characters consumed by synchronization. These …",0,null],[13,"LParen","","<code>(</code>",0,null],[13,"RParen","","<code>)</code>",0,null],[13,"LBrace","","<code>{</code>",0,null],[13,"RBrace","","<code>}</code>",0,null],[13,"LBracket","","<code>[</code>",0,null],[13,"RBracket","","<code>]</code>",0,null],[13,"Comma","","<code>,</code>",0,null],[13,"Semi","","<code>;</code>",0,null],[13,"Dot","","<code>.</code>",0,null],[13,"Under","","<code>_</code>",0,null],[13,"Colon","","<code>:</code>",0,null],[13,"Arrow","","<code>-></code>",0,null],[13,"PipeGt","","<code>|></code>",0,null],[13,"Hash","","<code>#</code>",0,null],[13,"HashBang","","<code>#!</code>",0,null],[13,"Ident","","Identifiers, excluding keywords.",0,null],[13,"SintLiteral","","Signed integer literal",0,null],[13,"UintLiteral","","Unsigned integer literal",0,null],[13,"FloatLiteral","","Float literal",0,null],[13,"StringLiteral","","String literal",0,null],[13,"CharLiteral","","Character literal",0,null],[4,"Keyword","","",null,null],[13,"Is","","<code>is</code>",1,null],[13,"Isa","","<code>isa</code>",1,null],[13,"BoolTy","","<code>bool</code>",1,null],[13,"SintTy","","<code>sint</code>",1,null],[13,"UintTy","","<code>uint</code>",1,null],[13,"FloatTy","","<code>float</code>",1,null],[13,"StringTy","","<code>string</code>",1,null],[13,"CharTy","","<code>char</code>",1,null],[13,"TupleTy","","<code>tuple</code>",1,null],[13,"ArrayTy","","<code>array</code>",1,null],[13,"False","","<code>false</code>",1,null],[13,"True","","<code>true</code>",1,null],[13,"If","","<code>if</code>",1,null],[13,"Else","","<code>else</code>",1,null],[13,"For","","<code>for</code>",1,null],[13,"In","","<code>in</code>",1,null],[13,"Loop","","<code>loop</code>",1,null],[13,"While","","<code>wile</code>",1,null],[13,"Case","","<code>case</code>",1,null],[13,"Cond","","<code>cond</code>",1,null],[13,"Ret","","<code>ret</code>",1,null],[13,"Break","","<code>break</code>",1,null],[13,"Fn","","<code>fn</code>",1,null],[13,"Extern","","<code>extern</code>",1,null],[13,"Mod","","<code>mod</code>",1,null],[13,"Use","","<code>use</code>",1,null],[13,"Import","","<code>import</code>",1,null],[13,"Pub","","<code>pub</code>",1,null],[13,"Let","","<code>let</code>",1,null],[13,"Mut","","<code>mut</code>",1,null],[13,"Undef","","<code>undef</code>",1,null],[13,"Null","","<code>null</code>",1,null],[13,"Del","","<code>del</code>",1,null],[13,"As","","<code>as</code>",1,null],[13,"Panic","","<code>panic</code>",1,null],[4,"Radix","","Number radixes.",null,null],[13,"Decimal","","No prefix",2,null],[13,"Binary","","<code>0b</code>",2,null],[13,"Octal","","<code>0o</code>",2,null],[13,"Hexadecimal","","<code>0x</code>",2,null],[0,"helpers","calypso_parsing::lexer","",null,null],[7,"WHITESPACE","calypso_parsing::lexer::helpers","",null,null],[5,"is_valid_for_char_literal","","",null,[[["spanned",3]],["bool",15]]],[5,"is_whitespace","","",null,[[["spanned",3]],["bool",15]]],[5,"is_whitespace_ch","","",null,[[["char",15]],["bool",15]]],[5,"is_ident_start","","",null,[[["spanned",3]],["bool",15]]],[5,"is_ident_continue","","",null,[[["spanned",3]],["bool",15]]],[5,"is_ident_end","","",null,[[["spanned",3]],["bool",15]]],[0,"ident_kw","calypso_parsing::lexer","",null,null],[3,"KEYWORD_TRIE","calypso_parsing::lexer::ident_kw","",null,null],[12,"__private_field","","",3,null],[0,"lit","calypso_parsing::lexer","",null,null],[0,"scan","","",null,null],[0,"ws","","",null,null],[3,"KEYWORD_TRIE","","",null,null],[12,"__private_field","","",3,null],[6,"Token","","",null,null],[6,"Lexeme","","",null,null],[3,"Lexer","","",null,null],[12,"stream","","",4,null],[12,"source_id","","",4,null],[12,"files","","",4,null],[12,"start","","",4,null],[12,"grcx","","",4,null],[11,"new","","",4,[[["usize",15],["refcell",3],["rc",3],["str",15],["filemgr",6]]]],[11,"current_to_start","","Set the <code>start</code> span to the span of the next character or …",4,[[]]],[11,"set_start","","",4,[[["span",3]]]],[11,"current","","Get the span of the next character or the empty span of …",4,[[],["span",3]]],[11,"new_span","","",4,[[],["span",3]]],[11,"new_token","","",4,[[["tokentype",4]],["token",6]]],[0,"pretty","calypso_parsing","",null,null],[0,"lexer","calypso_parsing::pretty","",null,null],[3,"Printer","","",null,null],[12,"file_id","","",5,null],[12,"fmgr","","",5,null],[11,"new","","",5,[[["usize",15],["filemgr",6]]]],[11,"from","calypso_parsing::lexer::types","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","calypso_parsing::lexer::ident_kw","",3,[[]]],[11,"into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","calypso_parsing::lexer","",4,[[]]],[11,"into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","calypso_parsing::pretty","",5,[[]]],[11,"into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"clone","calypso_parsing::lexer::types","",0,[[],["tokentype",4]]],[11,"clone","","",1,[[],["keyword",4]]],[11,"clone","","",2,[[],["radix",4]]],[11,"eq","","",0,[[["tokentype",4]],["bool",15]]],[11,"ne","","",0,[[["tokentype",4]],["bool",15]]],[11,"eq","","",1,[[["keyword",4]],["bool",15]]],[11,"eq","","",2,[[["radix",4]],["bool",15]]],[11,"deref","calypso_parsing::lexer::ident_kw","",3,[[],["trie",3]]],[11,"deref","calypso_parsing::lexer","",4,[[]]],[11,"deref_mut","","",4,[[]]],[11,"fmt","calypso_parsing::lexer::types","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","calypso_parsing::lexer","",4,[[["formatter",3]],["result",6]]],[11,"hash","calypso_parsing::lexer::types","",0,[[]]],[11,"hash","","",1,[[]]],[11,"hash","","",2,[[]]],[11,"initialize","calypso_parsing::lexer::ident_kw","",3,[[]]],[11,"handle_identifier","calypso_parsing::lexer","",4,[[],["token",6]]],[11,"handle_escape_character","","",4,[[],[["calresult",6],["bool",15]]]],[11,"handle_hex_escape","","",4,[[],["calresult",6]]],[11,"handle_unicode_escape","","",4,[[],["calresult",6]]],[11,"handle_unicode_escape_internal","","",4,[[],[["usize",15],["calresult",6]]]],[11,"handle_char_literal","","",4,[[],[["calresult",6],["token",6]]]],[11,"handle_string_literal","","",4,[[],[["calresult",6],["token",6]]]],[11,"scan","","Scan a single token.",4,[[],[["calresult",6],["token",6]]]],[11,"handle_whitespace","","",4,[[],[["option",4],["calresult",6]]]],[11,"handle_comment","","",4,[[],["bool",15]]],[11,"handle_multiline_comment","","",4,[[],[["calresult",6],["bool",15]]]],[11,"handle_dangling_comment_ends","","",4,[[],["calresult",6]]],[11,"print_token","calypso_parsing::pretty","Print a token",5,[[["token",6]],[["calresult",6],["string",3]]]]],"p":[[4,"TokenType"],[4,"Keyword"],[4,"Radix"],[3,"KEYWORD_TRIE"],[3,"Lexer"],[3,"Printer"]]},\
"calypso_repl":{"doc":"","i":[[3,"Repl","calypso_repl","A struct for doing REPL-like activities. This does not …",null,null],[12,"eval","","A closure that evaluates the input and returns something …",0,null],[12,"cmds","","Meta-command definitions. This is a <code>Vec</code> as you may want …",0,null],[12,"cache","","A HashMap containing references to the commands. This is …",0,null],[12,"editor","","The Rustyline context",0,null],[12,"ctx","","The context",0,null],[12,"prefix","","Prefix for commands. Default: <code>:</code>",0,null],[12,"cmd_regex","","Regex for commands",0,null],[11,"new","","",0,[[["eval",6]]]],[11,"prefix","","",0,[[["string",3]]]],[11,"commands","","Extend the commands vector",0,[[["vec",3],["arc",3]]]],[11,"command","","Add a command",0,[[["command",3]]]],[11,"run","","Run the REPL.",0,[[["str",15]],[["result",4],["readlineerror",4]]]],[11,"cache_command","","",0,[[["arc",3]]]],[6,"Eval","","A closure that evaluates some input with some context …",null,null],[3,"Command","","",null,null],[12,"name","","The command\'s name",1,null],[12,"description","","The description of the command",1,null],[12,"help","","The help description of the command",1,null],[12,"aliases","","Aliases for this command",1,null],[12,"eval","","A closure that evaluates the command\'s input (excluding …",1,null],[11,"new","","",1,[[["string",3],["eval",6]]]],[11,"aliases","","Extend the aliases vector",1,[[["vec",3],["string",3]]]],[11,"alias","","Add an alias",1,[[["string",3]]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]]],"p":[[3,"Repl"],[3,"Command"]]},\
"calypso_util":{"doc":"","i":[],"p":[]},\
"odysseus":{"doc":"","i":[[0,"context","odysseus","",null,null],[3,"Context","odysseus::context","",null,null],[12,"modules","","",0,null],[11,"new","","",0,[[]]],[11,"module","","",0,[[["str",15]],["entry",3]]],[0,"module","odysseus","",null,null],[3,"Module","odysseus::module","",null,null],[12,"name","","",1,null],[12,"finished","","",1,null],[11,"new","","",1,[[["string",3]]]],[3,"Entry","","",null,null],[12,"ctx","","",2,null],[12,"name","","",2,null],[11,"get","","",2,[[],["module",3]]],[11,"enter","","",2,[[]]],[11,"build","","",2,[[],["module",3]]],[3,"Builder","","",null,null],[12,"module","","",3,null],[11,"new","","",3,[[["module",3]]]],[11,"from","odysseus::context","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","odysseus::module","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"clone","odysseus::context","",0,[[],["context",3]]],[11,"clone","odysseus::module","",1,[[],["module",3]]],[11,"default","odysseus::context","",0,[[]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","odysseus::module","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]]],"p":[[3,"Context"],[3,"Module"],[3,"Entry"],[3,"Builder"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);