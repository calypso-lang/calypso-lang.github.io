var searchIndex = JSON.parse('{\
"calypso":{"doc":"","i":[[0,"commands","calypso","",null,null],[0,"explain","calypso::commands","",null,null],[5,"explain","calypso::commands::explain","",null,[[["argmatches",3]]]],[0,"internal","calypso::commands","",null,null],[5,"internal","calypso::commands::internal","",null,[[["argmatches",3]]]],[5,"lexer","","",null,[[["argmatches",3]]]],[5,"lexer_stdin","","",null,[[["argmatches",3]]]],[5,"lexer_stdin_repl","","",null,[[]]],[0,"messages","calypso","",null,null],[5,"error","calypso::messages","",null,[[["display",8]]]],[5,"_error_category","","",null,[[["display",8]]]],[5,"info","","",null,[[["display",8]]]],[5,"note","","",null,[[["display",8]]]],[5,"_warn","","",null,[[["display",8]]]],[5,"error_chained","","",null,[[]]],[5,"main","calypso","",null,[[]]]],"p":[]},\
"calypso_base":{"doc":"Base types and utilities for Calypso that don\'t require …","i":[[0,"span","calypso_base","<code>Span</code> and <code>Spanned</code> types.",null,null],[3,"Span","calypso_base::span","The location in a slice in which some object spans.",null,null],[11,"new","","",0,[[]]],[11,"new_shrunk","","",0,[[]]],[11,"new_dummy","","Create a dummy span (that has a span equivalent to the …",0,[[]]],[11,"lo","","",0,[[]]],[11,"with_lo","","",0,[[]]],[11,"hi","","",0,[[]]],[11,"with_hi","","",0,[[]]],[11,"is_dummy","","Returns <code>true</code>  if this is a dummy span",0,[[]]],[11,"shrink_to_lo","","Returns a new span representing an empty span at the …",0,[[],["span",3]]],[11,"shrink_to_hi","","Returns a new span representing an empty span at the end …",0,[[],["span",3]]],[11,"is_empty","","Returns true if if <code>hi == lo</code>",0,[[]]],[11,"substitute_dummy","","Returns <code>self</code> if <code>self</code> is not a dummy span, and <code>other</code> …",0,[[["span",3]],["span",3]]],[11,"contains","","Returns <code>true</code> if <code>self</code> fully encloses <code>other</code>.",0,[[["span",3]]]],[11,"overlaps","","Returns <code>true</code> if <code>self</code> touches <code>other</code>.",0,[[["span",3]]]],[11,"to","","Returns a <code>Span</code> that would enclose both <code>self</code> and <code>end</code>.",0,[[["span",3]],["span",3]]],[11,"between","","Returns a <code>Span</code> between the end of <code>self</code> to the beginning …",0,[[["span",3]],["span",3]]],[11,"until","","Returns a <code>Span</code> from the beginning of <code>self</code> until the …",0,[[["span",3]],["span",3]]],[11,"add_hi","","",0,[[],["span",3]]],[3,"Spanned","","An object that\'s associated with a <code>Span</code>",null,null],[11,"new","","Associate a span with a value.",1,[[["span",3]]]],[11,"value","","Get a reference to the value.",1,[[]]],[11,"value_owned","","Get the owned value.",1,[[]]],[11,"span","","Get the value\'s <code>Span</code>",1,[[],["span",3]]],[0,"streams","calypso_base","Utilities for handling streams of data",null,null],[3,"StringStream","calypso_base::streams","A stream emitting tuples of byte locations and characters …",null,null],[3,"Streamed","","A generic stream.",null,null],[8,"Stream","","A trait for streamed data. For a stream, <code>EOF</code> means either …",null,null],[10,"is_at_end","","This stream can no longer produce elements if this …",2,[[]]],[10,"peek","","Peek at the value one element ahead, without consuming it.",2,[[],["option",4]]],[10,"peek2","","Peek at the value two element ahead, without consuming …",2,[[],["option",4]]],[10,"peek3","","Peek at the value three element ahead, without consuming …",2,[[],["option",4]]],[10,"prev","","Peek at the value one element behind, without moving …",2,[[],["option",4]]],[11,"next_if","","Consume the next element if the condition is true.",2,[[],["option",4]]],[11,"next_if_eq","","Consume the next element if it is equal to <code>expected</code>.",2,[[],["option",4]]],[11,"gorge_while","","Keep consuming elements while the condition is true and …",2,[[]]],[11,"gorge_while_eq","","Keep consuming elements while the element is equal to …",2,[[]]],[11,"peek_eq","","Returns <code>Some(true)</code> if the value one element ahead is …",2,[[],["option",4]]],[11,"peek2_eq","","Returns <code>Some(true)</code> if the value two elements ahead is …",2,[[],["option",4]]],[11,"peek3_eq","","Returns <code>Some(true)</code> if the value three elements ahead is …",2,[[],["option",4]]],[11,"prev_eq","","Returns <code>Some(true)</code> if the value one element behind is …",2,[[],["option",4]]],[11,"peek_cond","","Returns the value of the condition, wrapped in an <code>Option</code>. …",2,[[],["option",4]]],[11,"peek2_cond","","Returns the value of the condition, wrapped in an <code>Option</code>. …",2,[[],["option",4]]],[11,"peek3_cond","","Returns the value of the condition, wrapped in an <code>Option</code>. …",2,[[],["option",4]]],[11,"prev_cond","","Returns the value of the condition, wrapped in an <code>Option</code>. …",2,[[],["option",4]]],[14,"static_list","calypso_base","Initialize a <code>static</code> list with the values specified.",null,null],[14,"init_trie","","Initialize a <code>radix_trie::Trie</code> with specified values using …",null,null],[11,"from","calypso_base::span","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","calypso_base::streams","",3,[[]]],[11,"into","","",3,[[]]],[11,"into_iter","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"into_iter","","",4,[[]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"is_at_end","","",3,[[]]],[11,"peek","","",3,[[],["option",4]]],[11,"peek2","","",3,[[],["option",4]]],[11,"peek3","","",3,[[],["option",4]]],[11,"prev","","",3,[[],["option",4]]],[11,"is_at_end","","",4,[[]]],[11,"peek","","",4,[[],["option",4]]],[11,"peek2","","",4,[[],["option",4]]],[11,"peek3","","",4,[[],["option",4]]],[11,"prev","","",4,[[],["option",4]]],[11,"from","calypso_base::span","",0,[[["range",3]]]],[11,"from","","",1,[[],["spanned",3]]],[11,"next","calypso_base::streams","",3,[[],["option",4]]],[11,"size_hint","","",3,[[]]],[11,"next","","",4,[[],["option",4]]],[11,"size_hint","","",4,[[]]],[11,"clone","calypso_base::span","",0,[[],["span",3]]],[11,"clone","","",1,[[],["spanned",3]]],[11,"clone","calypso_base::streams","",4,[[],["stringstream",3]]],[11,"default","calypso_base::span","",0,[[]]],[11,"cmp","","",0,[[["span",3]],["ordering",4]]],[11,"eq","","",0,[[["span",3]]]],[11,"ne","","",0,[[["span",3]]]],[11,"eq","","",1,[[["spanned",3]]]],[11,"ne","","",1,[[["spanned",3]]]],[11,"eq","","",1,[[]]],[11,"partial_cmp","","",0,[[["span",3]],[["ordering",4],["option",4]]]],[11,"lt","","",0,[[["span",3]]]],[11,"le","","",0,[[["span",3]]]],[11,"gt","","",0,[[["span",3]]]],[11,"ge","","",0,[[["span",3]]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","calypso_base::streams","",4,[[["formatter",3]],["result",6]]],[11,"index","","",3,[[]]],[11,"index","","",4,[[]]],[11,"hash","calypso_base::span","",0,[[]]],[11,"hash","","",1,[[]]],[11,"new","calypso_base::streams","",3,[[]]],[11,"new","","",4,[[]]],[11,"slice","","",4,[[]]]],"p":[[3,"Span"],[3,"Spanned"],[8,"Stream"],[3,"Streamed"],[3,"StringStream"]]},\
"calypso_diagnostic":{"doc":"","i":[[0,"diagnostic","calypso_diagnostic","",null,null],[4,"LabelStyle","calypso_diagnostic::diagnostic","",null,null],[13,"Primary","","Labels that describe the primary cause of a diagnostic.",0,null],[13,"Secondary","","Labels that provide additional context for a diagnostic.",0,null],[4,"Severity","","A severity level for diagnostic messages.",null,null],[13,"Bug","","An unexpected bug.",1,null],[13,"Error","","An error.",1,null],[13,"Warning","","A warning.",1,null],[13,"Note","","A note.",1,null],[13,"Help","","A help message.",1,null],[3,"Diagnostic","","",null,null],[3,"Builder","","",null,null],[11,"new","","",2,[[["severity",4],["filemgr",6]]]],[11,"code","","",2,[[]]],[11,"message","","",2,[[]]],[11,"label","","",2,[[["labelstyle",4],["span",3]]]],[11,"note","","",2,[[]]],[11,"build","","Build the diagnostic. This pre-renders the diagnostic.",2,[[],[["calresult",6],["diagnostic",3]]]],[11,"reason","","",3,[[]]],[11,"code","","",3,[[],["option",4]]],[11,"rendered","","",3,[[]]],[0,"error","calypso_diagnostic","",null,null],[3,"Error","calypso_diagnostic::error","The Error type.",null,null],[12,"0","","The kind of the error.",4,null],[11,"from_kind","","Constructs an error from a kind, and generates a …",4,[[["errorkind",4]],["error",3]]],[11,"with_chain","","Constructs a chained error from another error and a kind, …",4,[[],["error",3]]],[11,"with_boxed_chain","","Construct a chained error from another boxed error and a …",4,[[["error",8],["box",3]],["error",3]]],[11,"kind","","Returns the kind of the error.",4,[[],["errorkind",4]]],[11,"iter","","Iterates over the error chain.",4,[[],["iter",3]]],[11,"backtrace","","Returns the backtrace associated with this error.",4,[[],[["backtrace",3],["option",4]]]],[11,"chain_err","","Extends the error chain with a new entry.",4,[[],["error",3]]],[11,"description","","A short description of the error. This method is …",4,[[]]],[4,"ErrorKind","","The kind of an error.",null,null],[13,"Io","","",5,null],[13,"FromUtf8","","",5,null],[13,"DiagnosticRendering","","",5,null],[13,"Msg","","A convenient variant for String.",5,null],[13,"Diagnostic","","",5,null],[11,"description","","A string describing the error kind.",5,[[]]],[8,"ResultExt","","Additional methods for <code>Result</code>, for easy interaction with …",null,null],[10,"chain_err","","If the <code>Result</code> is an <code>Err</code> then <code>chain_err</code> evaluates the …",6,[[],[["result",4],["error",3]]]],[6,"Result","","Convenient wrapper around <code>std::Result</code>.",null,null],[0,"report","calypso_diagnostic","",null,null],[3,"GlobalReportingCtxt","calypso_diagnostic::report","",null,null],[11,"new","","",7,[[]]],[11,"report_syncd","","",7,[[["diagnostic",3]]]],[11,"report_non_fatal","","",7,[[["diagnostic",3]]]],[11,"nonfatals","","",7,[[]]],[11,"errors","","",7,[[]]],[0,"types","calypso_diagnostic","",null,null],[3,"DIAGNOSTICS","calypso_diagnostic::types","",null,null],[0,"prelude","calypso_diagnostic","",null,null],[4,"LabelStyle","calypso_diagnostic::prelude","",null,null],[13,"Primary","","Labels that describe the primary cause of a diagnostic.",0,null],[13,"Secondary","","Labels that provide additional context for a diagnostic.",0,null],[8,"ChainedError","","This trait is implemented on all the errors generated by …",null,null],[16,"ErrorKind","","Associated kind type.",8,null],[10,"from_kind","","Constructs an error from a kind, and generates a …",8,[[]]],[10,"with_chain","","Constructs a chained error from another error and a kind, …",8,[[]]],[10,"kind","","Returns the kind of the error.",8,[[]]],[10,"iter","","Iterates over the error chain.",8,[[],["iter",3]]],[10,"backtrace","","Returns the backtrace associated with this error.",8,[[],[["option",4],["backtrace",3]]]],[11,"display_chain","","Returns an object which implements <code>Display</code> for printing …",8,[[],["displaychain",3]]],[10,"chain_err","","Extends the error chain with a new entry.",8,[[]]],[6,"FileMgr","calypso_diagnostic","",null,null],[14,"gen_error","","Generate errors or report synchronized errors.",null,null],[11,"from","calypso_diagnostic::prelude","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","calypso_diagnostic::diagnostic","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"to_string","","",3,[[],["string",3]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","calypso_diagnostic::error","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_string","","",4,[[],["string",3]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"to_string","","",5,[[],["string",3]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","calypso_diagnostic::report","",7,[[]]],[11,"into","","",7,[[]]],[11,"to_owned","","",7,[[]]],[11,"clone_into","","",7,[[]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"from","calypso_diagnostic::types","",9,[[]]],[11,"into","","",9,[[]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"partial_cmp","calypso_diagnostic::diagnostic","",1,[[["severity",4]],[["option",4],["ordering",4]]]],[11,"partial_cmp","calypso_diagnostic::prelude","",0,[[["labelstyle",4]],[["option",4],["ordering",4]]]],[11,"clone","","",0,[[],["labelstyle",4]]],[11,"clone","calypso_diagnostic::diagnostic","",1,[[],["severity",4]]],[11,"eq","calypso_diagnostic::prelude","",0,[[["labelstyle",4]]]],[11,"eq","calypso_diagnostic::diagnostic","",1,[[["severity",4]]]],[11,"fmt","calypso_diagnostic::prelude","",0,[[["formatter",3]],[["result",4],["error",3]]]],[11,"fmt","calypso_diagnostic::diagnostic","",1,[[["formatter",3]],[["result",4],["error",3]]]],[11,"hash","","",1,[[]]],[11,"from","calypso_diagnostic::error","",4,[[["diagnostic",3]]]],[11,"from","","",4,[[["error",3]]]],[11,"from","","",4,[[["fromutf8error",3]]]],[11,"from","","",4,[[["error",4]]]],[11,"from","","",4,[[["errorkind",4]]]],[11,"from","","",5,[[["error",3]]]],[11,"from","","",5,[[]]],[11,"from","","",5,[[["string",3]]]],[11,"from","","",4,[[]]],[11,"from","","",4,[[["string",3]]]],[11,"clone","calypso_diagnostic::diagnostic","",3,[[],["diagnostic",3]]],[11,"clone","","",2,[[],["builder",3]]],[11,"clone","calypso_diagnostic::report","",7,[[],["globalreportingctxt",3]]],[11,"default","","",7,[[],["globalreportingctxt",3]]],[11,"deref","calypso_diagnostic::types","",9,[[],["hashmap",3]]],[11,"fmt","calypso_diagnostic::diagnostic","",3,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","calypso_diagnostic::error","",4,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"fmt","calypso_diagnostic::report","",7,[[["formatter",3]],["result",6]]],[11,"fmt","calypso_diagnostic::diagnostic","",3,[[["formatter",3]],["result",6]]],[11,"fmt","calypso_diagnostic::error","",4,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"description","","",4,[[]]],[11,"source","","",4,[[],[["error",8],["option",4]]]],[11,"new","","",4,[[["errorkind",4],["state",3]],["error",3]]],[11,"from_kind","","",4,[[]]],[11,"with_chain","","",4,[[]]],[11,"kind","","",4,[[]]],[11,"iter","","",4,[[],["iter",3]]],[11,"chain_err","","",4,[[]]],[11,"backtrace","","",4,[[],[["backtrace",3],["option",4]]]],[11,"extract_backtrace","","",4,[[["error",8]],[["internalbacktrace",3],["option",4]]]],[11,"initialize","calypso_diagnostic::types","",9,[[]]]],"p":[[4,"LabelStyle"],[4,"Severity"],[3,"Builder"],[3,"Diagnostic"],[3,"Error"],[4,"ErrorKind"],[8,"ResultExt"],[3,"GlobalReportingCtxt"],[8,"ChainedError"],[3,"DIAGNOSTICS"]]},\
"calypso_parsing":{"doc":"","i":[[0,"lexer","calypso_parsing","",null,null],[0,"types","calypso_parsing::lexer","",null,null],[4,"TokenType","calypso_parsing::lexer::types","Types of Calypso tokens",null,null],[13,"Lt","","<code><</code>",0,null],[13,"LtEq","","<code><=</code>",0,null],[13,"BangEq","","<code>!=</code>",0,null],[13,"EqEq","","<code>==</code>",0,null],[13,"Gt","","<code>></code>",0,null],[13,"GtEq","","<code>>=</code>",0,null],[13,"PipePipe","","<code>||</code>",0,null],[13,"AndAnd","","<code>&&</code>",0,null],[13,"Bang","","<code>!</code>",0,null],[13,"Plus","","<code>+</code>",0,null],[13,"PlusEq","","<code>+=</code>",0,null],[13,"Minus","","<code>-</code>",0,null],[13,"MinusEq","","<code>-=</code>",0,null],[13,"Star","","<code>*</code>",0,null],[13,"StarEq","","<code>*=</code>",0,null],[13,"Slash","","<code>/</code>",0,null],[13,"SlashEq","","<code>/=</code>",0,null],[13,"StarStar","","<code>**</code>",0,null],[13,"StarStarEq","","<code>**=</code>",0,null],[13,"Percent","","<code>%</code>",0,null],[13,"PercentEq","","<code>%=</code>",0,null],[13,"DotDot","","<code>..</code>",0,null],[13,"DotDotEq","","<code>..=</code>",0,null],[13,"LtGt","","<code><></code>",0,null],[13,"LtLt","","<code><<</code>",0,null],[13,"LtLtEq","","<code><<=</code>",0,null],[13,"GtGt","","<code>>></code>",0,null],[13,"GtGtEq","","<code>>>=</code>",0,null],[13,"Pipe","","<code>|</code>",0,null],[13,"PipeEq","","<code>|=</code>",0,null],[13,"And","","<code>&</code>",0,null],[13,"AndEq","","<code>&=</code>",0,null],[13,"Caret","","<code>^</code>",0,null],[13,"CaretEq","","<code>^=</code>",0,null],[13,"Tilde","","<code>~</code>",0,null],[13,"Eq","","<code>=</code>",0,null],[13,"Keyword","","Keywords",0,null],[13,"Eof","","End of file",0,null],[13,"Ws","","Whitespace, including newlines. This token just spans the …",0,null],[13,"Unexpected","","Unexpected characters consumed by synchronization. These …",0,null],[13,"LParen","","<code>(</code>",0,null],[13,"RParen","","<code>)</code>",0,null],[13,"LBrace","","<code>{</code>",0,null],[13,"RBrace","","<code>}</code>",0,null],[13,"LBracket","","<code>[</code>",0,null],[13,"RBracket","","<code>]</code>",0,null],[13,"Comma","","<code>,</code>",0,null],[13,"Semi","","<code>;</code>",0,null],[13,"Dot","","<code>.</code>",0,null],[13,"Under","","<code>_</code>",0,null],[13,"Colon","","<code>:</code>",0,null],[13,"Arrow","","<code>-></code>",0,null],[13,"PipeGt","","<code>|></code>",0,null],[13,"Hash","","<code>#</code>",0,null],[13,"HashBang","","<code>#!</code>",0,null],[13,"Ident","","Identifiers, excluding keywords.",0,null],[13,"SintLiteral","","Signed integer literal",0,null],[13,"UintLiteral","","Unsigned integer literal",0,null],[13,"FloatLiteral","","Float literal",0,null],[13,"StringLiteral","","String literal",0,null],[13,"CharLiteral","","Character literal",0,null],[4,"Keyword","","",null,null],[13,"Is","","<code>is</code>",1,null],[13,"Isa","","<code>isa</code>",1,null],[13,"BoolTy","","<code>bool</code>",1,null],[13,"SintTy","","<code>sint</code>",1,null],[13,"UintTy","","<code>uint</code>",1,null],[13,"FloatTy","","<code>float</code>",1,null],[13,"StringTy","","<code>string</code>",1,null],[13,"CharTy","","<code>char</code>",1,null],[13,"TupleTy","","<code>tuple</code>",1,null],[13,"ArrayTy","","<code>array</code>",1,null],[13,"False","","<code>false</code>",1,null],[13,"True","","<code>true</code>",1,null],[13,"If","","<code>if</code>",1,null],[13,"Else","","<code>else</code>",1,null],[13,"For","","<code>for</code>",1,null],[13,"In","","<code>in</code>",1,null],[13,"Loop","","<code>loop</code>",1,null],[13,"While","","<code>wile</code>",1,null],[13,"Case","","<code>case</code>",1,null],[13,"Cond","","<code>cond</code>",1,null],[13,"Ret","","<code>ret</code>",1,null],[13,"Break","","<code>break</code>",1,null],[13,"Fn","","<code>fn</code>",1,null],[13,"Extern","","<code>extern</code>",1,null],[13,"Mod","","<code>mod</code>",1,null],[13,"Use","","<code>use</code>",1,null],[13,"Import","","<code>import</code>",1,null],[13,"Pub","","<code>pub</code>",1,null],[13,"Let","","<code>let</code>",1,null],[13,"Mut","","<code>mut</code>",1,null],[13,"Undef","","<code>undef</code>",1,null],[13,"Null","","<code>null</code>",1,null],[13,"Del","","<code>del</code>",1,null],[13,"As","","<code>as</code>",1,null],[13,"Panic","","<code>panic</code>",1,null],[4,"Radix","","Number radixes.",null,null],[13,"Decimal","","No prefix",2,null],[13,"Binary","","<code>0b</code>",2,null],[13,"Octal","","<code>0o</code>",2,null],[13,"Hexadecimal","","<code>0x</code>",2,null],[3,"KEYWORD_TRIE","calypso_parsing::lexer","",null,null],[6,"Token","","",null,null],[6,"Lexeme","","",null,null],[3,"Lexer","","",null,null],[11,"new","","",3,[[["refcell",3],["filemgr",6],["rc",3]]]],[11,"from","calypso_parsing::lexer::types","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","calypso_parsing::lexer","",4,[[]]],[11,"into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"clone","calypso_parsing::lexer::types","",0,[[],["tokentype",4]]],[11,"clone","","",1,[[],["keyword",4]]],[11,"clone","","",2,[[],["radix",4]]],[11,"eq","","",0,[[["tokentype",4]]]],[11,"ne","","",0,[[["tokentype",4]]]],[11,"eq","","",1,[[["keyword",4]]]],[11,"eq","","",2,[[["radix",4]]]],[11,"deref","calypso_parsing::lexer","",4,[[],["trie",3]]],[11,"deref","","",3,[[]]],[11,"deref_mut","","",3,[[]]],[11,"fmt","calypso_parsing::lexer::types","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","calypso_parsing::lexer","",3,[[["formatter",3]],["result",6]]],[11,"hash","calypso_parsing::lexer::types","",0,[[]]],[11,"hash","","",1,[[]]],[11,"hash","","",2,[[]]],[11,"initialize","calypso_parsing::lexer","",4,[[]]],[11,"scan","","Scan a single token.",3,[[],[["calresult",6],["token",6]]]]],"p":[[4,"TokenType"],[4,"Keyword"],[4,"Radix"],[3,"Lexer"],[3,"KEYWORD_TRIE"]]},\
"calypso_repl":{"doc":"","i":[[3,"Repl","calypso_repl","A struct for doing REPL-like activities. This does not …",null,null],[11,"new","","",0,[[["eval",6]]]],[11,"prefix","","",0,[[["string",3]]]],[11,"commands","","Extend the commands vector",0,[[["vec",3],["arc",3]]]],[11,"command","","Add a command",0,[[["command",3]]]],[11,"run","","Run the REPL.",0,[[],[["result",4],["readlineerror",4]]]],[6,"Eval","","A closure that evaluates some input with some context …",null,null],[3,"Command","","",null,null],[11,"new","","",1,[[["eval",6],["string",3]]]],[11,"aliases","","Extend the aliases vector",1,[[["vec",3],["string",3]]]],[11,"alias","","Add an alias",1,[[["string",3]]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]]],"p":[[3,"Repl"],[3,"Command"]]},\
"calypso_util":{"doc":"","i":[],"p":[]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);