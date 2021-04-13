// ## KISSY MINI
//
// KISSY MINI 鏄潰鍚戠Щ鍔ㄧ粓绔殑KISSY鐦﹁韩鐗堬紝鍦ㄤ繚鎸丄PI鍜孠ISSY涓€鑷寸殑鎯呭喌涓嬶紝鐫€閲嶄紭鍖栥€佺簿绠€鏍稿績妯″潡浠ｇ爜锛屼繚璇侀珮鍙敤鐨勫悓鏃跺仛鍒拌韩鏉愯嫍鏉°€�
//
// KISSY MINI 鎻愪緵`mini.js`鍜宍mini-full.js`涓や釜绉嶅瓙锛屽叾涓�
// - **[mini.js](../build/mini.js)**(8k)锛歚core`銆乣node`銆乣event`銆乣io`
// - **[mini-full.js](../build/mini-full.js)**(13k)锛歚core`銆乣node`銆乣event`銆乣io`銆乣loader`
//
// KISSY MINI 鎻愪緵鐨勫畼鏂规ā鍧楁湁
//
//| 妯″潡鍚�                 | 鍐呯疆 				| 璇存槑			|
//| --------------------     |:--------------------:|:--------------------:|
//| core             | YES                  | 鏋勯€燢ISSY鍏ㄥ眬瀵硅薄  |
//| node			| YES			|Node妯″潡   |
//| io		| YES			|Ajax妯″潡   |
//| event			| YES			|Event 妯″潡   |
//| loader			| YES<br/>(`mini-full.js`)			|绠€鐗堢殑loader	|
//| base			|			|KISSY Base 妯″潡   |
//| ua			|			|娴忚鍣ㄥ梾鎺㈡ā鍧�   |
//| uri			|			|KISSY URI 妯″潡   |
//| anim			|			|鍔ㄧ敾妯″潡   |
//| lang			|			|璇█宸ュ叿鏂规硶闆嗗悎   |
//| juicer			|			|Juicer妯＄増娓叉煋寮曟搸   |
//| form			|			|Form琛ㄥ崟澶勭悊   |
//|              |&nbsp;                | &nbsp;            |
//
// 鍦ㄤ娇鐢�**mini-full.js**鏃讹紝鍙互閫氳繃`KISSY.use('ua')`鏉ユ媺鍙栭潪鍐呯疆鐨勫畼鏂规ā鍧椼€�
//
// ## Core 妯″潡
/*
 * KISSY MINI
 * by: @kissyteam
 * created: 2014-02-12
 * contains: core node event io
 * license: MIT
 **/
