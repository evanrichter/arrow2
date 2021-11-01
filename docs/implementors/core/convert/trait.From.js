(function() {var implementors = {};
implementors["arrow2"] = [{"text":"impl&lt;O:&nbsp;<a class=\"trait\" href=\"arrow2/array/trait.Offset.html\" title=\"trait arrow2::array::Offset\">Offset</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"arrow2/array/struct.MutableBinaryArray.html\" title=\"struct arrow2::array::MutableBinaryArray\">MutableBinaryArray</a>&lt;O&gt;&gt; for <a class=\"struct\" href=\"arrow2/array/struct.BinaryArray.html\" title=\"struct arrow2::array::BinaryArray\">BinaryArray</a>&lt;O&gt;","synthetic":false,"types":["arrow2::array::binary::BinaryArray"]},{"text":"impl&lt;P:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;P&gt; for <a class=\"struct\" href=\"arrow2/array/struct.BooleanArray.html\" title=\"struct arrow2::array::BooleanArray\">BooleanArray</a>","synthetic":false,"types":["arrow2::array::boolean::BooleanArray"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"arrow2/array/struct.MutableBooleanArray.html\" title=\"struct arrow2::array::MutableBooleanArray\">MutableBooleanArray</a>&gt; for <a class=\"struct\" href=\"arrow2/array/struct.BooleanArray.html\" title=\"struct arrow2::array::BooleanArray\">BooleanArray</a>","synthetic":false,"types":["arrow2::array::boolean::BooleanArray"]},{"text":"impl&lt;P:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;P&gt; for <a class=\"struct\" href=\"arrow2/array/struct.MutableBooleanArray.html\" title=\"struct arrow2::array::MutableBooleanArray\">MutableBooleanArray</a>","synthetic":false,"types":["arrow2::array::boolean::mutable::MutableBooleanArray"]},{"text":"impl&lt;K:&nbsp;<a class=\"trait\" href=\"arrow2/array/trait.DictionaryKey.html\" title=\"trait arrow2::array::DictionaryKey\">DictionaryKey</a>, M:&nbsp;<a class=\"trait\" href=\"arrow2/array/trait.MutableArray.html\" title=\"trait arrow2::array::MutableArray\">MutableArray</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"arrow2/array/struct.MutableDictionaryArray.html\" title=\"struct arrow2::array::MutableDictionaryArray\">MutableDictionaryArray</a>&lt;K, M&gt;&gt; for <a class=\"struct\" href=\"arrow2/array/struct.DictionaryArray.html\" title=\"struct arrow2::array::DictionaryArray\">DictionaryArray</a>&lt;K&gt;","synthetic":false,"types":["arrow2::array::dictionary::DictionaryArray"]},{"text":"impl&lt;K:&nbsp;<a class=\"trait\" href=\"arrow2/array/trait.DictionaryKey.html\" title=\"trait arrow2::array::DictionaryKey\">DictionaryKey</a>, M:&nbsp;<a class=\"trait\" href=\"arrow2/array/trait.MutableArray.html\" title=\"trait arrow2::array::MutableArray\">MutableArray</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;M&gt; for <a class=\"struct\" href=\"arrow2/array/struct.MutableDictionaryArray.html\" title=\"struct arrow2::array::MutableDictionaryArray\">MutableDictionaryArray</a>&lt;K, M&gt;","synthetic":false,"types":["arrow2::array::dictionary::mutable::MutableDictionaryArray"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"arrow2/array/struct.MutableFixedSizeBinaryArray.html\" title=\"struct arrow2::array::MutableFixedSizeBinaryArray\">MutableFixedSizeBinaryArray</a>&gt; for <a class=\"struct\" href=\"arrow2/array/struct.FixedSizeBinaryArray.html\" title=\"struct arrow2::array::FixedSizeBinaryArray\">FixedSizeBinaryArray</a>","synthetic":false,"types":["arrow2::array::fixed_size_binary::FixedSizeBinaryArray"]},{"text":"impl&lt;M:&nbsp;<a class=\"trait\" href=\"arrow2/array/trait.MutableArray.html\" title=\"trait arrow2::array::MutableArray\">MutableArray</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"arrow2/array/struct.MutableFixedSizeListArray.html\" title=\"struct arrow2::array::MutableFixedSizeListArray\">MutableFixedSizeListArray</a>&lt;M&gt;&gt; for <a class=\"struct\" href=\"arrow2/array/struct.FixedSizeListArray.html\" title=\"struct arrow2::array::FixedSizeListArray\">FixedSizeListArray</a>","synthetic":false,"types":["arrow2::array::fixed_size_list::FixedSizeListArray"]},{"text":"impl&lt;O:&nbsp;<a class=\"trait\" href=\"arrow2/array/trait.Offset.html\" title=\"trait arrow2::array::Offset\">Offset</a>, M:&nbsp;<a class=\"trait\" href=\"arrow2/array/trait.MutableArray.html\" title=\"trait arrow2::array::MutableArray\">MutableArray</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"arrow2/array/struct.MutableListArray.html\" title=\"struct arrow2::array::MutableListArray\">MutableListArray</a>&lt;O, M&gt;&gt; for <a class=\"struct\" href=\"arrow2/array/struct.ListArray.html\" title=\"struct arrow2::array::ListArray\">ListArray</a>&lt;O&gt;","synthetic":false,"types":["arrow2::array::list::ListArray"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"arrow2/types/trait.NativeType.html\" title=\"trait arrow2::types::NativeType\">NativeType</a> + <a class=\"trait\" href=\"arrow2/types/trait.NaturalDataType.html\" title=\"trait arrow2::types::NaturalDataType\">NaturalDataType</a>, P:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;T&gt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;P&gt; for <a class=\"struct\" href=\"arrow2/array/struct.PrimitiveArray.html\" title=\"struct arrow2::array::PrimitiveArray\">PrimitiveArray</a>&lt;T&gt;","synthetic":false,"types":["arrow2::array::primitive::PrimitiveArray"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"arrow2/types/trait.NativeType.html\" title=\"trait arrow2::types::NativeType\">NativeType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"arrow2/array/struct.MutablePrimitiveArray.html\" title=\"struct arrow2::array::MutablePrimitiveArray\">MutablePrimitiveArray</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"arrow2/array/struct.PrimitiveArray.html\" title=\"struct arrow2::array::PrimitiveArray\">PrimitiveArray</a>&lt;T&gt;","synthetic":false,"types":["arrow2::array::primitive::PrimitiveArray"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"arrow2/types/trait.NativeType.html\" title=\"trait arrow2::types::NativeType\">NativeType</a> + <a class=\"trait\" href=\"arrow2/types/trait.NaturalDataType.html\" title=\"trait arrow2::types::NaturalDataType\">NaturalDataType</a>, P:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;T&gt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;P&gt; for <a class=\"struct\" href=\"arrow2/array/struct.MutablePrimitiveArray.html\" title=\"struct arrow2::array::MutablePrimitiveArray\">MutablePrimitiveArray</a>&lt;T&gt;","synthetic":false,"types":["arrow2::array::primitive::mutable::MutablePrimitiveArray"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"arrow2/types/trait.NativeType.html\" title=\"trait arrow2::types::NativeType\">NativeType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"arrow2/datatypes/enum.DataType.html\" title=\"enum arrow2::datatypes::DataType\">DataType</a>&gt; for <a class=\"struct\" href=\"arrow2/array/struct.MutablePrimitiveArray.html\" title=\"struct arrow2::array::MutablePrimitiveArray\">MutablePrimitiveArray</a>&lt;T&gt;","synthetic":false,"types":["arrow2::array::primitive::mutable::MutablePrimitiveArray"]},{"text":"impl&lt;O:&nbsp;<a class=\"trait\" href=\"arrow2/array/trait.Offset.html\" title=\"trait arrow2::array::Offset\">Offset</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"arrow2/array/struct.MutableUtf8Array.html\" title=\"struct arrow2::array::MutableUtf8Array\">MutableUtf8Array</a>&lt;O&gt;&gt; for <a class=\"struct\" href=\"arrow2/array/struct.Utf8Array.html\" title=\"struct arrow2::array::Utf8Array\">Utf8Array</a>&lt;O&gt;","synthetic":false,"types":["arrow2::array::utf8::Utf8Array"]},{"text":"impl&lt;'a, O:&nbsp;<a class=\"trait\" href=\"arrow2/array/trait.Offset.html\" title=\"trait arrow2::array::Offset\">Offset</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"arrow2/array/growable/struct.GrowableBinary.html\" title=\"struct arrow2::array::growable::GrowableBinary\">GrowableBinary</a>&lt;'a, O&gt;&gt; for <a class=\"struct\" href=\"arrow2/array/struct.BinaryArray.html\" title=\"struct arrow2::array::BinaryArray\">BinaryArray</a>&lt;O&gt;","synthetic":false,"types":["arrow2::array::binary::BinaryArray"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"arrow2/array/growable/struct.GrowableBoolean.html\" title=\"struct arrow2::array::growable::GrowableBoolean\">GrowableBoolean</a>&lt;'a&gt;&gt; for <a class=\"struct\" href=\"arrow2/array/struct.BooleanArray.html\" title=\"struct arrow2::array::BooleanArray\">BooleanArray</a>","synthetic":false,"types":["arrow2::array::boolean::BooleanArray"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"arrow2/array/growable/struct.GrowableFixedSizeBinary.html\" title=\"struct arrow2::array::growable::GrowableFixedSizeBinary\">GrowableFixedSizeBinary</a>&lt;'a&gt;&gt; for <a class=\"struct\" href=\"arrow2/array/struct.FixedSizeBinaryArray.html\" title=\"struct arrow2::array::FixedSizeBinaryArray\">FixedSizeBinaryArray</a>","synthetic":false,"types":["arrow2::array::fixed_size_binary::FixedSizeBinaryArray"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"arrow2/array/growable/struct.GrowableNull.html\" title=\"struct arrow2::array::growable::GrowableNull\">GrowableNull</a>&gt; for <a class=\"struct\" href=\"arrow2/array/struct.NullArray.html\" title=\"struct arrow2::array::NullArray\">NullArray</a>","synthetic":false,"types":["arrow2::array::null::NullArray"]},{"text":"impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"arrow2/types/trait.NativeType.html\" title=\"trait arrow2::types::NativeType\">NativeType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"arrow2/array/growable/struct.GrowablePrimitive.html\" title=\"struct arrow2::array::growable::GrowablePrimitive\">GrowablePrimitive</a>&lt;'a, T&gt;&gt; for <a class=\"struct\" href=\"arrow2/array/struct.PrimitiveArray.html\" title=\"struct arrow2::array::PrimitiveArray\">PrimitiveArray</a>&lt;T&gt;","synthetic":false,"types":["arrow2::array::primitive::PrimitiveArray"]},{"text":"impl&lt;'a, O:&nbsp;<a class=\"trait\" href=\"arrow2/array/trait.Offset.html\" title=\"trait arrow2::array::Offset\">Offset</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"arrow2/array/growable/struct.GrowableList.html\" title=\"struct arrow2::array::growable::GrowableList\">GrowableList</a>&lt;'a, O&gt;&gt; for <a class=\"struct\" href=\"arrow2/array/struct.ListArray.html\" title=\"struct arrow2::array::ListArray\">ListArray</a>&lt;O&gt;","synthetic":false,"types":["arrow2::array::list::ListArray"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"arrow2/array/growable/struct.GrowableStruct.html\" title=\"struct arrow2::array::growable::GrowableStruct\">GrowableStruct</a>&lt;'a&gt;&gt; for <a class=\"struct\" href=\"arrow2/array/struct.StructArray.html\" title=\"struct arrow2::array::StructArray\">StructArray</a>","synthetic":false,"types":["arrow2::array::struct_::StructArray"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"arrow2/array/growable/struct.GrowableFixedSizeList.html\" title=\"struct arrow2::array::growable::GrowableFixedSizeList\">GrowableFixedSizeList</a>&lt;'a&gt;&gt; for <a class=\"struct\" href=\"arrow2/array/struct.FixedSizeListArray.html\" title=\"struct arrow2::array::FixedSizeListArray\">FixedSizeListArray</a>","synthetic":false,"types":["arrow2::array::fixed_size_list::FixedSizeListArray"]},{"text":"impl&lt;'a, O:&nbsp;<a class=\"trait\" href=\"arrow2/array/trait.Offset.html\" title=\"trait arrow2::array::Offset\">Offset</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"arrow2/array/growable/struct.GrowableUtf8.html\" title=\"struct arrow2::array::growable::GrowableUtf8\">GrowableUtf8</a>&lt;'a, O&gt;&gt; for <a class=\"struct\" href=\"arrow2/array/struct.Utf8Array.html\" title=\"struct arrow2::array::Utf8Array\">Utf8Array</a>&lt;O&gt;","synthetic":false,"types":["arrow2::array::utf8::Utf8Array"]},{"text":"impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"arrow2/array/trait.DictionaryKey.html\" title=\"trait arrow2::array::DictionaryKey\">DictionaryKey</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"arrow2/array/growable/struct.GrowableDictionary.html\" title=\"struct arrow2::array::growable::GrowableDictionary\">GrowableDictionary</a>&lt;'a, T&gt;&gt; for <a class=\"struct\" href=\"arrow2/array/struct.DictionaryArray.html\" title=\"struct arrow2::array::DictionaryArray\">DictionaryArray</a>&lt;T&gt;","synthetic":false,"types":["arrow2::array::dictionary::DictionaryArray"]},{"text":"impl&lt;P:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;P&gt; for <a class=\"struct\" href=\"arrow2/bitmap/struct.Bitmap.html\" title=\"struct arrow2::bitmap::Bitmap\">Bitmap</a>","synthetic":false,"types":["arrow2::bitmap::immutable::Bitmap"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"arrow2/bitmap/struct.MutableBitmap.html\" title=\"struct arrow2::bitmap::MutableBitmap\">MutableBitmap</a>&gt; for <a class=\"struct\" href=\"arrow2/bitmap/struct.Bitmap.html\" title=\"struct arrow2::bitmap::Bitmap\">Bitmap</a>","synthetic":false,"types":["arrow2::bitmap::immutable::Bitmap"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"arrow2/bitmap/struct.MutableBitmap.html\" title=\"struct arrow2::bitmap::MutableBitmap\">MutableBitmap</a>&gt; for <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"arrow2/bitmap/struct.Bitmap.html\" title=\"struct arrow2::bitmap::Bitmap\">Bitmap</a>&gt;","synthetic":false,"types":["core::option::Option"]},{"text":"impl&lt;P:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;P&gt; for <a class=\"struct\" href=\"arrow2/bitmap/struct.MutableBitmap.html\" title=\"struct arrow2::bitmap::MutableBitmap\">MutableBitmap</a>","synthetic":false,"types":["arrow2::bitmap::mutable::MutableBitmap"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"arrow2/types/trait.NativeType.html\" title=\"trait arrow2::types::NativeType\">NativeType</a>, U:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;U&gt; for <a class=\"struct\" href=\"arrow2/buffer/struct.Buffer.html\" title=\"struct arrow2::buffer::Buffer\">Buffer</a>&lt;T&gt;","synthetic":false,"types":["arrow2::buffer::immutable::Buffer"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"arrow2/types/trait.NativeType.html\" title=\"trait arrow2::types::NativeType\">NativeType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"arrow2/buffer/struct.MutableBuffer.html\" title=\"struct arrow2::buffer::MutableBuffer\">MutableBuffer</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T&gt;","synthetic":false,"types":["alloc::vec::Vec"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"arrow2/types/trait.NativeType.html\" title=\"trait arrow2::types::NativeType\">NativeType</a>, P:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;P&gt; for <a class=\"struct\" href=\"arrow2/buffer/struct.MutableBuffer.html\" title=\"struct arrow2::buffer::MutableBuffer\">MutableBuffer</a>&lt;T&gt;","synthetic":false,"types":["arrow2::buffer::mutable::MutableBuffer"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"arrow2/types/trait.NativeType.html\" title=\"trait arrow2::types::NativeType\">NativeType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"arrow2/buffer/struct.MutableBuffer.html\" title=\"struct arrow2::buffer::MutableBuffer\">MutableBuffer</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"arrow2/buffer/struct.Buffer.html\" title=\"struct arrow2::buffer::Buffer\">Buffer</a>&lt;T&gt;","synthetic":false,"types":["arrow2::buffer::immutable::Buffer"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt; for <a class=\"enum\" href=\"arrow2/error/enum.ArrowError.html\" title=\"enum arrow2::error::ArrowError\">ArrowError</a>","synthetic":false,"types":["arrow2::error::ArrowError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/str/error/struct.Utf8Error.html\" title=\"struct core::str::error::Utf8Error\">Utf8Error</a>&gt; for <a class=\"enum\" href=\"arrow2/error/enum.ArrowError.html\" title=\"enum arrow2::error::ArrowError\">ArrowError</a>","synthetic":false,"types":["arrow2::error::ArrowError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Utf8Error&gt; for <a class=\"enum\" href=\"arrow2/error/enum.ArrowError.html\" title=\"enum arrow2::error::ArrowError\">ArrowError</a>","synthetic":false,"types":["arrow2::error::ArrowError"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"arrow2/types/trait.NativeType.html\" title=\"trait arrow2::types::NativeType\">NativeType</a> + <a class=\"trait\" href=\"arrow2/types/trait.NaturalDataType.html\" title=\"trait arrow2::types::NaturalDataType\">NaturalDataType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"arrow2/scalar/struct.PrimitiveScalar.html\" title=\"struct arrow2::scalar::PrimitiveScalar\">PrimitiveScalar</a>&lt;T&gt;","synthetic":false,"types":["arrow2::scalar::primitive::PrimitiveScalar"]},{"text":"impl&lt;O:&nbsp;<a class=\"trait\" href=\"arrow2/array/trait.Offset.html\" title=\"trait arrow2::array::Offset\">Offset</a>, P:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;P&gt;&gt; for <a class=\"struct\" href=\"arrow2/scalar/struct.Utf8Scalar.html\" title=\"struct arrow2::scalar::Utf8Scalar\">Utf8Scalar</a>&lt;O&gt;","synthetic":false,"types":["arrow2::scalar::utf8::Utf8Scalar"]},{"text":"impl&lt;O:&nbsp;<a class=\"trait\" href=\"arrow2/array/trait.Offset.html\" title=\"trait arrow2::array::Offset\">Offset</a>, P:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;P&gt;&gt; for <a class=\"struct\" href=\"arrow2/scalar/struct.BinaryScalar.html\" title=\"struct arrow2::scalar::BinaryScalar\">BinaryScalar</a>&lt;O&gt;","synthetic":false,"types":["arrow2::scalar::binary::BinaryScalar"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt;&gt; for <a class=\"struct\" href=\"arrow2/scalar/struct.BooleanScalar.html\" title=\"struct arrow2::scalar::BooleanScalar\">BooleanScalar</a>","synthetic":false,"types":["arrow2::scalar::boolean::BooleanScalar"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Error&gt; for <a class=\"enum\" href=\"arrow2/error/enum.ArrowError.html\" title=\"enum arrow2::error::ArrowError\">ArrowError</a>","synthetic":false,"types":["arrow2::error::ArrowError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/chrono/latest/chrono/format/struct.ParseError.html\" title=\"struct chrono::format::ParseError\">ParseError</a>&gt; for <a class=\"enum\" href=\"arrow2/error/enum.ArrowError.html\" title=\"enum arrow2::error::ArrowError\">ArrowError</a>","synthetic":false,"types":["arrow2::error::ArrowError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"arrow2/io/csv/read_async/struct.CSVError.html\" title=\"struct arrow2::io::csv::read_async::CSVError\">Error</a>&gt; for <a class=\"enum\" href=\"arrow2/error/enum.ArrowError.html\" title=\"enum arrow2::error::ArrowError\">ArrowError</a>","synthetic":false,"types":["arrow2::error::ArrowError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/serde_json/1.0.68/serde_json/error/struct.Error.html\" title=\"struct serde_json::error::Error\">Error</a>&gt; for <a class=\"enum\" href=\"arrow2/error/enum.ArrowError.html\" title=\"enum arrow2::error::ArrowError\">ArrowError</a>","synthetic":false,"types":["arrow2::error::ArrowError"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Field&lt;'a&gt;&gt; for <a class=\"struct\" href=\"arrow2/datatypes/struct.Field.html\" title=\"struct arrow2::datatypes::Field\">Field</a>","synthetic":false,"types":["arrow2::datatypes::field::Field"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"arrow2/io/ipc/write/common/struct.EncodedData.html\" title=\"struct arrow2::io::ipc::write::common::EncodedData\">EncodedData</a>&gt; for FlightData","synthetic":false,"types":["arrow_format::flight::data::FlightData"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ <a class=\"struct\" href=\"arrow2/datatypes/struct.Field.html\" title=\"struct arrow2::datatypes::Field\">Field</a>&gt; for <a class=\"struct\" href=\"arrow2/io/json_integration/struct.ArrowJsonField.html\" title=\"struct arrow2::io::json_integration::ArrowJsonField\">ArrowJsonField</a>","synthetic":false,"types":["arrow2::io::json_integration::ArrowJsonField"]},{"text":"impl&lt;T, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>&amp;'_ PrimitiveStatistics&lt;R&gt;, <a class=\"enum\" href=\"arrow2/datatypes/enum.DataType.html\" title=\"enum arrow2::datatypes::DataType\">DataType</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; for <a class=\"struct\" href=\"arrow2/io/parquet/read/statistics/struct.PrimitiveStatistics.html\" title=\"struct arrow2::io::parquet::read::statistics::PrimitiveStatistics\">PrimitiveStatistics</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"arrow2/types/trait.NativeType.html\" title=\"trait arrow2::types::NativeType\">NativeType</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: ParquetNativeType,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://docs.rs/num-traits/0.2/num_traits/cast/trait.AsPrimitive.html\" title=\"trait num_traits::cast::AsPrimitive\">AsPrimitive</a>&lt;T&gt;,&nbsp;</span>","synthetic":false,"types":["arrow2::io::parquet::read::statistics::primitive::PrimitiveStatistics"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ BinaryStatistics&gt; for <a class=\"struct\" href=\"arrow2/io/parquet/read/statistics/struct.BinaryStatistics.html\" title=\"struct arrow2::io::parquet::read::statistics::BinaryStatistics\">BinaryStatistics</a>","synthetic":false,"types":["arrow2::io::parquet::read::statistics::binary::BinaryStatistics"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ BooleanStatistics&gt; for <a class=\"struct\" href=\"arrow2/io/parquet/read/statistics/struct.BooleanStatistics.html\" title=\"struct arrow2::io::parquet::read::statistics::BooleanStatistics\">BooleanStatistics</a>","synthetic":false,"types":["arrow2::io::parquet::read::statistics::boolean::BooleanStatistics"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ FixedLenStatistics&gt; for <a class=\"struct\" href=\"arrow2/io/parquet/read/statistics/struct.FixedLenStatistics.html\" title=\"struct arrow2::io::parquet::read::statistics::FixedLenStatistics\">FixedLenStatistics</a>","synthetic":false,"types":["arrow2::io::parquet::read::statistics::fixlen::FixedLenStatistics"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"arrow2/io/parquet/read/enum.ParquetError.html\" title=\"enum arrow2::io::parquet::read::ParquetError\">ParquetError</a>&gt; for <a class=\"enum\" href=\"arrow2/error/enum.ArrowError.html\" title=\"enum arrow2::error::ArrowError\">ArrowError</a>","synthetic":false,"types":["arrow2::error::ArrowError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"arrow2/error/enum.ArrowError.html\" title=\"enum arrow2::error::ArrowError\">ArrowError</a>&gt; for <a class=\"enum\" href=\"arrow2/io/parquet/read/enum.ParquetError.html\" title=\"enum arrow2::io::parquet::read::ParquetError\">ParquetError</a>","synthetic":false,"types":["parquet2::error::ParquetError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Error&gt; for <a class=\"enum\" href=\"arrow2/error/enum.ArrowError.html\" title=\"enum arrow2::error::ArrowError\">ArrowError</a>","synthetic":false,"types":["arrow2::error::ArrowError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"arrow2/array/struct.StructArray.html\" title=\"struct arrow2::array::StructArray\">StructArray</a>&gt; for <a class=\"struct\" href=\"arrow2/record_batch/struct.RecordBatch.html\" title=\"struct arrow2::record_batch::RecordBatch\">RecordBatch</a>","synthetic":false,"types":["arrow2::record_batch::RecordBatch"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"arrow2/record_batch/struct.RecordBatch.html\" title=\"struct arrow2::record_batch::RecordBatch\">RecordBatch</a>&gt; for <a class=\"struct\" href=\"arrow2/array/struct.StructArray.html\" title=\"struct arrow2::array::StructArray\">StructArray</a>","synthetic":false,"types":["arrow2::array::struct_::StructArray"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()