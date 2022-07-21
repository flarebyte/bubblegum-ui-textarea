(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.');


var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	var initPair = init(result.a);
	var model = initPair.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		var pair = A2(update, msg, model);
		stepper(model = pair.a, viewMetadata);
		_Platform_enqueueEffects(managers, pair.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS
//
// For some reason, tabs can appear in href protocols and it still works.
// So '\tjava\tSCRIPT:alert("!!!")' and 'javascript:alert("!!!")' are the same
// in practice. That is why _VirtualDom_RE_js and _VirtualDom_RE_js_html look
// so freaky.
//
// Pulling the regular expressions out to the top level gives a slight speed
// boost in small benchmarks (4-10%) but hoisting values to reduce allocation
// can be unpredictable in large programs where JIT may have a harder time with
// functions are not fully self-contained. The benefit is more that the js and
// js_html ones are so weird that I prefer to see them near each other.


var _VirtualDom_RE_script = /^script$/i;
var _VirtualDom_RE_on_formAction = /^(on|formAction$)/i;
var _VirtualDom_RE_js = /^\s*j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:/i;
var _VirtualDom_RE_js_html = /^\s*(j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:|d\s*a\s*t\s*a\s*:\s*t\s*e\s*x\s*t\s*\/\s*h\s*t\s*m\s*l\s*(,|;))/i;


function _VirtualDom_noScript(tag)
{
	return _VirtualDom_RE_script.test(tag) ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return _VirtualDom_RE_on_formAction.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return _VirtualDom_RE_js.test(value)
		? /**_UNUSED/''//*//**/'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'//*/
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return _VirtualDom_RE_js_html.test(value)
		? /**_UNUSED/''//*//**/'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'//*/
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlJson(value)
{
	return (typeof _Json_unwrap(value) === 'string' && _VirtualDom_RE_js_html.test(_Json_unwrap(value)))
		? _Json_wrap(
			/**_UNUSED/''//*//**/'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'//*/
		) : value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = $elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = {$: 'EQ'};
var $elm$core$Basics$GT = {$: 'GT'};
var $elm$core$Basics$LT = {$: 'LT'};
var $author$project$Ipsum$ipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mauris dolor, suscipit at nulla a, molestie scelerisque lectus. Nullam quis leo a felis auctor mollis ac vel turpis. Praesent eleifend ut sem et hendrerit. Vivamus sagittis tortor ipsum, eu suscipit lectus accumsan a. Vivamus elit ante, ornare vitae sem at, ornare eleifend nibh. Mauris venenatis nunc sit amet leo aliquam, in ornare quam vehicula. Morbi consequat ante sed felis semper egestas. Donec efficitur suscipit ipsum vitae ultrices. Quisque eget vehicula odio. Aliquam vitae posuere mauris. Nulla ac pulvinar felis. Integer odio libero, vulputate in erat in, tristique cursus erat.';
var $elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var $elm$core$Maybe$Nothing = {$: 'Nothing'};
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$append = _Utils_append;
var $flarebyte$bubblegum_entity$Bubblegum$Entity$Attribute$blankAttribute = {facets: _List_Nil, id: $elm$core$Maybe$Nothing, key: '', values: _List_Nil};
var $elm$core$Basics$add = _Basics_add;
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $elm$core$Basics$neq = _Utils_notEqual;
var $flarebyte$bubblegum_entity$Bubblegum$Entity$Attribute$deleteAttributeByKey = F2(
	function (key, attributes) {
		return A2(
			$elm$core$List$filter,
			function (attr) {
				return !_Utils_eq(attr.key, key);
			},
			attributes);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $flarebyte$bubblegum_entity$Bubblegum$Entity$Attribute$findAttributeByKey = F2(
	function (key, attributes) {
		findAttributeByKey:
		while (true) {
			if (!attributes.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var first = attributes.a;
				var rest = attributes.b;
				if (_Utils_eq(first.key, key)) {
					return $elm$core$Maybe$Just(first);
				} else {
					var $temp$key = key,
						$temp$attributes = rest;
					key = $temp$key;
					attributes = $temp$attributes;
					continue findAttributeByKey;
				}
			}
		}
	});
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $flarebyte$bubblegum_entity$Bubblegum$Entity$Attribute$replaceAttributeByKey = F3(
	function (key, values, attributes) {
		var existingOrNew = A2(
			$elm$core$Maybe$withDefault,
			_Utils_update(
				$flarebyte$bubblegum_entity$Bubblegum$Entity$Attribute$blankAttribute,
				{key: key}),
			A2($flarebyte$bubblegum_entity$Bubblegum$Entity$Attribute$findAttributeByKey, key, attributes));
		return _Utils_ap(
			_List_fromArray(
				[
					_Utils_update(
					existingOrNew,
					{values: values})
				]),
			A2($flarebyte$bubblegum_entity$Bubblegum$Entity$Attribute$deleteAttributeByKey, key, attributes));
	});
var $author$project$Bubblegum$TextArea$Vocabulary$ui_content = 'ui:content';
var $author$project$AppModel$reset = {
	settings: {attributes: _List_Nil},
	state: {
		attributes: A3(
			$flarebyte$bubblegum_entity$Bubblegum$Entity$Attribute$replaceAttributeByKey,
			$author$project$Bubblegum$TextArea$Vocabulary$ui_content,
			_List_fromArray(
				[
					A2(
					$elm$core$String$join,
					'\n',
					_List_fromArray(
						[$author$project$Ipsum$ipsum, $author$project$Ipsum$ipsum, $author$project$Ipsum$ipsum]))
				]),
			_List_Nil)
	},
	userSettings: {attributes: _List_Nil}
};
var $elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var $elm$core$Basics$False = {$: 'False'};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 'Nothing') {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / $elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = {$: 'True'};
var $elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var $elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var $elm$url$Url$Http = {$: 'Http'};
var $elm$url$Url$Https = {$: 'Https'};
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var $elm$core$String$contains = _String_contains;
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$toInt = _String_toInt;
var $elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, ':', str);
			if (!_v0.b) {
				return $elm$core$Maybe$Just(
					A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_v0.b.b) {
					var i = _v0.a;
					var _v1 = $elm$core$String$toInt(
						A2($elm$core$String$dropLeft, i + 1, str));
					if (_v1.$ === 'Nothing') {
						return $elm$core$Maybe$Nothing;
					} else {
						var port_ = _v1;
						return $elm$core$Maybe$Just(
							A6(
								$elm$url$Url$Url,
								protocol,
								A2($elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '/', str);
			if (!_v0.b) {
				return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _v0.a;
				return A5(
					$elm$url$Url$chompBeforePath,
					protocol,
					A2($elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '?', str);
			if (!_v0.b) {
				return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _v0.a;
				return A4(
					$elm$url$Url$chompBeforeQuery,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '#', str);
			if (!_v0.b) {
				return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
			} else {
				var i = _v0.a;
				return A3(
					$elm$url$Url$chompBeforeFragment,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$core$String$startsWith = _String_startsWith;
var $elm$url$Url$fromString = function (str) {
	return A2($elm$core$String$startsWith, 'http://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Http,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Https,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0.a;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(_Utils_Tuple0);
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0.a;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return _Utils_Tuple0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(_Utils_Tuple0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0.a;
		return $elm$core$Task$Perform(
			A2($elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2($elm$core$Task$map, toMessage, task)));
	});
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
var $elm$browser$Browser$sandbox = function (impl) {
	return _Browser_element(
		{
			init: function (_v0) {
				return _Utils_Tuple2(impl.init, $elm$core$Platform$Cmd$none);
			},
			subscriptions: function (_v1) {
				return $elm$core$Platform$Sub$none;
			},
			update: F2(
				function (msg, model) {
					return _Utils_Tuple2(
						A2(impl.update, msg, model),
						$elm$core$Platform$Cmd$none);
				}),
			view: impl.view
		});
};
var $flarebyte$bubblegum_entity$Bubblegum$Entity$SettingsEntity$setAttributes = F2(
	function (attributes, model) {
		return _Utils_update(
			model,
			{attributes: attributes});
	});
var $flarebyte$bubblegum_entity$Bubblegum$Entity$SettingsEntity$asAttributesIn = F2(
	function (b, a) {
		return A2($flarebyte$bubblegum_entity$Bubblegum$Entity$SettingsEntity$setAttributes, a, b);
	});
var $flarebyte$bubblegum_entity$Bubblegum$Entity$StateEntity$setAttributes = F2(
	function (attributes, model) {
		return _Utils_update(
			model,
			{attributes: attributes});
	});
var $flarebyte$bubblegum_entity$Bubblegum$Entity$StateEntity$asAttributesIn = F2(
	function (b, a) {
		return A2($flarebyte$bubblegum_entity$Bubblegum$Entity$StateEntity$setAttributes, a, b);
	});
var $author$project$AppModel$setSettings = F2(
	function (settings, model) {
		return _Utils_update(
			model,
			{settings: settings});
	});
var $author$project$AppModel$helperAsSettingsIn = F2(
	function (b, a) {
		return A2($author$project$AppModel$setSettings, a, b);
	});
var $author$project$AppModel$setUserSettings = F2(
	function (userSettings, model) {
		return _Utils_update(
			model,
			{userSettings: userSettings});
	});
var $author$project$AppModel$helperAsUserSettingsIn = F2(
	function (b, a) {
		return A2($author$project$AppModel$setUserSettings, a, b);
	});
var $author$project$AppModel$asSettingsIn = F3(
	function (isUserSettings, model, settings) {
		return isUserSettings ? A2($author$project$AppModel$helperAsUserSettingsIn, model, settings) : A2($author$project$AppModel$helperAsSettingsIn, model, settings);
	});
var $author$project$AppModel$setState = F2(
	function (state, model) {
		return _Utils_update(
			model,
			{state: state});
	});
var $author$project$AppModel$asStateIn = F2(
	function (b, a) {
		return A2($author$project$AppModel$setState, a, b);
	});
var $author$project$AppModel$getSettings = F2(
	function (isUserSettings, model) {
		return isUserSettings ? model.userSettings : model.settings;
	});
var $author$project$AppModel$getSettingsAttributes = F2(
	function (isUserSettings, model) {
		return A2($author$project$AppModel$getSettings, isUserSettings, model).attributes;
	});
var $author$project$AppModel$getState = function (model) {
	return model.state;
};
var $author$project$AppModel$getStateAttributes = function (model) {
	return $author$project$AppModel$getState(model).attributes;
};
var $author$project$App$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 'OnInputContent':
				var value = msg.a;
				return A2(
					$author$project$AppModel$asStateIn,
					model,
					A2(
						$flarebyte$bubblegum_entity$Bubblegum$Entity$StateEntity$asAttributesIn,
						model.state,
						A3(
							$flarebyte$bubblegum_entity$Bubblegum$Entity$Attribute$replaceAttributeByKey,
							$author$project$Bubblegum$TextArea$Vocabulary$ui_content,
							_List_fromArray(
								[value]),
							model.state.attributes)));
			case 'OnSelectSetting':
				var isUser = msg.a;
				var key = msg.b;
				var value = msg.c;
				return A3(
					$author$project$AppModel$asSettingsIn,
					isUser,
					model,
					A2(
						$flarebyte$bubblegum_entity$Bubblegum$Entity$SettingsEntity$asAttributesIn,
						A2($author$project$AppModel$getSettings, isUser, model),
						A3(
							$flarebyte$bubblegum_entity$Bubblegum$Entity$Attribute$replaceAttributeByKey,
							key,
							_List_fromArray(
								[value]),
							A2($author$project$AppModel$getSettingsAttributes, isUser, model))));
			case 'OnSelectState':
				var key = msg.a;
				var value = msg.b;
				return A2(
					$author$project$AppModel$asStateIn,
					model,
					A2(
						$flarebyte$bubblegum_entity$Bubblegum$Entity$StateEntity$asAttributesIn,
						$author$project$AppModel$getState(model),
						A3(
							$flarebyte$bubblegum_entity$Bubblegum$Entity$Attribute$replaceAttributeByKey,
							key,
							_List_fromArray(
								[value]),
							$author$project$AppModel$getStateAttributes(model))));
			case 'OnActivateSetting':
				var isUser = msg.a;
				var key = msg.b;
				return A3(
					$author$project$AppModel$asSettingsIn,
					isUser,
					model,
					A2(
						$flarebyte$bubblegum_entity$Bubblegum$Entity$SettingsEntity$asAttributesIn,
						A2($author$project$AppModel$getSettings, isUser, model),
						A2(
							$flarebyte$bubblegum_entity$Bubblegum$Entity$Attribute$deleteAttributeByKey,
							key,
							A2($author$project$AppModel$getSettingsAttributes, isUser, model))));
			default:
				var key = msg.a;
				return A2(
					$author$project$AppModel$asStateIn,
					model,
					A2(
						$flarebyte$bubblegum_entity$Bubblegum$Entity$StateEntity$asAttributesIn,
						$author$project$AppModel$getState(model),
						A2(
							$flarebyte$bubblegum_entity$Bubblegum$Entity$Attribute$deleteAttributeByKey,
							key,
							$author$project$AppModel$getStateAttributes(model))));
		}
	});
var $elm$json$Json$Encode$string = _Json_wrap;
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
var $elm$html$Html$div = _VirtualDom_node('div');
var $elm$html$Html$p = _VirtualDom_node('p');
var $elm$html$Html$section = _VirtualDom_node('section');
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $elm$html$Html$a = _VirtualDom_node('a');
var $elm$html$Html$h1 = _VirtualDom_node('h1');
var $elm$html$Html$h2 = _VirtualDom_node('h2');
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$html$Html$Attributes$href = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
var $elm$html$Html$i = _VirtualDom_node('i');
var $elm$html$Html$span = _VirtualDom_node('span');
var $author$project$AttributeDoc$ZeroOrOne = {$: 'ZeroOrOne'};
var $author$project$AttributeDoc$createKey = F4(
	function (key, cardinality, suggestions, description) {
		return {cardinality: cardinality, description: description, facets: _List_Nil, key: key, suggestions: suggestions};
	});
var $author$project$KeyDescription$descContent = 'The content of the field';
var $author$project$KeyDescription$descContentId = 'The unique id of the content';
var $author$project$KeyDescription$descContentLanguage = 'Language of the content';
var $author$project$KeyDescription$descContentRightToLeft = 'Whether the content requires right to left';
var $author$project$KeyDescription$descDangerHelp = 'Help message to highlight an issue with the content';
var $author$project$KeyDescription$descDangerMaximumChars = 'Warning when over the maximum number of characters';
var $author$project$KeyDescription$descDangerMaximumWords = 'Warning when over the maximum number of words';
var $author$project$KeyDescription$descDangerMinimumChars = 'Warning when under the minimum number of characters';
var $author$project$KeyDescription$descDangerMinimumWords = 'Warning when under the minimum number of words';
var $author$project$KeyDescription$descDangerTag = 'Tag representing a dangerous aspect of the content';
var $author$project$KeyDescription$descHelp = 'Some help tip related to the field';
var $author$project$KeyDescription$descLabel = 'Label related to the field';
var $author$project$KeyDescription$descPlaceholder = 'Short hint describing the expected content';
var $author$project$KeyDescription$descSuccessMaximumChars = 'The maximum number of characters needed for successful content';
var $author$project$KeyDescription$descSuccessMaximumWords = 'The maximum number of words needed for successful content';
var $author$project$KeyDescription$descSuccessMinimumChars = 'The minimum number of characters needed for successful content';
var $author$project$KeyDescription$descSuccessMinimumWords = 'The minimum number of words needed for successful content';
var $author$project$KeyDescription$descSuccessTag = 'Tag representing a successful facet of the content';
var $author$project$KeyDescription$descTag = 'Tag used to describe the field';
var $author$project$KeyDescription$descUserLanguage = 'Language used by the user';
var $author$project$KeyDescription$descUserRightToLeft = 'Whether the user is using right to left';
var $author$project$KeyDescription$descWarningTag = 'Tag representing a warning aspect of the content';
var $author$project$WidgetPackageJson$meta = {
	exposedModules: _List_fromArray(
		['Bubblegum.TextArea.Widget']),
	license: 'BSD-3-Clause',
	repository: 'https://github.com/flarebyte/bubblegum-ui-textarea.git',
	summary: 'TextArea widget for the Bubblegum UI toolkit.',
	version: '1.0.1'
};
var $author$project$Bubblegum$TextArea$Vocabulary$ui_contentId = 'ui:content-id';
var $author$project$Bubblegum$TextArea$Vocabulary$ui_contentLanguage = 'ui:content-language';
var $author$project$Bubblegum$TextArea$Vocabulary$ui_contentRightToLeft = 'ui:content-right-to-left';
var $author$project$Bubblegum$TextArea$Vocabulary$ui_dangerHelp = 'ui:danger-help';
var $author$project$Bubblegum$TextArea$Vocabulary$ui_dangerMaximumChars = 'ui:danger-maximum-chars';
var $author$project$Bubblegum$TextArea$Vocabulary$ui_dangerMaximumWords = 'ui:danger-maximum-words';
var $author$project$Bubblegum$TextArea$Vocabulary$ui_dangerMinimumChars = 'ui:danger-minimum-chars';
var $author$project$Bubblegum$TextArea$Vocabulary$ui_dangerMinimumWords = 'ui:danger-minimum-words';
var $author$project$Bubblegum$TextArea$Vocabulary$ui_dangerTag = 'ui:danger-tag';
var $author$project$Bubblegum$TextArea$Vocabulary$ui_help = 'ui:help';
var $author$project$Bubblegum$TextArea$Vocabulary$ui_label = 'ui:label';
var $author$project$Bubblegum$TextArea$Vocabulary$ui_placeholder = 'ui:placeholder';
var $author$project$Bubblegum$TextArea$Vocabulary$ui_successMaximumChars = 'ui:success-maximum-chars';
var $author$project$Bubblegum$TextArea$Vocabulary$ui_successMaximumWords = 'ui:success-maximum-words';
var $author$project$Bubblegum$TextArea$Vocabulary$ui_successMinimumChars = 'ui:success-minimum-chars';
var $author$project$Bubblegum$TextArea$Vocabulary$ui_successMinimumWords = 'ui:success-minimum-words';
var $author$project$Bubblegum$TextArea$Vocabulary$ui_successTag = 'ui:success-tag';
var $author$project$Bubblegum$TextArea$Vocabulary$ui_tag = 'ui:tag';
var $author$project$Bubblegum$TextArea$Vocabulary$ui_userLanguage = 'ui:user-language';
var $author$project$Bubblegum$TextArea$Vocabulary$ui_userRightToLeft = 'ui:user-right-to-left';
var $author$project$Bubblegum$TextArea$Vocabulary$ui_warningTag = 'ui:warning-tag';
var $author$project$WidgetDocData$textAreaWidgetDoc = {
	meta: $author$project$WidgetPackageJson$meta,
	settings: _List_fromArray(
		[
			A4(
			$author$project$AttributeDoc$createKey,
			$author$project$Bubblegum$TextArea$Vocabulary$ui_dangerMaximumChars,
			$author$project$AttributeDoc$ZeroOrOne,
			_List_fromArray(
				['80', '160', '320']),
			$author$project$KeyDescription$descDangerMaximumChars),
			A4(
			$author$project$AttributeDoc$createKey,
			$author$project$Bubblegum$TextArea$Vocabulary$ui_dangerMaximumWords,
			$author$project$AttributeDoc$ZeroOrOne,
			_List_fromArray(
				['40', '80', '160']),
			$author$project$KeyDescription$descDangerMaximumWords),
			A4(
			$author$project$AttributeDoc$createKey,
			$author$project$Bubblegum$TextArea$Vocabulary$ui_dangerMinimumChars,
			$author$project$AttributeDoc$ZeroOrOne,
			_List_fromArray(
				['0', '20', '40']),
			$author$project$KeyDescription$descDangerMinimumChars),
			A4(
			$author$project$AttributeDoc$createKey,
			$author$project$Bubblegum$TextArea$Vocabulary$ui_dangerMinimumWords,
			$author$project$AttributeDoc$ZeroOrOne,
			_List_fromArray(
				['0', '10', '20']),
			$author$project$KeyDescription$descDangerMinimumWords),
			A4(
			$author$project$AttributeDoc$createKey,
			$author$project$Bubblegum$TextArea$Vocabulary$ui_help,
			$author$project$AttributeDoc$ZeroOrOne,
			_List_fromArray(
				['Lorem ipsum dolor sit amet consectetur adipiscing elit.', '助けて']),
			$author$project$KeyDescription$descHelp),
			A4(
			$author$project$AttributeDoc$createKey,
			$author$project$Bubblegum$TextArea$Vocabulary$ui_label,
			$author$project$AttributeDoc$ZeroOrOne,
			_List_fromArray(
				['Some label', 'ラベル', 'ضع الكلمة المناسبة']),
			$author$project$KeyDescription$descLabel),
			A4(
			$author$project$AttributeDoc$createKey,
			$author$project$Bubblegum$TextArea$Vocabulary$ui_placeholder,
			$author$project$AttributeDoc$ZeroOrOne,
			_List_fromArray(
				['Some placeholder', 'プレースホルダ']),
			$author$project$KeyDescription$descPlaceholder),
			A4(
			$author$project$AttributeDoc$createKey,
			$author$project$Bubblegum$TextArea$Vocabulary$ui_successMaximumChars,
			$author$project$AttributeDoc$ZeroOrOne,
			_List_fromArray(
				['70', '150', '310']),
			$author$project$KeyDescription$descSuccessMaximumChars),
			A4(
			$author$project$AttributeDoc$createKey,
			$author$project$Bubblegum$TextArea$Vocabulary$ui_successMaximumWords,
			$author$project$AttributeDoc$ZeroOrOne,
			_List_fromArray(
				['30', '70', '150']),
			$author$project$KeyDescription$descSuccessMaximumWords),
			A4(
			$author$project$AttributeDoc$createKey,
			$author$project$Bubblegum$TextArea$Vocabulary$ui_successMinimumChars,
			$author$project$AttributeDoc$ZeroOrOne,
			_List_fromArray(
				['1', '10', '20']),
			$author$project$KeyDescription$descSuccessMinimumChars),
			A4(
			$author$project$AttributeDoc$createKey,
			$author$project$Bubblegum$TextArea$Vocabulary$ui_successMinimumWords,
			$author$project$AttributeDoc$ZeroOrOne,
			_List_fromArray(
				['1', '10', '20']),
			$author$project$KeyDescription$descSuccessMinimumWords),
			A4(
			$author$project$AttributeDoc$createKey,
			$author$project$Bubblegum$TextArea$Vocabulary$ui_tag,
			$author$project$AttributeDoc$ZeroOrOne,
			_List_fromArray(
				['it', 'learning', 'elm']),
			$author$project$KeyDescription$descTag)
		]),
	stateAttributes: _List_fromArray(
		[
			A4(
			$author$project$AttributeDoc$createKey,
			$author$project$Bubblegum$TextArea$Vocabulary$ui_contentId,
			$author$project$AttributeDoc$ZeroOrOne,
			_List_fromArray(
				['id:aa61e603-9947-4fd8-86bb-d63a682259d0 ']),
			$author$project$KeyDescription$descContentId),
			A4(
			$author$project$AttributeDoc$createKey,
			$author$project$Bubblegum$TextArea$Vocabulary$ui_content,
			$author$project$AttributeDoc$ZeroOrOne,
			_List_fromArray(
				['some content ']),
			$author$project$KeyDescription$descContent),
			A4(
			$author$project$AttributeDoc$createKey,
			$author$project$Bubblegum$TextArea$Vocabulary$ui_dangerHelp,
			$author$project$AttributeDoc$ZeroOrOne,
			_List_fromArray(
				['do not do this']),
			$author$project$KeyDescription$descDangerHelp),
			A4(
			$author$project$AttributeDoc$createKey,
			$author$project$Bubblegum$TextArea$Vocabulary$ui_dangerTag,
			$author$project$AttributeDoc$ZeroOrOne,
			_List_fromArray(
				['sensitive', 'save']),
			$author$project$KeyDescription$descDangerTag),
			A4(
			$author$project$AttributeDoc$createKey,
			$author$project$Bubblegum$TextArea$Vocabulary$ui_successTag,
			$author$project$AttributeDoc$ZeroOrOne,
			_List_fromArray(
				['spelling', 'concise', 'italian']),
			$author$project$KeyDescription$descSuccessTag),
			A4(
			$author$project$AttributeDoc$createKey,
			$author$project$Bubblegum$TextArea$Vocabulary$ui_warningTag,
			$author$project$AttributeDoc$ZeroOrOne,
			_List_fromArray(
				['grammar', 'synonyms']),
			$author$project$KeyDescription$descWarningTag)
		]),
	userSettings: _List_fromArray(
		[
			A4(
			$author$project$AttributeDoc$createKey,
			$author$project$Bubblegum$TextArea$Vocabulary$ui_contentLanguage,
			$author$project$AttributeDoc$ZeroOrOne,
			_List_fromArray(
				['en-GB', 'ja', 'ar', 'zh-CN-SC', 'ru-RUS', 'es', 'it', 'fr']),
			$author$project$KeyDescription$descContentLanguage),
			A4(
			$author$project$AttributeDoc$createKey,
			$author$project$Bubblegum$TextArea$Vocabulary$ui_contentRightToLeft,
			$author$project$AttributeDoc$ZeroOrOne,
			_List_fromArray(
				['true', 'false']),
			$author$project$KeyDescription$descContentRightToLeft),
			A4(
			$author$project$AttributeDoc$createKey,
			$author$project$Bubblegum$TextArea$Vocabulary$ui_userLanguage,
			$author$project$AttributeDoc$ZeroOrOne,
			_List_fromArray(
				['en-GB', 'ja', 'ar', 'zh-CN-SC', 'ru-RUS', 'es', 'it', 'fr']),
			$author$project$KeyDescription$descUserLanguage),
			A4(
			$author$project$AttributeDoc$createKey,
			$author$project$Bubblegum$TextArea$Vocabulary$ui_userRightToLeft,
			$author$project$AttributeDoc$ZeroOrOne,
			_List_fromArray(
				['true', 'false']),
			$author$project$KeyDescription$descUserRightToLeft)
		])
};
var $author$project$WidgetDocView$viewHeader = A2(
	$elm$html$Html$div,
	_List_Nil,
	_List_fromArray(
		[
			A2(
			$elm$html$Html$h1,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('title')
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(
					A2(
						$elm$core$Maybe$withDefault,
						'?',
						$elm$core$List$head($author$project$WidgetDocData$textAreaWidgetDoc.meta.exposedModules)))
				])),
			A2(
			$elm$html$Html$h2,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('subtitle')
				]),
			_List_fromArray(
				[
					$elm$html$Html$text($author$project$WidgetDocData$textAreaWidgetDoc.meta.summary)
				])),
			A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('field is-grouped is-grouped-multiline')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('control')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('tags has-addons')
								]),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$span,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('tag is-dark')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('version')
										])),
									A2(
									$elm$html$Html$span,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('tag is-info')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text($author$project$WidgetDocData$textAreaWidgetDoc.meta.version)
										]))
								]))
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('control')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('tags has-addons')
								]),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$span,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('tag is-dark')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('license')
										])),
									A2(
									$elm$html$Html$span,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('tag is-success')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text($author$project$WidgetDocData$textAreaWidgetDoc.meta.license)
										]))
								]))
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('control')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$a,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('button is-small'),
									$elm$html$Html$Attributes$href($author$project$WidgetDocData$textAreaWidgetDoc.meta.repository)
								]),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$span,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('icon is-small')
										]),
									_List_fromArray(
										[
											A2(
											$elm$html$Html$i,
											_List_fromArray(
												[
													$elm$html$Html$Attributes$class('fab fa-github')
												]),
											_List_Nil)
										])),
									A2(
									$elm$html$Html$span,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text('GitHub')
										]))
								]))
						]))
				]))
		]));
