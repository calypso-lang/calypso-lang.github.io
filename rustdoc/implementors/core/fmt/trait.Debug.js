(function() {var implementors = {};
implementors["calypso_base"] = [{"text":"impl Debug for Span","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Debug&gt; Debug for Spanned&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Debug,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'s&gt; Debug for StringStream&lt;'s&gt;","synthetic":false,"types":[]}];
implementors["calypso_diagnostic"] = [{"text":"impl Debug for Diagnostic","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Debug for Builder&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Debug for Error","synthetic":false,"types":[]},{"text":"impl Debug for ErrorKind","synthetic":false,"types":[]},{"text":"impl Debug for GlobalReportingCtxt","synthetic":false,"types":[]}];
implementors["calypso_parsing"] = [{"text":"impl Debug for TokenType","synthetic":false,"types":[]},{"text":"impl Debug for Keyword","synthetic":false,"types":[]},{"text":"impl Debug for Radix","synthetic":false,"types":[]},{"text":"impl&lt;'lex&gt; Debug for Lexer&lt;'lex&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()