(function() {var implementors = {};
implementors["calypso_base"] = [{"text":"impl From&lt;Span&gt; for Range&lt;usize&gt;","synthetic":false,"types":[]},{"text":"impl From&lt;Range&lt;usize&gt;&gt; for Span","synthetic":false,"types":[]},{"text":"impl From&lt;(usize, char)&gt; for Spanned&lt;char&gt;","synthetic":false,"types":[]}];
implementors["calypso_diagnostic"] = [{"text":"impl From&lt;Diagnostic&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;FromUtf8Error&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;ErrorKind&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for ErrorKind","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a str&gt; for ErrorKind","synthetic":false,"types":[]},{"text":"impl From&lt;String&gt; for ErrorKind","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a str&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;String&gt; for Error","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()