var $elm$html$Html$h3 = _VirtualDom_node('h3');
var $elm$html$Html$h4 = _VirtualDom_node('h4');
var $elm$html$Html$label = _VirtualDom_node('label');
var $elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (maybeValue.$ === 'Just') {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $flarebyte$bubblegum_entity$Bubblegum$Entity$Attribute$findAttributeFirstValueByKey = F2(
	function (key, attributes) {
		return A2(
			$elm$core$Maybe$andThen,
			$elm$core$List$head,
			A2(
				$elm$core$Maybe$map,
				function ($) {
					return $.values;
				},
				A2($flarebyte$bubblegum_entity$Bubblegum$Entity$Attribute$findAttributeByKey, key, attributes)));
	});
var $author$project$AppMsg$OnSelectSetting = F3(
	function (a, b, c) {
		return {$: 'OnSelectSetting', a: a, b: b, c: c};
	});
var $elm$html$Html$input = _VirtualDom_node('input');
var $elm$html$Html$Attributes$name = $elm$html$Html$Attributes$stringProperty('name');
var $elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 'Normal', a: a};
};
var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var $elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var $elm$html$Html$Events$onClick = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'click',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$html$Html$Attributes$type_ = $elm$html$Html$Attributes$stringProperty('type');
var $author$project$WidgetDocView$viewRadioItem = F4(
	function (isUserSettings, key, actual, value) {
		var labelStyle = A2(
			$elm$core$Maybe$withDefault,
			'',
			A2(
				$elm$core$Maybe$map,
				function (v) {
					return _Utils_eq(v, value) ? 'has-text-success has-text-weight-bold' : '';
				},
				actual));
		return A2(
			$elm$html$Html$label,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('radio')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$input,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$name(key),
							$elm$html$Html$Attributes$type_('radio'),
							$elm$html$Html$Events$onClick(
							A3($author$project$AppMsg$OnSelectSetting, isUserSettings, key, value))
						]),
					_List_Nil),
					A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(labelStyle)
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(value)
						]))
				]));
	});