;(function(root) {

    var S = {
        version: '0.2.1',
        Env: {
            host: root
        }
    };

    var arrayProto = Array.prototype,
        class2type = {},
        doc = document;

// **S.map(els,function(items){...})**
//
// 閬嶅巻鏁扮粍锛屾暟缁勭粨鏋滄槸鍦ㄥ姣忎釜鍘熸暟缁勫厓绱犺皟鐢╢n鐨勮繑鍥炲€�.
// - els:闇€瑕侀亶鍘嗙殑鏁扮粍
// - fn:鑳藉鏍规嵁鍘熸暟缁勫綋鍓嶅厓绱犺繑鍥炴柊鏁扮粍鍏冪礌鐨勫嚱鏁�.
//
//	```
//	S.map(["foot", "goose", "moose"],function(single){
//		return single.replace(/o/g, "e");
//	}); // =>  ["feet", "geese", "meese"]
//	```
    S.map = function(els, cb) {
        var val,
            key,
            ret = [];

        if (!S.isObject(els)) {
            arrayProto.forEach.call(els, function(el, index) {
                val = cb(el, index);
                if (val !== null) {
                    ret.push(val);
                }
            });
        } else {
            for (key in els) {
                val = cb(els[key], key);
                if (val !== null) {
                    ret.push(val);
                }
            }
        }

        return ret.length > 0 ? arrayProto.concat.apply([], ret) : ret;
    };

// **S.each(collection, function(index, item){ ... },ctx)**
//
// 閬嶅巻鏁扮粍涓殑姣忎竴椤�, 鎵ц鍥炶皟鍑芥暟涓殑鏂规硶
// - collection:闇€瑕侀亶鍘嗙殑鏁扮粍鎴栬€呭璞�
// - fn:鍥炶皟鍑芥暟锛屽洖浼犱笁涓弬鏁�
// 	1. 褰撳墠椤圭殑鍊�
// 	2. 绱㈠紩锛坕ndex锛夋垨鑰呴敭鍊硷紙key锛�
// 	3. 鏁扮粍鎴栬€呭璞�
// - ctx: fn鐨勪笂涓嬫枃瀵硅薄锛岄粯璁や负`window`
//
//
//		S.each(['a', 'b', 'c'], function(index, item){
//  		console.log('item %d is: %s', index, item)
//		})
//
//		var hash = { name: 'kissy.js', size: 'micro' }
//		S.each(hash, function(key, value){
//			console.log('%s: %s', key, value)
//		})
//
    S.each = function(obj, iterator, context) {
        var keys, i, len;
        if (!obj) {
            return obj;
        }
        if (obj.forEach === arrayProto.forEach) {
            obj.forEach(iterator, context);
        } else if (S.isArray(obj)) {
            for (i = 0, len = obj.length; i < len; i++) {
                if (iterator.call(context, obj[i], i, obj) === false) {
                    return;
                }
            }
        } else {
            keys = Object.keys(obj);
            for (i = 0, len = keys.length; i < len; i++) {
                if (iterator.call(context, obj[keys[i]], keys[i], obj) === false) {
                    return;
                }
            }
        }
        return obj;
    };

// **S.mix(receiver , supplier)**
//
// 灏� supplier 瀵硅薄鐨勬垚鍛樺鍒跺埌 receiver 瀵硅薄涓�.
// - receiver: 灞炴€ф帴鍙楄€呭璞�.
// - supplier: 灞炴€ф潵婧愬璞�.
    function mix(obj) {
        var k;
        S.each(arrayProto.slice.call(arguments, 1), function(source) {
            if (source) {
                for (var prop in source) {
                    if((k = source[prop]) !== undefined) {
                        obj[prop] = k;
                    }
                }
            }
        });
        return obj;
    }

    S.mix = mix;

// **S.makeArray(list)**
//
// 鎶妉ist(浠讳綍鍙互杩唬鐨勫璞�)杞崲鎴愪竴涓暟缁勶紝鍦ㄨ浆鎹� arguments 瀵硅薄鏃堕潪甯告湁鐢ㄣ€�
//
// 	(function(){
// 		return S.toArray(arguments).slice(1);
// 	})(1, 2, 3, 4); // => [2, 3, 4]
//
    S.makeArray = function (o) {
        if (o == null) {
            return [];
        }
        if (S.isArray(o)) {
            return o;
        }
        var lengthType = typeof o.length,
            oType = typeof o;
        if (lengthType !== 'number' ||
            o.alert ||
            oType === 'string' ||
            /* https://github.com/ariya/phantomjs/issues/11478 */
            (oType === 'function' && !( 'item' in o && lengthType === 'number'))) {
            return [o];
        }
        var ret = [];
        for (var i = 0, l = o.length; i < l; i++) {
            ret[i] = o[i];
        }
        return ret;
    };

// **S.augment (r, s1, [wl])**
//
// 绫荤殑鎵╁厖锛屽皢 `s1` 鐨� `prototype` 灞炴€х殑鎴愬憳澶嶅埗鍒� `r.prototype` 涓娿€俙Base` 浣跨敤銆�
// - r: 灏嗚鎵╁厖鐨勫嚱鏁�
// - s1: 鎵╁厖鏉ユ簮鍑芥暟鎴栧璞�. 闈炲嚱鏁板璞℃椂澶嶅埗鐨勫氨鏄� s 鐨勬垚鍛�.
// - wl: 灞炴€ф潵婧愬璞＄殑灞炴€х櫧鍚嶅崟, 浠呭湪鍚嶅崟涓殑灞炴€ц繘琛屽鍒�.
    S.augment = function (r, o, wl) {
        if(o instanceof Function){
            S.mix(r.prototype, o.prototype);
        }
        if(o instanceof Object){
            S.mix(r.prototype, o);
        }
        if(wl instanceof Object){
            S.mix(r.prototype, wl);
        }
        return r;
    };

// **S.filter(list, iterator, [context])**
//
// 閬嶅巻list涓殑姣忎釜鍊硷紝杩斿洖鍖呭惈鎵€鏈夐€氳繃iterator鐪熷€兼娴嬬殑鍏冪礌鍊笺€傞粯璁や娇鐢ㄥ師鐢熺殑filter鏂规硶銆俙Base`浣跨敤
//
// 	var evens = S.filter([1, 2, 3, 4, 5, 6], function(num){
// 		return num % 2 == 0;
// 	}); // => [2, 4, 6]
    S.filter = function (arr, fn, context) {
        return Array.prototype.filter.call(arr, fn, context || this);
    } ;

// **S.clone(input,[filter])**
//
// 鍒涘缓涓€涓� 鏅€氬璞� 鎴栨暟缁勭殑娣辨嫹璐�, 骞朵笖杩斿洖鏂板璞★紝Base 浣跨敤銆�
// - input: 寰呮繁鎷疯礉鐨勫璞℃垨鏁扮粍.
// - filter: 杩囨护鍑芥暟, 杩斿洖 false 涓嶆嫹璐濊鍏冪礌. 浼犲叆鍙傛暟涓�:
// 	1. 寰呭厠闅嗗€间负鏁扮粍, 鍙傛暟鍚� `S.filter()`, 涓婁笅鏂囧璞′负鍏ㄥ眬 `window`
// 	2. 寰呭厠闅嗗€间负鏅€氬璞�, 鍙傛暟涓哄璞＄殑姣忎釜閿�, 姣忎釜閿搴旂殑鍊�, 褰撳墠瀵硅薄, 涓婁笅鏂囧璞′负褰撳墠瀵硅薄.
    S.clone = function (input, filter) {
        var destination = input;

        if(!input) return destination;

        var constructor = input.constructor;
        if (S.inArray(constructor, [Boolean, String, Number, Date, RegExp])) {
            destination = input.valueOf();
        }
        /* ImageData , File, Blob , FileList .. etc */
        else if (S.isArray(input)) {
            destination = filter ? S.filter(input, filter) : input.concat();
        } else if (S.isPlainObject(input)) {
            destination = {};
        }

        if(S.isArray(input)){
            for (var i = 0; i < destination.length; i++) {
                destination[i] = S.clone(destination[i], filter);
            }
        } else if (S.isPlainObject(input)){
            for (k in input) {
                if (!filter || (filter.call(input, input[k], k, input) !== false)){
                    destination[k] = S.clone(input[k], filter);
                }
            }
        }
        return destination;
    };

// **S.ucfirst(string)**
//
// 灏嗗瓧绗︿覆棣栧瓧姣嶅ぇ鍐欙紝Base浣跨敤
    S.ucfirst= function (s) {
        s += '';
        return s.charAt(0).toUpperCase() + s.substring(1);
    };

// **S.trim(string)**
//
// 鍘婚櫎瀛楃涓蹭袱绔殑绌虹櫧瀛楃. Base浣跨敤
    S.trim = function (str) {
        return str == null ? '' : String.prototype.trim.call(str);
    };

// **S.now()**
//
// 杩斿洖褰撳墠鏃ユ湡鏃堕棿锛孊ase 浣跨敤
    S.now = Date.now;

// **S.reduce(arr,fn,[initialValue])**
//
// 浠庡乏鍚戝彸瀵规瘡涓暟缁勫厓绱犺皟鐢ㄧ粰瀹氬嚱鏁帮紝骞舵妸杩斿洖鍊肩疮绉捣鏉ワ紝杩斿洖杩欎釜绱姞鍊硷紝Base浣跨敤
// - arr: 闇€瑕侀亶鍘嗙殑鏁扮粍.
// - fn: 鍦ㄦ瘡涓暟缁勫厓绱犱笂鎵ц鐨勫嚱鏁�.
// - initialValue: 瀵硅薄绫诲瀷锛屽垵娆℃墽琛� fn 鏃剁殑绗竴涓弬鏁板€硷紝濡傛灉涓嶆寚瀹氬垯涓虹涓€涓厓绱犲€硷紝鍚庣画浠庣浜屼釜鍏冪礌寮€濮嬮亶鍘�
//
// ```
// S.reduce([0,1,2,3,4],function(p, c, index){
// 	return p + c;
// });
// // 棣栨璋冪敤
// p = 0, c = 1, index = 1
// //绗簩娆¤皟鐢�
// p = 1, c = 2, index = 2
// // 绗笁娆¤皟鐢�
// p = 3, c= 3, index = 3
// // 绗洓娆¤皟鐢�
// p = 6, c = 4, index = 4
// // 鏈€缁堣繑鍥烇細10
// ```
    S.reduce = function (arr, callback, initialValue) {
        var len = arr.length;
        if (typeof callback !== 'function') {
            throw new TypeError('callback is not function!');
        }

        /* 濡傛灉鍒濆鍊兼槸绌烘暟缁勶紝鍒欐棤杩斿洖鍊硷紝鎶ラ敊 */
        if (len === 0 && arguments.length == 2) {
            throw new TypeError('arguments invalid');
        }

        var k = 0;
        var accumulator;
        if (arguments.length >= 3) {
            accumulator = arguments[2];
        }
        else {
            do {
                if (k in arr) {
                    accumulator = arr[k++];
                    break;
                }

                /* 濡傛灉鍒濆鍊兼槸绌烘暟缁勶紝鍒欐棤杩斿洖鍊硷紝鎶ラ敊 */
                k += 1;
                if (k >= len) {
                    throw new TypeError();
                }
            }
            while (TRUE);
        }

        while (k < len) {
            if (k in arr) {
                accumulator = callback.call(undefined, accumulator, arr[k], k, arr);
            }
            k++;
        }

        return accumulator;
    };

// **S.substitute(str,o)**
//
// 灏嗗瓧绗︿覆涓殑鍗犱綅绗︽浛鎹负瀵瑰簲鐨勯敭鍊笺€俙Base`浣跨敤
//
// ```
// str = '{name} is {prop_1} and {prop_2}.',
// obj = {name: 'Jack Bauer',
// 			prop_1: 'our lord',
// 			prop_2: 'savior'};
//
// S.substitute(str, obj);
// 		// => 'Jack Bauer is our lord and savior.'
// ```
    S.substitute =  function (str, o, regexp) {
        if (typeof str != 'string' || !o) {
            return str;
        }

        return str.replace(regexp || /\\?\{([^{}]+)\}/g, function (match, name) {
            if (match.charAt(0) === '\\') {
                return match.slice(1);
            }
            return (o[name] === undefined) ? '': o[name];
        });
    };

// **S.indexOf (elem,arr)**
//
// 杩斿洖鍏冪礌 elem 鍦ㄦ暟缁� arr 涓殑搴忓彿.
    S.indexOf = function(item, arr) {
        return Array.prototype.indexOf.call(arr, item);
    };

// **S.inArray (elem,arr)**
//
// 鍒ゆ柇鍏冪礌 elem 鏄惁鍦ㄦ暟缁� arr 涓�.
    S.inArray = function(item, arr) {
        return S.indexOf(item, arr) > - 1;
    };

// **S.merge (s1,s2[,...])**
//
// 灏嗗涓璞＄殑鎴愬憳鍚堝苟鍒颁竴涓柊瀵硅薄涓�. 鍙傛暟涓�, 鍚庨潰鐨勫璞℃垚鍛樹細瑕嗙洊鍓嶉潰鐨�.
//
// ```
// a = { a: 'a' },
// b = { b: 'b' },
// c = { b: 'b2', c: 'c' };
//
// var o = S.merge(a, b, c);
// S.log(o.a); // => 'a'
// S.log(o.b); // => 'b2'
// S.log(o.c); // => 'c'
// ```
    S.merge = function() {
        var args = arrayProto.slice.call(arguments, 0);
        return mix.apply(null, [{}].concat(args));
    };

// **S.extend (r,s[,px,sx])**
//
// 璁╁嚱鏁板璞� r 缁ф壙鍑芥暟瀵硅薄 s
// - r: 灏嗚缁ф壙鐨勫瓙绫诲嚱鏁�
// - supplier: 缁ф壙鑷殑鐖剁被鍑芥暟
// - px: 闇€瑕佹坊鍔�/瑕嗙洊鐨勫師鍨嬫垚鍛�
// - sx: 闇€瑕佹坊鍔�/瑕嗙洊鐨勯潤鎬佹垚鍛�.
    S.extend = function(receiver, supplier, protoPros, staticProps) {
        var supplierProto = supplier.prototype,
            receiverProto;

        supplierProto.constructor = supplier;

        receiverProto = Object.create(supplierProto);
        receiverProto.constructor = receiver;
        receiver.prototype = S.mix(receiverProto, receiver.prototype);
        receiver.superclass = supplierProto;

        if (protoPros) {
            S.mix(receiverProto, protoPros);
        }

        if (staticProps) {
            S.mix(receiver, staticProps);
        }

        return receiver;
    };

// **S.type(object)**
//
// 杩斿洖`object`鐨勭被鍨嬶紝濡傛灉瑕佸垽鏂槸鍚︽槸plainObject锛堟櫘閫氬璞★級闇€瑕佷娇鐢╜S.isPlainObject()`鏂规硶
//
// ```
// S.type(S.one('div')) // => 'array'
// S.type(Number(2)) // => 'number'
// S.type(S.Node)  // => 'function'
// ```
//
// 濡傛灉闇€瑕侀獙璇佹槸鍚︽槸Node鑺傜偣绫诲瀷锛屼娇鐢�**S.Node.isNode()**
    S.type = function(obj) {
        return obj == null ?
            String(obj) : class2type[{}.toString.call(obj)] || 'object';
    };

// **S.unique (arr)**
//
// 杩斿洖涓€涓柊鏁扮粍, 浠呭寘鍚� arr 鍘婚噸鍚庣殑鍊�
//
// ```
// KISSY.unique(['a', 'b', 'a']) => ['a', 'b']
// ```
    S.unique = function(array) {
        return arrayProto.filter.call(array, function(item, index) {
            return array.indexOf(item) == index;
        });
    };

// **S.isWindow (o)**
//
// 鍒ゆ柇鍙傛暟鏄惁涓烘祻瑙堝櫒 window
    S.isWindow = function(obj) {
        return obj && obj == obj.window;
    };

// **S.isPlainObject(obj)**
//
// 鍒ゆ柇鏄惁鏄櫘閫氬璞�, 閫氳繃 {} 鎴� new FunctionClass/Object() 鍒涘缓鐨�, 涓嶅寘鎷唴缃璞′互鍙婂涓诲璞�.
//
// ```
// S.isPlainObject({}); // => true
// S.isPlainObject(new Date()); // => false
// S.isPlainObject(document.body); // => false
// ```
    S.isPlainObject = function(obj) {
        return S.isObject(obj) && !S.isWindow(obj)
            && Object.getPrototypeOf(obj) == Object.prototype;
    };

// 绫诲瀷璇婃柇鍑芥暟
//
// **S.isBoolean()**
//
// **S.isNumber()**
//
// **S.isString()**
//
// **S.isFunction()**
//
// **S.isArray()**
//
// **S.isDate()**
//
// **S.isRegExp()**
//
// **S.isObject()**
//
// **S.isError()**
//
// **S.isUndefined()**
//
// **S.isNull()**
    ['Boolean', 'Number', 'String', 'Function',
        'Array', 'Date', 'RegExp', 'Object',
        'Error'].forEach(function(name) {
        var name2lc = name.toLowerCase();

        class2type['[object ' + name + ']'] = name2lc;

        S['is' + name] = function(obj) {
            return S.type(obj) === name2lc;
        };
    });

    S.isUndefined = function(o){
        return o === undefined;
    };

    S.isNull = function(o){
        return o === null;
    };

    S.isArray = Array.isArray || S.isArray;

// **S.startsWith (str,prefix)**
//
// 鍒ゆ柇 str 鏄惁浠� prefix 寮€澶�
    S.startsWith = function(str, prefix) {
        return str.lastIndexOf(prefix, 0) === 0;
    };

// **S.endsWith(str,suffix)**
//
// 鍒ゆ柇 str 鏄惁浠� suffix 缁撳熬
    S.endsWith   = function(str, suffix) {
        var ind = str.length - suffix.length;
        return ind >= 0 && str.indexOf(suffix, ind) === ind;
    };

    var guid = 0;

// **S.guid (prefix)**
//
// 杩斿洖鍏ㄥ眬鍞竴 id.
    S.guid = function(pre) {
        return (pre || '') + guid++;
    };

// **S.ready(function(S){...})**
//
// DOM Ready 浜嬩欢锛孯eady 鍚庡啀鐩戝惉浼氱珛鍗虫墽琛屽洖璋�
//
// 涓� DOMContentLoaded 浜嬩欢姝ょ被浼肩殑浜嬩欢杩樻湁 avaiable 鍜� contentready锛屽湪 PC 绔骇鍝佸浣跨敤杩欎袱涓柟娉曟潵鐩戝惉鏌愪釜鑺傜偣鏄惁鍙敤浠ュ強鑺傜偣鍐呯殑缁撴瀯鏄惁鏋勯€犲畬鏁达紝杩欎袱涓簨浠跺湪鏃犵嚎绔笉甯哥敤锛岃繖閲屼笉鎻愪緵锛屽彧鎻愪緵 `ready()` 鏂规硶
//
// ```
// KISSY.ready(function(S){
//		var $ = S.all;
// });
// ```
    S.ready = function(fn){
        if (/complete|loaded|interactive/.test(doc.readyState) && doc.body) fn(S);
        else doc.addEventListener('DOMContentLoaded', function(){ fn(S); }, false);
        return this;
    };

    (function (S, undefined) {
        /* ios Function.prototype.bind === undefined */
        function bindFn(r, fn, obj) {
            function FNOP() {
            }

            var slice = [].slice,
                args = slice.call(arguments, 3),
                bound = function () {
                    var inArgs = slice.call(arguments);
                    return fn.apply(
                        this instanceof FNOP ? this :
                            /* fix: y.x=S.bind(fn); */
                            obj || this,
                        (r ? inArgs.concat(args) : args.concat(inArgs))
                    );
                };
            FNOP.prototype = fn.prototype;
            bound.prototype = new FNOP();
            return bound;
        }

        S.mix(S, {

            // **S.noop()**
            //
            // 绌哄嚱鏁�
            noop: function () {
            },

            // **S.bind (fn , context)**
            //
            // 鍒涘缓涓€涓柊鍑芥暟锛岃鍑芥暟鍙互鍦ㄥ浐瀹氱殑涓婁笅鏂囦互鍙婁紶閫掗儴鍒嗗浐瀹氬弬鏁版斁鍦ㄧ敤鎴峰弬鏁板墠闈㈢粰鍘熷嚱鏁板苟鎵ц
            // - fn: 闇€瑕佸浐瀹氫笂涓嬫枃浠ュ強鍥哄畾閮ㄥ垎鍙傛暟鐨勫嚱鏁�
            // - context: 鎵ц fn 鏃剁殑 this 鍊�. 濡傛灉鏂板嚱鏁扮敤浜庢瀯閫犲櫒鍒欒鍙傛暟鏃犵敤.
            bind: bindFn(0, bindFn, null, 0),
            rbind: bindFn(0, bindFn, null, 1)
        });
    })(S);

    var fns    = {},
        config = {
            debug : false,
            fns   : fns
        };

    S.Config = config;

// **S.config(configName,configValue)**
//
// 璁剧疆鎴栬幏鍙� KISSY 閰嶇疆鍙傛暟锛屾湁涓夌鐢ㄦ硶
//
// ```
// config(configJSON) //鈬� void
// config(name,value) //鈬� void锛宯ame锛氬弬鏁板悕锛寁alue锛氬弬鏁板€�
// config(name) //鈬� data锛岃繑鍥炲弬鏁板悕鐨勫€�
// ```
//
// 鍏朵腑`S.config(configJSON)`鐨勭敤娉曞弬鐓э細
//
//		KISSY.config({
//			// 寮€鍚嚜鍔� combo 妯″紡
//			combine:true,
//			// kissy 搴撳唴缃ā鍧楃殑鏃堕棿鎴�
//			tag:'2012',
//			// kissy 鐨勫熀鍑嗚矾寰�
//			base:'http://x.com/a',
//			packages:{},
//			modules:{}
//		})
//
// 瀹屾暣鍙傛暟鍙互鍙傜収[KISSY1.4鐨刲oader鐢ㄦ硶](http://docs.kissyui.com/1.4/docs/html/guideline/loader.html)鐨刢onfig閮ㄥ垎
//
// [mini.js](../mini.js)鏀寔瀹屾暣鐨凨ISSY妯″潡瑙勮寖锛圞MD锛夛紝[瑙勮寖璇︽儏绉绘杩欓噷](http://docs.kissyui.com/1.4/docs/html/guideline/kmd.html)
//
// ```
// // 鍒ゆ柇鏄惁寮曠敤mini鐗堟湰
// var isMini = S.config('mini');
// ```
    S.config = function (configName, configValue) {
        var cfg,
            r,
            self = this,
            fn,
            Config = S.Config,
            configFns = Config.fns;
        if (S.isObject(configName)) {
            S.each(configName, function (configValue, p) {
                fn = configFns[p];
                if (fn) {
                    fn.call(self, configValue);
                } else {
                    Config[p] = configValue;
                }
            });
        } else {
            cfg = configFns[configName];
            if (configValue === undefined) {
                if (cfg) {
                    r = cfg.call(self);
                } else {
                    r = Config[configName];
                }
            } else {
                if (cfg) {
                    r = cfg.call(self, configValue);
                } else {
                    Config[configName] = configValue;
                }
            }
        }
        return r;
    };

    S.config('mini',true);

    var modules = {};

    var isString   = S.isString,
        isFunction = S.isFunction;

    var RE_DIRNAME = /[^?#]*\//,
        RE_DOT = /\/\.\//g,
        RE_DOUBLE_DOT = /\/[^/]+\/\.\.\//,
        RE_DOUBLE_SLASH = /([^:/])\/\//g;

    function parseDirName(name) {
        var mat = name.match(RE_DIRNAME);
        return name ? mat[0] : name + '/';
    }

    function parseRelativeName(name, refName) {
        if (refName && /^[\.\/]/.test(name)) {
            name = parseDirName(refName) + name;
            /* /a/b/./c/./d ==> /a/b/c/d */
            name = name.replace(RE_DOT, '/');

            /* a/b/c/../../d  ==>  a/b/../d  ==>  a/d */
            while (name.match(RE_DOUBLE_DOT)) {
                name = name.replace(RE_DOUBLE_DOT, '/');
            }

            /* a//b/c  ==>  a/b/c  */
            name = name.replace(RE_DOUBLE_SLASH, '$1/');
        }
        return name;
    }

    function parseModuleName(name, refName) {
        if (name.charAt(name.length - 1) === '/') {
            name += 'index';
        } else if (/.js$/.test(name)) {
            name = name.slice(0, -3);
        }

        return parseRelativeName(name, refName);
    }

    function execFnWithModules(fn, modNames, refName)  {
        var args = S.map(modNames || [], function(modName) {
            return S.require(modName, refName);
        });
        return isFunction(fn) ? fn.apply(S, [S].concat(args)) : undefined;
    }

    function execFnWithCJS(fn) {
        return isFunction(fn) ? fn.apply(S, [S, S.require]) : undefined;
    }

// **S.add(name,fn,[cfg])**
//
// KISSY 娣诲姞妯″潡/閫昏緫鐗囨鐨勫嚱鏁帮紝`config`涓洪厤缃璞★紝鍖呮嫭`config.requires`锛岀粰鍑哄綋鍓嶆ā鍧楃殑渚濊禆妯″潡銆傛ā鍧楄繑鍥炰竴涓璞★紝閫氳繃寮曠敤瀹冪殑鏃跺€欐潵璋冪敤鍒般€�
// - name (string) 鈥� 妯″潡鍚嶃€傚彲閫夈€�
// - fn (function) 鈥� 妯″潡瀹氫箟鍑芥暟
// - config (object) 鈥� 妯″潡鐨勪竴浜涙牸澶栧睘鎬�, 鏄疛SON瀵硅薄锛屽寘鍚睘鎬э細
// - requires (Array) 鈥� 妯″潡鐨勪竴浜涗緷璧�
//
// core涓殑`S.add()`鍙湁鍩烘湰鍔熻兘锛屽彧鏀寔涓婇潰涓変釜鍙傛暟
//
// 鍦╗mini-full.js](../mini-full.js)涓紝鍖呭惈瀹屾暣鐨凨MD瑙勮寖鐨勫疄鐜扮殑loader銆�
//
// ```
// // package/a.js
// KISSY.add('a',function(S){
//	 return ObjA;
// },{
// 	 // 褰撳墠閫昏緫渚濊禆涓€涓寘鍐呯殑鏂囦欢b锛屼竴涓叏灞€妯″潡base
// 	 requires:['b','base']
// });
// ```
//
// `add()`鏂规硶绗﹀悎鍩烘湰鐨凨MD瑙勮寖锛屽彲浠ュ弬鐓KISSY 1.4 Loader鐨勬枃妗(http://docs.kissyui.com/1.4/docs/html/guideline/loader.html)

    S.add = function(name, factory, config) {
        if (isString(name)) {
            name = parseModuleName(name);
            modules[name] = {
                factory  : factory,
                requires : config && config.requires
            };
        }
        return S;
    };

// **S.require(name,[refName])**
//
// 濡傛灉妯″潡宸茬粡杞藉叆锛屽垯鍙互閫氳繃`S.require()`鏂规硶鏉ヨ皟鐢ㄨ繖涓ā鍧楋紝閫氬父濡傛灉use()鐨勬ā鍧楄繃澶氾紝鍥炶皟鍙傛暟闇€瑕佸拰妯″潡鍒楄〃涓€涓€瀵瑰簲锛屾渶绠€鍗曠殑鍔炴硶灏辨槸浣跨敤`S.require()`鏂规硶
//
// 姣斿杩欐浠ｇ爜锛�
// ```
// // use 鐨勬ā鍧楀お澶氾紝鐢ㄨ倝鐪兼潵瀵瑰簲妯″潡鍚嶇О锛�
// S.use('a,b,c,d,e,f,g',function(S,A,B,C,D,E,F,G){
//     // Your code...
// });
//
// // 鍙互绠€鍐欎负杩欐牱
// S.use('a,b,c,d,e,f,g',function(S){
//     var A = S.require('a');
//     var B = S.require('b');
//     var C = S.require('c');
//     // Your code...
// });
// ```
    S.require = function(name, refName) {
        var mod;
        if (isString(name)) {
            name = parseModuleName(name, refName);
            mod  = modules[name];
            if (mod) {
                if (!mod.exports) {
                    mod.exports = isFunction(mod.factory) ?
                        mod.requires ?
                            execFnWithModules(mod.factory, mod.requires, name) :
                            execFnWithCJS(mod.factory)
                        :
                        mod.factory;
                }
                return mod.exports;
            }
        }
    };

// **S.use(names, callback)**
//
// 杞藉叆骞惰繍琛屾ā鍧�,鍜宎dd涓€璧蜂娇鐢紝璇︾粏鐢ㄦ硶鍙傜収[KISSY妯″潡瑙勮寖](http://docs.kissyui.com/1.4/docs/html/kmd.html)锛圞MD锛夛紝fn 绫诲瀷鏄痜unctio銆傚弬鏁拌鏄庯細
// - modNames (String) 鈥� 浠ラ€楀彿锛�,锛夊垎鍓茬殑妯″潡鍚嶇О,渚嬪 `S.use("custommod,custommod2")`
// - callback (function|Object) 鈥� 褰� modNames 涓墍鏈夋ā鍧楄浇鍏ュ苟鎵ц瀹屾瘯鍚庢墽琛岀殑鍑芥暟鎴栬€呭璞℃弿杩�
//
// 褰揷allback绫诲瀷涓篛bject鏃讹紝鍙紶鍏ヤ袱涓睘鎬э細
//
// 1. success (function) : 褰� modNames 涓墍鏈夋ā鍧楀姞杞藉畬姣曞悗鎵ц鐨勫嚱鏁�
// 2. error (function) : 褰撳墠 use 澶辫触鏃惰皟鐢ㄧ殑鍑芥暟锛屽弬鏁颁负澶辫触鐨勬ā鍧楀璞�
//
    S.use = function(names, success) {
        /* assign callback functions */
        if (S.isObject(success)) {
            success = success.success;
        }
        /* parse string to array */
        if (isString(names)) {
            names = names.replace(/\s+/g, '').split(',');
        }

        execFnWithModules(success, names);

        return S;
    };


// **S.log(msg,[cat,type])**
//
// 杈撳嚭璋冭瘯淇℃伅
// - msg : 璇曚俊鎭�
// - cat : 璋冭瘯淇℃伅绫诲埆. 鍙互鍙� info, warn, error, dir, time 绛� console 瀵硅薄鐨勬柟娉曞悕, 榛樿涓� log.
// - src : 璋冭瘯浠ｇ爜鎵€鍦ㄧ殑婧愪俊鎭�
    S.log = function(msg, cat, type) {
        var logger = console;
        cat = cat && logger[cat] ? cat : 'log';
        logger[cat](type ? type + ': ' + msg : msg);
    };

// **S.error(msg)**
//
// 鎶涘嚭閿欒寮傚父
    S.error = function(msg) {
        if (S.config('debug')) {
            throw msg instanceof Error ? msg : new Error(msg);
        }
    };

    root.KISSY = S;


}(this));
// <style>pre{-moz-tab-size:4;-webkit-tab-size:4;tab-size:4;}</style>
// <style>td {border-top:1px solid #ccc} table {border-collapse: collapse;}</style>

// Loader API
// ==========
//
// ### How to use
// ---
// 鐢ㄦ硶鍚孠ISSY Seed
//
//     //瀹氱京妯″
//     KISSY.add('pkg/mod1', function(S, Dep) {
//         return {
//             name: 'mod1'
//         };
//     }, {
//         requires: [
//             'dep1'
//         ]
//     })
//
//     //浣跨敤妯″
//     KISSY.use('pkg/mod1', function(S, Mod1) {
//         alert(Mod1.name);
//     });
//
// ### API Delete
// ---
//
// **鏈垪鍑虹殑API鑸嘖ISSY淇濇寔鐢ㄦ硶涓€鑷� (鍖呮嫭 CMD, Combo, download CSS, etc. )**
//
// | API                  | KISSY                | KISSY-MINI           |
// | -------------------- |:--------------------:|:--------------------:|
// | getScript            | YES                  | NO                   |
// | importStyle          | YES                  | NO                   |
//
//
//
// ### API Differences
// ---
// 锛� package config涓嶆敮鎸� **group** 鍙冩暩
//
// 锛� package config涓嶆敮鎸� **suffix** 鍙冩暩

;(function(root) {

    /* cache KISSY object */
    var S = root.KISSY;

    var Env      = S.Env,
        Config   = S.Config,
        config   = S.config,
        log      = S.log;

    var mix        = S.mix,
        map        = S.map,
        each       = S.each,
        isObject   = S.isObject,
        isArray    = S.isArray,
        isString   = S.isString,
        isFunction = S.isFunction,
        startsWith = S.startsWith,
        endsWith   = S.endsWith;

    /* cache native object */
    var doc      = root.document,
        ua       = root.navigator.userAgent,
        loc      = root.location,
        href     = loc.href,
        protocol = loc.protocol;

    var substring     = function(str, start, end) {
        return str.substring(start, end);
    },  indexOf    = function(str, value, index) {
        return str.indexOf(value, index);
    },  slice      = function(str, start, end) {
        return str.slice(start, end);
    },  charAt     = function(str, index) {
        return str.charAt(index);
    },  split      = function(str, flag) {
        return str.split(flag);
    },  replace    = function(str, reg, val) {
        return str.replace(reg, val);
    },  toLowerCase = function(str) {
        return str.toLowerCase();
    };


    var now = Date.now,
        keys = Object.keys,
        reduce = function(arr, fn, initialVal) {
            return arr.reduce(fn, initialVal);
        },
        filter = function(arr, fn) {
            return arr.filter(fn);
        },
        indexOf = function(arr, val) {
            return arr.indexOf(val);
        },
        setImmediate = function(fn)  {
            setTimeout(fn, 0);
        };

    var noop  = function() {},
        TRUE  = !0,
        FALSE = !1;

    var isOldWebKit = ( +ua.replace(/.*AppleWebKit\/(\d+)\..*/, "$1") < 536 );

    /** A hack for xiaomi mobile, xiaomi mobile's user agent is like below:
     * Xiaomi_2013061_TD/V1 Linux/3.4.5 Android/4.2.1 Release/09.18.2013
     Browser/AppleWebKit534.30 Mobile Safari/534.30 MBBMS/2.2 System/Android 4.2.1
     XiaoMi/MiuiBrowser/1.0
     */
    if (ua.match(/^XiaoMi/gim)) {
        isOldWebKit = ( +ua.replace(/.*Safari\/(\d+)\..*/, "$1") < 536 );

        /** h hack for ZTE mobile ua like below
         * ZTE U970_TD/1.0 Linux/2.6.39 Android/4.0 Release/2.21.2012 Browser/AppleWebKit534.30
         */
    } else if (ua.match(/^ZTE/)) {
        isOldWebKit = ( +ua.replace(/.*AppleWebKit(\d+)\..*/, "$1") < 536 );
    }


    /* Remove .. and . in path array */
    function normalizeArray(parts, allowAboveRoot) {
        /* level above root */
        var up = 0,
            i = parts.length - 1,
            newParts = [],
            last;

        for (; i >= 0; i--) {
            last = parts[i];
            if (last !== '.') {
                if (last === '..') {
                    up++;
                } else if (up) {
                    up--;
                } else {
                    newParts[newParts.length] = last;
                }
            }
        }

        /* if allow above root, has to add .. */
        if (allowAboveRoot) {
            for (; up--; up) {
                newParts[newParts.length] = '..';
            }
        }

        newParts = newParts.reverse();

        return newParts;
    }

    /* Extract the directory portion of a path
* dirname("a/b/c.js?t=123#xx/zz") ==> "a/b/"
* ref: http://jsperf.com/regex-vs-split/2
*/
    var RE_DIRNAME = /[^?#]*\//;

    function pathGetDirName(path) {
        var mat = path.match(RE_DIRNAME);
        return mat ? mat[0] : '.';
    }

    function pathRemoveExt(path) {
        return path.replace(/\.[^\/]+$/, '');
    }

    var RE_DOT = /\/\.\//g,
        RE_DOUBLE_DOT = /\/[^/]+\/\.\.\//,
        RE_DOUBLE_SLASH = /([^:/])\/\//g;

    /* Canonicalize a path */
    /* realpath("http://test.com/a//./b/../c") ==> "http://test.com/a/c" */
    function pathParseRelative(path) {
        /* /a/b/./c/./d ==> /a/b/c/d */
        path = path.replace(RE_DOT, "/");

        /* a/b/c/../../d  ==>  a/b/../d  ==>  a/d */
        while (path.match(RE_DOUBLE_DOT)) {
            path = path.replace(RE_DOUBLE_DOT, "/");
        }

        /* a//b/c  ==>  a/b/c */
        path = path.replace(RE_DOUBLE_SLASH, "$1/");

        return path;
    }

    function pathResolveRelative(from, to) {
        var resolvedPath = '',
            resolvedPathStr,
            i,
            args = (arguments),
            path,
            absolute = 0;

        for (i = args.length - 1; i >= 0 && !absolute; i--) {
            path = args[i];
            if (!isString(path) || !path) {
                continue;
            }
            resolvedPath = path + '/' + resolvedPath;
            absolute = charAt(path, 0) === '/';
        }

        resolvedPathStr = normalizeArray(filter(split(resolvedPath, '/'), function (p) {
            return !!p;
        }), !absolute).join('/');

        return ((absolute ? '/' : '') + resolvedPathStr) || '.';
    }

    function pathGetRelative(from, to) {
        from = pathParseRelative(from);
        to = pathParseRelative(to);

        var fromParts = filter(split(from, '/'), function (p) {
                return !!p;
            }),
            path = [],
            sameIndex,
            sameIndex2,
            toParts = filter(split(to, '/'), function (p) {
                return !!p;
            }), commonLength = Math.min(fromParts.length, toParts.length);

        for (sameIndex = 0; sameIndex < commonLength; sameIndex++) {
            if (fromParts[sameIndex] !== toParts[sameIndex]) {
                break;
            }
        }

        sameIndex2 = sameIndex;

        while (sameIndex < fromParts.length) {
            path.push('..');
            sameIndex++;
        }

        path = path.concat(slice(toParts, sameIndex2));

        path = path.join('/');

        return /**@type String  @ignore*/path;
    }

    /* Normalize an id
*  normalize("path/to/a") ==> "path/to/a.js"
* NOTICE: substring is faster than negative slice and RegExp
*/
    function pathNormalizeName(id) {
        var last = id.length - 1,
            lastC = charAt(id, last);

        /* If the uri ends with `#`, just return it without '#' */
        if (lastC === "#") {
            return id.substring(0, last);
        }

        return (endsWith(id, '.js')  ||
            endsWith(id, '.css') ||
            indexOf(id, '?') > 0 ||
            lastC === '/' ) ? id :
            id + '.js';
    }


    var RE_ABSOLUTE = /^\/\/.|:\//,
        RE_ROOT_DIR = /^.*?\/\/.*?\//;

    function pathNormalizeBase(base) {
        if (!base) { return loaderDir; }
        base = base.replace(/\\/g, '/');
        if (!endsWith(base, '/')) {
            base += '/';
        }

        return pathAddBase(base);
    }

    function pathAddBase(id, base) {
        var result, baseDir, mat;
        firstC = charAt(id, 0);

        baseDir = base ? pathGetDirName(base) : workDir;

        /* Absolute */
        if (RE_ABSOLUTE.test(id)) {
            result = id;
        }
        /* Relative */
        else if (firstC === ".") {
            result  = pathParseRelative(baseDir + id);
        }
        /* Root */
        else if (firstC === "/") {
            mat = baseDir.match(RE_ROOT_DIR);
            result = mat ? mat[0] + substring(id, 1) : id;
        }
        /* Top-level */
        else {
            result = baseDir + id;
        }

        /* Add default protocol when uri begins with "//" */
        if (startsWith(result, '//')) {
            result = protocol + result;
        }

        return result;
    }

    function pathAddQuery(path, key, value) {
        return path + ( indexOf(path, '?') > -1 ? '&' : '?' ) + key + '=' + value;
    }

    var workDir   = pathGetDirName(doc.URL);
    var loaderDir = (function() {
        var scripts      = doc.scripts,
            loaderScript = scripts[scripts.length - 1];
        return loaderScript ? pathGetDirName(loaderScript.src) : workDir;
    }());

    /**
     * @ignore
     * setup data structure for kissy loader
     * @author yiminghe@gmail.com
     */

    var Loader = S.Loader = {};

    /** error */
    var ERROR = -1,
        /** init */
        INIT  = 0,
        /** loading */
        LOADING = 1,
        /** loaded */
        LOADED = 2,
        /**dependencies are loaded or attached*/
        READY_TO_ATTACH = 3,
        /** attaching */
        ATTACHING = 4,
        /** attached */
        ATTACHED = 5;

    /**
     * Loader Status Enum
     * @enum {Number} KISSY.Loader.Status
     */
    Loader.Status = {
        /** error */
        ERROR: ERROR,
        /** init */
        INIT: INIT,
        /** loading */
        LOADING: LOADING,
        /** loaded */
        LOADED: LOADED,
        /**dependencies are loaded or attached*/
        READY_TO_ATTACH: READY_TO_ATTACH,
        /** attaching */
        ATTACHING: ATTACHING,
        /** attached */
        ATTACHED: ATTACHED
    };

    /**
     * @ignore
     * Utils for kissy loader
     * @author yiminghe@gmail.com
     */

    /**
     * @class KISSY.Loader.Utils
     * Utils for KISSY Loader
     * @singleton
     * @private
     */

    /* http://wiki.commonjs.org/wiki/Packages/Mappings/A */
    /* 濡傛灉妯″潡鍚嶄互 / 缁撳熬锛岃嚜鍔ㄥ姞 index */
    function addIndexAndRemoveJsExt(s) {
        if (isString(s)) {
            return addIndexAndRemoveJsExtFromName(s);
        } else {
            var ret = [],
                i = 0,
                l = s.length;
            for (; i < l; i++) {
                ret[i] = addIndexAndRemoveJsExtFromName(s[i]);
            }
            return ret;
        }
    }

    function addIndexAndRemoveJsExtFromName(name) {
        /* 'x/' 'x/y/z/' */
        if (charAt(name, name.length - 1) === '/') {
            name += 'index';
        }
        if (endsWith(name, '.js')) {
            name = slice(name, 0, -3);
        }
        return name;
    }

    function pluginAlias(runtime, name) {
        var index = indexOf(name, '!');
        if (index !== -1) {
            var pluginName = substring(name, 0, index);
            name = substring(name, index + 1);
            S.use(pluginName, {
                sync: true,
                success: function (S, Plugin) {
                    if (Plugin.alias) {
                        /* noinspection JSReferencingMutableVariableFromClosure */
                        name = Plugin.alias(runtime, name, pluginName);
                    }
                }
            });
        }
        return name;
    }



    /**
     * Get absolute path of dep module.similar to {@link KISSY.Path#resolve}
     * @param {String} moduleName current module 's name
     * @param {String|String[]} depName dependency module 's name
     * @return {String|String[]} normalized dependency module 's name
     */
    function normalDepModuleName(moduleName, depName) {
        var i = 0, l;

        if (!depName) {
            return depName;
        }

        if (isString(depName)) {
            if (startsWith(depName, '../') || startsWith(depName, './')) {
                /* x/y/z -> x/y/ */
                return pathResolveRelative(pathGetDirName(moduleName), depName);
            }

            return pathParseRelative(depName);
        }

        for (l = depName.length; i < l; i++) {
            depName[i] = normalDepModuleName(moduleName, depName[i]);
        }
        return depName;
    }

    /**
     * create modules info
     * @param runtime Module container, such as KISSY
     * @param {String[]} modNames to be created module names
     */
    function createModulesInfo(runtime, modNames) {
        each(modNames, function (m) {
            createModuleInfo(runtime, m);
        });
    }

    /**
     * create single module info
     * @param runtime Module container, such as KISSY
     * @param {String} modName to be created module name
     * @param {Object} [cfg] module config
     * @return {KISSY.Loader.Module}
     */
    function createModuleInfo(runtime, modName, cfg) {
        modName = addIndexAndRemoveJsExtFromName(modName);

        var mods = runtime.Env.mods,
            module = mods[modName];

        if (module) {
            return module;
        }

        /* 闃叉 cfg 閲屾湁 tag锛屾瀯寤� fullpath 闇€瑕� */
        mods[modName] = module = new Module(mix({
            name: modName,
            runtime: runtime
        }, cfg));

        return module;
    }

    /**
     * Get modules exports
     * @param runtime Module container, such as KISSY
     * @param {String[]} modNames module names
     * @return {Array} modules exports
     */
    function getModules(runtime, modNames) {
        var mods = [runtime], module,
            unaliasArr,
            allOk,
            m,
            runtimeMods = runtime.Env.mods;

        each(modNames, function (modName) {
            module = runtimeMods[modName];
            if (!module || module.getType() !== 'css') {
                unaliasArr = unalias(runtime, modName);
                allOk = reduce(unaliasArr, function (a, n) {
                    m = runtimeMods[n];
                    /* allow partial module (circular dependency) */
                    return a && m && m.status >= ATTACHING;
                }, true);
                if (allOk) {
                    mods.push(runtimeMods[unaliasArr[0]].exports);
                } else {
                    mods.push(null);
                }
            } else {
                mods.push(undefined);
            }
        });

        return mods;
    }

    /**
     * attach modules and their dependency modules recursively
     * @param {String[]} modNames module names
     * @param runtime Module container, such as KISSY
     */
    function attachModsRecursively(modNames, runtime) {
        var i,
            l = modNames.length;
        for (i = 0; i < l; i++) {
            attachModRecursively(modNames[i], runtime);
        }
    }

    function checkModsLoadRecursively(modNames, runtime, stack, errorList, cache) {
        /* for debug. prevent circular dependency */
        stack = stack || [];
        /* for efficiency. avoid duplicate non-attach check */
        cache = cache || {};
        var i,
            s = 1,
            l = modNames.length,
            stackDepth = stack.length;
        for (i = 0; i < l; i++) {
            s = s && checkModLoadRecursively(modNames[i], runtime, stack, errorList, cache);
            stack.length = stackDepth;
        }
        return !!s;
    }

    function checkModLoadRecursively(modName, runtime, stack, errorList, cache) {
        var mods = runtime.Env.mods,
            status,
            m = mods[modName];
        if (modName in cache) {
            return cache[modName];
        }
        if (!m) {
            cache[modName] = FALSE;
            return FALSE;
        }
        status = m.status;
        if (status === ERROR) {
            errorList.push(m);
            cache[modName] = FALSE;
            return FALSE;
        }
        if (status >= READY_TO_ATTACH) {
            cache[modName] = TRUE;
            return TRUE;
        }
        if (status !== LOADED) {
            cache[modName] = FALSE;
            return FALSE;
        }

        if (indexOf(stack, modName) > -1) {
            /*'find cyclic dependency between mods */
            cache[modName] = TRUE;
            return TRUE;
        }
        stack.push(modName);

        if (checkModsLoadRecursively(m.getNormalizedRequires(),
            runtime, stack, errorList, cache)) {
            m.status = READY_TO_ATTACH;
            cache[modName] = TRUE;
            return TRUE;
        }

        cache[modName] = FALSE;
        return FALSE;
    }

    /**
     * attach module and its dependency modules recursively
     * @param {String} modName module name
     * @param runtime Module container, such as KISSY
     */
    function attachModRecursively(modName, runtime) {
        var mods = runtime.Env.mods,
            status,
            m = mods[modName];
        status = m.status;
        /* attached or circular dependency */
        if (status >= ATTACHING) {
            return;
        }
        m.status = ATTACHING;
        if (m.cjs) {
            /* commonjs format will call require in module code again */
            attachMod(runtime, m);
        } else {
            attachModsRecursively(m.getNormalizedRequires(), runtime);
            attachMod(runtime, m);
        }
    }

    /**
     * Attach specified module.
     * @param runtime Module container, such as KISSY
     * @param {KISSY.Loader.Module} module module instance
     */
    function attachMod(runtime, module) {
        var factory = module.factory,
            exports;

        if (isFunction(factory)) {
            /* compatible and efficiency */
            /* KISSY.add(function(S,undefined){}) */
            var require;
            if (module.requires && module.requires.length) {
                require = function() {
                    return module.require.apply(module, arguments);
                };
            }
            /* 闇€瑕佽В寮€ index锛岀浉瀵硅矾寰� */
            /* 浣嗘槸闇€瑕佷繚鐣� alias锛岄槻姝㈠€间笉瀵瑰簲 */
            /* noinspection JSUnresolvedFunction */
            exports = factory.apply(module,
                /* KISSY.add(function(S){module.require}) lazy initialize */
                (module.cjs ? [runtime, require, module.exports, module] : getModules(runtime, module.getRequiresWithAlias())));
            if (exports !== undefined) {
                /* noinspection JSUndefinedPropertyAssignment */
                module.exports = exports;
            }
        } else {
            /* noinspection JSUndefinedPropertyAssignment */
            module.exports = factory;
        }

        module.status = ATTACHED;
    }

    /**
     * Get module names as array.
     * @param {String|String[]} modNames module names array or  module names string separated by ','
     * @return {String[]}
     */
    function getModNamesAsArray(modNames) {
        if (isString(modNames)) {
            modNames = split(replace(modNames, /\s+/g, ''), ',');
        }
        return modNames;
    }

    /**
     * normalize module names
     * 1. add index : / => /index
     * 2. unalias : core => dom,event,ua
     * 3. relative to absolute : ./x => y/x
     * @param {KISSY} runtime Global KISSY instance
     * @param {String|String[]} modNames Array of module names
     *  or module names string separated by comma
     * @param {String} [refModName]
     * @return {String[]} normalized module names
     */
    function normalizeModNames(runtime, modNames, refModName) {
        return unalias(runtime,
            normalizeModNamesWithAlias(runtime, modNames, refModName));
    }

    /**
     * unalias module name.
     * @param runtime Module container, such as KISSY
     * @param {String|String[]} names moduleNames
     * @return {String[]} unalias module names
     */
    function unalias(runtime, names) {
        var ret = [].concat(names),
            i,
            m,
            alias,
            ok = 0,
            j;
        while (!ok) {
            ok = 1;
            for (i = ret.length - 1; i >= 0; i--) {
                if ((m = createModuleInfo(runtime, ret[i])) && ((alias = m.getAlias()) !== undefined)) {
                    ok = 0;
                    if (typeof alias === 'string') {
                        alias = [alias];
                    }
                    for (j = alias.length - 1; j >= 0; j--) {
                        if (!alias[j]) {
                            alias.splice(j, 1);
                        }
                    }
                    ret.splice.apply(ret, [i, 1].concat(addIndexAndRemoveJsExt(alias)));
                }
            }
        }
        return ret;
    }

    /**
     * normalize module names with alias
     * @param runtime Module container, such as KISSY
     * @param {String[]} modNames module names
     * @param [refModName] module to be referred if module name path is relative
     * @return {String[]} normalize module names with alias
     */
    function normalizeModNamesWithAlias(runtime, modNames, refModName) {
        var ret = [], i, l;
        if (modNames) {
            /* 1. index map */
            for (i = 0, l = modNames.length; i < l; i++) {
                if (modNames[i]) {
                    ret.push(pluginAlias(runtime, addIndexAndRemoveJsExt(modNames[i])));
                }
            }
        }
        /* 2. relative to absolute (optional) */
        if (refModName) {
            ret = normalDepModuleName(refModName, ret);
        }
        return ret;
    }

    /**
     * register module with factory
     * @param runtime Module container, such as KISSY
     * @param {String} name module name
     * @param {Function|*} factory module's factory or exports
     * @param [config] module config, such as dependency
     */
    function registerModule(runtime, name, factory, config) {
        name = addIndexAndRemoveJsExtFromName(name);

        var mods = runtime.Env.mods,
            module = mods[name];

        if (module && module.factory !== undefined) {
            return;
        }

        /* 娌℃湁 use锛岄潤鎬佽浇鍏ョ殑 add 鍙兘鎵ц */
        createModuleInfo(runtime, name);

        module = mods[name];

        /* 娉ㄦ剰锛氶€氳繃 S.add(name[, factory[, config]]) 娉ㄥ唽鐨勪唬鐮侊紝鏃犺鏄〉闈腑鐨勪唬鐮侊紝 */
        /* 杩樻槸 js 鏂囦欢閲岀殑浠ｇ爜锛宎dd 鎵ц鏃讹紝閮芥剰鍛崇潃璇ユā鍧楀凡缁� LOADED */
        mix(module, {
            name    : name,
            status  : LOADED,
            factory : factory
        });

        mix(module, config);
    }

    /**
     * Returns hash code of a string djb2 algorithm
     * @param {String} str
     * @returns {String} hash code
     */
    function getHash(str) {
        var hash = 5381,
            i;
        for (i = str.length; --i > -1;) {
            hash = ((hash << 5) + hash) + str.charCodeAt(i);
            /* hash * 33 + char */
        }
        return hash + '';
    }

    function getRequiresFromFn(fn) {
        var requires = [];
        fn.toString()
            .replace(commentRegExp, '')
            .replace(requireRegExp, function (match, dep) {
                requires.push(getRequireVal(dep));
            });
        return requires;
    }


    var commentRegExp = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,
        requireRegExp = /[^.'"]\s*require\s*\(([^)]+)\)/g;

    function getRequireVal(str) {
        var m = str.match(/^\s*["']([^'"\s]+)["']\s*$/);
        return m ? m[1] : '';
    }

    function forwardSystemPackage(self, property) {
        return property in self ?
            self[property] :
            self.runtime.Config[property];
    }

    /**
     * @class KISSY.Loader.Package
     * @private
     * This class should not be instantiated manually.
     */
    function Package(cfg) {
        mix(this, cfg);
    }

    Package.prototype = {
        constructor: Package,

        reset: function (cfg) {
            mix(this, cfg);
        },

        /**
         * Tag for package.
         * tag can not contain ".", eg: Math.random() !
         * @return {String}
         */
        getTag: function () {
            return forwardSystemPackage(this, 'tag');
        },

        /**
         * Get package name.
         * @return {String}
         */
        getName: function () {
            return this.name;
        },

        getPath: function () {
            return this.path || (this.path = this.getUri());
        },

        /**
         * get package uri
         */
        getUri: function () {
            return this.uri;
        },

        /**
         * Whether is debug for this package.
         * @return {Boolean}
         */
        isDebug: function () {
            return forwardSystemPackage(this, 'debug');
        },

        /**
         * Get charset for package.
         * @return {String}
         */
        getCharset: function () {
            return forwardSystemPackage(this, 'charset');
        },

        /**
         * Whether modules are combined for this package.
         * @return {Boolean}
         */
        isCombine: function () {
            return forwardSystemPackage(this, 'combine');
        },

        /**
         * Get package group (for combo).
         * @returns {String}
         */
        getGroup: function () {
            return forwardSystemPackage(this, 'group');
        }
    };

    Loader.Package = Package;

    var systemPackage = new Package({
        name: '',
        runtime: S
    });

    systemPackage.getUri = function () {
        return this.runtime.Config.baseUri;
    };

    function getPackage(self, modName) {
        var packages = self.Config.packages || {},
            modNameSlash = modName + '/',
            pName = '',
            p;
        for (p in packages) {
            if (startsWith(modNameSlash, p + '/') && p.length > pName.length) {
                pName = p;
            }
        }
        return packages[pName] || systemPackage;
    }


    /**
     * @class KISSY.Loader.Module
     * @private
     * This class should not be instantiated manually.
     */
    function Module(cfg) {
        /**
         * exports of this module
         */
        this.exports = {};

        /**
         * status of current modules
         */
        this.status = INIT;

        /**
         * name of this module
         */
        this.name = undefined;

        /**
         * factory of this module
         */
        this.factory = undefined;

        /**
         * lazy initialize and commonjs module format
         */
        this.cjs = 1;
        mix(this, cfg);
        this.waitedCallbacks = [];
    }

    Module.prototype = {
        kissy: 1,

        constructor: Module,

        /**
         * resolve module by name.
         * @param {String|String[]} relativeName relative module's name
         * @param {Function|Object} fn KISSY.use callback
         * @returns {String} resolved module name
         */
        use: function (relativeName, fn) {
            relativeName = getModNamesAsArray(relativeName);
            return S.use(normalDepModuleName(this.name, relativeName), fn);
        },

        /**
         * resolve path
         * @param {String} relativePath relative path
         * @returns {KISSY.Uri} resolve uri
         */
        resolve: function (relativePath) {
            return pathAddBase(relativePath, this.getUri());
        },

        /* use by xtemplate include */
        resolveByName: function (relativeName) {
            return normalDepModuleName(this.name, relativeName);
        },

        /**
         * require other modules from current modules
         * @param {String} moduleName name of module to be required
         * @returns {*} required module exports
         */
        require: function (moduleName) {
            return S.require(moduleName, this.name);
        },

        wait: function (callback) {
            this.waitedCallbacks.push(callback);
        },

        notifyAll: function () {
            var callback;
            var len = this.waitedCallbacks.length,
                i = 0;
            for (; i < len; i++) {
                callback = this.waitedCallbacks[i];
                try {
                    callback(this);
                } catch (e) {
                    /*jshint loopfunc:true*/
                    setTimeout(function () {
                        throw e;
                    }, 0);
                }
            }
            this.waitedCallbacks = [];
        },

        /**
         * Get the type if current Module
         * @return {String} css or js
         */
        getType: function () {
            var v = this.type;
            if (!v) {
                if (endsWith(toLowerCase(this.name), '.css')) {
                    v = 'css';
                } else {
                    v = 'js';
                }
                this.type = v;
            }
            return v;
        },

        getAlias: function () {
            var name = this.name,
                aliasFn,
                packageInfo,
                alias = this.alias;
            if (!('alias' in this)) {
                packageInfo = this.getPackage();
                if (packageInfo.alias) {
                    alias = packageInfo.alias(name);
                }
                if (!alias && (aliasFn = this.runtime.Config.alias)) {
                    alias = aliasFn(name);
                }
            }
            return alias;
        },

        /**
         * Get the path uri of current module if load dynamically
         * @return String
         */
        getUri: function () {
            var uri;
            if (!this.uri) {
                /* path can be specified */
                if (this.path) {
                    uri = this.path;
                } else {
                    var name        = this.name,
                        packageInfo = this.getPackage(),
                        packageUri  = packageInfo.getUri(),
                        packageName = packageInfo.getName(),
                        extname     = '.' + this.getType(),
                        tag         = this.getTag(),
                        min         = '-min', subPath;
                    /* name = Path.join(Path.dirname(name), Path.basename(name, extname)); */
                    if (packageInfo.isDebug()) {
                        min = '';
                    }
                    subPath = pathRemoveExt(name) + min + extname;
                    if (packageName) {
                        subPath = pathGetRelative(packageName, subPath);
                    }
                    uri = pathAddBase(subPath, packageUri);

                    if (tag) {
                        uri = pathAddQuery(uri, 't', tag + extname);
                    }
                }
                this.uri = uri;
            }
            return this.uri;
        },

        /**
         * Get the path of current module if load dynamically
         * @return {String}
         */
        getPath: function () {
            return this.path || (this.path = this.getUri());
        },

        /**
         * Get the name of current module
         * @return {String}
         */
        getName: function () {
            return this.name;
        },

        /**
         * Get the package which current module belongs to.
         * @return {KISSY.Loader.Package}
         */
        getPackage: function () {
            return this.packageInfo ||
                (this.packageInfo = getPackage(this.runtime, this.name));
        },

        /**
         * Get the tag of current module.
         * tag can not contain ".", eg: Math.random() !
         * @return {String}
         */
        getTag: function () {
            return this.tag || this.getPackage().getTag();
        },

        /**
         * Get the charset of current module
         * @return {String}
         */
        getCharset: function () {
            return this.charset || this.getPackage().getCharset();
        },

        /**
         * get alias required module names
         * @returns {String[]} alias required module names
         */
        getRequiresWithAlias: function () {
            var requiresWithAlias = this.requiresWithAlias,
                requires = this.requires;
            if (!requires || !requires.length) {
                return requires || [];
            } else if (!requiresWithAlias) {
                this.requiresWithAlias = requiresWithAlias =
                    normalizeModNamesWithAlias(this.runtime, requires, this.name);
            }
            return requiresWithAlias;
        },

        /**
         * Get module objects required by this module
         * @return {KISSY.Loader.Module[]}
         */
        getRequiredMods: function () {
            var runtime = this.runtime;
            return map(this.getNormalizedRequires(), function (r) {
                return createModuleInfo(runtime, r);
            });
        },

        /**
         * Get module names required by this module
         * @return {String[]}
         */
        getNormalizedRequires: function () {
            var normalizedRequires,
                normalizedRequiresStatus = this.normalizedRequiresStatus,
                status = this.status,
                requires = this.requires;
            if (!requires || !requires.length) {
                return requires || [];
            } else if ((normalizedRequires = this.normalizedRequires) &&
                /* 浜嬪厛澹版槑鐨勪緷璧栦笉鑳藉綋鍋� loaded 鐘舵€佷笅鐪熸鐨勪緷璧� */
                (normalizedRequiresStatus === status)) {
                return normalizedRequires;
            } else {
                this.normalizedRequiresStatus = status;
                this.normalizedRequires = normalizeModNames(this.runtime, requires, this.name);
                return this.normalizedRequires;
            }
        }
    };

    Loader.Module = Module;

    /**
     * @ignore
     * script/css load across browser
     * @author yiminghe@gmail.com
     */

    var /* central poll for link node */
        timer = 0,
        /* node.id:{callback:callback,node:node} */
        monitors = {},
        monitorLen = 0;

    function startCssTimer() {
        if (!timer) {
            cssPoll();
        }
    }

    function isCssLoaded(node, url) {
        var sheet = node.sheet,
            loaded;

        if (isOldWebKit) {
            /* http://www.w3.org/TR/Dom-Level-2-Style/stylesheets.html */
            if (node.sheet) {
                loaded = 1;
            }
        } else if (node.sheet) {
            try {
                var cssRules = node.sheet.cssRules;
                if (cssRules) {
                    loaded = 1;
                }
            } catch (ex) {
                /* http://www.w3.org/TR/dom/#dom-domexception-code */
                if (ex.name === 'NS_ERROR_DOM_SECURITY_ERR') {
                    /* for old firefox */
                    loaded = 1;
                }
            }
        }
        return loaded;
    }

    function cssPoll() {
        for (var url in monitors) {
            var callbackObj = monitors[url],
                node = callbackObj.node;
            if (isCssLoaded(node, url)) {
                if (callbackObj.callback) {
                    callbackObj.callback.call(node);
                }
                delete monitors[url];
                monitorLen--;
            }
        }

        timer = monitorLen ? setTimeout(cssPoll, 30) : 0;
    }

    /* refer : http://lifesinger.org/lab/2011/load-js-css/css-preload.html */
    function pollCss(node, callback) {
        var href = node.href,
            arr;
        arr = monitors[href] = {};
        arr.node = node;
        arr.callback = callback;
        monitorLen++;
        startCssTimer();
    }

    /*
 References:
 - http://unixpapa.com/js/dyna.html
 - http://www.blaze.io/technical/ies-premature-execution-problem/

 `onload` event is supported in WebKit since 535.23
 - https://bugs.webkit.org/show_activity.cgi?id=38995
 `onload/onerror` event is supported since Firefox 9.0
 - https://bugzilla.mozilla.org/show_bug.cgi?id=185236
 - https://developer.mozilla.org/en/HTML/Element/link#Stylesheet_load_events

 monitor css onload across browsers.issue about 404 failure.
 - firefox not ok锛�4 is wrong锛夛細
 - http://yearofmoo.com/2011/03/cross-browser-stylesheet-preloading/
 - all is ok
 - http://lifesinger.org/lab/2011/load-js-css/css-preload.html
 - others
 - http://www.zachleat.com/web/load-css-dynamically/
 */

    /**
     * @ignore
     * getScript support for css and js callback after load
     * @author yiminghe@gmail.com
     */

    var jsCssCallbacks = {},
        headNode = doc.getElementsByTagName('head')[0] || doc.documentElement;

    /**
     * Load a javascript/css file from the server using a GET HTTP request,
     * then execute it.
     *
     * for example:
     *      @example
     *      getScript(url, success, charset);
     *      // or
     *      getScript(url, {
     *          charset: string
     *          success: fn,
     *          error: fn,
     *          timeout: number
     *      });
     *
     * Note 404/500 status in ie<9 will trigger success callback.
     * If you want a jsonp operation, please use {@link KISSY.IO} instead.
     *
     * @param {String} url resource's url
     * @param {Function|Object} [success] success callback or config
     * @param {Function} [success.success] success callback
     * @param {Function} [success.error] error callback
     * @param {Number} [success.timeout] timeout (s)
     * @param {String} [success.charset] charset of current resource
     * @param {String} [charset] charset of current resource
     * @return {HTMLElement} script/style node
     * @member KISSY
     */
    var getScript = function (url, success, charset) {
        /* can not use KISSY.Uri, url can not be encoded for some url */
        /* eg: /??dom.js,event.js , ? , should not be encoded */
        var config = success,
            css = 0,
            error,
            timeout,
            attrs,
            callbacks,
            timer;

        if (endsWith(url.toLowerCase(), '.css')) {
            css = 1;
        }

        if (isObject(config)) {
            success = config.success;
            error   = config.error;
            timeout = config.timeout;
            charset = config.charset;
            attrs   = config.attrs;
        }

        callbacks = jsCssCallbacks[url] = jsCssCallbacks[url] || [];

        callbacks.push([success, error]);

        if (callbacks.length > 1) {
            return callbacks.node;
        }

        var node = doc.createElement(css ? 'link' : 'script'),
            clearTimer = function () {
                if (timer) {
                    clearTimeout(timer);
                    timer = undefined;
                }
            };

        if (attrs) {
            each(attrs, function (v, n) {
                node.setAttribute(n, v);
            });
        }

        if (charset) {
            node.charset = charset;
        }

        if (css) {
            node.href = url;
            node.rel = 'stylesheet';
        } else {
            node.src = url;
            node.async = true;
        }

        callbacks.node = node;

        var end = function (error) {
            var index = error,
                fn;
            clearTimer();
            each(jsCssCallbacks[url], function (callback) {
                if ((fn = callback[index])) {
                    fn.call(node);
                }
            });
            delete jsCssCallbacks[url];
        };

        var useNative = 'onload' in node;
        /*
        onload for webkit 535.23  Firefox 9.0
        https://bugs.webkit.org/show_activity.cgi?id=38995
        https://bugzilla.mozilla.org/show_bug.cgi?id=185236
        https://developer.mozilla.org/en/HTML/Element/link#Stylesheet_load_events
        phantomjs 1.7 == webkit 534.34
    */
        var forceCssPoll = Config.forceCssPoll || (isOldWebKit);

        if (css && forceCssPoll && useNative) {
            useNative = false;
        }

        function onload() {
            var readyState = node.readyState;
            if (!readyState ||
                readyState === 'loaded' ||
                readyState === 'complete') {
                node.onreadystatechange = node.onload = null;
                end(0);
            }
        }

        /* 鏍囧噯娴忚鍣� css and all script */
        if (useNative) {
            node.onload = onload;
            node.onerror = function () {
                node.onerror = null;
                end(1);
            };
        } else if (css) {
            /* old chrome/firefox for css */
            pollCss(node, function () {
                end(0);
            });
        } else {
            node.onreadystatechange = onload;
        }

        if (timeout) {
            timer = setTimeout(function () {
                end(1);
            }, timeout * 1000);
        }

        if (css) {
            /* css order matters so can not use css in head */
            headNode.appendChild(node);
        } else {
            /* can use js in head */
            headNode.insertBefore(node, headNode.firstChild);
        }
        return node;
    };
    /*
 yiminghe@gmail.com refactor@2012-03-29
 - 鑰冭檻杩炵画閲嶅璇锋眰鍗曚釜 script 鐨勬儏鍐碉紝鍐呴儴鎺掗槦

 yiminghe@gmail.com 2012-03-13
 - getScript
 - 404 in ie<9 trigger success , others trigger error
 - syntax error in all trigger success
 */

    /**
     * @ignore
     * Declare config info for KISSY.
     * @author yiminghe@gmail.com
     */

    var PACKAGE_MEMBERS = ['alias', 'debug', 'tag', 'group', 'combine', 'charset'];
    mix(Config.fns, {
        packages : function (config) {
            var name,
                Config = this.Config,
                ps = Config.packages = Config.packages || {};
            if (config) {
                each(config, function (cfg, key) {
                    /* 鍏煎鏁扮粍鏂瑰紡 */
                    name = cfg.name || key;
                    var path = cfg.base || cfg.path;
                    var newConfig = {
                        runtime: S,
                        name: name
                    };
                    each(PACKAGE_MEMBERS, function (m) {
                        if (m in cfg) {
                            newConfig[m] = cfg[m];
                        }
                    });
                    if (path) {
                        if (!endsWith(path, '/')) {
                            path += '/';
                        }
                        if (!cfg.ignorePackageNameInUri) {
                            path += name + '/';
                        }
                        newConfig.uri = normalizeBase(path);
                    }
                    if (ps[name]) {
                        ps[name].reset(newConfig);
                    } else {
                        ps[name] = new Package(newConfig);
                    }
                });
                return undefined;
            } else if (config === false) {
                Config.packages = {};
                return undefined;
            } else {
                return ps;
            }
        },
        modules: function (modules) {
            var self = this;
            if (modules) {
                each(modules, function (modCfg, modName) {
                    var mod = createModuleInfo(self, modName, modCfg);
                    if (mod.status === INIT) {
                        mix(mod, modCfg);
                    }
                });
            }
        },
        base: function (base) {
            if (!base) {
                return Config.baseUri;
            } else {
                Config.baseUri = normalizeBase(base);
                return undefined;
            }
        }
    });


    function normalizeBase(base) {

        base = replace(base, /\\/g, '/');
        if (charAt(base, base.length - 1) !== '/') {
            base += '/';
        }
        return pathAddBase(base);
    }

    /**
     * combo loader for KISSY. using combo to load module files.
     * @ignore
     * @author yiminghe@gmail.com
     */

    /* ie11 is a new one! */

    function loadScripts(runtime, rss, callback, charset, timeout) {
        var count = rss && rss.length,
            errorList = [],
            successList = [];

        function complete() {
            if (!(--count)) {
                callback(successList, errorList);
            }
        }

        each(rss, function (rs) {
            var mod;
            var config = {
                timeout: timeout,
                success: function () {
                    successList.push(rs);
                    if (mod && currentMod) {
                        /* standard browser(except ie9) fire load after KISSY.add immediately */
                        registerModule(runtime, mod.name, currentMod.factory, currentMod.config);
                        currentMod = undefined;
                    }
                    complete();
                },
                error: function () {
                    errorList.push(rs);
                    complete();
                },
                charset: charset
            };
            if (!rs.combine) {
                mod = rs.mods[0];
                if (mod.getType() === 'css') {
                    mod = undefined;
                }
            }

            getScript(rs.path, config);
        });
    }




    /**
     * @class KISSY.Loader.ComboLoader
     * using combo to load module files
     * @param runtime KISSY
     * @param waitingModules
     * @private
     */
    function ComboLoader(runtime, waitingModules) {
        this.runtime = runtime;
        this.waitingModules = waitingModules;
    }


    var currentMod,
        startLoadModName,
        startLoadModTime,
        groupTag = now();

    ComboLoader.groupTag = groupTag;

    function checkKISSYRequire(config, factory) {
        /* use require primitive statement */
        /* function(S,require){require('node')} */
        if (!config && isFunction(factory) && factory.length > 1) {
            var requires = getRequiresFromFn(factory);
            if (requires.length) {
                config = config || {};
                config.requires = requires;
            }
        } else {
            /* KISSY.add(function(){},{requires:[]}) */
            if (config && config.requires && !config.cjs) {
                config.cjs = 0;
            }
        }
        return config;
    }

    ComboLoader.add = function (name, factory, config, runtime, argsLen) {
        /* KISSY.add('xx',[],function(){}); */
        if (argsLen === 3 && isArray(factory)) {
            var tmp = factory;
            factory = config;
            config = {
                requires: tmp,
                cjs: 1
            };
        }
        /* KISSY.add(function(){}), KISSY.add('a'), KISSY.add(function(){},{requires:[]}) */
        if (isFunction(name) || argsLen === 1) {
            config = factory;
            factory = name;
            config = checkKISSYRequire(config, factory);
            /* 鍏朵粬娴忚鍣� onload 鏃讹紝鍏宠仈妯″潡鍚嶄笌妯″潡瀹氫箟 */
            currentMod = {
                factory: factory,
                config: config
            };
        } else {
            currentMod = undefined;
            config = checkKISSYRequire(config, factory);
            registerModule(runtime, name, factory, config);
        }
    };

    function getCommonPrefix(str1, str2) {
        str1 = split(str1, /\//);
        str2 = split(str2, /\//);
        var l = Math.min(str1.length, str2.length);
        for (var i = 0; i < l; i++) {
            if (str1[i] !== str2[i]) {
                break;
            }
        }
        return slice(str1, 0, i).join('/') + '/';
    }

    ComboLoader.prototype = {
        /**
         * load modules asynchronously
         */
        use: function (normalizedModNames) {
            var self = this,
                allModNames,
                comboUrls,
                timeout = Config.timeout,
                runtime = self.runtime;

            allModNames = keys(self.calculate(normalizedModNames));

            createModulesInfo(runtime, allModNames);

            comboUrls = self.getComboUrls(allModNames);

            /* load css first to avoid page blink */
            each(comboUrls.css, function (cssOne) {
                loadScripts(runtime, cssOne, function (success, error) {

                    each(success, function (one) {
                        each(one.mods, function (mod) {
                            registerModule(runtime, mod.name, noop);
                            mod.notifyAll();
                        });
                    });

                    each(error, function (one) {
                        each(one.mods, function (mod) {
                            mod.status = ERROR;
                            mod.notifyAll();
                        });
                    });
                }, cssOne.charset, timeout);
            });

            /* jss css download in parallel */
            each(comboUrls.js, function (jsOne) {
                loadScripts(runtime, jsOne, function (success) {

                    each(jsOne, function (one) {
                        each(one.mods, function (mod) {
                            if (!mod.factory) {
                                mod.status = ERROR;
                            }
                            mod.notifyAll();
                        });
                    });
                }, jsOne.charset, timeout);
            });
        },

        /**
         * calculate dependency
         */
        calculate: function (modNames, cache, ret) {
            var i,
                m,
                mod,
                modStatus,
                self = this,
                waitingModules = self.waitingModules,
                runtime = self.runtime;

            ret = ret || {};
            cache = cache || {};

            for (i = 0; i < modNames.length; i++) {
                m = modNames[i];
                if (cache[m]) {
                    continue;
                }
                cache[m] = 1;
                mod = createModuleInfo(runtime, m);
                modStatus = mod.status;
                if (modStatus >= READY_TO_ATTACH) {
                    continue;
                }
                if (modStatus !== LOADED) {
                    if (!waitingModules.contains(m)) {
                        if (modStatus !== LOADING) {
                            mod.status = LOADING;
                            ret[m] = 1;
                        }
                        /*jshint loopfunc:true*/
                        mod.wait(function (mod) {
                            waitingModules.remove(mod.name);
                            /* notify current loader instance */
                            waitingModules.notifyAll();
                        });
                        waitingModules.add(m);
                    }
                }
                self.calculate(mod.getNormalizedRequires(), cache, ret);
            }

            return ret;
        },

        /**
         * get combo mods for modNames
         */
        getComboMods: function (modNames, comboPrefixes) {
            var comboMods = {},
                runtime = this.runtime,

                packageUri, mod, packageInfo, type, typedCombos, mods,
                tag, charset, comboName, packageName;

            each(modNames, function(modName) {
                mod = createModuleInfo(runtime, modName);
                type = mod.getType();

                packageInfo = mod.getPackage();
                packageName = packageInfo.name;
                charset = packageInfo.getCharset();
                tag = packageInfo.getTag();

                packageUri = packageInfo.getUri();
                comboName = packageName;

                /* remove group feature, leave the origin definition code here */
                mod.canBeCombined = packageInfo.isCombine();

                comboPrefixes[packageName] = packageUri;

                typedCombos = comboMods[type] = comboMods[type] || {};
                if (!(mods = typedCombos[comboName])) {
                    mods = typedCombos[comboName] = [];
                    mods.charset = charset;
                    mods.tags = [tag];
                } else {
                    if (!(mods.tags.length === 1 && mods.tags[0] === tag)) {
                        mods.tags.push(tag);
                    }
                }
                mods.push(mod);
            });

            return comboMods;
        },

        /**
         * Get combo urls
         */
        getComboUrls: function (modNames) {
            var runtime = this.runtime,
                Config = runtime.Config,
                comboPrefix = Config.comboPrefix,
                comboSep = Config.comboSep,
                maxFileNum = Config.comboMaxFileNum,
                maxUrlLength = Config.comboMaxUrlLength;

            var comboPrefixes = {};
            /* {type, {comboName, [modInfo]}}} */
            var comboMods = this.getComboMods(modNames, comboPrefixes);
            /* {type, {comboName, [url]}}} */
            var comboRes = {};

            /* generate combo urls */
            for (var type in comboMods) {
                comboRes[type] = {};
                for (var comboName in comboMods[type]) {
                    var currentComboUrls = [];
                    var currentComboMods = [];
                    var mods = comboMods[type][comboName];
                    var tags = mods.tags;
                    var tag = tags.length > 1 ? getHash(tags.join('')) : tags[0];

                    var suffix = (tag ? '?t=' + encodeURIComponent(tag) + '.' + type : ''),
                        suffixLength = suffix.length,
                        basePrefix = comboPrefixes[comboName].toString(),
                        baseLen = basePrefix.length,
                        prefix = basePrefix + comboPrefix,
                        res = comboRes[type][comboName] = [];

                    var l = prefix.length;
                    res.charset = mods.charset;
                    res.mods = [];

                    /*jshint loopfunc:true*/
                    var pushComboUrl = function () {
                        res.push({
                            combine: 1,
                            path: prefix + currentComboUrls.join(comboSep) + suffix,
                            mods: currentComboMods
                        });
                    };

                    for (var i = 0; i < mods.length; i++) {
                        var currentMod = mods[i];
                        res.mods.push(currentMod);
                        var path = currentMod.getPath();
                        if (!currentMod.canBeCombined) {
                            res.push({
                                combine: 0,
                                path: path,
                                mods: [currentMod]
                            });
                            continue;
                        }
                        /* ignore query parameter */
                        var subPath = path.slice(baseLen).replace(/\?.*$/, '');
                        currentComboUrls.push(subPath);
                        currentComboMods.push(currentMod);

                        if (currentComboUrls.length > maxFileNum ||
                            (l + currentComboUrls.join(comboSep).length + suffixLength > maxUrlLength)) {
                            currentComboUrls.pop();
                            currentComboMods.pop();
                            pushComboUrl();
                            currentComboUrls = [];
                            currentComboMods = [];
                            i--;
                        }
                    }
                    if (currentComboUrls.length) {
                        pushComboUrl();
                    }
                }
            }
            return comboRes;
        }
    };

    Loader.ComboLoader = ComboLoader;

    /*
 2013-09-11
 - union simple loader and combo loader

 2013-07-25 闃垮彜, yiminghe
 - support group combo for packages

 2013-06-04 yiminghe@gmail.com
 - refactor merge combo loader and simple loader
 - support error callback

 2012-02-20 yiminghe note:
 - three status
 0: initialized
 LOADED: load into page
 ATTACHED: factory executed
 */

    /**
     * @ignore
     * mix loader into KISSY and infer KISSY baseUrl if not set
     * @author yiminghe@gmail.com
     */

    function WaitingModules(fn) {
        this.fn = fn;
        this.waitMods = {};
        this.waitModsNum = 0;
    }

    WaitingModules.prototype = {
        constructor: WaitingModules,

        notifyAll: function () {
            var fn = this.fn;
            if (fn && !this.waitModsNum) {
                this.fn = null;
                fn();
            }
        },

        add: function (modName) {
            this.waitMods[modName] = 1;
            this.waitModsNum++;
        },

        remove: function (modName) {
            delete this.waitMods[modName];
            this.waitModsNum--;
        },

        contains: function (modName) {
            return this.waitMods[modName];
        }
    };

    Loader.WaitingModules = WaitingModules;

    mix(S, {
        /**
         * Registers a module with the KISSY global.
         * @param {String} name module name.
         * it must be set if combine is true in {@link KISSY#config}
         * @param {Function} factory module definition function that is used to return
         * exports of this module
         * @param {KISSY} factory.S KISSY global instance
         * @param {Object} [cfg] module optional config data
         * @param {String[]} cfg.requires this module's required module name list
         * @member KISSY
         *
         *
         *      // dom module's definition
         *      KISSY.add('dom', function(S, xx){
         *          return {css: function(el, name, val){}};
         *      },{
         *          requires:['xx']
         *      });
         */
        add: function (name, factory, cfg) {
            ComboLoader.add(name, factory, cfg, S, arguments.length);
        },
        /**
         * Attached one or more modules to global KISSY instance.
         * @param {String|String[]} modNames moduleNames. 1-n modules to bind(use comma to separate)
         * @param {Function} success callback function executed
         * when KISSY has the required functionality.
         * @param {KISSY} success.S KISSY instance
         * @param success.x... modules exports
         * @member KISSY
         *
         *
         *      // loads and attached overlay,dd and its dependencies
         *      KISSY.use('overlay,dd', function(S, Overlay){});
         */
        use: function (modNames, success) {
            var normalizedModNames,
                loader,
                error,
                sync,
                tryCount = 0,
                finalSuccess,
                waitingModules = new WaitingModules(loadReady);

            if (isObject(success)) {
                sync = success.sync;
                error = success.error;
                success = success.success;
            }

            finalSuccess = function () {
                success.apply(S, getModules(S, modNames));
            };

            modNames = getModNamesAsArray(modNames);
            modNames = normalizeModNamesWithAlias(S, modNames);

            normalizedModNames = unalias(S, modNames);

            function loadReady() {
                ++tryCount;
                var errorList = [],
                    start = now(),
                    ret;
                ret = checkModsLoadRecursively(normalizedModNames, S, undefined, errorList);

                if (ret) {
                    attachModsRecursively(normalizedModNames, S);
                    if (success) {
                        if (sync) {
                            finalSuccess();
                        } else {
                            /* standalone error trace */
                            setImmediate(finalSuccess);
                        }
                    }
                } else if (errorList.length) {
                    if (error) {
                        if (sync) {
                            error.apply(S, errorList);
                        } else {
                            setImmediate(function () {
                                error.apply(S, errorList);
                            });
                        }
                    }
                } else {

                    waitingModules.fn = loadReady;
                    loader.use(normalizedModNames);
                }
            }

            loader = new ComboLoader(S, waitingModules);

            /*  in case modules is loaded statically
            synchronous check
            but always async for loader
        */
            if (sync) {
                waitingModules.notifyAll();
            } else {
                setImmediate(function () {
                    waitingModules.notifyAll();
                });
            }
            return S;
        },

        /**
         * get module exports from KISSY module cache
         * @param {String} moduleName module name
         * @param {String} refName internal usage
         * @member KISSY
         * @return {*} exports of specified module
         */
        require: function (moduleName, refName) {
            if (moduleName) {
                var moduleNames = unalias(S, normalizeModNamesWithAlias(S, [moduleName], refName));
                attachModsRecursively(moduleNames, S);
                return getModules(S, moduleNames)[1];
            }
        }
    });

    Env.mods = {}; /* all added mods */


    /*
 2013-06-04 yiminghe@gmail.com
 - refactor merge combo loader and simple loader
 - support error callback
 */

    /**
     * @ignore
     * init loader, set config
     */

    function getBaseDir() {
        var scripts      = doc.scripts,
            loaderScript = scripts[scripts.length - 1],
            loaderSrc    = loaderScript.src || doc.URL;

        return loaderSrc.match(/[^?#]*\//)[0];
    }

    /* will transform base to absolute path */
    config({
        debug       : false,
        base        : getBaseDir(),
        comboPrefix : '??',
        comboSep    : ',',
        charset     : 'utf-8',
        lang        : 'zh-cn',
        comboMaxUrlLength: 2000,
        comboMaxFileNum: 40
    });

    (function(){

        var scripts = document.getElementsByTagName('script')//鑾锋墍鏈塻cript鏍囩
            , script = scripts[scripts.length - 1]//鑾峰彇褰撳墠鍔犺浇鍒扮殑script鏍囩
            , src = script.src//鑾峰彇褰撳墠鍔犺浇鍒扮殑script鏍囩鐨剆rc灞炴€�

        var S = KISSY;
        S.config({
            base:'http://g.tbcdn.cn/kissy/k/1.4.1',
            packages:[
                {
                    name:"gallery",
                    path:'http://a.tbcdn.cn/s/kissy/gallery',
                    charset:"utf-8",
                    ignorePackageNameInUri:true
                },
                {
                    name:"m",
                    path:/g\.assets/i.test(src)?
                        'http://g.assets.daily.taobao.net/kissy/m/0.2.1'
                        :'http://g.tbcdn.cn/kissy/m/0.2.1',
                    charset:"utf-8",
                    ignorePackageNameInUri:true
                }
            ],
            modules:{
                'core':{
                    alias:[
                        'm/anim',
                        'm/touch',
                        'm/lang',
                        'm/base',
                        'm/ua',
                        'm/uri',
                        'm/juicer',
                        'm/form'
                    ]
                },
                'anim':{
                    alias:['m/anim']
                },
                'touch':{
                    alias:['m/touch']
                },
                'lang':{
                    alias:['m/lang']
                },
                'base':{
                    alias:['m/base']
                },
                'ua':{
                    alias:['m/ua']
                },
                'uri':{
                    alias:['m/uri']
                },
                'form':{
                    alias:['m/form']
                },
                'juicer':{
                    alias:['m/juicer']
                }
            }
        });
    })();


}(this));
// <style>td {border-top:1px solid #ccc} table {border-collapse: collapse;}</style>

// ### API Delete
//
// | API                  | KISSY                | KISSY-MINI           |
// |:-------------------- |:--------------------:|:--------------------:|
// | test                 | 鈭�                    | 鈺�                    |
// | replaceClass         | 鈭�                    | 鈺�                    |
// | style                | 鈭�                    | 鈺�                    |
// | innerWidth           | 鈭�                    | 鈺�                    |
// | innerHeight          | 鈭�                    | 鈺�                    |
// | outerWidth           | 鈭�                    | 鈺�                    |
// | outerHeight          | 鈭�                    | 鈺�                    |
// | addStyleSheet        | 鈭�                    | 鈺�                    |
// | docHeight            | 鈭�                    | 鈺�                    |
// | docWidth             | 鈭�                    | 鈺�                    |
// | viewportHeight       | 鈭�                    | 鈺�                    |
// | viewportWidth        | 鈭�                    | 鈺�                    |
// | scrollIntoView       | 鈭�                    | 鈺�                    |
// | unselectable         | 鈭�                    | 鈺�                    |
// | nodeName             | 鈭�                    | 鈺�                    |
// | outerHTML            | 鈭�                    | 鈺�                    |
//
// ### API TODO
//
// | API                  | KISSY                | KISSY-MINI           |
// |:-------------------- |:--------------------:|:--------------------:|
// | data                 | 鈭�                    | 鈺�                    |
// | removeData           | 鈭�                    | 鈺�                    |
// | hasData              | 鈭�                    | 鈺�                    |
//
// ### KISSY VS KISSY-MINI
//
// | KISSY                | KISSY-MINI           | Note                 |
// |:-------------------- |:--------------------:|:--------------------:|
// | S.DOM.css(el, name)  | S.all(el).css(name)  | 鍙敮鎸侀摼寮忓啓娉�         |
// | S.DOM.parent(el, 2)  | 鈺�                    | 涓嶆敮鎸佹寚瀹氬眰绾�         |
// | S.DOM.clone()        |                      | 鍙敮鎸佸厓绱犲鍒�         |
//
;(function(global, S) {

    /**
     * @ignore
     * @file util
     * @author 鑾簤 <gaoli.gl@taobao.com>
     */

    var win   = window,
        doc   = document,
        docEl = doc.documentElement;

    var emptyArray = [],
        some       = emptyArray.some,
        every      = emptyArray.every,
        slice      = emptyArray.slice,
        filter     = emptyArray.filter,
        concat     = emptyArray.concat,
        indexOf    = emptyArray.indexOf,
        forEach    = emptyArray.forEach;

    function mix(target, source) {
        for (var key in source) {
            target[key] = source[key];
        }
    }

    function map(els, cb) {
        var val,
            ret = [];

        els && forEach.call(els, function(el, index) {
            val = cb(el, index);
            if (val !== null) {
                ret.push(val);
            }
        });

        return ret.length ? concat.apply([], ret) : ret;
    }

    function each(els, callback) {
        els && forEach.call(els, callback);
        return els;
    }

    function isWindow(node) {
        return node && node == node.window;
    }

    function isDocument(node) {
        return node && node.nodeType === 9;
    }

    function isElement(node) {
        return node && node.nodeType === 1;
    }

    function likeArray(nodes) {
        return nodes && typeof nodes.length == 'number';
    }

    function unique(array) {
        return filter.call(array, function(item, index) {
            return array.indexOf(item) == index;
        });
    }

    function getScript(url) {
        var script = doc.createElement('script'),
            head   = doc.getElementsByTagName('head')[0] || docEl;

        script.src = url;
        head.insertBefore(script, head.firstChild);
    }

    function isType(type) {
        return function(obj) {
            return {}.toString.call(obj) == '[object ' + type + ']';
        }
    }

    var isNumber   = isType('Number'),
        isString   = isType('String'),
        isObject   = isType('Object'),
        isArray    = Array.isArray || isType('Array'),
        isFunction = isType('Function');

    var isPlainObject = function(obj) {
        return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype;
    };
    /**
     * @ignore
     * @file node
     * @author 鑾簤 <gaoli.gl@taobao.com>
     */

    var node = {};

    mix(node, {

        // ** .indexOf() **
        //
        // * .indexOf(el)
        //
        //   閫昏緫绫讳技 `Array.prototype.indexOf`
        //
        //   鏌ユ壘 el 鍦� els锛堝厓绱犲垪琛級涓殑浣嶇疆锛宔l 绫诲瀷鍙互鏄� Node锛屼篃鍙互鏄師鐢熻妭鐐�
        indexOf: function(el) {
            return likeArray(el) ?
                indexOf.call(this, el[0]) :
                indexOf.apply(this, arguments);
        },

        // ** .each() **
        //
        // * .each(cb)
        //
        //  閬嶅巻鏁扮粍涓殑姣忎竴椤癸紝鎵ц鎸囧畾鏂规硶锛屽嚱鏁拌繑鍥� false 鍒欓亶鍘嗙粨鏉�
        //
        //  this 鍏抽敭瀛楁寚鍚戝綋鍓� item锛堜綔涓哄嚱鏁扮殑绗竴涓弬鏁颁紶閫掞級
        each: function(cb) {
            every.call(this, function(el, index) {
                el = $(el);
                return cb.call(el, el, index) !== false;
            });
            return this;
        },

        // ** .slice() **
        //
        // * .slice(start[, end])
        //
        //  杩斿洖涓€涓柊鐨� Node 闆嗗悎瀵硅薄锛屾彁鍙栧寘鍚粠 start 鍒� end 锛堜笉鍖呮嫭璇ュ厓绱狅級鐨勫厓绱�
        slice: function() {
            return $(slice.apply(this, arguments));
        },

        // ** .end() **
        //
        // * .end()
        //
        //   寰楀埌涓婁竴娆� S.one() / S.all() 鎿嶄綔鍓嶇殑 Node 瀵硅薄
        //
        //   寮曞叆璇ユ柟娉曟槸涓轰簡鏇村ソ鐨勬敮鎸侀摼寮忔搷浣�( chaining )
        //
        //   鍙互鍦ㄤ竴涓鍙ュ唴瀵逛笉鍚屽眰娆″緱鑺傜偣闆嗗悎杩涜涓嶅悓鐨勬搷浣�
        end: function() {
            return this.__parent || this;
        },

        // ** .getDOMNode() **
        //
        // * .getDOMNode()
        //
        //   寰楀埌璇� Node 瀵硅薄鍖呭惈鐨勭涓€涓師鐢熻妭鐐�
        getDOMNode: function() {
            return this[0]
        }

    });

// ** .all() **
//
// * .all(selector[, context])
//
//   閫氳繃鎵ц css 閫夋嫨鍣ㄥ寘瑁� dom 鑺傜偣锛屽垱寤哄厓绱犳垨鑰呬粠涓€涓� html 鐗囨鏉ュ垱寤轰竴涓� Node 瀵硅薄
//
//   Node 闆嗗悎鏄竴涓被浼兼暟缁勭殑瀵硅薄锛屽畠鍏锋湁閾惧紡鏂规硶鏉ユ搷浣滃畠鎸囧悜鐨� dom 锛屾枃妗ｅ璞′腑鐨勬墍鏈夋柟娉曢兘鏄泦鍚堟柟娉�
//
//   濡傛灉閫夋嫨鍣ㄤ腑瀛樺湪 content 鍙傛暟锛坈ss 閫夋嫨鍣紝dom锛屾垨鑰� Node 闆嗗悎瀵硅薄锛夛紝閭ｄ箞鍙湪鎵€缁欑殑鑺傜偣鑳屾櫙涓嬭繘琛� css 閫夋嫨鍣紝杩欎釜鍔熻兘鏈夌偣鍍忎娇鐢� `S.all(context).all(selector)`
//
//   鍙互閫氳繃涓€涓� html 瀛楃涓茬墖娈垫潵鍒涘缓涓€涓� dom 鑺傜偣銆備篃鍙互閫氳繃缁欏畾涓€缁勫睘鎬ф槧灏勬潵鍒涘缓鑺傜偣銆傛渶蹇殑鍒涘缓鍏冪礌锛屼娇鐢� `<div>` 鎴� `<div/>` 褰㈠紡
//
// ```
// var $ = S.all;
//
// $('div');          //=> 鑾峰彇鎵€鏈� div 鑺傜偣
// $('#foo');         //=> 鑾峰彇 ID 涓� 'foo' 鐨勮妭鐐�
// $('<p>Hello</p>'); //=> 鍒涘缓 p 鑺傜偣
// $('<div />', {
//     text: 'ok',
//     css : {
//         color: 'red'
//     }
// }); //=> <div style="color:red">ok</div>
// ```
    var $ = function(selector, context) {
        var ret = [];

        if (selector) {
            if (isString(selector)) {
                selector = selector.trim();

                if (selector[0] == '<' && /<([\w:]+)/.test(selector)) {
                    ret = node.create(selector);
                } else if (context !== undefined) {
                    ret = find(selector, $(context));
                } else {
                    ret = query(selector, doc);
                }
            } else if ($.isNode(selector)) {
                return selector;
            } else {
                if (selector.nodeType || selector.setTimeout) {
                    ret = [selector];
                } else if (isArray(selector)) {
                    ret = selector;
                } else if (!selector.nodeType && !selector.setTimeout && selector.item) {
                    ret = slice.call(selector);
                }
            }
        }

        return $.node(ret);
    };

    $.all = function(selector, context) {
        return $(selector, context);
    };

// ** .one() **
//
// * .one(selector[, context])
//
//   杩斿洖涓€涓妭鐐癸紝鐢ㄦ硶鍚� `.all()`
    $.one = function(selector, context) {
        return $(selector, context).item(0);
    };

// ** .node() **
//
// * .node(els)
//
//   鎶婁竴涓妭鐐癸紙鏁扮粍锛夎浆鎹负 Node锛堥泦鍚堬級瀵硅薄
//
// 杩欓噷 `$.node` 瀹為檯鎸囩殑鏄� `S.Node.node`锛孨ode 瀵硅薄瀹炰緥灏嗕細缁ф壙 `S.node` 閲岀殑鏂规硶
//
// `S.Node.node` 涓€鑸儏鍐典笅鍙互浣跨敤 `S.all()` 鏉ヤ唬鏇�
    $.node = function(els) {
        els = els || [];
        els.__proto__ = node;
        return els;
    };

    $.node.prototype = node;

// ** .isNode() **
//
// * .isNode(obj)
//
//   鍒ゆ柇涓€涓彉閲忔槸鍚︿负 Node 瀵硅薄
    $.isNode = function(obj) {
        return obj instanceof $.node;
    };
    /**
     * @ignore
     * @file node-selector
     * @author 鑾簤 <gaoli.gl@taobao.com>
     */

    var tempParent = document.createElement('div');

// ** .find() **
//
// * .find(selector, context)
//
//  鍐呴儴鏂规硶锛屽湪 context 鑼冨洿鍐呮煡鎵捐妭鐐癸紙澧炲己鐗堬級
    function find(selector, context) {
        return context.length === 1 ?
            query(selector, context[0]) :
            unique(
                map(context, function(el) {
                    return query(selector, el);
                })
            );
    }

// ** .query() **
//
// * .query(selector, context)
//
//  鍐呴儴鏂规硶锛屽湪 context 鑼冨洿鍐呮煡鎵捐妭鐐�
    function query(selector, context) {
        var s        = selector.charAt(0), ret,
            maybeID  = s === '#',
            maybeCls = s === '.',
            nameOnly = maybeID || maybeCls ? selector.slice(1) : selector,
            isSimple = /^[\w-]*$/.test(nameOnly);

        return isDocument(context) || isElement(context) ?
            isDocument(context) && maybeID && isSimple ?
                (ret = context.getElementById(nameOnly)) ? [ret] : [] :
                slice.call(
                    !maybeID && isSimple ?
                        maybeCls ?
                            context.getElementsByClassName(nameOnly) :
                            context.getElementsByTagName(selector) :
                        context.querySelectorAll(selector)
                )
            : [];
    }

// ** .matches() **
//
// * .matches(el, selector)
//
//  鍐呴儴鏂规硶锛岄€夋嫨鍣ㄥ尮閰嶅姞閫�
    function matches(el, selector) {
        if (!el || !selector || !isElement(el)) {
            return false;
        }

        var matchesSelector = el.webkitMatchesSelector ||
            el.mozMatchesSelector ||
            el.oMatchesSelector ||
            el.matchesSelector;

        if (matchesSelector) {
            return matchesSelector.call(el, selector);
        } else {
            var parent    = el.parentNode,
                hasParent = !!parent,
                match;

            if (!hasParent) {
                parent = tempParent;
                parent.appendChild(el);
            }

            match = ~query(selector, parent).indexOf(el);
            !hasParent && parent.removeChild(el);

            return match;
        }
    }

    mix(S, {
        query: query
    });

    mix(node, {

        // ** .all() **
        //
        // * .all(selector)
        //
        //  缁� `S.node` 鍙傚厓绫绘寕杞� `.all()` 鏂规硶锛屾帹鑽愮洿鎺ヤ娇鐢� `S.all()`
        all: function(selector) {
            var self = this,
                ret;

            ret = $(find(selector, self));
            ret.__parent = self;

            return ret;
        },

        // ** .one() **
        //
        // * .one(selector)
        //
        //  缁� `S.node` 鍙傚厓绫绘寕杞� `.one()` 鏂规硶锛屾帹鑽愮洿鎺ヤ娇鐢� `S.one()`
        one: function(selector) {
            var self = this,
                ret;

            ret = self.all(selector);
            ret = ret.length ? ret.slice(0, 1) : null;

            if (ret) {
                ret.__parent = self;
            }

            return ret;
        },

        // ** .filter() **
        //
        // * .filter(selector)
        //
        //  缁� `S.node` 鍙傚厓绫绘寕杞� `.filter()` 鏂规硶锛屾帹鑽愮洿鎺ヤ娇鐢� `els.filter()`
        filter: function(selector) {
            if (isFunction(selector)) {
                return $(filter.call(this, function(el) {
                    return selector.call(el, el);
                }));
            } else {
                return $(filter.call(this, function(el) {
                    return matches(el, selector);
                }));
            }
        }

    });

    /**
     * @ignore
     * @file node-class
     * @author 鑾簤 <gaoli.gl@taobao.com>
     */

    var classCache = {};

    function classRE(name) {
        return name in classCache ?
            classCache[name] : (classCache[name] = new RegExp('(^|\\s)' + name + '(\\s|$)'));
    }

    function className(el, val) {
        if (val === undefined) {
            return el.className;
        } else {
            el.className = val;
        }
    }

    function classSplit(names) {
        return names.split(/[\.\s]\s*\.?/);
    }

    mix(node, {

        // ** .addClass() **
        //
        // * .addClass(names)
        //
        //  缁欑鍚堥€夋嫨鍣ㄧ殑鎵€鏈夊厓绱犳坊鍔犳寚瀹� class
        //
        //  澶氫釜 class 绫诲悕閫氳繃绌烘牸鍒嗛殧
        addClass: function(names) {
            if (!names) return this;
            return each(this, function(el) {
                var $el       = $(el),
                    cls       = className(el),
                    classList = [];

                each(classSplit(names), function(name) {
                    !$el.hasClass(name) && classList.push(name)
                });

                classList.length && className(el, cls + (cls ? ' ' : '') + classList.join(' '))
            });
        },

        // ** .removeClass() **
        //
        // * .removeClass()
        //
        //  缁欑鍚堥€夋嫨鍣ㄧ殑鎵€鏈夊厓绱犵Щ闄ゆ墍鏈� class
        //
        // * .removeClass(names)
        //
        //  缁欑鍚堥€夋嫨鍣ㄧ殑鎵€鏈夊厓绱犵Щ闄ゆ寚瀹� class
        //
        //  澶氫釜 class 绫诲悕閫氳繃绌烘牸鍒嗛殧
        removeClass: function(names) {
            return each(this, function(el) {
                if (names === undefined) {
                    return className(el, '');
                } else {
                    var classList = className(el);

                    each(classSplit(names), function(name) {
                        classList = classList.replace(classRE(name), ' ');
                    });

                    className(el, classList.trim());
                }
            });
        },

        // ** .toggleClass() **
        //
        // * .toggleClass(names[, when])
        //
        //  鎿嶄綔绗﹀悎閫夋嫨鍣ㄧ殑鎵€鏈夊厓绱狅紝濡傛灉瀛樺湪鍊间负 names 鐨� class锛屽垯绉婚櫎鎺夛紝鍙嶄箣娣诲姞
        //
        //  濡傛灉 when 鐨勫€间负鐪燂紝杩欎釜鍔熻兘绫讳技浜� `.addClass()` 鏂规硶锛屽鏋滀负鍋囷紝杩欎釜鍔熻兘绫讳技涓� `.removeClass()` 鏂规硶
        toggleClass: function(names, when) {
            if (!names) return this;
            return each(this, function(el) {
                var $el = $(el);

                each(classSplit(names), function(name) {
                    (when === undefined ? !$el.hasClass(name) : when) ?
                        $el.addClass(name) : $el.removeClass(name);
                });
            });
        },

        // ** .hasClass() **
        //
        // * .hasClass(names)
        //
        //  鍒ゆ柇绗﹀悎閫夋嫨鍣ㄧ殑鎵€鏈夊厓绱犱腑鏄惁鏈夋煇涓厓绱犲惈鏈夌壒瀹� class
        hasClass: function(names) {
            if (!names) return false;
            return some.call(this, function(el) {
                return every.call(this, function(name) {
                    return name ? classRE(name).test(className(el)) : true;
                });
            }, classSplit(names));
        }

    });

    /**
     * @ignore
     * @file node-attr
     * @author 鑾簤 <gaoli.gl@taobao.com>
     */

    var RE_BOOLEAN = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i;

    var attrMethod = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'],
        propFixMap = {
            hidefocus      : 'hideFocus',
            tabindex       : 'tabIndex',
            readonly       : 'readOnly',
            'for'          : 'htmlFor',
            'class'        : 'className',
            maxlength      : 'maxLength',
            cellspacing    : 'cellSpacing',
            cellpadding    : 'cellPadding',
            rowspan        : 'rowSpan',
            colspan        : 'colSpan',
            usemap         : 'useMap',
            frameborder    : 'frameBorder',
            contenteditable: 'contentEditable'
        };

    function pluck(els, property) {
        return map(els, function(el) {
            return el[property];
        });
    }

    function setAttribute(el, name, val) {
        val == null ? el.removeAttribute(name) : el.setAttribute(name, val)
    }

    mix(node, {

        // ** .attr() **
        //
        // * .attr(name)
        //
        //   鑾峰彇绗﹀悎閫夋嫨鍣ㄧ殑绗竴涓厓绱犵殑灞炴€у€�
        //
        // * .attr(name, val)
        //
        //   缁欑鍚堥€夋嫨鍣ㄧ殑鎵€鏈夊厓绱犺缃睘鎬у€�
        //
        // * .attr(kv)
        //
        //   缁欑鍚堥€夋嫨鍣ㄧ殑鎵€鏈夊厓绱犺缃睘鎬у€�
        //
        // `.attr()` 鍜� `.prop()` 鐨勫尯鍒�
        //
        // ```
        // el.attr('checked') // => "checked"
        // el.prop('checked') // => true
        // ```
        //
        // `.attr()` 鍜� `.prop()` 鐨勪娇鐢�
        //
        // 浠庝腑鏂囨剰鎬濈湅锛屼袱鑰呭垎鍒槸鑾峰彇 / 璁剧疆 attributes 鍜� properties 鐨勬柟娉曪紝鍒嗗埆鍦ㄨ繖涓や釜鍦烘櫙涓娇鐢細鍏锋湁 true 鍜� false 涓や釜灞炴€х殑灞炴€э紝濡� checked锛宻elected 鎴栬€� disabled 浣跨敤 `.prop()`锛屽叾浠栫殑浣跨敤 `.attr()`
        attr: function(name, val) {
            var key,
                ret;

            if (isPlainObject(name)) {
                for (key in name) {
                    node.attr.call(this, key, name[key]);
                }
                return this;
            }

            if (~attrMethod.indexOf(name)) {
                return $(this)[name](val);
            }

            if (val == undefined) {
                var el = this[0];

                if (el && isElement(el)) {
                    if (RE_BOOLEAN.test(name)) {
                        ret = $(el).prop(name) ? name.toLowerCase() : undefined;
                    } else if (name == 'value' && el.nodeName == 'INPUT') {
                        ret = this.val();
                    } else {
                        ret = el.getAttribute(name);
                        ret = !ret && name in el ? el[name] : ret;
                    }
                }
            } else {
                ret = each(this, function(el) {
                    isElement(el) && setAttribute(el, name, val);
                });
            }

            return ret === null ? undefined : ret;
        },

        // ** .removeAttr() **
        //
        // * .removeAttr(name)
        //
        //   绉婚櫎绗﹀悎閫夋嫨鍣ㄧ殑鎵€鏈夊厓绱犵殑鎸囧畾灞炴€�
        removeAttr: function(name) {
            return each(this, function(el) {
                isElement(el) && setAttribute(el, name)
            });
        },

        // ** .hasAttr() **
        //
        // * .hasAttr(name)
        //
        //   鍒ゆ柇绗﹀悎閫夋嫨鍣ㄧ殑鎵€鏈夊厓绱犱腑鏄惁鏈夋煇涓厓绱犲惈鏈夌壒瀹氬睘鎬�
        hasAttr: function(name) {
            if (!name) return false;
            return some.call(this, function(el) {
                return isElement(el) && el.getAttribute(name);
            });
        },

        // ** .prop() **
        //
        // * .prop(name)
        //
        //   鑾峰彇绗﹀悎閫夋嫨鍣ㄧ殑绗竴涓厓绱犵殑瀵瑰簲 property 鍊�
        //
        // * .prop(name, val)
        //
        //   缁欑鍚堥€夋嫨鍣ㄧ殑鎵€鏈夊厓绱犺缃� property 鍊�
        //
        // * .prop(kv)
        //
        //   缁欑鍚堥€夋嫨鍣ㄧ殑鎵€鏈夊厓绱犺缃� property 鍊�
        prop: function(name, val) {
            name = propFixMap[name] || name;
            return val == undefined ?
                this[0] && this[0][name] :
                each(this, function(el) {
                    el[name] = val;
                });
        },

        // ** .hasProp() **
        //
        // * .hasProp(name)
        //
        //  鍒ゆ柇绗﹀悎閫夋嫨鍣ㄧ殑绗竴涓厓绱犳槸鍚﹀惈鏈夌壒瀹� property 灞炴€�
        hasProp: function(name) {
            if (!name) return false;
            name = propFixMap[name] || name;
            return some.call(this, function(el) {
                return isElement(el) && el[name];
            });
        },

        // ** .val() **
        //
        // * .val()
        //
        //  鑾峰彇绗﹀悎閫夋嫨鍣ㄧ殑绗竴涓厓绱犳墍鐨� value 鍊�
        //
        // * .val(val)
        //
        //  缁欑鍚堥€夋嫨鍣ㄧ殑鎵€鏈夊厓绱犺缃� value 鍊�
        //
        // 濡傛灉鏄� `<select multiple>` 鏍囩锛屽垯杩斿洖涓€涓暟缁�
        val: function(val) {
            var el = this[0];

            if (!el) return this;

            if (el.multiple) {
                var opts = $('option', el);

                return val == undefined ?
                    slice.call(
                        pluck(
                            opts.filter(function(opt) {
                                return opt.selected;
                            }), 'value'
                        )
                    ) :
                    each(opts, function(opt) {
                        opt.selected = ~val.indexOf(opt.value);
                    });
            } else {
                return val == undefined ?
                    el.value :
                    each(this, function(el) {
                        el.value = val;
                    });
            }
        },

        // ** .text() **
        //
        // * .text()
        //
        //  鑾峰彇绗﹀悎閫夋嫨鍣ㄧ殑绗竴涓厓绱犳墍鍖呭惈鐨勬枃鏈€�
        //
        // * .val(text)
        //
        //  缁欑鍚堥€夋嫨鍣ㄧ殑鎵€鏈夊厓绱犺缃枃鏈€�
        text: function(text) {
            return text === undefined ?
                this.length ?
                    this[0].textContent : null
                :
                each(this, function(el) {
                    el.textContent = (text === undefined) ? '' : '' + text
                });
        }

    });

    /**
     * @ignore
     * @file node-style
     * @author 鑾簤 <gaoli.gl@taobao.com>
     */

    var cssNumber = {
            'column-count': 1,
            'columns'     : 1,
            'font-weight' : 1,
            'line-height' : 1,
            'opacity'     : 1,
            'z-index'     : 1,
            'zoom'        : 1
        },
        elDisplay = {};

    function dasherize(str) {
        return str.replace(/::/g, '/')
            .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
            .replace(/([a-z\d])([A-Z])/g, '$1_$2')
            .replace(/_/g, '-')
            .toLowerCase();
    }

// ** .camelCase() **
//
// * .camelCase(name)
//
//  鍐呴儴鏂规硶锛屽皢涓€缁勫瓧绗︿覆鍙樻垚鈥滈獑椹尖€濆懡鍚嶆硶鐨勬柊瀛楃涓诧紝濡傛灉璇ュ瓧绗﹀凡缁忔槸鈥滈獑椹尖€濆懡鍚嶆硶锛屽垯涓嶅彉鍖�
//
// ```
// .camelCase('abc-def'); //=> 'abcDef'
// .camelCase('abcDef');  //=> 'abcDef'
// ```
    function camelCase(name) {
        return name.replace(/-+(.)?/g, function() {
            return arguments[1].toUpperCase();
        });
    }

// ** .maybeAddPx() **
//
// * .maybeAddPx(name, val)
//
//  鍐呴儴鏂规硶锛屾牴鎹儏鍐靛皢鏁板瓧杞崲涓哄甫鍗曚綅鐨勫€�
//
// ```
// .maybeAddPx('width', 12); //=> '12px'
// ```
    function maybeAddPx(name, val) {
        return isNumber(val) && !cssNumber[dasherize(name)] ? val + 'px' : val;
    }

// ** .getComputedStyle() **
//
// * .getComputedStyle(el, name)
//
//  鍐呴儴鏂规硶锛岃幏鍙栧厓绱犳墍鏈夋渶缁堜娇鐢ㄧ殑 CSS 灞炴€у€�
    function getComputedStyle(el, name) {
        return win.getComputedStyle(el, null).getPropertyValue(name);
    }

// ** .getDefaultDisplay() **
//
// * .getDefaultDisplay(tagName)
//
//  鍐呴儴鏂规硶锛岃幏鍙� tag 鍏冪礌鍘熷 display 灞炴€�
    function getDefaultDisplay(tagName) {
        if (!elDisplay[tagName]) {
            var el = doc.createElement(tagName),
                display;

            doc.body.appendChild(el);
            display = getComputedStyle(el, 'display');
            el.parentNode.removeChild(el);
            display == 'none' && (display = 'block');
            elDisplay[tagName] = display;
        }

        return elDisplay[tagName];
    }

    mix(node, {

        // ** .css() **
        //
        // * .css(name)
        //
        //  鑾峰彇绗﹀悎閫夋嫨鍣ㄧ殑绗竴涓厓绱犵殑鏍峰紡鍊�
        //
        // * .css(name, val)
        //
        //  缁欑鍚堥€夋嫨鍣ㄧ殑鎵€鏈夊厓绱犺缃牱寮忓€�
        //
        // * .css(kv)
        //
        //  缁欑鍚堥€夋嫨鍣ㄧ殑鎵€鏈夊厓绱犺缃牱寮忓€�
        //
        // ```
        // var el = $('h1');
        // el.css('background-color');         // 鑾峰彇灞炴€�
        // el.css('background-color', '#369'); // 璁剧疆灞炴€�
        // el.css('background-color', '');     // 鍒犻櫎灞炴€�
        // // 璁剧疆澶氫釜灞炴€�
        // el.css({
        //     fontSize       : 28,
        //     backgroundColor: '#8EE'
        // });
        // ```
        css: function(name, val) {
            var key,
                ret = '';

            if (val == undefined) {
                if (isString(name)) {
                    var el = this[0];

                    return el ? el.style[camelCase(name)] || getComputedStyle(el, name) : '';
                } else if (isObject(name)) {
                    for (key in name) {
                        ret += dasherize(key) + ':' + maybeAddPx(key, name[key]) + ';';
                    }
                }
            } else {
                ret = dasherize(name) + ':' + maybeAddPx(name, val) + ';';
            }

            return each(this, function(el) {
                el.style.cssText += ';' + ret;
            });
        },

        // ** .show() **
        //
        // * .show()
        //
        //  鏄剧ず绗﹀悎閫夋嫨鍣ㄧ殑鎵€鏈夊厓绱�
        show: function() {
            return each(this, function(el) {
                el.style.display == 'none' && (el.style.display = '');
                if (getComputedStyle(el, 'display') == 'none') {
                    el.style.display = getDefaultDisplay(el.nodeName);
                }
            });
        },

        // ** .hide() **
        //
        // * .hide()
        //
        //  闅愯棌绗﹀悎閫夋嫨鍣ㄧ殑鎵€鏈夊厓绱�
        hide: function() {
            return this.css('display', 'none');
        },

        // ** .toggle() **
        //
        // * .toggle()
        //
        //  灏嗙鍚堥€夋嫨鍣ㄧ殑鎵€鏈夊厓绱犲垏鎹㈡樉绀�/闅愯棌涓や釜鐘舵€�
        toggle: function() {
            return each(this, function(el) {
                var $el = $(el);

                $el.css('display') == 'none' ? $el.show() : $el.hide();
            });
        }

    });

// ** .width() **
//
// * .width()
//
//  鑾峰彇绗﹀悎閫夋嫨鍣ㄧ殑绗竴涓厓绱犵殑瀹藉害鍊�
//
// * .width(val)
//
//  缁欑鍚堥€夋嫨鍣ㄧ殑鎵€鏈夊厓绱犺缃搴﹀€�
//
// `.width()` 鍜� `.css('width')` 鐨勫尯鍒�
//
// `.width()` 杩斿洖涓嶅甫鍗曚綅鐨勭函鏁板€硷紝`.css('width')` 杩斿洖甯﹀崟浣嶇殑鍘熷鍊硷紙渚嬪锛�400px锛夛紝褰撻渶瑕佹暟鍊艰绠楁椂, 鎺ㄨ崘璇ユ柟娉�.
//
// 鑾峰彇 `window` 鍜� `document` 鐨勫搴�
//
// ```
// // 鑾峰彇褰撳墠鍙鍖哄煙鐨勫搴﹀€�, 鐩稿綋浜� viewportWidth
// S.all(window).width();
//
// // 鑾峰彇椤甸潰鏂囨。 document 鐨勬€诲搴�, 鐩稿綋浜� docWidth
// S.all(document).width();
// ```
//
// ** .height() **
//
// * .height()
//
//  鑾峰彇绗﹀悎閫夋嫨鍣ㄧ殑绗竴涓厓绱犵殑楂樺害鍊�
//
// * .height(val)
//
//  缁欑鍚堥€夋嫨鍣ㄧ殑鎵€鏈夊厓绱犺缃珮搴﹀€�
//
// 鑾峰彇 `window` 鍜� `document` 鐨勯珮搴�
//
// ```
// // 鑾峰彇褰撳墠鍙鍖哄煙鐨勯珮搴﹀€�, 鐩稿綋浜� viewportHeight
// S.all(window).height();
//
// // 鑾峰彇椤甸潰鏂囨。 document 鐨勬€婚珮搴�, 鐩稿綋浜� docHeight
// S.all(document).height();
// ```
    each(['width', 'height'], function(method) {
        node[method] = function(val) {
            var el = this[0];

            if (val) {
                return $(this).css(method, val);
            } else {
                return isWindow(el) ? el[camelCase('inner-' + method)] :
                    isDocument(el) ? docEl[camelCase('scroll-' + method)] :
                        this.offset()[method];
            }
        };
    });

    /**
     * @ignore
     * @file node-traversal
     * @author 鑾簤 <gaoli.gl@taobao.com>
     */

    function filtered(els, selector) {
        var $els = $(els);

        return selector !== undefined ?
            $els.filter(
                isArray(selector) ?
                    function(el) {
                        return some.call(selector, function(filter) {
                            return matches(el, filter);
                        });
                    } :
                    selector
            ) :
            $els;
    }

    function children(el) {
        return 'children' in el ?
            slice.call(el.children) :
            map(el.childNodes, function(el) {
                if (isElement(el)) {
                    return el;
                }
            });
    }

    function nth(el, filter, property, includeSelf) {
        var ret   = [],
            array = isArray(filter);

        el = includeSelf ? el : el[property];

        while (el) {
            if (el && !isDocument(el) && isElement(el) && ret.indexOf(el) < 0) {
                ret.push(el);
            }
            el = el[property];
        }

        if (array && !filter.length) {
            filter = undefined
        }

        ret = filtered(ret, filter);

        return array ?
            ret :
            ret.item(0);
    }

    mix(node, {

        // ** .item() **
        //
        // * .item(index)
        //
        //  鑾峰彇鍖呭惈褰撳墠鑺傜偣鍒楄〃 index 浣嶇疆澶勭殑鍗曚釜鍘熺敓鑺傜偣鐨勬柊 NodeList 瀵硅薄
        item: function(index) {
            var self = this;

            return isNumber(index) ?
                index >= self.length ?
                    null :
                    $(self[index]) :
                $(index);
        },

        // ** .first() **
        //
        // * .first([filter])
        //
        //  鑾峰彇绗﹀悎閫夋嫨鍣ㄧ殑绗竴涓厓绱犵殑绗竴涓瓙鑺傜偣
        first: function(filter) {
            return nth(this[0] && this[0].firstChild, filter, 'nextElementSibling', true);
        },

        // ** .last() **
        //
        // * .last([filter])
        //
        //  鑾峰彇绗﹀悎閫夋嫨鍣ㄧ殑绗竴涓厓绱犵殑鏈€鍚庝竴涓瓙鑺傜偣
        last: function(filter) {
            return nth(this[0] && this[0].lastChild, filter, 'previousElementSibling', true);
        },

        // ** .next() **
        //
        // * .next([filter])
        //
        //  鑾峰彇绗﹀悎閫夋嫨鍣ㄧ殑绗竴涓厓绱犵殑涓嬩竴涓悓绾ц妭鐐�
        next: function(filter) {
            return nth(this[0], filter, 'nextElementSibling');
        },

        // ** .prev() **
        //
        // * .prev([filter])
        //
        //  鑾峰彇绗﹀悎閫夋嫨鍣ㄧ殑绗竴涓厓绱犵殑涓婁竴涓悓绾ц妭鐐�
        prev: function(filter) {
            return nth(this[0], filter, 'previousElementSibling');
        },

        // ** .parent() **
        //
        // * .parent([filter])
        //
        //  鑾峰彇绗﹀悎閫夋嫨鍣ㄧ殑绗竴涓厓绱犵殑绁栧厛鍏冪礌
        parent: function(filter) {
            return nth(this[0], filter, 'parentNode');
        },

        // ** .children() **
        //
        // * .children([filter])
        //
        //  鑾峰彇绗﹀悎閫夋嫨鍣ㄧ殑鎵€鏈夐潪鏂囧瓧鑺傜偣鐨勫瓙鑺傜偣
        children: function(selector) {
            var el = this[0];

            return el ?
                filtered(children(el), selector) :
                this;
        },

        // ** .siblings() **
        //
        // * .siblings([filter])
        //
        //  鑾峰彇绗﹀悎閫夋嫨鍣ㄧ殑绗竴涓厓绱犵殑鐩稿簲鍚岀骇鑺傜偣
        siblings: function(selector) {
            var el = this[0];

            return el ?
                filtered(
                    filter.call(children(el.parentNode), function(child) {
                        return child !== el;
                    })
                    , selector) :
                this;
        },

        // ** .contents() **
        //
        // * .contents()
        //
        //  鑾峰彇绗﹀悎閫夋嫨鍣ㄧ殑鎵€鏈夊瓙鑺傜偣锛堝寘鎷枃瀛楄妭鐐癸級
        contents: function() {
            var el = this[0];

            return el ?
                $(slice.call(el.childNodes)) :
                this;
        },

        // ** .contains() **
        //
        // * .contains(contained)
        //
        //  鍒ゆ柇鏌愪竴瀹瑰櫒锛坈ontainer锛夋槸鍚﹀寘鍚彟涓€锛坈ontained锛夎妭鐐�
        contains: function(contained) {
            var container = this[0],
                contained = likeArray(contained) ? contained[0] : contained;

            return container && contained ?
                container !== contained && container.contains(contained) :
                false;
        }

    });

    /**
     * @ignore
     * @file node-insertion
     * @author 鑾簤 <gaoli.gl@taobao.com>
     */

// ** .filterScripts() **
//
// * .filterScripts(nodes, scripts)
//
//  鍐呴儴鏂规硶锛屽皢 nodes 涓殑鑴氭湰鑺傜偣杩囨护鎺�
    function filterScripts(nodes, scripts) {
        var ret = [];

        each(nodes, function(node) {
            var name = node.nodeName,
                type = node.type,
                temp = [];

            if (name && name === 'SCRIPT' && (!type || type === 'text/javascript')) {
                node.parentNode && node.parentNode.removeChild(node);
                scripts && scripts.push(node);
            } else {
                if (isElement(node)) {
                    each(node.getElementsByTagName('script'), function(el) {
                        temp.push(el);
                    });
                    filterScripts(temp, scripts);
                }
                ret.push(node);
            }
        });

        return ret;
    }

// ** .nodeListToFragment() **
//
// * .nodeListToFragment(nodes)
//
//  鍐呴儴鏂规硶锛屽皢 nodes 杞崲涓烘枃妗ｇ墖娈碉紝涓嶄細琚坊鍔犲埌鏂囨。鏍戜腑
    function nodeListToFragment(nodes) {
        var ret = null;

        if (nodes && likeArray(nodes)) {
            ret = doc.createDocumentFragment();

            each(nodes, function(node) {
                ret.appendChild(node);
            });
        }

        return ret;
    }

    mix(node, {

        // ** .wrapAll() **
        //
        // * .wrapAll(wrapperNode)
        //
        //  鍦ㄦ墍鏈夊尮閰嶅厓绱犲闈㈠寘涓€灞� HTML 缁撴瀯
        //
        // ```
        // <div class="container">
        //     <div class="inner">Hello</div>
        //     <div class="inner">Goodbye</div>
        // </div>
        //
        // S.all('.inner').wrapAll('<div class="new" />'); //=>
        //
        // <div class="container">
        //     <div class="new">
        //         <div class="inner">Hello</div>
        //         <div class="inner">Goodbye</div>
        //     </div>
        // </div>
        // ```
        wrapAll: function(wrapperNode) {
            var el = this[0];

            if (el) {
                var $wrapperNode = $(wrapperNode),
                    $wrapperChildren;

                $wrapperNode.insertBefore(el);

                while (($wrapperChildren = $wrapperNode.children()).length) {
                    $wrapperNode = $wrapperNode.first();
                }

                $wrapperNode.append(this);
            }

            return this;
        },

        // ** .wrap() **
        //
        // * .wrap(wrapperNode)
        //
        //  鍦ㄦ瘡涓尮閰嶇殑鍏冪礌澶栧眰鍖呬笂涓€涓� HTML 鍏冪礌
        //
        // ```
        // <div class="container">
        //     <div class="inner">Hello</div>
        //     <div class="inner">Goodbye</div>
        // </div>
        //
        // S.all('.inner').wrap('<div class="new" />'); //=>
        //
        // <div class="container">
        //     <div class="new">
        //         <div class="inner">Hello</div>
        //     </div>
        //     <div class="new">
        //         <div class="inner">Goodbye</div>
        //     </div>
        // </div>
        // ```
        wrap: function(wrapperNode) {
            var $wrapperNode = $(wrapperNode),
                wrapperClone = $wrapperNode[0].parentNode || this.length;

            return each(this, function(el) {
                $(el).wrapAll(
                    wrapperClone ? $wrapperNode[0].cloneNode(true) : $wrapperNode[0]
                )
            });
        },

        // ** .unwrap() **
        //
        // * .unwrap()
        //
        //  绉婚櫎闆嗗悎涓瘡涓厓绱犵殑鐩存帴鐖惰妭鐐癸紝骞舵妸浠栦滑鐨勫瓙鍏冪礌淇濈暀鍦ㄥ師鏉ョ殑浣嶇疆
        //
        // ```
        // <div class="container">
        //     <div class="new">
        //         <div class="inner">Hello</div>
        //     </div>
        //     <div class="new">
        //         <div class="inner">Goodbye</div>
        //     </div>
        // </div>
        //
        // S.all('.inner').unwrap(); //=>
        //
        // <div class="container">
        //     <div class="inner">Hello</div>
        //     <div class="inner">Goodbye</div>
        // </div>
        // ```
        unwrap: function() {
            return each(this, function(el) {
                var $el     = $(el),
                    $parent = $el.parent();

                $parent.replaceWith($parent.children());
            });
        },

        // ** .wrapInner() **
        //
        // * .wrapInner(wrapperNode)
        //
        //  灏嗘瘡涓厓绱犱腑鐨勫唴瀹瑰寘瑁瑰湪涓€涓崟鐙殑缁撴瀯涓�
        //
        // ```
        // <div class="container">
        //     <div class="inner">Hello</div>
        //     <div class="inner">Goodbye</div>
        // </div>
        //
        // S.all('.inner').wrapInner('<div class="new" />'); //=>
        //
        // <div class="container">
        //     <div class="inner">
        //         <div class="new">Hello</div>
        //     </div>
        //     <div class="inner">
        //         <div class="new">Goodbye</div>
        //     </div>
        // </div>
        // ```
        wrapInner: function(wrapperNode) {
            return each(this, function(el) {
                var $el       = $(el),
                    $children = $el.children();

                if ($children.length) {
                    $children.wrapAll(wrapperNode);
                } else {
                    $el.append(wrapperNode);
                }
            });
        },

        // ** .replaceWith() **
        //
        // * .replaceWith(newNodes)
        //
        //  鐢ㄧ粰瀹氱殑鍐呭鏇挎崲鎵€鏈夊尮閰嶇殑鍏冪礌
        replaceWith: function(newNodes) {
            return this.before(newNodes).remove();
        }

    });

// ** .after() **
//
// * .after(html)
//
//  鍦ㄥ尮閰嶅厓绱犻泦鍚堜腑鐨勬瘡涓厓绱犲悗闈㈡彃鍏ュ唴瀹癸紝浣滀负鍏跺厔寮熻妭鐐�
//
//  鍐呭鍙互涓� HTML瀛楃涓诧紝DOM 鍏冪礌锛孌OM鍏冪礌鏁扮粍
//
// ** .prepend() **
//
// * .prepend(html)
//
//  灏嗗唴瀹规彃鍏ュ埌姣忎釜鍖归厤鍏冪礌鐨勫墠闈紙鍏冪礌鍐呴儴锛�
//
//  鍐呭鍙互涓� HTML瀛楃涓诧紝DOM 鍏冪礌锛孌OM鍏冪礌鏁扮粍
//
// ** .before() **
//
// * .before(html)
//
//  鍦ㄥ尮閰嶅厓绱犵殑鍓嶉潰锛堝厓绱犲閮級鎻掑叆鍐呭
//
//  鍐呭鍙互涓� HTML瀛楃涓诧紝DOM 鍏冪礌锛孌OM鍏冪礌鏁扮粍
//
// ** .append() **
//
// * .append(html)
//
//  鍦ㄦ瘡涓尮閰嶅厓绱犻噷闈㈢殑鏈熬澶勬彃鍏ュ唴瀹�
//
//  鍐呭鍙互涓� HTML瀛楃涓诧紝DOM 鍏冪礌锛孌OM鍏冪礌鏁扮粍

    each(['after', 'prepend', 'before', 'append'], function(method, index) {
        var inside = index % 2;

        node[method] = function(html, loadScripts) {
            var nodes  = isString(html) ? node.create(html) : html,
                isCopy = this.length > 1,
                parent,
                target;

            if (loadScripts) {
                var scripts = [];
            }

            if (nodes.length) {
                nodes = nodeListToFragment(filterScripts(nodes, scripts));
            } else {
                return this;
            }

            return each(this, function(el) {
                parent = inside ? el : el.parentNode;

                switch (index) {
                    case 0:
                        target = el.nextSibling;
                        break;
                    case 1:
                        target = el.firstChild;
                        break;
                    case 2:
                        target = el;
                        break;
                    default:
                        target = null
                }

                parent.insertBefore(isCopy ? nodes.cloneNode(true) : nodes, target);

                each(scripts, function(el) {
                    if (el.src) {
                        getScript(el.src);
                    } else {
                        win['eval'].call(win, el.innerHTML);
                    }
                });
            });
        };

        // ** .insertAfter() **
        //
        // * .insertAfter(target)
        //
        //  灏嗛泦鍚堜腑鐨勫厓绱犳彃鍏ュ埌鎸囧畾鐨勭洰鏍囧厓绱犲悗闈紙澶栭儴鎻掑叆锛�
        //
        // ** .prependTo() **
        //
        // * .prependTo(target)
        //
        //  灏嗘墍鏈夊厓绱犳彃鍏ュ埌鐩爣鍓嶉潰锛堝唴閮ㄦ彃鍏ワ級
        //
        // ** .insertBefore() **
        //
        // * .insertBefore(target)
        //
        //  灏嗛泦鍚堜腑鐨勫厓绱犳彃鍏ュ埌鎸囧畾鐨勭洰鏍囧厓绱犲墠闈紙澶栭儴鎻掑叆锛�
        //
        // ** .appendTo() **
        //
        // * .appendTo(target)
        //
        //  灏嗗尮閰嶇殑鍏冪礌鎻掑叆鍒扮洰鏍囧厓绱犵殑鏈熬锛堝唴閮ㄦ彃鍏ワ級
        node[inside ? method + 'To' : 'insert' + (index ? 'Before' : 'After')] = function(target) {
            $(target)[method](this);
            return this;
        };
    });

    /**
     * @ignore
     * @file node-offset
     * @author 鑾簤 <gaoli.gl@taobao.com>
     */

    mix(node, {

        // ** .offset() **
        //
        // * .offset()
        //
        //  鑾峰彇绗﹀悎閫夋嫨鍣ㄧ殑绗竴涓厓绱犵浉瀵归〉闈㈡枃妗ｅ乏涓婅鐨勫亸绉诲€�
        //
        // * .offset(coordinates)
        //
        //  缁欑鍚堥€夋嫨鍣ㄧ殑鎵€鏈夊厓绱犺缃亸绉诲€�
        offset: function(coordinates) {
            var ret;

            if (this.length) {
                if (coordinates === undefined) {
                    var obj = this[0].getBoundingClientRect();

                    ret = {
                        left  : obj.left + win.pageXOffset,
                        top   : obj.top  + win.pageYOffset,
                        width : Math.round(obj.width),
                        height: Math.round(obj.height)
                    }
                } else {
                    each(this, function(el) {
                        var ret = {},
                            $el = $(el),
                            old = $el.offset(),
                            key,
                            current;

                        if ($el.css('position') === 'static') {
                            $el.css('position', 'relative');
                        }

                        for (key in coordinates) {
                            current  = parseFloat($el.css(key)) || 0;
                            ret[key] = current + coordinates[key] - old[key];
                        }

                        $el.css(ret);
                    });

                    return this;
                }
            }

            return ret;
        }

    });

// ** .scrollTop() **
//
// * .scrollTop()
//
//  鑾峰彇绐楀彛鎴栧厓绱犵殑 scrollTop 鍊�
//
// * .scrollTop(val)
//
//  璁剧疆绐楀彛鎴栧厓绱犵殑 scrollTop 鍊�
//
// ** .scrollLeft() **
//
// * .scrollLeft()
//
//  鑾峰彇绐楀彛鎴栧厓绱犵殑 scrollLeft 鍊�
//
// * .scrollLeft(val)
//
//  璁剧疆绐楀彛鎴栧厓绱犵殑 scrollLeft 鍊�
    each(['scrollTop', 'scrollLeft'], function(method, index) {

        node[method] = function(val) {
            var el        = this[0],
                hasScroll = method in el;

            return val === undefined ?
                hasScroll ?
                    el[method] :
                    el['page' + (index ? 'X' : 'Y') + 'Offset']
                :
                hasScroll ?
                    each(this, function(el) {
                        el[method] = val;
                    }) :
                    each(this, function(el) {
                        if (index) {
                            el.scrollTo(val, el.scrollY);
                        } else {
                            el.scrollTo(el.scrollX, val);
                        }
                    });
        }

    });

    /**
     * @ignore
     * @file node-create
     * @author 鑾簤 <gaoli.gl@taobao.com>
     */

    var RE_TAG        = /<([\w:]+)/,
        RE_XHTML_TAG  = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        RE_SINGLE_TAG = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;

    var div        = doc.createElement('div'),
        table      = doc.createElement('table'),
        tableBody  = doc.createElement('tbody'),
        tableRow   = doc.createElement('tr'),
        containers = {
            '*'  : div,
            thead: table,
            tbody: table,
            tfoot: table,
            tr   : tableBody,
            th   : tableRow,
            td   : tableRow
        };

    mix(node, {

        // ** .create() **
        //
        // * .create(html, props)
        //
        //  鍒涘缓 dom 鑺傜偣
        //
        // ```
        // S.node.create('<div>')
        // S.node.create('<div />')
        // S.node.create('<div></div>') //=> 鍒涘缓 DIV 鑺傜偣
        // ```
        // ```
        // S.node.create('<div></div>', {
        //     text: 'ok',
        //     css : {color: 'red'}
        // }); //=> 鍒涘缓 DIV 鑺傜偣锛屽唴瀹逛负'ok'锛岄鑹蹭负绾㈣壊
        // ```
        create: function(html, props) {
            var key,
                ret = [],
                tag,
                container;

            if (!html || !isString(html)) {
                return ret;
            }

            if (RE_SINGLE_TAG.test(html)) {
                ret = $(doc.createElement(RegExp.$1));
            } else {
                html = html.replace(RE_XHTML_TAG, '<$1></$2>');
                tag  = RE_TAG.test(html) && RegExp.$1;

                container = containers[tag] || containers['*'];
                container.innerHTML = html;

                ret = each(slice.call(container.childNodes), function(el) {
                    container.removeChild(el);
                });
            }

            if (isPlainObject(props)) {
                for (key in props) {
                    ret.attr(key, props[key]);
                }
            }

            return ret;
        },

        // ** .html() **
        //
        // * .html()
        //
        //  鑾峰彇绗﹀悎閫夋嫨鍣ㄧ殑绗竴涓厓绱犵殑 innerHTML
        //
        // * .html(html[, loadScripts])
        //
        //  缁欑鍚堥€夋嫨鍣ㄧ殑鎵€鏈夊厓绱犺缃� innerHTML 鍊�
        //
        //  loadScripts 琛ㄧず鏄惁鎵ц html 涓殑鍐呭祵鑴氭湰锛岄粯璁� false
        //
        // ```
        // var el   = S.node.create('<div id="J_check"></div>');
        // var html = [
        //     '<h3>This is the added part</h3>',
        //     '<script>alert(1)</script>'
        // ].join('');
        // el.html(html);
        // //=> 涓嶄細 alert(1)
        // el.html();
        // //=> <h3>This is the added part</h3>
        // el.html(html, true);
        // //=> alert(1)
        // ```
        html: function(html, loadScripts) {
            return html === undefined ?
                this.length ? this[0].innerHTML : null
                :
                each(this, function(el) {
                    $(el).empty().append(html, loadScripts);
                });
        },

        // ** .remove() **
        //
        // * .remove()
        //
        //  灏嗙鍚堥€夋嫨鍣ㄧ殑鎵€鏈夊厓绱犱粠 DOM 涓Щ闄�
        remove: function() {
            var self = this;

            // 绉婚櫎鎵€鏈変簨浠剁粦瀹�
            self.detach && self.detach();

            return each(self, function(el) {
                el.parentNode && el.parentNode.removeChild(el)
            });
        },

        // ** .empty() **
        //
        // * .empty()
        //
        //  娓呴櫎鑺傜偣鐨勬墍鏈夊瓙瀛欒妭鐐�
        empty: function() {
            return each(this, function(el) {
                el.innerHTML = '';
            });
        },

        // ** .clone() **
        //
        // * .clone([deep])
        //
        //  鑾峰彇绗﹀悎閫夋嫨鍣ㄧ殑绗竴涓厓绱犵殑鍏嬮殕鍏冪礌
        //
        //  deep 琛ㄧず鏄惁娣卞害鍏嬮殕锛堝厠闅嗚妭鐐圭殑瀛愬瓩鑺傜偣锛夛紝榛樿 false
        clone: function(deep) {
            return $(
                map(this, function(el) {
                    return el.cloneNode(!!deep);
                })
            );
        }

    });

    /**
     * @ignore
     * @file ie
     * @author 鑾簤 <gaoli.gl@taobao.com>
     */

// IE10 鍙婁互涓嬫祻瑙堝櫒涓嶆敮鎸� `__proto__` 缁ф壙锛岄渶閲嶅啓 `.node()` 鍜� `.isNode()` 鏂规硶鏉ュ吋瀹�
    if (!('__proto__' in {})) {
        mix($, {
            node: function(els) {
                els = els || [];
                mix(els, node);
                els.__node = true;
                return els;
            },
            isNode: function(obj) {
                return isArray(obj) && '__node' in obj;
            }
        });
    }
    /**
     * @ignore
     * @file output
     * @author 鑾簤 <gaoli.gl@taobao.com>
     */

// ** Node 妯″潡鎻愪緵鐨勫揩鎹锋柟寮� **
//
// ```
// mix(S, {
//     node    : node,  // 鍙傚厓绫�
//     Node    : $,     // 鏋勯€犲櫒
//     NodeList: $,     // 鏋勯€犲櫒
//     one     : $.one, // 鑾峰彇 / 鍒涘缓涓€涓� Node 瀵硅薄
//     all     : $.all  // 鑾峰彇 / 鍒涘缓涓€鎵� Node 瀵硅薄
// });
// ```
    mix(S, {
        node    : node,
        Node    : $,
        NodeList: $,
        one     : $.one,
        all     : $.all
    });

    S.add && S.add('node', function (S) {
        return $;
    });

}(this, KISSY));
// ## Event 妯″潡
//
// **Event 鐢ㄦ硶锛�**
//
// 1.鐩存帴浣跨敤
//
// ```
//	var $ = KISSY.Node.all;
//	$('body').on('click', function(ev){
//		console.log(ev)
//	});
// ```
//
// 2.鏅€氬璞＄殑鑷畾涔変簨浠�
//
//	```
//	var a = {}, S = KISSY;
//	S.mix(a, S.Event.Target);
//	a.on('my_event', function(ev){
//		console.log(ev)
//	});
//	a.fire('my_event', {"data1": 1, "data2": 2});
//	```
// **鏈垪鍑虹殑Event API鑸嘖ISSY淇濇寔鐢ㄦ硶涓€鑷�**
//
//| API                      | KISSY                | KISSY-MINI           |
//| --------------------     |:--------------------:|:--------------------:|
//| Event.Object             | YES                  | NO                   |
//| Event.Target.publish     | YES                  | NO                   |
//| Event.Target.addTarget   | YES                  | NO                   |
//| Event.Target.removeTarget| YES                  | NO                   |
//| mouseenter               | YES                  | NO                   |
//| mouseleave               | YES                  | NO                   |
//| mousewheel               | YES                  | NO                   |
//| gestures                 | YES                  | `Import touch.js*`   |
//| &nbsp;|&nbsp;|&nbsp;|
//
// **涓� zeptojs 瀵规瘮锛屾湁浠ヤ笅宸紓锛�**
//
// 1. 鍘婚櫎瀵归紶鏍囧吋瀹逛簨浠剁殑鏀寔锛屽寘鎷� mouseenter/mouseleave锛�
// 2. 鎻愪緵瀵规櫘閫氬璞＄殑鑷畾涔変簨浠舵敮鎸侊紝闇€鎻愬墠娣峰叆 S.Event.Target
//
// **涓� KISSY 瀵规瘮锛屾湁浠ヤ笅宸紓锛�**
//
// 1. 浠呮敮鎸侀摼寮忚皟鐢紝涓嶆敮鎸� Event.on 璇硶锛�
// 2. 鑷畾涔変簨浠朵笉鏀寔鍐掓场绛夊睘鎬у拰鏂规硶锛�
// 3. 瑙︽帶浜嬩欢闇€棰濆寮曞叆 touch.js锛�
// 4. 鍥炶皟杩斿洖鐨� event 瀵硅薄鏄吋瀹瑰鐞嗗悗鐨勫師鐢熶簨浠跺璞★紝涓嶅啀鎻愪緵 ev.originalEvent

(function(S){

    var $ = S.all,
        Node = S.node,
        _eid = 1,
        isFunction = function(obj){
            return typeof obj == 'function';
        },
        /* 绠€鍖� S.mix */
        mix = function(target, source) {
            for (var key in source) {
                target[key] = source[key];
            }
        },
        /* 绠€鍖� S.each */
        each = function(obj, iterator, context) {
            Object.keys(obj).map(function(name){
                iterator.call(context, obj[name], name, obj);
            });
        },
        slice = [].slice,
        handlers = [],
        focusinSupported = 'onfocusin' in window,
        /* 鐒︾偣浜嬩欢浠ｇ悊 */
        focusEvent = {
            focus: 'focusin',
            blur: 'focusout'
        },
        specialEvents = {
            "click": "MouseEvent"
        },
        eventMethods = {
            preventDefault: 'isDefaultPrevented',
            stopImmediatePropagation: 'isImmediatePropagationStopped',
            stopPropagation: 'isPropagationStopped'
        };

    /**
     * 鐢熸垚杩斿洖甯冨皵鍊煎嚱鏁扮殑鏂规硶
     * @param  {[type]} trueOrFalse [description]
     * @return {[type]}             [description]
     */
// returnBool(trueOrFalse)
//
// 鍐呴儴鏂规硶锛岀敓鎴愯繑鍥炲竷灏斿€煎嚱鏁扮殑鏂规硶
    function returnBool(trueOrFalse) {
        return function(){ return trueOrFalse; };
    }

    /**
     * 鐢熸垚鍜� DOM 缁戝畾鐨勫敮涓€ id
     * @param  {[type]} element [description]
     * @return {[type]}         [description]
     */
// eid(element)
//
// 鍐呴儴鏂规硶锛岀敓鎴愬拰 DOM 缁戝畾鐨勫敮涓€ id
    function eid(element) {
        return element._eid || (element._eid = _eid++);
    }

    /**
     * 瑙ｆ瀽浜嬩欢瀛楃涓�
     * @param  {String} event 鍘熷鐨勪簨浠剁被鍨嬪瓧绗︿覆
     * @return {Object}       瑙ｆ瀽鍚庡緱鍒扮殑浜嬩欢绫诲瀷瀵硅薄
     */
// parse(event)
//
// 鍐呴儴鏂规硶锛岃В鏋愪簨浠跺瓧绗︿覆
    function parse(event) {
        var parts = event.split('.');
        return {
            e : parts[0],
            ns: parts.slice(1).join(' ')
        };
    }

    /**
     * 鏍规嵁浜嬩欢绫诲瀷 ns 鐢熸垚鍖归厤姝ｅ垯锛岀敤浜庡垽鏂槸鍚﹀湪鍚屼竴涓垎缁�
     * @param  {String} ns [description]
     * @return {RegExp}    [description]
     */
// matcherFor(ns)
//
// 鍐呴儴鏂规硶锛屾牴鎹簨浠剁被鍨� ns 鐢熸垚鍖归厤姝ｅ垯锛岀敤浜庡垽鏂槸鍚﹀湪鍚屼竴涓垎缁�
    function matcherFor(ns) {
        return new RegExp('(?:^| )' + ns.replace(' ', ' .* ?') + '(?: |S)');
    }

    /**
     * 鑾峰緱鎸囧畾鐨� Handler
     * @param  {[type]}   element  [description]
     * @param  {[type]}   event    [description]
     * @param  {Function} fn       [description]
     * @param  {[type]}   selector [description]
     * @return {[type]}            [description]
     */
// findHandlers(el,event,fn)
//
// 鍐呴儴鏂规硶锛岃幏寰楁寚瀹氱殑 Handler
    function findHandlers(element, event, fn, selector, scope) {
        var evt = parse(event);
        if (evt.ns) var matcher = matcherFor(event.ns);
        return (handlers[eid(element)] || []).filter(function(handler) {
            return handler &&
                (!evt.e || handler.e == evt.e) &&
                (!evt.ns || matcher.test(handler.ns)) &&
                (!fn || handler.fn === fn) &&
                (!selector || handler.sel == selector) &&
                (!scope || handler.scope === scope);
        });
    }

    /**
     * 鑾峰緱鏄惁鎹曡幏浜嬩欢鐘舵€侊紝鐒︾偣浜嬩欢涓€寰嬫崟鑾�
     * @param  {[type]}  handler        [description]
     * @param  {[type]}  captureSetting [description]
     * @return {Boolean}                [description]
     */
// isCapture(handler,capture)
//
// 鍐呴儴鏂规硶锛岃幏寰楁槸鍚︽崟鑾蜂簨浠剁姸鎬侊紝鐒︾偣浜嬩欢涓€寰嬫崟鑾�
    function isCapture(handler, capture) {
        return handler.del &&
            (!focusinSupported && (handler.e in focusEvent)) || !!capture;
    }

    /**
     * 灏嗙劍鐐逛簨浠剁粺涓€涓虹湡瀹炰簨浠讹紝浣� firefox 鍥犱负涓嶆敮鎸� focusinout 鎵€浠ヤ笉浼氳杞崲
     * @param  {[type]} type [description]
     * @return {[type]}      [description]
     */
// eventCvt(type)
//
// 鍐呴儴鏂规硶锛屽皢鐒︾偣浜嬩欢缁熶竴涓虹湡瀹炰簨浠讹紝浣� firefox 鍥犱负涓嶆敮鎸� focusinout 鎵€浠ヤ笉浼氳杞崲
    function eventCvt(type) {
        return (focusinSupported && focusEvnet[type]) || type;
    }

    /**
     * 澶嶅埗鍘熶簨浠跺璞★紝骞朵綔涓哄師浜嬩欢瀵硅薄鐨勪唬鐞�
     * @param  {[type]} event [description]
     * @return {[type]}       [description]
     */
// createProxy(event)
//
// 鍐呴儴鏂规硶锛屽鍒跺師浜嬩欢瀵硅薄锛屽苟浣滀负鍘熶簨浠跺璞＄殑浠ｇ悊
    function createProxy(event) {
        var key, proxy = {
            originalEvent: event
        };
        for (key in event)
            if (event[key] !== undefined) proxy[key] = event[key];
        return compatible(proxy, event);
    }

    /**
     * 閽堝涓変釜浜嬩欢灞炴€у仛鍏煎
     * @param  {[type]} event  [description]
     * @param  {[type]} source [description]
     * @return {[type]}        [description]
     */
// compatible(event,source)
//
// 鍐呴儴鏂规硶锛岄拡瀵逛笁涓簨浠跺睘鎬у仛鍏煎
    function compatible(event, source) {
        if (source || !event.isDefaultPrevented) {
            source || (source = event);
            each(eventMethods, function(predicate,name) {
                var sourceMethod = source[name];
                event[name] = function() {
                    this[predicate] = returnBool(true);
                    return sourceMethod && sourceMethod.apply(source, arguments);
                };
                event[predicate] = returnBool(false);
            });

            event.halt = function(){
                this.preventDefault();
                this.stopPropagation();
            };

            if (source.defaultPrevented !== undefined ? source.defaultPrevented :
                'returnValue' in source ? source.returnValue === false :
                    source.getPreventDefault && source.getPreventDefault())
                event.isDefaultPrevented = returnBool(true);
        }
        return event;
    }

    /**
     * 鐢熸垚鍘熺敓浜嬩欢瀵硅薄
     * @param  {[type]} type  [description]
     * @param  {[type]} props [description]
     * @return {[type]}       [description]
     */
// createEvent(type,props)
//
// 鍐呴儴鏂规硶锛岀敓鎴愬師鐢熶簨浠跺璞�
    function createEvent(type, props) {
        var event = document.createEvent(specialEvents[type] || 'Events'),
            bubbles = true;
        if (props) {
            for (var name in props) {
                name == 'bubbles' ? (bubbles = !!props[name]) : (event[name] = props[name]);
            }
        }
        event.initEvent(type, bubbles, true);
        return compatible(event);
    }

    /**
     * 娣诲姞浜嬩欢缁戝畾鐨勪富鍑芥暟
     * @param {[type]}   element   [description]
     * @param {[type]}   events    [description]
     * @param {Function} fn        [description]
     * @param {[type]}   data      [description]
     * @param {[type]}   selector  [description]
     * @param {[type]}   delegator [description]
     * @param {[type]}   capture   [description]
     */
// add(el,event,fn)
//
// 鍐呴儴鏂规硶锛屾坊鍔犱簨浠剁粦瀹氱殑涓诲嚱鏁�
    function add(element, events, fn, selector, delegator, scope) {
        var id = eid(element),
            set = (handlers[id] || (handlers[id] = []));
        if (events == 'ready') return S.ready(fn);
        events.split(/\s/).map(function(event) {
            var handler = parse(event);
            handler.fn = fn;
            handler.sel = selector;
            handler.del = delegator;
            handler.scope = scope;
            var callback = delegator || fn;
            handler.proxy = function(e) {
                e = compatible(e);
                if (e.isImmediatePropagationStopped()) return;
                var result = callback.apply(scope || element, e._args == undefined ? [e] : [e].concat(e._args));
                if (result === false) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                return result;
            };
            handler.i = set.length;
            set.push(handler);
            element.addEventListener(eventCvt(handler.e), handler.proxy, isCapture(handler));
            /* 鑷畾涔� DOM 浜嬩欢澶勭悊锛屽垵濮嬪寲*/
            if(typeof event !== 'undefined' && event in S.Event.Special){
                S.Event.Special[event].setup.apply(S.one(element,[handler.scope]));
            }
        });
    }

    /**
     * 绉婚櫎浜嬩欢缁戝畾鐨勪富鍑芥暟
     * @param  {[type]}   element  [description]
     * @param  {[type]}   events   [description]
     * @param  {Function} fn       [description]
     * @param  {[type]}   selector [description]
     * @param  {[Object]} scope    [description]
     * @return {[type]}            [description]
     */
// remove(el,event,fn)
//
// 鍐呴儴鏂规硶锛岀Щ闄や簨浠剁粦瀹氱殑涓诲嚱鏁�
    function remove(element, events, fn, selector, scope) {
        var id = eid(element),
            removeHandlers = function(set) {
                set.map(function(handler){
                    delete handlers[id][handler.i];
                    element.removeEventListener(eventCvt(handler.e), handler.proxy, isCapture(handler));
                    /* 鑷畾涔� DOM 浜嬩欢澶勭悊锛岄攢姣�*/
                    if(typeof event !== 'undefined' && event in S.Event.Special){
                        S.Event.Special[event].teardown.apply(S.one(element));
                    }
                });
            };
        if(events) {
            events.split(/\s/).map(function(event) {
                removeHandlers(findHandlers(element, event, fn, selector, scope));
            });
        }
        else removeHandlers(handlers[id] || []);
    }

    /**
     * 涓昏缁戝畾鍑芥暟锛屽寘鎷� delegate 鐨勫鐞嗘柟娉�
     * @param  {[type]}   event    [description]
     * @param  {[type]}   selector [description]
     * @param  {Function} callback [description]
     * @param  {[type]}   scope    [description]
     * @return {[type]}            [description]
     */
// **S.Node.on(event,selector,callback,[scope])**
//
// 浜嬩欢缁戝畾
//
// ```
// S.Event.on('click','div',function(e){...})
// ```
//
// 鍙互浣跨敤`els.on('click',callback)`
//
// **el.on(eventType,callback)**
//
// 鍦ㄥ厓绱犱笂杩涜浜嬩欢缁戝畾锛宔l涔熷彲浠ユ槸Node鍒楄〃锛屾瘮濡�
//
// ```
// S.one('div').on('click',function(){
//		alert('ok');
// });
// ```
    Node.on = function(event, selector, callback, scope) {
        var delegator, _this = this;

        /* selector 涓虹┖鐨勬儏鍐碉紝鍗抽潪 delegator */
        if (isFunction(selector)) {
            scope = callback;
            callback = selector;
            selector = undefined;
        }

        /* 闃绘榛樿浜嬩欢锛宬issy 涓嶆敮鎸佹鏂瑰紡 */
        if (callback === false) callback = returnFalse;

        _this.each(function(element) {
            /* delegate 澶勭悊閫昏緫 */
            if (selector) delegator = function(e) {
                var evt, match, matches = element.all(selector);
                if(!matches || !matches.length) return;
                match = matches.filter(function(el){
                    return (el == e.target) || ($(el).contains(e.target));
                })[0];
                if (match && match !== element[0]) {
                    evt = createProxy(e);
                    evt.currentTarget = match;
                    evt.liveFired = element[0];
                    return callback.apply(scope || match, [evt].concat(slice.call(arguments, 1)));
                }
            };

            add(element[0], event, callback, selector, delegator, scope);
        });

        return _this;
    };

    /**
     * 鍙栨秷浜嬩欢缁戝畾鐨勪富鍑芥暟
     * @param  {[type]}   event    [description]
     * @param  {[type]}   selector [description]
     * @param  {Function} callback [description]
     * @param  {[type]}   scope    [description]
     * @return {[type]}            [description]
     */
// **S.Node.detach(event,selector,callback,[scope])**
//
// 鍙栨秷浜嬩欢缁戝畾锛屾帹鑽愮洿鎺ヨ皟鐢�**els.detach('click',callback)**
//
// **el.detach(eventType,callback)**
//
// 鍙栨秷鍏冪礌浜嬩欢锛宔l涔熷彲浠ユ槸Node鍒楄〃銆�
    Node.detach = function(event, selector, callback, scope) {
        var _this = this;

        if (isFunction(selector)) {
            scope = callback;
            callback = selector;
            selector = undefined;
        }

        _this.each(function(element) {
            remove(element[0], event, callback, selector, scope);
        });

        return _this;
    };

    /**
     * delegate 涓诲嚱鏁帮紝鍙槸 Node.on 鐨勫埆鍚�
     * @param  {[type]}   event    [description]
     * @param  {[type]}   selector [description]
     * @param  {Function} callback [description]
     * @param  {[type]}   scope    [description]
     * @return {[type]}            [description]
     */
// **S.Node.delegate(event,selector,function(){...},[scope])**
//
// 浜嬩欢濮旀墭锛屾帹鑽愮洿鎺ヨ皟鐢�**el.delegate('event',selector,callback,scop)**
//
// **el.delegate(eventType,callback,scope)**
//
// 閽堝褰撳墠鑺傜偣鎵ц浜嬩欢濮旀墭锛宻cope 涓哄鎵樼殑鑺傜偣鎴栭€夋嫨鍣�
    Node.delegate = function(event, selector, callback, scope) {
        return this.on(event, selector, callback, scope);
    };

    /**
     * undelegate 涓诲嚱鏁帮紝鍙槸 Node.detach 鐨勫埆鍚�
     * @param  {[type]}   event    [description]
     * @param  {[type]}   selector [description]
     * @param  {Function} callback [description]
     * @param  {[type]}   scope    [description]
     * @return {[type]}            [description]
     */
// **S.Node.undelegate(event,selector,function(){...},[scope])**
//
// 瑙ｉ櫎浜嬩欢濮旀墭锛屾槸`Node.detach`鐨勫埆鍚嶏紝鎺ㄨ崘鐩存帴璋冪敤**el.undelegate()**
//
// **el.undelegate(eventType,selector,callback,scope)**
//
// 閽堝褰撳墠鑺傜偣鎵ц瑙ｉ櫎浜嬩欢濮旀墭锛宻cope 涓哄鎵樼殑鑺傜偣鎴栭€夋嫨鍣�
    Node.undelegate = function(event, selector, callback, scope) {
        return this.detach(event, selector, callback, scope);
    };


    /**
     * 鎵ц绗﹀悎鍖归厤鐨� dom 鑺傜偣鐨勭浉搴斾簨浠剁殑浜嬩欢澶勭悊鍣�
     * @param  {String} events [description]
     * @param  {Object} props  妯℃嫙澶勭悊鍘熺敓浜嬩欢鐨勪竴浜涗俊鎭�
     * @return {[type]}       [description]
     */
// **S.Node.fire(event,props)**
//
// 鎵ц绗﹀悎鍖归厤鐨� dom 鑺傜偣鐨勭浉搴斾簨浠剁殑浜嬩欢澶勭悊鍣紝鎺ㄨ崘鐩存帴璋冪敤
//
// ```
// el.fire('click')
// ```
//
// **el.fire(eventType,props)**
//
// 瑙﹀彂鑺傜偣鍏冪礌鐨刞eventType`浜嬩欢锛宔l.fire 鍑芥暟缁ф壙鑷� `S.Node.fire(event,props)`
// - eventType: 浜嬩欢绫诲瀷
// - props锛氳Е鍙戜簨浠剁殑鏃跺€欎紶鍏ョ殑鍥炰紶鍙傛暟
//
// ```
// S.one('div').on('click',function(e){
//		alert(e.a);
// });
// S.one('div').fire('click',{
//		a:1
// });
// // => 寮瑰嚭妗嗭紝鍊间负1
// ```
    Node.fire = function(events, props) {
        var _this = this;
        events.split(/\s/).map(function(event){
            event = createEvent(event, props);
            _this.each(function(element) {
                if ('dispatchEvent' in element[0]) element[0].dispatchEvent(event);
                else element.fireHandler(events, props);
            });
        });
        return _this;
    };

    /**
     * 鎵ц绗﹀悎鍖归厤鐨� dom 鑺傜偣鐨勭浉搴斾簨浠剁殑浜嬩欢澶勭悊鍣紝涓嶄細鍐掓场
     * @param  {[type]} event [description]
     * @param  {[type]} props  [description]
     * @return {[type]}       [description]
     */
// **S.Node.fireHandler(event,props)**
//
// 鎵ц绗﹀悎鍖归厤鐨� dom 鑺傜偣鐨勭浉搴斾簨浠剁殑浜嬩欢澶勭悊鍣紝涓嶄細鍐掓场
//
// 鎺ㄨ崘鐩存帴鎵ц
//
// ```
// el.fireHandler('click',{...})
// ```
//
// **el.fireHandler(eventType,props)**
//
// 浠ラ潪鍐掓场褰㈠紡瑙﹀彂鍥炶皟锛岀敱`el.fire()`鍑芥暟璋冪敤锛屽湪鍗曠函甯屾湜鎵ц浜嬩欢缁戝畾鍑芥暟鏃朵娇鐢ㄦ鏂规硶
    Node.fireHandler = function(events, props) {
        var e, result, _this = this;
        events.split(/\s/).map(function(event){
            _this.each(function(element) {
                e = createEvent(event);
                e.target = element[0];
                if(e.target === null){
                    e = getCustomDOMEvent(e);
                }
                mix(e,props);
                findHandlers(element[0], event).map(function(handler, i) {
                    result = handler.proxy(e);
                    if (e.isImmediatePropagationStopped()) return false;
                });
            });
        });
        return _this;
    };

    function getCustomDOMEvent(e){
        var eProxy = {};
        mix(eProxy,e);
        eProxy.__proto__ = e.__proto__;
        return eProxy;
    }


    S.Event || (S.Event = {});
    /**
     * 灏嗘櫘閫氬璞℃贩鍏� Event.Target 鍚庯紝鍗宠兘鎷ユ湁绠€鍗曠殑鑷畾涔変簨浠剁壒鎬с€�
     * @type {Object}
     */
// **S.Event.Target**
//
// 绠€鍗曡嚜瀹氫箟浜嬩欢瀵硅薄锛屽皢鏅€氬璞℃贩鍏� `Event.Target` 鍚庯紝鍗宠兘鎷ユ湁绠€鍗曠殑鑷畾涔変簨浠剁壒鎬с€�
//
// 浜嬩欢鏈韩鏄竴涓娊璞℃蹇碉紝鍜屽钩鍙版棤鍏炽€佸拰璁惧鏃犲叧銆佹洿鍜屾祻瑙堝櫒鏃犲叧锛屾祻瑙堝櫒鍙槸浣跨敤鈥滀簨浠垛€濈殑鏂规硶鏉ヨЕ鍙戠壒瀹氱殑琛屼负锛岃繘鑰岃Е鍙戞煇娈电綉椤甸€昏緫銆傝€屽父瑙佺殑DOM浜嬩欢璇稿click,dbclick鏄祻瑙堝櫒甯垜浠疄鐜扮殑鈥滅壒瀹氳涓衡€濄€傝€岃繖閲岀殑鈥滅壒瀹氳涓衡€濆氨鏄Е鍙戜簨浠剁殑鏃舵満锛屾槸鍙互琚噸鏂板畾涔夌殑锛屽師鐞嗕笂锛屼簨浠堕兘鏄渶瑕佺簿纭殑瀹氫箟鐨勶紝姣斿涓嬮潰杩欎釜渚嬪瓙锛屾垜浠畾涔変簡涓€涓柊浜嬩欢锛氣€滃垵濮嬪寲1绉掑悗鈥�
//
// ```
// var EventFactory = function(){
// 		var that = this;
// 		setTimeout(function(){
// 			that.fire('afterOneSecond');
// 		},1000);
// };
// S.augment(EventFactory,S.Event.Target);
// var a = new EventFactory();
// a.on('afterOneSecond',function(){
// 		alert('1绉掑悗');
// });
// // 1绉掑悗寮规
// ```
//
// 杩欐槸涓€涓緢绾补鐨勮嚜瀹氫箟浜嬩欢锛屽畠鏈変簨浠跺悕绉癭afterOneSecond`锛屾湁浜嬩欢鐨勮Е鍙戞潯浠禶self.fire('afterOneSecond')`锛屾湁浜嬩欢鐨勭粦瀹氾紝`a.on('afterOneSecond')`銆傝繖鏍疯繖涓簨浠跺氨鑳介『鍒╃殑鍙戠敓锛屽苟琚垚鍔熺洃鍚€傚湪浠ｇ爜缁勭粐灞傞潰锛屼竴鑸伐鍘傜被涓疄鐜颁簡浜嬩欢鍛藉悕銆佸畾涔夊拰瀹炵幇锛屽睘浜庡唴鑱氱殑鍔熻兘瀹炵幇銆傝€岀粦瀹氫簨浠舵椂鍙互鏄伐鍘傜被杩欐浠ｇ爜澶栫殑鐢ㄦ埛锛屼粬涓嶄細鍘诲叧蹇冧簨浠剁殑鍏蜂綋瀹炵幇锛屽彧瑕佸叧蹇冨伐鍘傜被"鏆撮湶浜嗕粈涔堜簨浠跺彲浠ヨ鎴戠粦瀹�"灏卞彲浠ヤ簡锛岃繖灏辨槸KISSY涓娇鐢ㄨ嚜瀹氫箟浜嬩欢鐨勭敤娉曘€�
//
    S.Event.Target = {
        /**
         * 鐢ㄤ簬瀛樻斁缁戝畾鐨勪簨浠朵俊鎭�
         * @type {Object}
         */
        _L: {
            /*
         "click": [
             {
                 E: "click touchstart",
                 F: fn1,
                 S: scope1
             },
             {
                 E: "click",
                 F: fn2,
                 S: scope2
             }
         ]
		 */
        },
        /**
         * 缁戝畾浜嬩欢
         * @param  {String}   eventType 蹇呴€夛紝缁戝畾鐨勪簨浠剁被鍨嬶紝浠ョ┖鏍煎垎闅�
         * @param  {Function} fn        蹇呴€夛紝瑙﹀彂浜嬩欢鍚庣殑鍥炶皟鏂规硶
         * @param  {[type]}   scope     鍥炶皟鏂规硶鐨� this 鎸囬拡
         * @return {[type]}             杩斿洖瀵硅薄鏈韩
         */
        on: function(eventType, fn, scope) {
            var eventArr = s2a(eventType), T = this;
            eventArr.map(function(ev){
                var evt = ev in T._L ? T._L[ev] : (T._L[ev] = []);
                evt.push({
                    E: eventType,
                    F: fn,
                    S: scope
                });
            });
            return T;
        },
        /**
         * 瑙﹀彂浜嬩欢
         * @param  {String} eventType 蹇呴€夛紝缁戝畾鐨勪簨浠剁被鍨嬶紝浠ョ┖鏍煎垎闅�
         * @param  {[type]} data      瑙﹀彂浜嬩欢鏃朵紶閫掔粰鍥炶皟浜嬩欢瀵硅薄鐨勪俊鎭紝鑰� data 鍚庨潰鐨勫弬鏁颁細鍘熷皝涓嶅姩鍦颁紶杩囧幓
         * @return {[type]}           杩斿洖瀵硅薄鏈韩
         */
        // on()
        //
        // Event.Target 鐨勫弬鍏冩柟娉曪紝缁戝畾鑷畾涔変簨浠�
        //
        // fire(event,data)
        //
        // Event.Target 鐨勫弬鍏冩柟娉曪紝瑙﹀彂浜嬩欢
        fire: function(eventType, data) {
            var eventArr = s2a(eventType), T = this;
            eventArr.map(function(ev){
                var evt = T._L[ev],
                    returnEv = S.mix(data || {}, {target: T, currentTarget: T});
                if(!evt) return;
                evt.map(function(group){
                    group.F.apply(group.S || T, [returnEv].concat([].slice.call(arguments, 2)));
                });

            });
            return T;
        },

        /**
         * 瑙ｉ櫎缁戝畾浜嬩欢
         * @param  {String}   eventType 蹇呴€夛紝缁戝畾鐨勪簨浠剁被鍨嬶紝浠ョ┖鏍煎垎闅�
         * @param  {Function} fn        濡傛灉闇€瑕佹寚瀹氳В闄ゆ煇涓洖璋冿紝闇€瑕佸～鍐�
         * @param  {[type]}   scope     鍚屼笂锛屽彲浠ヨ繘涓€姝ュ尯鍒嗘煇涓洖璋�
         * @return {[type]}             杩斿洖瀵硅薄鏈韩
         */
        // detach(event,fn)
        //
        // Event.Target 鐨勫弬鍏冩柟娉曪紝瑙ｉ櫎缁戝畾浜嬩欢
        detach: function(eventType, fn, scope) {
            var eventArr = s2a(eventType), T = this;
            eventArr.map(function(ev){
                /* 濡傛灉閬囧埌鐩稿悓浜嬩欢锛屼紭鍏堝彇娑堟渶鏂扮粦瀹氱殑 */
                var evt = T._L[ev];
                if(!evt) return;
                if(!fn && (T._L[ev] = [])) return;
                for(var key=0; key < evT._Length; key++) {
                    if(group.F == fn && group.S == scope) {
                        evt.split(key, 1);
                        continue;
                    }
                    else if(group.F == fn) {
                        evt.split(key, 1);
                        continue;
                    }
                }
            });
            return T;
        }
    };

    S.Event.Special = {
        /*
	'myEvent':{
		setup:function(){

		},
		teardown:function(){

		}
	}
   */
    };

    /**
     * 鎶� event 瀛楃涓叉牸寮忓寲涓烘暟缁�
     */
// s2a(str)
//
// 鍐呴儴鏂规硶锛屾妸 event 瀛楃涓叉牸寮忓寲涓烘暟缁�
    function s2a(str) {
        return str.split(' ');
    }

    S.add('event',function(S){
        return S.Event;
    });

})(KISSY);
// ## IO 妯″潡
//
// **IO鐨勯厤缃爡璇存槑锛�**
//
// timeout 鍊肩殑鍠綅鐐虹锛岃垏KISSY淇濇寔涓€鑷淬€�
//
// contentType閰嶇疆锛岃嫢鏈厤缃€硷紝涓旀豢瓒充互涓嬫浠�
// 1. data涓嶇偤绌�
// 2. type涓嶇偤get
//
// 姝ゆ檪榛樿獚
//
// ```
// Content-Type=application/x-www-form-urlencoded
// ```
//
// **KISSY MINI 鍒犻櫎鐨� API**
//
//| API                  | KISSY                | KISSY-MINI           |
//| -------------------- |:--------------------:|:--------------------:|
//| setupConfig          | YES                  | NO                   |
//| upload               | YES                  | NO                   |
//| serialize            | YES                  | NO                   |
//| getResponseHeader    | YES                  | NO                   |
//| Promise API          | YES                  | NO                   |
//|&nbsp;|&nbsp;|&nbsp;|
//
// 閰嶇疆椤癸細
//
//| Setting              | KISSY                | KISSY-MINI           |
//| -------------------- |:--------------------:|:--------------------:|
//| cfg.crossDomain      | YES                  | NO                   |
//| cfg.mimeType         | YES                  | NO                   |
//| cfg.password         | YES                  | NO                   |
//| cfg.username         | YES                  | NO                   |
//| cfg.xdr              | YES                  | NO                   |
//| cfg.xhrFields        | YES                  | NO                   |
//| cfg.form             | YES                  | NO                   |
//|&nbsp;|&nbsp;|&nbsp;|
//
//
// **KISSY VS KISSY-MINI锛孉jax瀹炵幇涓婄殑宸紓**
//
//| KISSY                | KISSY-MINI           | Note                 |
//|:-------------------- |:--------------------:|:--------------------:|
//| 鍥炶鍑芥暩鐨勭浜屽€嬪弮鏁告敮鎸佹洿澶氱殑鐙€鎱�  | 鐩墠鍙敮鎸�  success/error/timeout/abort/parseerror | 鏇村鐨勯尟瑾ょ媭鎱嬪彲浠ラ€氶亷getNativeXhr()寰楀埌鍘熺敓鐨剎hr灏嶈薄渚嗙嵅鍙栥€�  |
//| jsonp杩斿洖澶氬€嬫暩鎿氭簮鏅傦紝success鍥炶寰楀埌鐨勬暩鎿氭槸涓€鍊嬪寘鍚墍鏈夋暩鎿氭簮鐨勬暩绲� | 鐩墠鍙彇绗竴鍊嬫暩鎿氭簮 | - |
//| IO鐨勫垾鍚嶆湁S.Ajax/S.io/S.IO | 鍙湁S.IO | - |
//| jsonpCallback鏀寔鍑芥暩杩斿洖鍏ㄥ眬鍑芥暩鍚� | jsonpCallback鍙敮鎸佸瓧绗︿覆 | - |
//| 灏嶆柤url涓婄殑鍙冩暩锛屾渻鑸嘾ata鍙冩暩閲嶆柊绲勫悎 | data闄勫姞鍦╱rl涓� | - |
//| cache澧炲姞鐨勬檪闁撴埑KISSY鍜孠ISSY MINI鏄笉涓€鑷寸殑 | - | - |
//|&nbsp;|&nbsp;|&nbsp;|
//
// 瀹炰緥浠ｇ爜
//
// ```
// S.IO({
//		type: 'get',
//		url: 'http://www.taobao.com',
//		data: {...},
//		success: function(responseData,statusText,xhr){
//			//...
//		},
//		dataType:'json' // 鍙彇鍊间负'json'/'jsonp'
// });
// ```
//
// 蹇嵎璋冪敤鏂规硶
// - S.IO.get(url,fn)
// - S.IO.post(url,fn)
// - S.IO.jsonp(url,fn)
// - S.IO.getJSON(url,fn)
// - S.IO.getScript(url,fn) 绛夊悓浜� S.getScript(url,fn)
// - S.IO.jsonp(url,fn) 绛夊悓浜� S.jsonp(url,fn)
//
// 鍏蜂綋鐢ㄦ硶鍙傜収[KISSY1.4.0 Ajax鏂囨。](http://docs.kissyui.com/1.4/docs/html/guideline/io.html)
;(function(global, S) {

    var doc = global.document,
        location = global.location;

    function mix(target, source) {
        var k, key;
        for (key in source) {
            if((k = source[key]) !== undefined) {
                target[key] = k;
            }
        }
        return target;
    }

    function merge(d, n) {
        return mix(mix({}, d), n);
    }

    function isType(type) {
        return function(obj) {
            return {}.toString.call(obj) == '[object ' + type + ']';
        }
    }

    var isObject   = isType('Object'),
        isArray    = Array.isArray || isType('Array'),
        isFunction = isType('Function');

    function each(obj, iterator, context) {
        var keys = Object.keys(obj), i, len;
        for (i = 0, len = keys.length; i < len; i++) {
            if (iterator.call(context, obj[keys[i]], keys[i], obj) === false) {
                return;
            }
        }
    }

    var getScript = function(url, cfg) {
        cfg = cfg || {};

        if(cfg instanceof Function){
            cfg = {
                success:cfg
            };
        }

        var script = doc.createElement("script"),
            head = doc.getElementsByTagName("head")[0] || doc.documentElement;

        script.charset = cfg.charset || "";
        script.onload = cfg.success;
        script.onerror = cfg.error;
        script.src = url;

        head.insertBefore(script, head.firstChild);

        return script;
    };

    var jsonpID = 1,
        TRUE = !0,
        FALSE = !TRUE,
        NULL = null,
        ABORT = "abort",
        SUCCESS = "success",
        ERROR = "error",
        EMPTY = "",
        noop = function() {};

    var transports = {},
        def = {
            type: 'GET',
            async: TRUE,
            serializeArray: TRUE,
            /* whether data will be serialized as String */
            processData: TRUE,
            /* contentType: "application/x-www-form-urlencoded; charset=UTF-8" */
            /* Callback that is executed before request */
            beforeSend: noop,
            /* Callback that is executed if the request succeeds */
            success: noop,
            /* Callback that is executed the the server drops error */
            error: noop,
            /* Callback that is executed on request complete (both: error and success) */
            complete: noop,
            context: NULL,
            /* MIME types mapping */
            accepts: {
                script: 'text/javascript,application/javascript',
                json:   "application/json,text/json",
                xml:    'application/xml,text/xml',
                html:   "text/html",
                text:   'text/plain'
            },
            /* Default timeout */
            timeout: 0,
            cache: TRUE
        };

    function presetConfig(cfg) {
        if(!cfg.url) {
            cfg.url = location.toString();
        }

        /* 搴忓垪鍖杁ata鍙冩暩 */
        if (cfg.processData && isObject(cfg.data)) {
            cfg.data = param(cfg.data, cfg.serializeArray)
        }

        cfg.type = cfg.type.toUpperCase();

        if (cfg.data && cfg.type == 'GET') {
            cfg.url = appendURL(cfg.url, cfg.data)
        }

        if (cfg.cache === FALSE) {
            cfg.url = appendURL(cfg.url, 't=' + Date.now());
        }

        var testURL = /^([\w-]+:)?\/\/([^\/]+)/.test(cfg.url),
            protocol = testURL ? RegExp.$1 : location.protocol;

        cfg.local = protocol == 'file:';

        /* KISSY榛樿獚鐨勪笂涓嬫枃鏄痗onfig鑰屼笉鏄痠o瀵︿緥*/
        cfg.context || (cfg.context = cfg);

        return cfg;
    }

    function fireEvent(type, io) {
        IO.fire(type, {io: io});
    }

    /**
     * IO鐣版璜嬫眰灏嶈薄
     * @param config
     * @returns IO instance
     * @constructor
     */
    function IO(config) {
        var self = this;

        if (!(self instanceof IO)) {
            return new IO(config);
        }
        /* 鎵€鏈夌殑io椤炲瀷閮藉厛閫茶鏁告摎闋愯檿鐞嗐€� */
        var cfg = presetConfig(merge(def, config)),
            timeout = cfg.timeout;

        self.cfg = cfg;

        fireEvent('start', self);

        /* 鏍规摎dataType鐛插彇灏嶆噳鐨則ransport灏嶈薄銆� */
        /* 姣忓€媡ransport瀵︾従灏嶆噳鐨剆end銆乤bort鏂规硶銆� */
        var dataType = cfg.dataType,
            Transport = transports[dataType] || transports[EMPTY];

        var transport = new Transport(self);

        self.transport = transport;

        /* beforeSend鍥炶鍙互闃绘鐣版璜嬫眰鐨勭櫦閫併€�*/
        var fnBeforeSend = cfg.beforeSend;
        if(fnBeforeSend && fnBeforeSend.call(cfg.context, self, cfg) === false) {
            self.abort();
            return self;
        }

        fireEvent('send', self);

        if(timeout > 0) {
            self._timer = setTimeout(function() {

                self.abort("timeout");

            }, timeout * 1000);
        }

        try {

            transport.send();

        }catch(ex) {
            self._complete(FALSE, ex.message);
        }

        return self;
    }

    mix(IO, S.Event.Target);

    mix(IO.prototype, {
        abort: function(s) {
            this.transport.abort(s);
        },
        /* 涓€鍊婭O璜嬫眰锛屽繀鐒惰瑾跨敤success鎴栬€卐rror鏂规硶涓殑涓€鍊嬨€�*/
        /* 鏈€绲傞兘闇€瑕佽鐢╟omplete鍥炶鏂规硶锛屽湪閫欒！绲变竴鎺у埗銆�*/
        _complete: function(status, statusText) {
            var self = this,
                cfg = self.cfg,
                context = cfg.context,
                param = [self.responseData, statusText, self],
                TYPE = status ? SUCCESS : ERROR,
                COMPLETE = "complete";

            /* IO灏嶈薄涓嶅厑瑷遍噸瑜囧煼琛屻€�*/
            if(self._end) return;
            self._end = TRUE;

            clearTimeout(self._timer);

            cfg[TYPE].apply(context, param);
            fireEvent(TYPE, self);

            cfg[COMPLETE].apply(context, param);
            fireEvent(COMPLETE, self);
        }
    });

    function setTransport(name, fn) {
        transports[name] = fn;
    }

    function appendURL(url, query) {
        return (url + '&' + query).replace(/[&?]{1,2}/, '?');
    }

    var encode = encodeURIComponent;
    function param(o, arr) {
        var rt = [];
        _serialize(rt, o, arr);
        return rt.join("&");
    }

    function _serialize(rt, o, arr, k) {
        var symbol = arr === true ? encode("[]") : EMPTY;

        each(o, function(val, key) {
            if(k) {
                key = k + symbol;
            }
            if(isArray(val)) {
                _serialize(rt, val, arr, key);
            }else{
                rt.push(key + "=" + encode(val));
            }
        });
    }

    var XHRNAME = "XMLHttpRequest",
        reBlank = /^\s*$/;

    /* 妯欐簴鐨刋MLHttpRequest灏嶈薄 */
    function createXHR() {
        return new global[XHRNAME]();
    }

    /**
     * 鍩烘柤XMLHttpRequest灏嶈薄鐨勭暟姝ヨ珛姹傝檿鐞嗐€�
     * @constructor
     */
    function xhrTransport(io) {
        this.io = io;
    }

    mix(xhrTransport.prototype, {
        _init: function() {
            var self = this,
                io = self.io,
                cfg = io.cfg,
                dataType = cfg.dataType,
                mime = cfg.accepts[dataType],
                baseHeaders = {},
                xhr = createXHR();

            /* io.xhr = xhr; */
            io.getNativeXhr = function() {
                return xhr;
            };

            /* 渚濈収澶ч儴鍒嗗韩鐨勫仛娉曘€� */
            if (!cfg.crossDomain) {
                baseHeaders['X-Requested-With'] = XHRNAME;
            }

            if (mime) {
                baseHeaders['Accept'] = mime;

                if(xhr.overrideMimeType) {
                    if (mime.indexOf(',') > -1) {
                        mime = mime.split(',', 2)[0]
                    }

                    xhr.overrideMimeType(mime)
                }
            }

            /* 闄勫姞Content-Type */
            if (cfg.contentType || (cfg.data && cfg.type != 'GET')) {
                baseHeaders['Content-Type'] = cfg.contentType ||
                    'application/x-www-form-urlencoded';
            }

            cfg.headers = merge(baseHeaders, cfg.headers || {})

            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {

                    var result, error = FALSE;

                    if ((xhr.status >= 200 &&
                        xhr.status < 300) ||
                        xhr.status == 304 ||
                        (xhr.status == 0 && cfg.local)) {

                        /* 鑻ataType鏈ō缃紝鍓囧彇寰楃祼鏋滅殑鏅傚€欐牴鎿歮ime淇℃伅鎺ㄦ柗dataType鍊硷紝涓﹂€茶灏嶆噳鐨勬暩鎿氳檿鐞嗐€�*/
                        dataType = dataType || mimeToDataType(xhr.getResponseHeader('Content-Type'));

                        /* 鍒╃敤xhr灏嶈薄渚嗙嵅鍙栨暩鎿氥€�*/
                        result = io.responseText = xhr.responseText;
                        io.responseXML = xhr.responseXML;

                        try {
                            if (dataType == 'script') {

                                (1,eval)(result);

                            }else if(dataType == 'xml') {

                                result = xhr.responseXML;

                            }else if (dataType == 'json') {

                                result = reBlank.test(result) ? NULL : parseJSON(result);

                            }
                        } catch (e) { error = e }

                        io.responseData = result;
                        if (error) {
                            io._complete(FALSE, 'parsererror')
                        }else {
                            io._complete(TRUE, SUCCESS);
                        }

                    } else {
                        io._complete(FALSE, ERROR)
                    }
                }
            };

            xhr.open(cfg.type, cfg.url, cfg.async);

            each(cfg.headers, function(v, k) {
                xhr.setRequestHeader(k, v);
            });

            xhr.send(cfg.data ? cfg.data : NULL);

        },
        abort: function(statusText) {
            var self = this,
                xhr = self.xhr,
                io = self.io;

            if(xhr) {
                xhr.onreadystatechange = noop;
                xhr.abort();
            }

            io._complete(FALSE, statusText || ABORT);
        },
        send: function() {
            this._init();
        }
    });

    setTransport(EMPTY, xhrTransport);

    var regMimeType = /^(?:text|application)\/(json|javascript|xml|html)/i;
    function mimeToDataType(mime) {
        var result = mime && regMimeType.test(mime),
            type = result ? RegExp.$1 : "text";

        return type === "javascript" ? "script" : type;
        /*
    return mime && ( mime == htmlType ? 'html' :
        reJsonType.test(mime) ? 'json' :
            reScriptType.test(mime) ? 'script' :
                reXMLType.test(mime) && 'xml' ) || 'text';
	*/
    }

    function parseJSON(text) {
        return JSON.parse(text);
    }

    /**
     * 鍩烘柤script绡€榛炵殑鐣版璜嬫眰铏曠悊锛屼富瑕侀嚌灏峧sonp鐨勫牬鏅�
     * @param io io瀵︿緥
     * @constructor
     */
    function ScriptTransport(io) {
        this.io = io;
    }

    mix(ScriptTransport.prototype, {
        abort: function(statusText) {
            this._end(FALSE, statusText || ABORT)
        },
        /**
         * 瀹屾垚璜嬫眰浠ュ緦鐨勬竻鐞嗗伐浣溿€�
         * @param status
         * @param statusText
         * @private
         */
        _end: function(status, statusText) {
            var self = this,
                script = self.script,
                io = self.io,
                gvar = self._globalVar;
            /* 涓嶇洿鎺ュ埅闄わ紝閬垮厤鏈夎珛姹傝繑鍥炰互寰岃鐢ㄥ皫鑷寸殑鍫遍尟銆� */
            global[gvar] = function() {
                delete global[gvar];
            };

            if(script) {
                script.src = NULL;
                script.onload = script.onerror = noop;

                script.parentNode.removeChild(script);
            }
            /* 瑾跨敤io瀵︿緥鐨勬柟娉曪紝瀹屾垚io璜嬫眰鐙€鎱� */
            io._complete(status, statusText);
        },
        send: function() {
            var self = this,
                io = self.io,
                cfg = io.cfg,
                callbackName = cfg.jsonp || "callback",
                methodName = cfg.jsonpCallback || "jsonp"+jsonpID ++;

            /* methodName = (S.isFunction(methodName) ? methodName() : methodName) ||
		   "jsonp"+jsonpID ++; */

            self._globalVar = methodName;

            /* 娣诲姞jsonp鐨刢allback鍙冩暩銆� */
            var url = appendURL(cfg.url, callbackName + "=" + methodName);

            global[methodName] = function(data){
                /*
			r = data;
			*/
                /* 濡傛灉鏄鍊嬫暩鎿氱殑鎯呮硜涓嬶紝杩斿洖鐨勬暩鎿氭槸鏁哥祫銆�*/
                /* 璺焝issy淇濇寔涓€鑷淬€� */
                /*
			if(arguments.length >1) {
				r = makeArray(arguments);
			}
			*/
                io.responseData = data;

                self._end(TRUE, SUCCESS);
            };

            /* KISSY.getScript鏂规硶鏀寔鍌冲叆鎸囧畾鐨剆cript绡€榛炲厓绱犮€�*/
            self.script = getScript(url, {
                charset: cfg.scriptCharset,
                error: function() {
                    self._end(FALSE, ERROR);
                }
            });
        }
    });

    setTransport("jsonp", ScriptTransport);

    function factory(t, dt) {
        return function(url, data, callback, dataType, type) {
            /* data 鍙傛暟鍙渷鐣� */
            if (isFunction(data)) {
                dataType = callback;
                callback = data;
                data = NULL;
            }

            return IO({
                type: t || type,
                url: url,
                data: data,
                success: callback,
                dataType: dt || dataType
            });
        };
    }

    /* 瀹氱京蹇嵎鏂规硶 */
// Ajax API
//
// **S.IO.get(url,callback)**
//
// **S.IO.post(url,callback)**
//
// **S.IO.jsonp(url,callback)**
//
// **S.IO.getJSON(url,callback)**
//
// **S.IO.getScript(url,callback)** 鍚� **S.getScript(url,callback)**
    mix(IO, {
        get: factory("get"),
        post: factory("post"),
        jsonp: factory(NULL, "jsonp"),
        getJSON: factory(NULL, "json"),
        getScript: getScript
    });

// **S.IO.jsonp(url,callback)** 鍚� **S.jsonp()**
//
// **S.getScript (url , config)**
//
// 鍔ㄦ€佸姞杞界洰鏍囧湴鍧€鐨勮祫婧愭枃浠讹紝绗簩涓弬鏁板彲浠ユ槸閰嶇疆瀵硅薄锛屼篃鍙互鏄洖璋冨嚱鏁�
//
// 濡傛灉鏄厤缃璞★紝鍙傛暟鍙互鏄細
// - charset锛氱紪鐮佺被鍨�
// - success锛氭垚鍔熺殑鍥炶皟鍑芥暟
// - error锛氬け璐ョ殑鍥炶皟鍑芥暟
//
// ```
// S.getScript(url , { success : success , charset : charset });
// S.getScript(url, function(){...});
//
// ```
    mix(S, {
        IO: IO,
        jsonp: IO.jsonp,
        getScript: getScript
    });

    /* KMD灏佽 */
    S.add('io', function() {
        return IO;
    });


})(this, KISSY);
// <style>td {border-top:1px solid #ccc} table {border-collapse: collapse;}</style>