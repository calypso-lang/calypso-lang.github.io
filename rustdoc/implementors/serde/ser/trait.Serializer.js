(function() {var implementors = {};
implementors["bincode"] = [{"text":"impl&lt;'a, W:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>, O:&nbsp;<a class=\"trait\" href=\"bincode/config/trait.Options.html\" title=\"trait bincode::config::Options\">Options</a>&gt; <a class=\"trait\" href=\"serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a> for &amp;'a mut <a class=\"struct\" href=\"bincode/struct.Serializer.html\" title=\"struct bincode::Serializer\">Serializer</a>&lt;W, O&gt;","synthetic":false,"types":["bincode::ser::Serializer"]}];
implementors["serde_json"] = [{"text":"impl&lt;'a, W, F&gt; <a class=\"trait\" href=\"serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a> for &amp;'a mut <a class=\"struct\" href=\"serde_json/struct.Serializer.html\" title=\"struct serde_json::Serializer\">Serializer</a>&lt;W, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"serde_json/ser/trait.Formatter.html\" title=\"trait serde_json::ser::Formatter\">Formatter</a>,&nbsp;</span>","synthetic":false,"types":["serde_json::ser::Serializer"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a> for <a class=\"struct\" href=\"serde_json/value/struct.Serializer.html\" title=\"struct serde_json::value::Serializer\">Serializer</a>","synthetic":false,"types":["serde_json::value::ser::Serializer"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()