var $author$project$WidgetDocView$viewRadioSettings = F3(
	function (model, isUserSettings, attrDoc) {
		var actualSettings = A2($author$project$AppModel$getSettings, isUserSettings, model);
		var actualValue = A2($flarebyte$bubblegum_entity$Bubblegum$Entity$Attribute$findAttributeFirstValueByKey, attrDoc.key, actualSettings.attributes);
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('control')
				]),
			A2(
				$elm$core$List$map,
				A3($author$project$WidgetDocView$viewRadioItem, isUserSettings, attrDoc.key, actualValue),
				attrDoc.suggestions));
	});
var $author$project$AppMsg$OnActivateSetting = F2(
	function (a, b) {
		return {$: 'OnActivateSetting', a: a, b: b};
	});
var $elm$html$Html$button = _VirtualDom_node('button');
var $author$project$WidgetDocView$viewSelectedBox = F2(
	function (isUserSettings, key) {
		return A2(
			$elm$html$Html$button,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('button'),
					$elm$html$Html$Events$onClick(
					A2($author$project$AppMsg$OnActivateSetting, isUserSettings, key))
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('icon is-small')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$i,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('fas fa-trash')
								]),
							_List_Nil)
						]))
				]));
	});
var $author$project$WidgetDocView$viewRadioSettingsWithLabel = F3(
	function (model, isUserSettings, attrDoc) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('field')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$label,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('label')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(attrDoc.key)
						])),
					A3($author$project$WidgetDocView$viewRadioSettings, model, isUserSettings, attrDoc),
					A2($author$project$WidgetDocView$viewSelectedBox, isUserSettings, attrDoc.key),
					A2(
					$elm$html$Html$p,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('help is-info')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(attrDoc.description)
						]))
				]));
	});
var $author$project$AppMsg$OnSelectState = F2(
	function (a, b) {
		return {$: 'OnSelectState', a: a, b: b};
	});
var $author$project$WidgetDocView$viewRadioItemForState = F3(
	function (key, actual, value) {
		var labelStyle = A2(
			$elm$core$Maybe$withDefault,
			'',
			A2(
				$elm$core$Maybe$map,
				function (v) {
					return _Utils_eq(v, value) ? 'has-text-success has-text-weight-bold' : '';
				},
				actual));
		return A2(
			$elm$html$Html$label,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('radio')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$input,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$name(key),
							$elm$html$Html$Attributes$type_('radio'),
							$elm$html$Html$Events$onClick(
							A2($author$project$AppMsg$OnSelectState, key, value))
						]),
					_List_Nil),
					A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(labelStyle)
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(value)
						]))
				]));
	});
var $author$project$WidgetDocView$viewRadioSettingsForState = F2(
	function (model, attrDoc) {
		var actualState = $author$project$AppModel$getState(model);
		var actualValue = A2($flarebyte$bubblegum_entity$Bubblegum$Entity$Attribute$findAttributeFirstValueByKey, attrDoc.key, actualState.attributes);
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('control')
				]),
			A2(
				$elm$core$List$map,
				A2($author$project$WidgetDocView$viewRadioItemForState, attrDoc.key, actualValue),
				attrDoc.suggestions));
	});
var $author$project$AppMsg$OnActivateState = function (a) {
	return {$: 'OnActivateState', a: a};
};
var $author$project$WidgetDocView$viewSelectedBoxForState = function (key) {
	return A2(
		$elm$html$Html$button,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('button'),
				$elm$html$Html$Events$onClick(
				$author$project$AppMsg$OnActivateState(key))
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$span,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('icon is-small')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$i,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('fas fa-trash')
							]),
						_List_Nil)
					]))
			]));
};
var $author$project$WidgetDocView$viewRadioSettingsWithLabelForState = F2(
	function (model, attrDoc) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('field')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$label,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('label')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(attrDoc.key)
						])),
					A2($author$project$WidgetDocView$viewRadioSettingsForState, model, attrDoc),
					$author$project$WidgetDocView$viewSelectedBoxForState(attrDoc.key),
					A2(
					$elm$html$Html$p,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('help is-info')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(attrDoc.description)
						]))
				]));
	});
var $author$project$WidgetDocView$viewSettings = function (model) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('box scrollable')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$h3,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('title is-3')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('State')
					])),
				A2(
				$elm$html$Html$h4,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('subtitle is-4')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('Attributes that can be changed at runtime')
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('box')
					]),
				A2(
					$elm$core$List$map,
					$author$project$WidgetDocView$viewRadioSettingsWithLabelForState(model),
					$author$project$WidgetDocData$textAreaWidgetDoc.stateAttributes)),
				A2(
				$elm$html$Html$h3,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('title is-3')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('User Settings')
					])),
				A2(
				$elm$html$Html$h4,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('subtitle is-4')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('Attributes attached to the current profile')
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('box')
					]),
				A2(
					$elm$core$List$map,
					A2($author$project$WidgetDocView$viewRadioSettingsWithLabel, model, true),
					$author$project$WidgetDocData$textAreaWidgetDoc.userSettings)),
				A2(
				$elm$html$Html$h3,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('title is-3')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('Settings')
					])),
				A2(
				$elm$html$Html$h4,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('subtitle is-4')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('Attributes of the widget')
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('box')
					]),
				A2(
					$elm$core$List$map,
					A2($author$project$WidgetDocView$viewRadioSettingsWithLabel, model, false),
					$author$project$WidgetDocData$textAreaWidgetDoc.settings))
			]));
};
var $author$project$AppMsg$OnInputContent = function (a) {
	return {$: 'OnInputContent', a: a};
};
var $author$project$WidgetBuilder$adapter = {onInput: $author$project$AppMsg$OnInputContent};
var $elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $elm$html$Html$Attributes$attribute = $elm$virtual_dom$VirtualDom$attribute;
var $author$project$Bubblegum$TextArea$BulmaHelper$appendAttributeIfSuccess = F3(
	function (ifSuccess, outcome, attributes) {
		switch (outcome.$) {
			case 'None':
				return attributes;
			case 'Warning':
				var warn = outcome.a;
				return _Utils_ap(
					attributes,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$attribute, 'data-bubblegum-warn', warn)
						]));
			default:
				var success = outcome.a;
				return _Utils_ap(
					attributes,
					_List_fromArray(
						[
							ifSuccess(success)
						]));
		}
	});
var $author$project$Bubblegum$TextArea$BulmaHelper$appendHtmlIfSuccess = F3(
	function (ifSuccess, outcome, htmlList) {
		switch (outcome.$) {
			case 'None':
				return htmlList;
			case 'Warning':
				var warn = outcome.a;
				return _Utils_ap(
					htmlList,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('is-invisible warning')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(warn)
								]))
						]));
			default:
				var success = outcome.a;
				return _Utils_ap(
					htmlList,
					_List_fromArray(
						[
							ifSuccess(success)
						]));
		}
	});
var $elm$core$String$lines = _String_lines;
var $author$project$Bubblegum$TextArea$Helper$calculateRows = function (content) {
	var numberOfChars = $elm$core$String$length(content);
	var numberOfAvgLines = (numberOfChars / 80) | 0;
	var carriageReturns = $elm$core$List$length(
		$elm$core$String$lines(content));
	var numberOfLines = (carriageReturns + numberOfAvgLines) + 1;
	return $elm$core$String$fromInt(
		(numberOfLines < 40) ? numberOfLines : 40);
};
var $author$project$Bubblegum$TextArea$BulmaHelper$asClass = function (list) {
	return $elm$html$Html$Attributes$class(
		A2(
			$elm$core$String$join,
			' ',
			$elm$core$List$reverse(list)));
};
var $author$project$Bubblegum$TextArea$BulmaHelper$asClass2 = F2(
	function (a, b) {
		return $author$project$Bubblegum$TextArea$BulmaHelper$asClass(
			_List_fromArray(
				[b, a]));
	});
var $author$project$Bubblegum$TextArea$BulmaHelper$dangerHelp = function (helpText) {
	return A2(
		$elm$html$Html$p,
		_List_fromArray(
			[
				A2($author$project$Bubblegum$TextArea$BulmaHelper$asClass2, 'help', 'is-danger')
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(helpText)
			]));
};
var $elm$html$Html$Attributes$dir = $elm$html$Html$Attributes$stringProperty('dir');
var $elm$core$Basics$not = _Basics_not;
var $elm$core$Basics$ge = _Utils_ge;
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $author$project$Bubblegum$TextArea$Helper$successRange = F2(
	function (size, range) {
		return (_Utils_cmp(size, range.a) > -1) && (_Utils_cmp(size, range.b) < 0);
	});
var $author$project$Bubblegum$TextArea$Helper$dangerRange = F2(
	function (size, range) {
		return !A2($author$project$Bubblegum$TextArea$Helper$successRange, size, range);
	});
var $flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$None = {$: 'None'};
var $flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$Valid = function (a) {
	return {$: 'Valid', a: a};
};
var $flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$Warning = function (a) {
	return {$: 'Warning', a: a};
};
var $flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$check = F3(
	function (checker, warnMsg, ra) {
		switch (ra.$) {
			case 'None':
				return $flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$None;
			case 'Warning':
				var msg = ra.a;
				return $flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$Warning(msg);
			default:
				var value = ra.a;
				return checker(value) ? $flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$Valid(value) : $flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$Warning(warnMsg);
		}
	});
var $flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$map = F2(
	function (func, ra) {
		switch (ra.$) {
			case 'Valid':
				var a = ra.a;
				return $flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$Valid(
					func(a));
			case 'None':
				return $flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$None;
			default:
				var msg = ra.a;
				return $flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$Warning(msg);
		}
	});
var $flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$matchListSize = F2(
	function (expected, list) {
		return _Utils_eq(
			$elm$core$List$length(list),
			expected);
	});
var $flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$onlyOne = function (list) {
	return A2(
		$elm$core$Maybe$withDefault,
		'should-never-happen',
		$elm$core$List$head(list));
};
var $flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$asSingle = function (outcome) {
	return A2(
		$flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$map,
		$flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$onlyOne,
		A3(
			$flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$check,
			$flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$matchListSize(1),
			'unsatisfied-constraint:single',
			outcome));
};
var $flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$fromMaybe = function (maybe) {
	if (maybe.$ === 'Just') {
		var v = maybe.a;
		return $flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$Valid(v);
	} else {
		return $flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$None;
	}
};
var $flarebyte$bubblegum_entity$Bubblegum$Entity$Attribute$findOutcomeByKey = F2(
	function (key, attributes) {
		return $flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$fromMaybe(
			A2(
				$elm$core$Maybe$map,
				function ($) {
					return $.values;
				},
				A2($flarebyte$bubblegum_entity$Bubblegum$Entity$Attribute$findAttributeByKey, key, attributes)));
	});
var $author$project$Bubblegum$TextArea$EntityHelper$findString = F2(
	function (key, attributes) {
		return $flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$asSingle(
			A2($flarebyte$bubblegum_entity$Bubblegum$Entity$Attribute$findOutcomeByKey, key, attributes));
	});
var $author$project$Bubblegum$TextArea$HelperLimits$limitVeryLargeRange = _Utils_Tuple2(0, 60000);
var $flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$helperCharsRange = F2(
	function (range, str) {
		return (_Utils_cmp(
			$elm$core$String$length(str),
			range.a) > -1) && (_Utils_cmp(
			$elm$core$String$length(str),
			range.b) < 0);
	});
