(module
  (memory 1)
  (export "memory" (memory 0))
  (export "hex" (func $hex))
  (func $write (param $in i32) (param $ptr i32)
    (local $var2 i32) 
    i32.const 0
    set_local $var2
    block $label0
      get_local $in
      i32.const 0
      i32.lt_s
      br_if $label0
      get_local $in
      i32.const 255
      get_local $in
      i32.const 255
      i32.lt_s
      select
      set_local $var2
    end $label0
    i32.const 0
    get_local $var2
    i32.store8 offset=12
    get_local $ptr
    i32.const 55
    i32.const 48
    get_local $var2
    i32.const 15
    i32.and
    tee_local $in
    i32.const 9
    i32.gt_u
    select
    get_local $in
    i32.add
    i32.store8 offset=1
    get_local $ptr
    i32.const 55
    i32.const 48
    get_local $var2
    i32.const 255
    i32.and
    tee_local $var2
    i32.const 159
    i32.gt_u
    select
    get_local $var2
    i32.const 4
    i32.shr_u
    i32.add
    i32.store8
  )
  (func $hex (param $r i32) (param $g i32) (param $b i32)
    get_local $r
    i32.const 1
    call $write
    get_local $g
    i32.const 3 
    call $write
    get_local $b
    i32.const 5
    call $write
  )
  (data (i32.const 0) "#\00\00\00\00\00\00")
)
