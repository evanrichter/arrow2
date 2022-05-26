#![no_main]
use libfuzzer_sys::fuzz_target;

use arrow2::io::parquet::read;

fuzz_target!(|data: &[u8]| {
    let mut reader = std::io::Cursor::new(data);
    let metadata = match read::read_metadata(&mut reader) {
        Ok(m) => m,
        Err(_) => return,
    };
    let _ = read::schema::infer_schema(&metadata);
});