var $flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$intRangeToString = function (range) {
	return '(' + ($elm$core$String$fromInt(range.a) + (',' + ($elm$core$String$fromInt(range.b) + ')')));
};
var $flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$withinStringCharsRange = F2(
	function (range, outcome) {
		return A3(
			$flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$check,
			$flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$helperCharsRange(range),
			'unsatisfied-constraint:within-string-chars-range:' + $flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$intRangeToString(range),
			outcome);
	});
var $author$project$Bubblegum$TextArea$VocabularyHelper$getContent = function (settings) {
	return A2(
		$flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$withinStringCharsRange,
		$author$project$Bubblegum$TextArea$HelperLimits$limitVeryLargeRange,
		A2($author$project$Bubblegum$TextArea$EntityHelper$findString, $author$project$Bubblegum$TextArea$Vocabulary$ui_content, settings.attributes));
};
var $flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$asIntRange = function (outcome) {
	return A3(
		$flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$check,
		function (t) {
			return _Utils_cmp(t.a, t.b) < 0;
		},
		'unsatisfied-constraint:int-range',
		outcome);
};
var $flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$intOrZero = function (value) {
	return A2(
		$elm$core$Maybe$withDefault,
		0,
		$elm$core$String$toInt(value));
};
var $flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$isInt = function (value) {
	var _v0 = $elm$core$String$toInt(value);
	if (_v0.$ === 'Just') {
		return true;
	} else {
		return false;
	}
};
var $flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$asIntTuple = function (outcome) {
	return A2(
		$flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$map,
		function (t) {
			return _Utils_Tuple2(
				$flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$intOrZero(t.a),
				$flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$intOrZero(t.b));
		},
		A3(
			$flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$check,
			function (t) {
				return $flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$isInt(t.a) && $flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$isInt(t.b);
			},
			'unsatisfied-constraint:int-tuple',
			outcome));
};
var $flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$onlyTuple = function (listTuple) {
	if (((listTuple.a.b && (!listTuple.a.b.b)) && listTuple.b.b) && (!listTuple.b.b.b)) {
		var _v1 = listTuple.a;
		var a = _v1.a;
		var _v2 = listTuple.b;
		var b = _v2.a;
		return _Utils_Tuple2(a, b);
	} else {
		return _Utils_Tuple2('should-never-happen', 'should-never-happen');
	}
};
var $flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$asTuple = function (outcome) {
	return A2(
		$flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$map,
		$flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$onlyTuple,
		A3(
			$flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$check,
			function (o) {
				return A2($flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$matchListSize, 1, o.a) && A2($flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$matchListSize, 1, o.b);
			},
			'unsatisfied-constraint:tuple',
			outcome));
};
var $flarebyte$bubblegum_entity$Bubblegum$Entity$Attribute$createTuple = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var $elm$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		if (ma.$ === 'Nothing') {
			return $elm$core$Maybe$Nothing;
		} else {
			var a = ma.a;
			if (mb.$ === 'Nothing') {
				return $elm$core$Maybe$Nothing;
			} else {
				var b = mb.a;
				return $elm$core$Maybe$Just(
					A2(func, a, b));
			}
		}
	});
var $flarebyte$bubblegum_entity$Bubblegum$Entity$Attribute$findOutcomeByKeyTuple = F2(
	function (tuple, attributes) {
		var b = A2(
			$elm$core$Maybe$map,
			function ($) {
				return $.values;
			},
			A2($flarebyte$bubblegum_entity$Bubblegum$Entity$Attribute$findAttributeByKey, tuple.b, attributes));
		var a = A2(
			$elm$core$Maybe$map,
			function ($) {
				return $.values;
			},
			A2($flarebyte$bubblegum_entity$Bubblegum$Entity$Attribute$findAttributeByKey, tuple.a, attributes));
		var ab = A3($elm$core$Maybe$map2, $flarebyte$bubblegum_entity$Bubblegum$Entity$Attribute$createTuple, a, b);
		return $flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$fromMaybe(ab);
	});
var $author$project$Bubblegum$TextArea$EntityHelper$findIntRange = F2(
	function (keyTuple, attributes) {
		return $flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$asIntRange(
			$flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$asIntTuple(
				$flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$asTuple(
					A2($flarebyte$bubblegum_entity$Bubblegum$Entity$Attribute$findOutcomeByKeyTuple, keyTuple, attributes))));
	});
var $author$project$Bubblegum$TextArea$HelperLimits$limitVeryLargeRangeNotEmpty = _Utils_Tuple2(1, 60000);
var $flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$withinIntRange = F2(
	function (range, outcome) {
		return A3(
			$flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$check,
			function (t) {
				return (_Utils_cmp(t.a, range.a) > -1) && (_Utils_cmp(t.b, range.b) < 0);
			},
			'unsatisfied-constraint:within-int-range:' + $flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$intRangeToString(range),
			outcome);
	});
var $author$project$Bubblegum$TextArea$VocabularyHelper$getDangerCharRange = function (settings) {
	return A2(
		$flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$withinIntRange,
		$author$project$Bubblegum$TextArea$HelperLimits$limitVeryLargeRangeNotEmpty,
		A2(
			$author$project$Bubblegum$TextArea$EntityHelper$findIntRange,
			_Utils_Tuple2($author$project$Bubblegum$TextArea$Vocabulary$ui_dangerMinimumChars, $author$project$Bubblegum$TextArea$Vocabulary$ui_dangerMaximumChars),
			settings.attributes));
};
var $author$project$Bubblegum$TextArea$HelperLimits$limitList = 8;
var $author$project$Bubblegum$TextArea$HelperLimits$limitSmallRangeNotEmpty = _Utils_Tuple2(1, 32);
var $flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$helperLessThan = F2(
	function (expected, list) {
		return _Utils_cmp(
			$elm$core$List$length(list),
			expected) < 1;
	});
var $flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$listLessThan = F2(
	function (size, outcome) {
		return A3(
			$flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$check,
			$flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$helperLessThan(size),
			'unsatisfied-constraint:list-less-than-' + $elm$core$String$fromInt(size),
			outcome);
	});
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $elm$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			$elm$core$List$any,
			A2($elm$core$Basics$composeL, $elm$core$Basics$not, isOkay),
			list);
	});
var $flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$withinListStringCharsRange = F2(
	function (range, outcome) {
		return A3(
			$flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$check,
			function (list) {
				return A2(
					$elm$core$List$all,
					$flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$helperCharsRange(range),
					list);
			},
			'unsatisfied-constraint:within-list-string-chars-range:' + $flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$intRangeToString(range),
			outcome);
	});
var $author$project$Bubblegum$TextArea$EntityHelper$findListString = F2(
	function (key, attributes) {
		return A2(
			$flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$withinListStringCharsRange,
			$author$project$Bubblegum$TextArea$HelperLimits$limitSmallRangeNotEmpty,
			A2(
				$flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$listLessThan,
				$author$project$Bubblegum$TextArea$HelperLimits$limitList,
				A2($flarebyte$bubblegum_entity$Bubblegum$Entity$Attribute$findOutcomeByKey, key, attributes)));
	});
var $author$project$Bubblegum$TextArea$VocabularyHelper$getDangerTag = function (settings) {
	return A2($author$project$Bubblegum$TextArea$EntityHelper$findListString, $author$project$Bubblegum$TextArea$Vocabulary$ui_dangerTag, settings.attributes);
};
var $author$project$Bubblegum$TextArea$VocabularyHelper$getDangerWordRange = function (settings) {
	return A2(
		$flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$withinIntRange,
		$author$project$Bubblegum$TextArea$HelperLimits$limitVeryLargeRangeNotEmpty,
		A2(
			$author$project$Bubblegum$TextArea$EntityHelper$findIntRange,
			_Utils_Tuple2($author$project$Bubblegum$TextArea$Vocabulary$ui_dangerMinimumWords, $author$project$Bubblegum$TextArea$Vocabulary$ui_dangerMaximumWords),
			settings.attributes));
};
var $author$project$Bubblegum$TextArea$VocabularyHelper$getSuccessCharRange = function (settings) {
	return A2(
		$flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$withinIntRange,
		$author$project$Bubblegum$TextArea$HelperLimits$limitVeryLargeRangeNotEmpty,
		A2(
			$author$project$Bubblegum$TextArea$EntityHelper$findIntRange,
			_Utils_Tuple2($author$project$Bubblegum$TextArea$Vocabulary$ui_successMinimumChars, $author$project$Bubblegum$TextArea$Vocabulary$ui_successMaximumChars),
			settings.attributes));
};
var $author$project$Bubblegum$TextArea$VocabularyHelper$getSuccessTag = function (settings) {
	return A2($author$project$Bubblegum$TextArea$EntityHelper$findListString, $author$project$Bubblegum$TextArea$Vocabulary$ui_successTag, settings.attributes);
};
var $author$project$Bubblegum$TextArea$VocabularyHelper$getSuccessWordRange = function (settings) {
	return A2(
		$flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$withinIntRange,
		$author$project$Bubblegum$TextArea$HelperLimits$limitVeryLargeRangeNotEmpty,
		A2(
			$author$project$Bubblegum$TextArea$EntityHelper$findIntRange,
			_Utils_Tuple2($author$project$Bubblegum$TextArea$Vocabulary$ui_successMinimumWords, $author$project$Bubblegum$TextArea$Vocabulary$ui_successMaximumWords),
			settings.attributes));
};
var $author$project$Bubblegum$TextArea$VocabularyHelper$getTag = function (settings) {
	return A2($author$project$Bubblegum$TextArea$EntityHelper$findListString, $author$project$Bubblegum$TextArea$Vocabulary$ui_tag, settings.attributes);
};
var $author$project$Bubblegum$TextArea$VocabularyHelper$getUserLanguage = function (settings) {
	return A2(
		$flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$withinStringCharsRange,
		$author$project$Bubblegum$TextArea$HelperLimits$limitSmallRangeNotEmpty,
		A2($author$project$Bubblegum$TextArea$EntityHelper$findString, $author$project$Bubblegum$TextArea$Vocabulary$ui_userLanguage, settings.attributes));
};
var $flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$toMaybe = function (outcome) {
	switch (outcome.$) {
		case 'None':
			return $elm$core$Maybe$Nothing;
		case 'Warning':
			return $elm$core$Maybe$Nothing;
		default:
			var value = outcome.a;
			return $elm$core$Maybe$Just(value);
	}
};
var $author$project$Bubblegum$TextArea$Helper$getUserLanguageOrEnglish = function (settings) {
	return A2(
		$elm$core$Maybe$withDefault,
		'en-GB',
		$flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$toMaybe(
			$author$project$Bubblegum$TextArea$VocabularyHelper$getUserLanguage(settings)));
};
var $author$project$Bubblegum$TextArea$IsoLanguage$Arabic = {$: 'Arabic'};
var $author$project$Bubblegum$TextArea$IsoLanguage$Bulgarian = {$: 'Bulgarian'};
var $author$project$Bubblegum$TextArea$IsoLanguage$Chinese = {$: 'Chinese'};
var $author$project$Bubblegum$TextArea$IsoLanguage$Czech = {$: 'Czech'};
var $author$project$Bubblegum$TextArea$IsoLanguage$Danish = {$: 'Danish'};
var $author$project$Bubblegum$TextArea$IsoLanguage$Dutch = {$: 'Dutch'};
var $author$project$Bubblegum$TextArea$IsoLanguage$English = {$: 'English'};
var $author$project$Bubblegum$TextArea$IsoLanguage$Finnish = {$: 'Finnish'};
var $author$project$Bubblegum$TextArea$IsoLanguage$French = {$: 'French'};
var $author$project$Bubblegum$TextArea$IsoLanguage$German = {$: 'German'};
var $author$project$Bubblegum$TextArea$IsoLanguage$Greek = {$: 'Greek'};
var $author$project$Bubblegum$TextArea$IsoLanguage$Hebrew = {$: 'Hebrew'};
var $author$project$Bubblegum$TextArea$IsoLanguage$Hungarian = {$: 'Hungarian'};
var $author$project$Bubblegum$TextArea$IsoLanguage$Indonesian = {$: 'Indonesian'};
var $author$project$Bubblegum$TextArea$IsoLanguage$Italian = {$: 'Italian'};
var $author$project$Bubblegum$TextArea$IsoLanguage$Japanese = {$: 'Japanese'};
var $author$project$Bubblegum$TextArea$IsoLanguage$Korean = {$: 'Korean'};
var $author$project$Bubblegum$TextArea$IsoLanguage$Norwegian = {$: 'Norwegian'};
var $author$project$Bubblegum$TextArea$IsoLanguage$Persian = {$: 'Persian'};
var $author$project$Bubblegum$TextArea$IsoLanguage$Polish = {$: 'Polish'};
var $author$project$Bubblegum$TextArea$IsoLanguage$Portuguese = {$: 'Portuguese'};
var $author$project$Bubblegum$TextArea$IsoLanguage$Romanian = {$: 'Romanian'};
var $author$project$Bubblegum$TextArea$IsoLanguage$Russian = {$: 'Russian'};
var $author$project$Bubblegum$TextArea$IsoLanguage$Slovak = {$: 'Slovak'};
var $author$project$Bubblegum$TextArea$IsoLanguage$Spanish = {$: 'Spanish'};
var $author$project$Bubblegum$TextArea$IsoLanguage$Swedish = {$: 'Swedish'};
var $author$project$Bubblegum$TextArea$IsoLanguage$Thai = {$: 'Thai'};
var $author$project$Bubblegum$TextArea$IsoLanguage$Turkish = {$: 'Turkish'};
var $author$project$Bubblegum$TextArea$IsoLanguage$Ukrainian = {$: 'Ukrainian'};
var $author$project$Bubblegum$TextArea$IsoLanguage$Vietnamese = {$: 'Vietnamese'};
var $author$project$Bubblegum$TextArea$IsoLanguage$getLanguageCode = function (language) {
	return A2($elm$core$String$left, 2, language);
};
var $author$project$Bubblegum$TextArea$IsoLanguage$toIsoLanguage = function (language) {
	var _v0 = $author$project$Bubblegum$TextArea$IsoLanguage$getLanguageCode(language);
	switch (_v0) {
		case 'ar':
			return $author$project$Bubblegum$TextArea$IsoLanguage$Arabic;
		case 'bg':
			return $author$project$Bubblegum$TextArea$IsoLanguage$Bulgarian;
		case 'zh':
			return $author$project$Bubblegum$TextArea$IsoLanguage$Chinese;
		case 'cs':
			return $author$project$Bubblegum$TextArea$IsoLanguage$Czech;
		case 'da':
			return $author$project$Bubblegum$TextArea$IsoLanguage$Danish;
		case 'nl':
			return $author$project$Bubblegum$TextArea$IsoLanguage$Dutch;
		case 'en':
			return $author$project$Bubblegum$TextArea$IsoLanguage$English;
		case 'fi':
			return $author$project$Bubblegum$TextArea$IsoLanguage$Finnish;
		case 'fr':
			return $author$project$Bubblegum$TextArea$IsoLanguage$French;
		case 'de':
			return $author$project$Bubblegum$TextArea$IsoLanguage$German;
		case 'el':
			return $author$project$Bubblegum$TextArea$IsoLanguage$Greek;
		case 'iw':
			return $author$project$Bubblegum$TextArea$IsoLanguage$Hebrew;
		case 'hu':
			return $author$project$Bubblegum$TextArea$IsoLanguage$Hungarian;
		case 'in':
			return $author$project$Bubblegum$TextArea$IsoLanguage$Indonesian;
		case 'it':
			return $author$project$Bubblegum$TextArea$IsoLanguage$Italian;
		case 'ja':
			return $author$project$Bubblegum$TextArea$IsoLanguage$Japanese;
		case 'ko':
			return $author$project$Bubblegum$TextArea$IsoLanguage$Korean;
		case 'no':
			return $author$project$Bubblegum$TextArea$IsoLanguage$Norwegian;
		case 'fa':
			return $author$project$Bubblegum$TextArea$IsoLanguage$Persian;
		case 'pl':
			return $author$project$Bubblegum$TextArea$IsoLanguage$Polish;
		case 'pt':
			return $author$project$Bubblegum$TextArea$IsoLanguage$Portuguese;
		case 'ro':
			return $author$project$Bubblegum$TextArea$IsoLanguage$Romanian;
		case 'ru':
			return $author$project$Bubblegum$TextArea$IsoLanguage$Russian;
		case 'sk':
			return $author$project$Bubblegum$TextArea$IsoLanguage$Slovak;
		case 'es':
			return $author$project$Bubblegum$TextArea$IsoLanguage$Spanish;
		case 'sv':
			return $author$project$Bubblegum$TextArea$IsoLanguage$Swedish;
		case 'th':
			return $author$project$Bubblegum$TextArea$IsoLanguage$Thai;
		case 'tr':
			return $author$project$Bubblegum$TextArea$IsoLanguage$Turkish;
		case 'uk':
			return $author$project$Bubblegum$TextArea$IsoLanguage$Ukrainian;
		case 'vi':
			return $author$project$Bubblegum$TextArea$IsoLanguage$Vietnamese;
		default:
			return $author$project$Bubblegum$TextArea$IsoLanguage$English;
	}
};
var $author$project$Bubblegum$TextArea$Helper$getUserIsoLanguage = function (settings) {
	return $author$project$Bubblegum$TextArea$IsoLanguage$toIsoLanguage(
		$author$project$Bubblegum$TextArea$Helper$getUserLanguageOrEnglish(settings));
};
var $author$project$Bubblegum$TextArea$VocabularyHelper$getWarningTag = function (settings) {
	return A2($author$project$Bubblegum$TextArea$EntityHelper$findListString, $author$project$Bubblegum$TextArea$Vocabulary$ui_warningTag, settings.attributes);
};
var $author$project$Bubblegum$TextArea$BulmaHelper$groupFields = function (list) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('field is-grouped is-grouped-multiline')
			]),
		list);
};
var $flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$map2 = F3(
	function (func, ra, rb) {
		var _v0 = _Utils_Tuple2(ra, rb);
		_v0$6:
		while (true) {
			switch (_v0.a.$) {
				case 'Valid':
					switch (_v0.b.$) {
						case 'Valid':
							var a = _v0.a.a;
							var b = _v0.b.a;
							return $flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$Valid(
								A2(func, a, b));
						case 'None':
							var _v3 = _v0.b;
							return $flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$None;
						default:
							break _v0$6;
					}
				case 'None':
					switch (_v0.b.$) {
						case 'None':
							var _v1 = _v0.a;
							var _v2 = _v0.b;
							return $flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$None;
						case 'Valid':
							var _v4 = _v0.a;
							return $flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$None;
						default:
							break _v0$6;
					}
				default:
					if (_v0.b.$ === 'Warning') {
						var msga = _v0.a.a;
						var msgb = _v0.b.a;
						return $flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$Warning(
							_Utils_ap(msga, msgb));
					} else {
						var msg = _v0.a.a;
						return $flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$Warning(msg);
					}
			}
		}
		var msg = _v0.b.a;
		return $flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$Warning(msg);
	});
