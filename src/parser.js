function parseSqlSyntax(query) {
    switch (query) {
        case ('[/][*](.|\n)*?[*][/]'):
            /* skip comments */
            break;

        case ('[-][-]\s.*\n'):
            /* skip sql comments */
            break;

        case ('[#]\s.*\n'):
            /* skip sql comments */
            break;

        case ('\s+'):
            /* skip whitespace */
            break;

        case ('[$][{](.*?)[}]'):
            return 'PLACE_HOLDER'
            break;
        case ('[`][a-zA-Z_\u4e00-\u9fa5][a-zA-Z0-9_\u4e00-\u9fa5]*[`]'):
            return 'IDENTIFIER'
            break;
        case ('[\w]+[\u4e00-\u9fa5]+[0-9a-zA-Z_\u4e00-\u9fa5]*'):
            return 'IDENTIFIER'
            break;
        case ('[\u4e00-\u9fa5][0-9a-zA-Z_\u4e00-\u9fa5]*'):
            return 'IDENTIFIER'
            break;
        case ('SELECT'):
            return 'SELECT'
            break;
        case ('ALL'):
            return 'ALL'
            break;
        case ('ANY'):
            return 'ANY'
            break;
        case ('DISTINCT'):
            return 'DISTINCT'
            break;
        case ('DISTINCTROW'):
            return 'DISTINCTROW'
            break;
        case ('HIGH_PRIORITY'):
            return 'HIGH_PRIORITY'
            break;
        case ('MAX_STATEMENT_TIME'):
            return 'MAX_STATEMENT_TIME'
            break;
        case ('STRAIGHT_JOIN'):
            return 'STRAIGHT_JOIN'
            break;
        case ('SQL_SMALL_RESULT'):
            return 'SQL_SMALL_RESULT'
            break;
        case ('SQL_BIG_RESULT'):
            return 'SQL_BIG_RESULT'
            break;
        case ('SQL_BUFFER_RESULT'):
            return 'SQL_BUFFER_RESULT'
            break;
        case ('SQL_CACHE'):
            return 'SQL_CACHE'
            break;
        case ('SQL_NO_CACHE'):
            return 'SQL_NO_CACHE'
            break;
        case ('SQL_CALC_FOUND_ROWS'):
            return 'SQL_CALC_FOUND_ROWS'
            break;
        case ('([a-zA-Z_\u4e00-\u9fa5][a-zA-Z0-9_\u4e00-\u9fa5]*\.){1,2}\*'):
            return 'SELECT_EXPR_STAR'
            break;
        case ('AS'):
            return 'AS'
            break;
        case ('TRUE'):
            return 'TRUE'
            break;
        case ('FALSE'):
            return 'FALSE'
            break;
        case ('NULL'):
            return 'NULL'
            break;
        case ('COLLATE'):
            return 'COLLATE'
            break;
        case ('BINARY'):
            return 'BINARY'
            break;
        case ('ROW'):
            return 'ROW'
            break;
        case ('EXISTS'):
            return 'EXISTS'
            break;
        case ('CASE'):
            return 'CASE'
            break;
        case ('WHEN'):
            return 'WHEN'
            break;
        case ('THEN'):
            return 'THEN'
            break;
        case ('ELSE'):
            return 'ELSE'
            break;
        case ('END'):
            return 'END'
            break;
        case ('DIV'):
            return 'DIV'
            break;
        case ('MOD'):
            return 'MOD'
            break;
        case ('NOT'):
            return 'NOT'
            break;
        case ('BETWEEN'):
            return 'BETWEEN'
            break;
        case ('IN'):
            return 'IN'
            break;
        case ('SOUNDS'):
            return 'SOUNDS'
            break;
        case ('LIKE'):
            return 'LIKE'
            break;
        case ('ESCAPE'):
            return 'ESCAPE'
            break;
        case ('REGEXP'):
            return 'REGEXP'
            break;
        case ('IS'):
            return 'IS'
            break;
        case ('UNKNOWN'):
            return 'UNKNOWN'
            break;
        case ('AND'):
            return 'AND'
            break;
        case ('OR'):
            return 'OR'
            break;
        case ('XOR'):
            return 'XOR'
            break;
        case ('FROM'):
            return 'FROM'
            break;
        case ('PARTITION'):
            return 'PARTITION'
            break;
        case ('USE'):
            return 'USE'
            break;
        case ('INDEX'):
            return 'INDEX'
            break;
        case ('KEY'):
            return 'KEY'
            break;
        case ('FOR'):
            return 'FOR'
            break;
        case ('JOIN'):
            return 'JOIN'
            break;
        case ('ORDER BY'):
            return 'ORDER_BY'
            break;
        case ('GROUP BY'):
            return 'GROUP_BY'
            break;
        case ('IGNORE'):
            return 'IGNORE'
            break;
        case ('FORCE'):
            return 'FORCE'
            break;
        case ('INNER'):
            return 'INNER'
            break;
        case ('CROSS'):
            return 'CROSS'
            break;
        case ('ON'):
            return 'ON'
            break;
        case ('USING'):
            return 'USING'
            break;
        case ('LEFT'):
            return 'LEFT'
            break;
        case ('RIGHT'):
            return 'RIGHT'
            break;
        case ('OUTER'):
            return 'OUTER'
            break;
        case ('NATURAL'):
            return 'NATURAL'
            break;
        case ('WHERE'):
            return 'WHERE'
            break;
        case ('ASC'):
            return 'ASC'
            break;
        case ('DESC'):
            return 'DESC'
            break;
        case ('WITH'):
            return 'WITH'
            break;
        case ('ROLLUP'):
            return 'ROLLUP'
            break;
        case ('HAVING'):
            return 'HAVING'
            break;
        case ('OFFSET'):
            return 'OFFSET'
            break;
        case ('PROCEDURE'):
            return 'PROCEDURE'
            break;
        case ('UPDATE'):
            return 'UPDATE'
            break;
        case ('LOCK'):
            return 'LOCK'
            break;
        case ('SHARE'):
            return 'SHARE'
            break;
        case ('MODE'):
            return 'MODE'
            break;
        case ('OJ'):
            return 'OJ'
            break;
        case ('LIMIT'):
            return 'LIMIT'
            break;
        case ('UNION'):
            return 'UNION'
            break;

        case (","):
            return ','
            break;
        case ("="):
            return '='
            break;
        case ("("):
            return '('
            break;
        case (")"):
            return ')'
            break;
        case ("~"):
            return '~'
            break;
        case ("!="):
            return '!='
            break;
        case ("!"):
            return '!'
            break;
        case ("|"):
            return '|'
            break;
        case ("&"):
            return '&'
            break;
        case ("+"):
            return '+'
            break;
        case ("-"):
            return '-'
            break;
        case ("*"):
            return '*'
            break;
        case ("/"):
            return '/'
            break;
        case ("%"):
            return '%'
            break;
        case ("^"):
            return '^'
            break;
        case (">>"):
            return '>>'
            break;
        case (">="):
            return '>='
            break;
        case (">"):
            return '>'
            break;
        case ("<<"):
            return '<<'
            break;
        case ("<=>"):
            return '<=>'
            break;
        case ("<="):
            return '<='
            break;
        case ("<>"):
            return '<>'
            break;
        case ("<"):
            return '<'
            break;
        case ("{"):
            return '{'
            break;
        case ("}"):
            return '}'
            break;
        case (";"):
            return ';'
            break;

        case ("['](\\.|[^'])*[']"): return 'STRING'
        case ('["](\\.|[^"])*["]'): return 'STRING'
        case ("[0][x][0-9a-fA-F]+"): return 'HEX_NUMERIC'
        case ("[-]?[0-9]+(\.[0-9]+)?"): return 'NUMERIC'
        case ("[-]?[0-9]+(\.[0-9]+)?[eE][-][0-9]+(\.[0-9]+)?"): return 'EXPONENT_NUMERIC'

        case ('[a-zA-Z_\u4e00-\u9fa5][a-zA-Z0-9_\u4e00-\u9fa5]*'): return 'IDENTIFIER'
        case ('\.'): return 'DOT'
        case ('["][a-zA-Z_\u4e00-\u9fa5][a-zA-Z0-9_\u4e00-\u9fa5]*["]'): return 'STRING'
        case ("['][a-zA-Z_\u4e00-\u9fa5][a-zA-Z0-9_\u4e00-\u9fa5]*[']"): return 'STRING'
        case ('([`])(?:(?=(\\?))\2.)*?\1'): return 'IDENTIFIER'

        case ('<<EOF>>'): return 'EOF'
    }
}