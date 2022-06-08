initSidebarItems({"derive":[["Logos",""]],"enum":[["Filter","Type that can be returned from a callback, either producing a field for a token, or skipping it."],["FilterResult","Type that can be returned from a callback, either producing a field for a token, skipping it, or emitting an error."]],"fn":[["skip","Predefined callback that will inform the `Lexer` to skip a definition."]],"mod":[["source","This module contains a bunch of traits necessary for processing byte strings."]],"struct":[["Lexer","`Lexer` is the main struct of the crate that allows you to read through a `Source` and produce tokens for enums implementing the `Logos` trait."],["Skip","Type that can be returned from a callback, informing the `Lexer`, to skip current token match. See also `logos::skip`."],["SpannedIter","Iterator that pairs tokens with their position in the source."]],"trait":[["Logos","Trait implemented for an enum representing all tokens. You should never have to implement it manually, use the `#[derive(Logos)]` attribute on your enum."]],"type":[["Span","Byte range in the source."]]});