var $elm$html$Html$Attributes$title = $elm$html$Html$Attributes$stringProperty('title');
var $author$project$Bubblegum$TextArea$BulmaHelper$tag = function (tagInfo) {
	return A2(
		$elm$html$Html$span,
		_List_fromArray(
			[
				A2($author$project$Bubblegum$TextArea$BulmaHelper$asClass2, 'tag', tagInfo.style),
				$elm$html$Html$Attributes$title(tagInfo.title)
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(tagInfo.text)
			]));
};
var $author$project$Bubblegum$TextArea$Internationalization$translateMinimumChars = function (language) {
	switch (language.$) {
		case 'Arabic':
			return 'الحد الأدنى لعدد الأحرف المتوقع ';
		case 'Chinese':
			return '最少预期字符数';
		case 'English':
			return 'minimum number of characters expected';
		case 'French':
			return 'nombre minimum de caractères attendus';
		case 'German':
			return 'Mindestanzahl der erwarteten Zeichen';
		case 'Italian':
			return 'numero minimo di caratteri previsto';
		case 'Japanese':
			return '期待される最小文字数';
		case 'Russian':
			return 'минимальное количество ожидаемых символов';
		case 'Spanish':
			return 'número mínimo de caracteres esperado';
		case 'Bulgarian':
			return 'minimum number of characters expected';
		case 'Czech':
			return 'minimum number of characters expected';
		case 'Danish':
			return 'minimum number of characters expected';
		case 'Dutch':
			return 'minimum number of characters expected';
		case 'Finnish':
			return 'minimum number of characters expected';
		case 'Greek':
			return 'minimum number of characters expected';
		case 'Hebrew':
			return 'minimum number of characters expected';
		case 'Hungarian':
			return 'minimum number of characters expected';
		case 'Indonesian':
			return 'minimum number of characters expected';
		case 'Korean':
			return 'minimum number of characters expected';
		case 'Norwegian':
			return 'minimum number of characters expected';
		case 'Persian':
			return 'minimum number of characters expected';
		case 'Polish':
			return 'minimum number of characters expected';
		case 'Portuguese':
			return 'minimum number of characters expected';
		case 'Romanian':
			return 'minimum number of characters expected';
		case 'Slovak':
			return 'minimum number of characters expected';
		case 'Swedish':
			return 'minimum number of characters expected';
		case 'Thai':
			return 'minimum number of characters expected';
		case 'Turkish':
			return 'minimum number of characters expected';
		case 'Ukrainian':
			return 'minimum number of characters expected';
		default:
			return 'minimum number of characters expected';
	}
};
var $author$project$Bubblegum$TextArea$BulmaHelper$minimumCharsTag = F2(
	function (userIsoLanguage, tuple) {
		return $author$project$Bubblegum$TextArea$BulmaHelper$tag(
			{
				style: 'is-dark',
				text: $elm$core$String$fromInt(tuple.a),
				title: $author$project$Bubblegum$TextArea$Internationalization$translateMinimumChars(userIsoLanguage)
			});
	});
var $author$project$Bubblegum$TextArea$Internationalization$translateMinimumWords = function (language) {
	switch (language.$) {
		case 'Arabic':
			return 'الحد الأدنى لعدد الكلمات المتوقع';
		case 'Chinese':
			return '预计最少字数';
		case 'English':
			return 'minimum number of words expected';
		case 'French':
			return 'nombre minimum de mots attendus';
		case 'German':
			return 'Mindestanzahl der erwarteten Wörter';
		case 'Italian':
			return 'numero minimo di parole previsto';
		case 'Japanese':
			return '予想される単語の最小数';
		case 'Russian':
			return 'минимальное количество ожидаемых слов';
		case 'Spanish':
			return 'número mínimo de palabras esperado';
		case 'Bulgarian':
			return 'minimum number of words expected';
		case 'Czech':
			return 'minimum number of words expected';
		case 'Danish':
			return 'minimum number of words expected';
		case 'Dutch':
			return 'minimum number of words expected';
		case 'Finnish':
			return 'minimum number of words expected';
		case 'Greek':
			return 'minimum number of words expected';
		case 'Hebrew':
			return 'minimum number of words expected';
		case 'Hungarian':
			return 'minimum number of words expected';
		case 'Indonesian':
			return 'minimum number of words expected';
		case 'Korean':
			return 'minimum number of words expected';
		case 'Norwegian':
			return 'minimum number of words expected';
		case 'Persian':
			return 'minimum number of words expected';
		case 'Polish':
			return 'minimum number of words expected';
		case 'Portuguese':
			return 'minimum number of words expected';
		case 'Romanian':
			return 'minimum number of words expected';
		case 'Slovak':
			return 'minimum number of words expected';
		case 'Swedish':
			return 'minimum number of words expected';
		case 'Thai':
			return 'minimum number of words expected';
		case 'Turkish':
			return 'minimum number of words expected';
		case 'Ukrainian':
			return 'minimum number of words expected';
		default:
			return 'minimum number of words expected';
	}
};
var $author$project$Bubblegum$TextArea$BulmaHelper$minimumWordsTag = F2(
	function (userIsoLanguage, tuple) {
		return $author$project$Bubblegum$TextArea$BulmaHelper$tag(
			{
				style: 'is-dark',
				text: $elm$core$String$fromInt(tuple.a),
				title: $author$project$Bubblegum$TextArea$Internationalization$translateMinimumWords(userIsoLanguage)
			});
	});
var $elm$core$String$words = _String_words;
var $author$project$Bubblegum$TextArea$Helper$numberOfWords = function (someText) {
	return $elm$core$List$length(
		$elm$core$String$words(someText));
};
var $author$project$Bubblegum$TextArea$BulmaHelper$asClass3 = F3(
	function (a, b, c) {
		return $author$project$Bubblegum$TextArea$BulmaHelper$asClass(
			_List_fromArray(
				[c, b, a]));
	});
var $elm$html$Html$Attributes$max = $elm$html$Html$Attributes$stringProperty('max');
var $elm$html$Html$progress = _VirtualDom_node('progress');
var $elm$html$Html$Attributes$value = $elm$html$Html$Attributes$stringProperty('value');
var $author$project$Bubblegum$TextArea$BulmaHelper$progressBar = function (tuple) {
	return A2(
		$elm$html$Html$progress,
		_List_fromArray(
			[
				A3($author$project$Bubblegum$TextArea$BulmaHelper$asClass3, 'progress', 'is-small', tuple.b),
				$elm$html$Html$Attributes$max('100'),
				$elm$html$Html$Attributes$value(tuple.a)
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(tuple.a + '%')
			]));
};
var $elm$core$List$singleton = function (value) {
	return _List_fromArray(
		[value]);
};
var $author$project$Bubblegum$TextArea$Internationalization$translateNumberOfChars = function (language) {
	switch (language.$) {
		case 'Arabic':
			return 'عدد الأحرف ';
		case 'Chinese':
			return '字符數';
		case 'English':
			return 'number of characters';
		case 'French':
			return 'nombre de caractères';
		case 'German':
			return 'Anzahl der Zeichen';
		case 'Italian':
			return 'numero di caratteri';
		case 'Japanese':
			return '文字数';
		case 'Russian':
			return 'количество символов';
		case 'Spanish':
			return 'número de caracteres';
		case 'Bulgarian':
			return 'number of characters';
		case 'Czech':
			return 'number of characters';
		case 'Danish':
			return 'number of characters';
		case 'Dutch':
			return 'number of characters';
		case 'Finnish':
			return 'number of characters';
		case 'Greek':
			return 'number of characters';
		case 'Hebrew':
			return 'number of characters';
		case 'Hungarian':
			return 'number of characters';
		case 'Indonesian':
			return 'number of characters';
		case 'Korean':
			return 'number of characters';
		case 'Norwegian':
			return 'number of characters';
		case 'Persian':
			return 'number of characters';
		case 'Polish':
			return 'number of characters';
		case 'Portuguese':
			return 'number of characters';
		case 'Romanian':
			return 'number of characters';
		case 'Slovak':
			return 'number of characters';
		case 'Swedish':
			return 'number of characters';
		case 'Thai':
			return 'number of characters';
		case 'Turkish':
			return 'number of characters';
		case 'Ukrainian':
			return 'number of characters';
		default:
			return 'number of characters';
	}
};
var $author$project$Bubblegum$TextArea$BulmaHelper$styleTextChar = F3(
	function (userIsoLanguage, number, status) {
		return {
			style: status,
			text: $elm$core$String$fromInt(number),
			title: $author$project$Bubblegum$TextArea$Internationalization$translateNumberOfChars(userIsoLanguage)
		};
	});
var $author$project$Bubblegum$TextArea$Internationalization$translateNumberOfWords = function (language) {
	switch (language.$) {
		case 'Arabic':
			return 'عدد الكلمات';
		case 'Chinese':
			return '字數';
		case 'English':
			return 'number of words';
		case 'French':
			return 'nombre de mots';
		case 'German':
			return 'Anzahl der Wörter';
		case 'Italian':
			return 'numero di parole';
		case 'Japanese':
			return '単語数';
		case 'Russian':
			return 'количество слов';
		case 'Spanish':
			return 'número de palabras';
		case 'Bulgarian':
			return 'number of words';
		case 'Czech':
			return 'number of words';
		case 'Danish':
			return 'number of words';
		case 'Dutch':
			return 'number of words';
		case 'Finnish':
			return 'number of words';
		case 'Greek':
			return 'number of words';
		case 'Hebrew':
			return 'number of words';
		case 'Hungarian':
			return 'number of words';
		case 'Indonesian':
			return 'number of words';
		case 'Korean':
			return 'number of words';
		case 'Norwegian':
			return 'number of words';
		case 'Persian':
			return 'number of words';
		case 'Polish':
			return 'number of words';
		case 'Portuguese':
			return 'number of words';
		case 'Romanian':
			return 'number of words';
		case 'Slovak':
			return 'number of words';
		case 'Swedish':
			return 'number of words';
		case 'Thai':
			return 'number of words';
		case 'Turkish':
			return 'number of words';
		case 'Ukrainian':
			return 'number of words';
		default:
			return 'number of words';
	}
};
var $author$project$Bubblegum$TextArea$BulmaHelper$styleTextWord = F3(
	function (userIsoLanguage, number, status) {
		return {
			style: status,
			text: $elm$core$String$fromInt(number),
			title: $author$project$Bubblegum$TextArea$Internationalization$translateNumberOfWords(userIsoLanguage)
		};
	});
var $author$project$Bubblegum$TextArea$Helper$limit100 = function (value) {
	return (value > 100) ? 100 : value;
};
var $elm$core$Basics$round = _Basics_round;
var $author$project$Bubblegum$TextArea$Helper$calculateRatio = F2(
	function (target, value) {
		return $author$project$Bubblegum$TextArea$Helper$limit100(
			$elm$core$Basics$round((value / target) * 100));
	});
var $author$project$Bubblegum$TextArea$Helper$successRatio = F2(
	function (size, range) {
		return $elm$core$String$fromInt(
			A2($author$project$Bubblegum$TextArea$Helper$calculateRatio, range.a, size));
	});
var $author$project$Bubblegum$TextArea$BulmaHelper$tags = function (list) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('tags')
			]),
		list);
};
var $author$project$Bubblegum$TextArea$BulmaHelper$tagsAddons = function (list) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('tags has-addons')
			]),
		list);
};
var $author$project$Bubblegum$TextArea$Internationalization$translateDangerTag = function (language) {
	switch (language.$) {
		case 'Arabic':
			return 'العلامة التي تشير إلى الخطر ';
		case 'Chinese':
			return '危險標籤';
		case 'English':
			return 'tag indicating danger';
		case 'French':
			return 'étiquette indiquant le danger';
		case 'German':
			return 'Tag der die Gefahr anzeigt';
		case 'Italian':
			return 'tag che indica pericolo';
		case 'Japanese':
			return '危険を示すタグ';
		case 'Russian':
			return 'тег указывающий опасность';
		case 'Spanish':
			return 'etiqueta que indica peligro';
		case 'Bulgarian':
			return 'tag indicating danger';
		case 'Czech':
			return 'tag indicating danger';
		case 'Danish':
			return 'tag indicating danger';
		case 'Dutch':
			return 'tag indicating danger';
		case 'Finnish':
			return 'tag indicating danger';
		case 'Greek':
			return 'tag indicating danger';
		case 'Hebrew':
			return 'tag indicating danger';
		case 'Hungarian':
			return 'tag indicating danger';
		case 'Indonesian':
			return 'tag indicating danger';
		case 'Korean':
			return 'tag indicating danger';
		case 'Norwegian':
			return 'tag indicating danger';
		case 'Persian':
			return 'tag indicating danger';
		case 'Polish':
			return 'tag indicating danger';
		case 'Portuguese':
			return 'tag indicating danger';
		case 'Romanian':
			return 'tag indicating danger';
		case 'Slovak':
			return 'tag indicating danger';
		case 'Swedish':
			return 'tag indicating danger';
		case 'Thai':
			return 'tag indicating danger';
		case 'Turkish':
			return 'tag indicating danger';
		case 'Ukrainian':
			return 'tag indicating danger';
		default:
			return 'tag indicating danger';
	}
};
var $author$project$Bubblegum$TextArea$BulmaHelper$dangerTagText = F2(
	function (userIsoLanguage, text) {
		return {
			style: 'is-danger',
			text: text,
			title: $author$project$Bubblegum$TextArea$Internationalization$translateDangerTag(userIsoLanguage)
		};
	});
var $author$project$Bubblegum$TextArea$BulmaHelper$tagsDanger = F2(
	function (userIsoLanguage, list) {
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			A2(
				$elm$core$List$map,
				$author$project$Bubblegum$TextArea$BulmaHelper$tag,
				A2(
					$elm$core$List$map,
					$author$project$Bubblegum$TextArea$BulmaHelper$dangerTagText(userIsoLanguage),
					list)));
	});
var $author$project$Bubblegum$TextArea$Internationalization$translateInfoTag = function (language) {
	switch (language.$) {
		case 'Arabic':
			return 'علامة المعلومات ';
		case 'Chinese':
			return '信息標籤';
		case 'English':
			return 'information tag';
		case 'French':
			return 'étiquette d\'information';
		case 'German':
			return 'Informationstag';
		case 'Italian':
			return 'tag di informazione';
		case 'Japanese':
			return '情報タグ';
		case 'Russian':
			return 'информационный тег';
		case 'Spanish':
			return 'etiqueta de información';
		case 'Bulgarian':
			return 'information tag';
		case 'Czech':
			return 'information tag';
		case 'Danish':
			return 'information tag';
		case 'Dutch':
			return 'information tag';
		case 'Finnish':
			return 'information tag';
		case 'Greek':
			return 'information tag';
		case 'Hebrew':
			return 'information tag';
		case 'Hungarian':
			return 'information tag';
		case 'Indonesian':
			return 'information tag';
		case 'Korean':
			return 'information tag';
		case 'Norwegian':
			return 'information tag';
		case 'Persian':
			return 'information tag';
		case 'Polish':
			return 'information tag';
		case 'Portuguese':
			return 'information tag';
		case 'Romanian':
			return 'information tag';
		case 'Slovak':
			return 'information tag';
		case 'Swedish':
			return 'information tag';
		case 'Thai':
			return 'information tag';
		case 'Turkish':
			return 'information tag';
		case 'Ukrainian':
			return 'information tag';
		default:
			return 'information tag';
	}
};
var $author$project$Bubblegum$TextArea$BulmaHelper$infoText = F2(
	function (userIsoLanguage, text) {
		return {
			style: 'is-dark',
			text: text,
			title: $author$project$Bubblegum$TextArea$Internationalization$translateInfoTag(userIsoLanguage)
		};
	});
var $author$project$Bubblegum$TextArea$BulmaHelper$tagsInfo = F2(
	function (userIsoLanguage, list) {
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			A2(
				$elm$core$List$map,
				$author$project$Bubblegum$TextArea$BulmaHelper$tag,
				A2(
					$elm$core$List$map,
					$author$project$Bubblegum$TextArea$BulmaHelper$infoText(userIsoLanguage),
					list)));
	});
var $author$project$Bubblegum$TextArea$Internationalization$translateSuccessTag = function (language) {
	switch (language.$) {
		case 'Arabic':
			return 'العلامة التي تشير إلى النجاح ';
		case 'Chinese':
			return '成功標籤';
		case 'English':
			return 'tag indicating success';
		case 'French':
			return 'étiquette indiquant le succès';
		case 'German':
			return 'Tag der den Erfolg anzeigt';
		case 'Italian':
			return 'tag che indica il successo';
		case 'Japanese':
			return '成功を示すタグ';
		case 'Russian':
			return 'тег указывающий успех';
		case 'Spanish':
			return 'etiqueta que indica el éxito';
		case 'Bulgarian':
			return 'tag indicating success';
		case 'Czech':
			return 'tag indicating success';
		case 'Danish':
			return 'tag indicating success';
		case 'Dutch':
			return 'tag indicating success';
		case 'Finnish':
			return 'tag indicating success';
		case 'Greek':
			return 'tag indicating success';
		case 'Hebrew':
			return 'tag indicating success';
		case 'Hungarian':
			return 'tag indicating success';
		case 'Indonesian':
			return 'tag indicating success';
		case 'Korean':
			return 'tag indicating success';
		case 'Norwegian':
			return 'tag indicating success';
		case 'Persian':
			return 'tag indicating success';
		case 'Polish':
			return 'tag indicating success';
		case 'Portuguese':
			return 'tag indicating success';
		case 'Romanian':
			return 'tag indicating success';
		case 'Slovak':
			return 'tag indicating success';
		case 'Swedish':
			return 'tag indicating success';
		case 'Thai':
			return 'tag indicating success';
		case 'Turkish':
			return 'tag indicating success';
		case 'Ukrainian':
			return 'tag indicating success';
		default:
			return 'tag indicating success';
	}
};
var $author$project$Bubblegum$TextArea$BulmaHelper$successTagText = F2(
	function (userIsoLanguage, text) {
		return {
			style: 'is-success',
			text: text,
			title: $author$project$Bubblegum$TextArea$Internationalization$translateSuccessTag(userIsoLanguage)
		};
	});
var $author$project$Bubblegum$TextArea$BulmaHelper$tagsSuccess = F2(
	function (userIsoLanguage, list) {
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			A2(
				$elm$core$List$map,
				$author$project$Bubblegum$TextArea$BulmaHelper$tag,
				A2(
					$elm$core$List$map,
					$author$project$Bubblegum$TextArea$BulmaHelper$successTagText(userIsoLanguage),
					list)));
	});
var $author$project$Bubblegum$TextArea$Internationalization$translateWarningTag = function (language) {
	switch (language.$) {
		case 'Arabic':
			return 'العلامة التي تشير إلى التحذير ';
		case 'Chinese':
			return '警告標籤';
		case 'English':
			return 'tag indicating warning';
		case 'French':
			return 'étiquette indiquant l\'avertissement';
		case 'German':
			return 'Tag der die Warnung anzeigt';
		case 'Italian':
			return 'tag che indica avvertimento';
		case 'Japanese':
			return '警告を示すタグ';
		case 'Russian':
			return 'тег указывающий предупреждение';
		case 'Spanish':
			return 'etiqueta que indica advertencia';
		case 'Bulgarian':
			return 'tag indicating warning';
		case 'Czech':
			return 'tag indicating warning';
		case 'Danish':
			return 'tag indicating warning';
		case 'Dutch':
			return 'tag indicating warning';
		case 'Finnish':
			return 'tag indicating warning';
		case 'Greek':
			return 'tag indicating warning';
		case 'Hebrew':
			return 'tag indicating warning';
		case 'Hungarian':
			return 'tag indicating warning';
		case 'Indonesian':
			return 'tag indicating warning';
		case 'Korean':
			return 'tag indicating warning';
		case 'Norwegian':
			return 'tag indicating warning';
		case 'Persian':
			return 'tag indicating warning';
		case 'Polish':
			return 'tag indicating warning';
		case 'Portuguese':
			return 'tag indicating warning';
		case 'Romanian':
			return 'tag indicating warning';
		case 'Slovak':
			return 'tag indicating warning';
		case 'Swedish':
			return 'tag indicating warning';
		case 'Thai':
			return 'tag indicating warning';
		case 'Turkish':
			return 'tag indicating warning';
		case 'Ukrainian':
			return 'tag indicating warning';
		default:
			return 'tag indicating warning';
	}
};
var $author$project$Bubblegum$TextArea$BulmaHelper$warningTagText = F2(
	function (userIsoLanguage, text) {
		return {
			style: 'is-warning',
			text: text,
			title: $author$project$Bubblegum$TextArea$Internationalization$translateWarningTag(userIsoLanguage)
		};
	});
var $author$project$Bubblegum$TextArea$BulmaHelper$tagsWarning = F2(
	function (userIsoLanguage, list) {
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			A2(
				$elm$core$List$map,
				$author$project$Bubblegum$TextArea$BulmaHelper$tag,
				A2(
					$elm$core$List$map,
					$author$project$Bubblegum$TextArea$BulmaHelper$warningTagText(userIsoLanguage),
					list)));
	});
var $flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$checkOrNone = F2(
	function (checker, ra) {
		switch (ra.$) {
			case 'None':
				return $flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$None;
			case 'Warning':
				var msg = ra.a;
				return $flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$Warning(msg);
			default:
				var value = ra.a;
				return checker(value) ? $flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$Valid(value) : $flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$None;
		}
	});
var $flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$or = F2(
	function (ma, mb) {
		switch (ma.$) {
			case 'None':
				return mb;
			case 'Valid':
				return ma;
			default:
				var msg = ma.a;
				return $flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$Warning(msg);
		}
	});
var $flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$trueMapToConstant = F2(
	function (_const, outcome) {
		switch (outcome.$) {
			case 'None':
				return $flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$None;
			case 'Warning':
				var msg = outcome.a;
				return $flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$Warning(msg);
			default:
				var value = outcome.a;
				return value ? $flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$Valid(_const) : $flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$None;
		}
	});
var $flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$withDefault = F2(
	function (def, outcome) {
		switch (outcome.$) {
			case 'Valid':
				var a = outcome.a;
				return $flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$Valid(a);
			case 'None':
				return $flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$Valid(def);
			default:
				var msg = outcome.a;
				return $flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$Warning(msg);
		}
	});
var $author$project$Bubblegum$TextArea$Helper$themeProgress = F2(
	function (a, b) {
		return A2(
			$flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$withDefault,
			'is-info',
			A2(
				$flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$or,
				A2(
					$flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$trueMapToConstant,
					'is-success',
					A2($flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$checkOrNone, $elm$core$Basics$identity, a)),
				A2(
					$flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$trueMapToConstant,
					'is-danger',
					A2($flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$checkOrNone, $elm$core$Basics$identity, b))));
	});
var $author$project$Bubblegum$TextArea$Internationalization$pickSingularOrPlural = F2(
	function (howMany, singularOrPlural) {
		return (howMany < 2) ? singularOrPlural.a : singularOrPlural.b;
	});
var $author$project$Bubblegum$TextArea$Internationalization$translateWord = F2(
	function (language, howMany) {
		switch (language.$) {
			case 'Arabic':
				return A2(
					$author$project$Bubblegum$TextArea$Internationalization$pickSingularOrPlural,
					howMany,
					_Utils_Tuple2('كلم', 'كلم'));
			case 'Chinese':
				return A2(
					$author$project$Bubblegum$TextArea$Internationalization$pickSingularOrPlural,
					howMany,
					_Utils_Tuple2('字', '字'));
			case 'English':
				return A2(
					$author$project$Bubblegum$TextArea$Internationalization$pickSingularOrPlural,
					howMany,
					_Utils_Tuple2('word', 'word'));
			case 'French':
				return A2(
					$author$project$Bubblegum$TextArea$Internationalization$pickSingularOrPlural,
					howMany,
					_Utils_Tuple2('mot', 'mot'));
			case 'German':
				return A2(
					$author$project$Bubblegum$TextArea$Internationalization$pickSingularOrPlural,
					howMany,
					_Utils_Tuple2('wort', 'wort'));
			case 'Italian':
				return A2(
					$author$project$Bubblegum$TextArea$Internationalization$pickSingularOrPlural,
					howMany,
					_Utils_Tuple2('parola', 'parola'));
			case 'Japanese':
				return A2(
					$author$project$Bubblegum$TextArea$Internationalization$pickSingularOrPlural,
					howMany,
					_Utils_Tuple2('ワード', 'ワード'));
			case 'Russian':
				return A2(
					$author$project$Bubblegum$TextArea$Internationalization$pickSingularOrPlural,
					howMany,
					_Utils_Tuple2('слово', 'слово'));
			case 'Spanish':
				return A2(
					$author$project$Bubblegum$TextArea$Internationalization$pickSingularOrPlural,
					howMany,
					_Utils_Tuple2('palabra', 'palabra'));
			case 'Bulgarian':
				return A2(
					$author$project$Bubblegum$TextArea$Internationalization$pickSingularOrPlural,
					howMany,
					_Utils_Tuple2('word', 'word'));
			case 'Czech':
				return A2(
					$author$project$Bubblegum$TextArea$Internationalization$pickSingularOrPlural,
					howMany,
					_Utils_Tuple2('word', 'word'));
			case 'Danish':
				return A2(
					$author$project$Bubblegum$TextArea$Internationalization$pickSingularOrPlural,
					howMany,
					_Utils_Tuple2('word', 'word'));
			case 'Dutch':
				return A2(
					$author$project$Bubblegum$TextArea$Internationalization$pickSingularOrPlural,
					howMany,
					_Utils_Tuple2('word', 'word'));
			case 'Finnish':
				return A2(
					$author$project$Bubblegum$TextArea$Internationalization$pickSingularOrPlural,
					howMany,
					_Utils_Tuple2('word', 'word'));
			case 'Greek':
				return A2(
					$author$project$Bubblegum$TextArea$Internationalization$pickSingularOrPlural,
					howMany,
					_Utils_Tuple2('word', 'word'));
			case 'Hebrew':
				return A2(
					$author$project$Bubblegum$TextArea$Internationalization$pickSingularOrPlural,
					howMany,
					_Utils_Tuple2('word', 'word'));
			case 'Hungarian':
				return A2(
					$author$project$Bubblegum$TextArea$Internationalization$pickSingularOrPlural,
					howMany,
					_Utils_Tuple2('word', 'word'));
			case 'Indonesian':
				return A2(
					$author$project$Bubblegum$TextArea$Internationalization$pickSingularOrPlural,
					howMany,
					_Utils_Tuple2('word', 'word'));
			case 'Korean':
				return A2(
					$author$project$Bubblegum$TextArea$Internationalization$pickSingularOrPlural,
					howMany,
					_Utils_Tuple2('word', 'word'));
			case 'Norwegian':
				return A2(
					$author$project$Bubblegum$TextArea$Internationalization$pickSingularOrPlural,
					howMany,
					_Utils_Tuple2('word', 'word'));
			case 'Persian':
				return A2(
					$author$project$Bubblegum$TextArea$Internationalization$pickSingularOrPlural,
					howMany,
					_Utils_Tuple2('word', 'word'));
			case 'Polish':
				return A2(
					$author$project$Bubblegum$TextArea$Internationalization$pickSingularOrPlural,
					howMany,
					_Utils_Tuple2('word', 'word'));
			case 'Portuguese':
				return A2(
					$author$project$Bubblegum$TextArea$Internationalization$pickSingularOrPlural,
					howMany,
					_Utils_Tuple2('word', 'word'));
			case 'Romanian':
				return A2(
					$author$project$Bubblegum$TextArea$Internationalization$pickSingularOrPlural,
					howMany,
					_Utils_Tuple2('word', 'word'));
			case 'Slovak':
				return A2(
					$author$project$Bubblegum$TextArea$Internationalization$pickSingularOrPlural,
					howMany,
					_Utils_Tuple2('word', 'word'));
			case 'Swedish':
				return A2(
					$author$project$Bubblegum$TextArea$Internationalization$pickSingularOrPlural,
					howMany,
					_Utils_Tuple2('word', 'word'));
			case 'Thai':
				return A2(
					$author$project$Bubblegum$TextArea$Internationalization$pickSingularOrPlural,
					howMany,
					_Utils_Tuple2('word', 'word'));
			case 'Turkish':
				return A2(
					$author$project$Bubblegum$TextArea$Internationalization$pickSingularOrPlural,
					howMany,
					_Utils_Tuple2('word', 'word'));
			case 'Ukrainian':
				return A2(
					$author$project$Bubblegum$TextArea$Internationalization$pickSingularOrPlural,
					howMany,
					_Utils_Tuple2('word', 'word'));
			default:
				return A2(
					$author$project$Bubblegum$TextArea$Internationalization$pickSingularOrPlural,
					howMany,
					_Utils_Tuple2('word', 'word'));
		}
	});
var $author$project$Bubblegum$TextArea$Helper$tupleify = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var $author$project$Bubblegum$TextArea$Internationalization$translateUnit = function (language) {
	switch (language.$) {
		case 'Arabic':
			return 'الوحدة ';
		case 'Chinese':
			return '單位';
		case 'English':
			return 'unit';
		case 'French':
			return 'unité';
		case 'German':
			return 'Einheit';
		case 'Italian':
			return 'unità';
		case 'Japanese':
			return '単位';
		case 'Russian':
			return 'единица';
		case 'Spanish':
			return 'unidad';
		case 'Bulgarian':
			return 'unit';
		case 'Czech':
			return 'unit';
		case 'Danish':
			return 'unit';
		case 'Dutch':
			return 'unit';
		case 'Finnish':
			return 'unit';
		case 'Greek':
			return 'unit';
		case 'Hebrew':
			return 'unit';
		case 'Hungarian':
			return 'unit';
		case 'Indonesian':
			return 'unit';
		case 'Korean':
			return 'unit';
		case 'Norwegian':
			return 'unit';
		case 'Persian':
			return 'unit';
		case 'Polish':
			return 'unit';
		case 'Portuguese':
			return 'unit';
		case 'Romanian':
			return 'unit';
		case 'Slovak':
			return 'unit';
		case 'Swedish':
			return 'unit';
		case 'Thai':
			return 'unit';
		case 'Turkish':
			return 'unit';
		case 'Ukrainian':
			return 'unit';
		default:
			return 'unit';
	}
};
var $author$project$Bubblegum$TextArea$BulmaHelper$unitTag = F2(
	function (userIsoLanguage, value) {
		return $author$project$Bubblegum$TextArea$BulmaHelper$tag(
			{
				style: 'is-light',
				text: value,
				title: $author$project$Bubblegum$TextArea$Internationalization$translateUnit(userIsoLanguage)
			});
	});
var $author$project$Bubblegum$TextArea$Widget$displayTextInfo = F4(
	function (adapter, userSettings, settings, state) {
		var userIsoLanguage = $author$project$Bubblegum$TextArea$Helper$getUserIsoLanguage(userSettings);
		var optSuccessWordRange = $author$project$Bubblegum$TextArea$VocabularyHelper$getSuccessWordRange(settings);
		var optSuccessCharRange = $author$project$Bubblegum$TextArea$VocabularyHelper$getSuccessCharRange(settings);
		var contentWordLength = A2(
			$flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$map,
			$author$project$Bubblegum$TextArea$Helper$numberOfWords,
			$author$project$Bubblegum$TextArea$VocabularyHelper$getContent(state));
		var labelForWord = A2(
			$elm$core$Maybe$withDefault,
			'',
			$flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$toMaybe(
				A2(
					$flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$map,
					$author$project$Bubblegum$TextArea$Internationalization$translateWord(userIsoLanguage),
					contentWordLength)));
		var themeWordBasedOnRange = A2(
			$author$project$Bubblegum$TextArea$Helper$themeProgress,
			A3($flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$map2, $author$project$Bubblegum$TextArea$Helper$successRange, contentWordLength, optSuccessWordRange),
			A3(
				$flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$map2,
				$author$project$Bubblegum$TextArea$Helper$dangerRange,
				contentWordLength,
				$author$project$Bubblegum$TextArea$VocabularyHelper$getDangerWordRange(settings)));
		var wordLengthAndStatus = A3(
			$flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$map2,
			$author$project$Bubblegum$TextArea$BulmaHelper$styleTextWord(userIsoLanguage),
			contentWordLength,
			themeWordBasedOnRange);
		var wordRatioAndStatus = A3(
			$flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$map2,
			$author$project$Bubblegum$TextArea$Helper$tupleify,
			A3($flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$map2, $author$project$Bubblegum$TextArea$Helper$successRatio, contentWordLength, optSuccessWordRange),
			themeWordBasedOnRange);
		var contentCharLength = A2(
			$flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$map,
			$elm$core$String$length,
			$author$project$Bubblegum$TextArea$VocabularyHelper$getContent(state));
		var themeCharBasedOnRange = A2(
			$author$project$Bubblegum$TextArea$Helper$themeProgress,
			A3($flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$map2, $author$project$Bubblegum$TextArea$Helper$successRange, contentCharLength, optSuccessCharRange),
			A3(
				$flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$map2,
				$author$project$Bubblegum$TextArea$Helper$dangerRange,
				contentCharLength,
				$author$project$Bubblegum$TextArea$VocabularyHelper$getDangerCharRange(settings)));
		var charRatioAndStatus = A3(
			$flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$map2,
			$author$project$Bubblegum$TextArea$Helper$tupleify,
			A3($flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$map2, $author$project$Bubblegum$TextArea$Helper$successRatio, contentCharLength, optSuccessCharRange),
			themeCharBasedOnRange);
		var charLengthAndStatus = A3(
			$flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$map2,
			$author$project$Bubblegum$TextArea$BulmaHelper$styleTextChar(userIsoLanguage),
			contentCharLength,
			themeCharBasedOnRange);
		var addWordTargetLength = A2(
			$author$project$Bubblegum$TextArea$BulmaHelper$appendHtmlIfSuccess,
			$author$project$Bubblegum$TextArea$BulmaHelper$minimumWordsTag(userIsoLanguage),
			optSuccessWordRange);
		var addWordProgressBar = A2($author$project$Bubblegum$TextArea$BulmaHelper$appendHtmlIfSuccess, $author$project$Bubblegum$TextArea$BulmaHelper$progressBar, wordRatioAndStatus);
		var addWordContentLength = A2($author$project$Bubblegum$TextArea$BulmaHelper$appendHtmlIfSuccess, $author$project$Bubblegum$TextArea$BulmaHelper$tag, wordLengthAndStatus);
		var addWarningTags = A2(
			$author$project$Bubblegum$TextArea$BulmaHelper$appendHtmlIfSuccess,
			$author$project$Bubblegum$TextArea$BulmaHelper$tagsWarning(userIsoLanguage),
			$author$project$Bubblegum$TextArea$VocabularyHelper$getWarningTag(state));
		var addTagsInfo = A2(
			$author$project$Bubblegum$TextArea$BulmaHelper$appendHtmlIfSuccess,
			$author$project$Bubblegum$TextArea$BulmaHelper$tagsInfo(userIsoLanguage),
			$author$project$Bubblegum$TextArea$VocabularyHelper$getTag(settings));
		var addSuccessTags = A2(
			$author$project$Bubblegum$TextArea$BulmaHelper$appendHtmlIfSuccess,
			$author$project$Bubblegum$TextArea$BulmaHelper$tagsSuccess(userIsoLanguage),
			$author$project$Bubblegum$TextArea$VocabularyHelper$getSuccessTag(state));
		var addLabelForWord = function (a) {
			return _Utils_ap(
				a,
				_List_fromArray(
					[
						A2($author$project$Bubblegum$TextArea$BulmaHelper$unitTag, userIsoLanguage, labelForWord)
					]));
		};
		var addWordInfo = $author$project$Bubblegum$TextArea$BulmaHelper$tagsAddons(
			addLabelForWord(
				addWordTargetLength(
					addWordContentLength(_List_Nil))));
		var addDangerTags = A2(
			$author$project$Bubblegum$TextArea$BulmaHelper$appendHtmlIfSuccess,
			$author$project$Bubblegum$TextArea$BulmaHelper$tagsDanger(userIsoLanguage),
			$author$project$Bubblegum$TextArea$VocabularyHelper$getDangerTag(state));
		var addCharTargetLength = A2(
			$author$project$Bubblegum$TextArea$BulmaHelper$appendHtmlIfSuccess,
			$author$project$Bubblegum$TextArea$BulmaHelper$minimumCharsTag(userIsoLanguage),
			optSuccessCharRange);
		var addCharProgressBar = A2($author$project$Bubblegum$TextArea$BulmaHelper$appendHtmlIfSuccess, $author$project$Bubblegum$TextArea$BulmaHelper$progressBar, charRatioAndStatus);
		var addCharContentLength = A2($author$project$Bubblegum$TextArea$BulmaHelper$appendHtmlIfSuccess, $author$project$Bubblegum$TextArea$BulmaHelper$tag, charLengthAndStatus);
		var addCharInfo = $author$project$Bubblegum$TextArea$BulmaHelper$tagsAddons(
			addCharTargetLength(
				addCharContentLength(_List_Nil)));
		return $author$project$Bubblegum$TextArea$BulmaHelper$groupFields(
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('bubblegum-textarea__wordinfo control')
						]),
					addWordProgressBar(
						$elm$core$List$singleton(addWordInfo))),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('bubblegum-textarea__charinfo control')
						]),
					addCharProgressBar(
						$elm$core$List$singleton(addCharInfo))),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('control')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('\u00A0\u00A0\u00A0\u00A0')
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('bubblegum-textarea__tagsinfo control')
						]),
					_List_fromArray(
						[
							$author$project$Bubblegum$TextArea$BulmaHelper$tags(
							addSuccessTags(
								addWarningTags(
									addDangerTags(
										addTagsInfo(_List_Nil)))))
						]))
				]));
	});
var $author$project$Bubblegum$TextArea$HelperLimits$limitMediumRangeNotEmpty = _Utils_Tuple2(1, 128);
var $author$project$Bubblegum$TextArea$VocabularyHelper$getContentId = function (settings) {
	return A2(
		$flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$withinStringCharsRange,
		$author$project$Bubblegum$TextArea$HelperLimits$limitMediumRangeNotEmpty,
		A2($author$project$Bubblegum$TextArea$EntityHelper$findString, $author$project$Bubblegum$TextArea$Vocabulary$ui_contentId, settings.attributes));
};
var $author$project$Bubblegum$TextArea$VocabularyHelper$getContentLanguage = function (settings) {
	return A2(
		$flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$withinStringCharsRange,
		$author$project$Bubblegum$TextArea$HelperLimits$limitSmallRangeNotEmpty,
		A2($author$project$Bubblegum$TextArea$EntityHelper$findString, $author$project$Bubblegum$TextArea$Vocabulary$ui_contentLanguage, settings.attributes));
};
var $author$project$Bubblegum$TextArea$VocabularyHelper$getDangerHelp = function (settings) {
	return A2(
		$flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$withinStringCharsRange,
		$author$project$Bubblegum$TextArea$HelperLimits$limitMediumRangeNotEmpty,
		A2($author$project$Bubblegum$TextArea$EntityHelper$findString, $author$project$Bubblegum$TextArea$Vocabulary$ui_dangerHelp, settings.attributes));
};
var $author$project$Bubblegum$TextArea$VocabularyHelper$getHelp = function (settings) {
	return A2(
		$flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$withinStringCharsRange,
		$author$project$Bubblegum$TextArea$HelperLimits$limitMediumRangeNotEmpty,
		A2($author$project$Bubblegum$TextArea$EntityHelper$findString, $author$project$Bubblegum$TextArea$Vocabulary$ui_help, settings.attributes));
};
var $author$project$Bubblegum$TextArea$VocabularyHelper$getLabel = function (settings) {
	return A2(
		$flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$withinStringCharsRange,
		$author$project$Bubblegum$TextArea$HelperLimits$limitMediumRangeNotEmpty,
		A2($author$project$Bubblegum$TextArea$EntityHelper$findString, $author$project$Bubblegum$TextArea$Vocabulary$ui_label, settings.attributes));
};
var $author$project$Bubblegum$TextArea$VocabularyHelper$getPlaceholder = function (settings) {
	return A2(
		$flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$withinStringCharsRange,
		$author$project$Bubblegum$TextArea$HelperLimits$limitMediumRangeNotEmpty,
		A2($author$project$Bubblegum$TextArea$EntityHelper$findString, $author$project$Bubblegum$TextArea$Vocabulary$ui_placeholder, settings.attributes));
};
var $elm$html$Html$Attributes$id = $elm$html$Html$Attributes$stringProperty('id');
var $author$project$Bubblegum$TextArea$BulmaHelper$infoHelp = function (helpText) {
	return A2(
		$elm$html$Html$p,
		_List_fromArray(
			[
				A2($author$project$Bubblegum$TextArea$BulmaHelper$asClass2, 'help', 'is-info')
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(helpText)
			]));
};
var $elm$core$List$member = F2(
	function (x, xs) {
		return A2(
			$elm$core$List$any,
			function (a) {
				return _Utils_eq(a, x);
			},
			xs);
	});
var $elm$core$String$toLower = _String_toLower;
var $flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$isBool = function (value) {
	return A2(
		$elm$core$List$member,
		$elm$core$String$toLower(value),
		_List_fromArray(
			['true', 'false']));
};
var $flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$stringToBool = function (value) {
	return value === 'true';
};
var $flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$asBool = function (outcome) {
	return A2(
		$flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$map,
		$flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$stringToBool,
		A3($flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$check, $flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$isBool, 'unsatisfied-constraint:bool', outcome));
};
var $author$project$Bubblegum$TextArea$EntityHelper$findBool = F2(
	function (key, attributes) {
		return $flarebyte$bubblegum_entity$Bubblegum$Entity$Validation$asBool(
			A2($author$project$Bubblegum$TextArea$EntityHelper$findString, key, attributes));
	});
var $author$project$Bubblegum$TextArea$VocabularyHelper$isContentRightToLeft = function (settings) {
	return A2($author$project$Bubblegum$TextArea$EntityHelper$findBool, $author$project$Bubblegum$TextArea$Vocabulary$ui_contentRightToLeft, settings.attributes);
};
var $author$project$Bubblegum$TextArea$VocabularyHelper$isUserRightToLeft = function (settings) {
	return A2($author$project$Bubblegum$TextArea$EntityHelper$findBool, $author$project$Bubblegum$TextArea$Vocabulary$ui_userRightToLeft, settings.attributes);
};
var $elm$html$Html$Attributes$lang = $elm$html$Html$Attributes$stringProperty('lang');
var $author$project$Bubblegum$TextArea$BulmaHelper$rtlOrLtr = function (value) {
	return value ? 'rtl' : 'ltr';
};
var $author$project$Bubblegum$TextArea$BulmaHelper$mainBox = F3(
	function (language, rtl, list) {
		return A2(
			$elm$html$Html$div,
			A3(
				$author$project$Bubblegum$TextArea$BulmaHelper$appendAttributeIfSuccess,
				$elm$html$Html$Attributes$dir,
				A2($flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$map, $author$project$Bubblegum$TextArea$BulmaHelper$rtlOrLtr, rtl),
				A3(
					$author$project$Bubblegum$TextArea$BulmaHelper$appendAttributeIfSuccess,
					$elm$html$Html$Attributes$lang,
					language,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('bubblegum-textarea__widget box is-marginless is-paddingless is-shadowless has-addons')
						]))),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('field')
						]),
					list)
				]));
	});
var $elm$html$Html$Events$alwaysStop = function (x) {
	return _Utils_Tuple2(x, true);
};
var $elm$virtual_dom$VirtualDom$MayStopPropagation = function (a) {
	return {$: 'MayStopPropagation', a: a};
};
var $elm$html$Html$Events$stopPropagationOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayStopPropagation(decoder));
	});
var $elm$json$Json$Decode$field = _Json_decodeField;
var $elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
	});
var $elm$json$Json$Decode$string = _Json_decodeString;
var $elm$html$Html$Events$targetValue = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'value']),
	$elm$json$Json$Decode$string);
var $elm$html$Html$Events$onInput = function (tagger) {
	return A2(
		$elm$html$Html$Events$stopPropagationOn,
		'input',
		A2(
			$elm$json$Json$Decode$map,
			$elm$html$Html$Events$alwaysStop,
			A2($elm$json$Json$Decode$map, tagger, $elm$html$Html$Events$targetValue)));
};
var $elm$html$Html$Attributes$placeholder = $elm$html$Html$Attributes$stringProperty('placeholder');
var $elm$html$Html$textarea = _VirtualDom_node('textarea');
var $author$project$Bubblegum$TextArea$BulmaHelper$widgetLabel = function (widgetText) {
	return A2(
		$elm$html$Html$label,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('label')
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(widgetText)
			]));
};
var $author$project$Bubblegum$TextArea$Widget$view = F4(
	function (adapter, userSettings, settings, state) {
		var addValue = A2(
			$author$project$Bubblegum$TextArea$BulmaHelper$appendAttributeIfSuccess,
			$elm$html$Html$Attributes$value,
			$author$project$Bubblegum$TextArea$VocabularyHelper$getContent(state));
		var addRows = A2(
			$author$project$Bubblegum$TextArea$BulmaHelper$appendAttributeIfSuccess,
			$elm$html$Html$Attributes$attribute('rows'),
			A2(
				$flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$map,
				$author$project$Bubblegum$TextArea$Helper$calculateRows,
				$author$project$Bubblegum$TextArea$VocabularyHelper$getContent(state)));
		var addPlaceholder = A2(
			$author$project$Bubblegum$TextArea$BulmaHelper$appendAttributeIfSuccess,
			$elm$html$Html$Attributes$placeholder,
			$author$project$Bubblegum$TextArea$VocabularyHelper$getPlaceholder(settings));
		var addLabel = A2(
			$author$project$Bubblegum$TextArea$BulmaHelper$appendHtmlIfSuccess,
			$author$project$Bubblegum$TextArea$BulmaHelper$widgetLabel,
			$author$project$Bubblegum$TextArea$VocabularyHelper$getLabel(settings));
		var addHelp = A2(
			$author$project$Bubblegum$TextArea$BulmaHelper$appendHtmlIfSuccess,
			$author$project$Bubblegum$TextArea$BulmaHelper$infoHelp,
			$author$project$Bubblegum$TextArea$VocabularyHelper$getHelp(settings));
		var addDangerHelp = A2(
			$author$project$Bubblegum$TextArea$BulmaHelper$appendHtmlIfSuccess,
			$author$project$Bubblegum$TextArea$BulmaHelper$dangerHelp,
			$author$project$Bubblegum$TextArea$VocabularyHelper$getDangerHelp(state));
		var addContentRtl = A2(
			$author$project$Bubblegum$TextArea$BulmaHelper$appendAttributeIfSuccess,
			$elm$html$Html$Attributes$dir,
			A2(
				$flarebyte$bubblegum_entity$Bubblegum$Entity$Outcome$map,
				$author$project$Bubblegum$TextArea$BulmaHelper$rtlOrLtr,
				$author$project$Bubblegum$TextArea$VocabularyHelper$isContentRightToLeft(userSettings)));
		var addContentLanguage = A2(
			$author$project$Bubblegum$TextArea$BulmaHelper$appendAttributeIfSuccess,
			$elm$html$Html$Attributes$lang,
			$author$project$Bubblegum$TextArea$VocabularyHelper$getContentLanguage(userSettings));
		var addContentId = A2(
			$author$project$Bubblegum$TextArea$BulmaHelper$appendAttributeIfSuccess,
			$elm$html$Html$Attributes$id,
			$author$project$Bubblegum$TextArea$VocabularyHelper$getContentId(state));
		return A3(
			$author$project$Bubblegum$TextArea$BulmaHelper$mainBox,
			$author$project$Bubblegum$TextArea$VocabularyHelper$getUserLanguage(userSettings),
			$author$project$Bubblegum$TextArea$VocabularyHelper$isUserRightToLeft(userSettings),
			addHelp(
				addDangerHelp(
					_Utils_ap(
						addLabel(_List_Nil),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$div,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('control')
									]),
								_List_fromArray(
									[
										A2(
										$elm$html$Html$textarea,
										addRows(
											addValue(
												addContentRtl(
													addContentLanguage(
														addPlaceholder(
															addContentId(
																_List_fromArray(
																	[
																		$elm$html$Html$Attributes$class('bubblegum-textarea__input textarea is-marginless is-paddingless is-shadowless'),
																		$elm$html$Html$Events$onInput(adapter.onInput)
																	]))))))),
										_List_Nil),
										A4($author$project$Bubblegum$TextArea$Widget$displayTextInfo, adapter, userSettings, settings, state)
									]))
							])))));
	});
var $author$project$WidgetBuilder$viewWidget = function (model) {
	return A4($author$project$Bubblegum$TextArea$Widget$view, $author$project$WidgetBuilder$adapter, model.userSettings, model.settings, model.state);
};
var $author$project$App$view = function (model) {
	return A2(
		$elm$html$Html$section,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('section')
			]),
		_List_fromArray(
			[
				$author$project$WidgetDocView$viewHeader,
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('container')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$p,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text(' ... ')
							]))
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('columns')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('column is-three-fifths')
							]),
						_List_fromArray(
							[
								$author$project$WidgetBuilder$viewWidget(model)
							])),
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('column')
							]),
						_List_fromArray(
							[
								$author$project$WidgetDocView$viewSettings(model)
							]))
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('container')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$p,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text(' ... ')
							]))
					]))
			]));
};
var $author$project$App$main = $elm$browser$Browser$sandbox(
	{init: $author$project$AppModel$reset, update: $author$project$App$update, view: $author$project$App$view});
_Platform_export({'App':{'init':$author$project$App$main(
	$elm$json$Json$Decode$succeed(_Utils_Tuple0))(0)}});}(this));